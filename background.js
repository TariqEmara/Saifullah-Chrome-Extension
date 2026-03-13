// سيف الله | Saifullah v5 — Background Service Worker

// ── KEYWORD LISTS ─────────────────────────────────────────────────────────

const KW_EN = [
  'porn','xxx','nude','naked','hentai','erotic','nsfw','onlyfans',
  'camgirl','fetish','masturbat','blowjob','hardcore','softcore',
  'xvideos','xnxx','xhamster','redtube','chaturbate','brazzers',
  'spankbang','stripchat','livejasmin','bangbros','naughtyamerica',
  'nhentai','rule34','beeg','fuq','drtuber','tnaflix','eporner',
  'sex.com','4tube','fapster','porntrex','txxx','keezmovies'
];

// Arabic plain text (browser may pass decoded URLs in some contexts)
const KW_AR = [
  'سكس','جنس','إباحي','اباحي','إباحية','اباحية',
  'بورن','بورنو','نيك','زنا','دعارة','فاحشة',
  'شهواني','لواط','سحاق','عاهرة','شرموطة',
  'طيز','كس','زب','لحس','تنتاك','محارم'
];

// Arabic percent-encoded (lowercase — Chrome encodes to uppercase but we lowercase first)
const KW_AR_ENC = [
  '%d8%b3%d9%83%d8%b3',         // سكس
  '%d8%ac%d9%86%d8%b3',         // جنس
  '%d8%a5%d8%a8%d8%a7%d8%ad%d9%8a', // إباحي
  '%d8%a7%d8%a8%d8%a7%d8%ad%d9%8a', // اباحي
  '%d8%a8%d9%88%d8%b1%d9%86',   // بورن
  '%d8%a8%d9%88%d8%b1%d9%86%d9%88', // بورنو
  '%d9%86%d9%8a%d9%83',         // نيك
  '%d8%b2%d9%86%d8%a7',         // زنا
  '%d8%af%d8%b9%d8%a7%d8%b1%d8%a9', // دعارة
  '%d9%81%d8%a7%d8%ad%d8%b4%d8%a9', // فاحشة
  '%d8%b4%d9%87%d9%88%d8%a7%d9%86%d9%8a', // شهواني
  '%d9%84%d9%88%d8%a7%d8%b7',   // لواط
  '%d8%b3%d8%ad%d8%a7%d9%82',   // سحاق
  '%d8%b9%d8%a7%d9%87%d8%b1%d8%a9', // عاهرة
  '%d8%b4%d8%b1%d9%85%d9%88%d8%b7%d8%a9', // شرموطة
  '%d8%b7%d9%8a%d8%b2',         // طيز
  '%d9%83%d8%b3',               // كس
  '%d8%b2%d8%a8',               // زب
  '%d9%84%d8%ad%d8%b3',         // لحس
  '%d8%aa%d9%86%d8%aa%d8%a7%d9%83', // تنتاك
  '%d9%85%d8%ad%d8%a7%d8%b1%d9%85'  // محارم
];

// ── BLOCKED URL ────────────────────────────────────────────────────────────

function getBlockedUrl() {
  return chrome.runtime.getURL('blocked.html');
}

// ── URL CHECKER ────────────────────────────────────────────────────────────

function isAdult(url) {
  if (!url) return false;
  // Skip our own pages and chrome internal pages
  if (url.startsWith('chrome://')) return false;
  if (url.startsWith('chrome-extension://')) return false;
  if (url.startsWith('about:')) return false;

  const low = url.toLowerCase();

  // 1. Check English keywords
  if (KW_EN.some(k => low.includes(k))) return true;

  // 2. Check Arabic plain (decoded URLs)
  if (KW_AR.some(k => low.includes(k))) return true;

  // 3. Check percent-encoded Arabic (already lowercased)
  if (KW_AR_ENC.some(k => low.includes(k))) return true;

  // 4. Try force-decoding and check again
  try {
    const decoded = decodeURIComponent(low);
    if (KW_AR.some(k => decoded.includes(k))) return true;
    if (KW_EN.some(k => decoded.includes(k))) return true;
  } catch(e) {}

  return false;
}

// ── BLOCK ACTION ───────────────────────────────────────────────────────────

function doBlock(tabId, url) {
  const blockedUrl = getBlockedUrl();
  // Don't create infinite loop
  if (url && url.startsWith(blockedUrl)) return;

  // NOTE: counter is managed exclusively by blocked.js to avoid double-counting
  // Navigate to blocked page
  chrome.tabs.update(tabId, { url: blockedUrl }, (tab) => {
    if (chrome.runtime.lastError) {
      // Fallback: try scripting redirect
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        func: (bu) => { window.location.replace(bu); },
        args: [blockedUrl]
      }).catch(() => {});
    }
  });
}

// ── INIT ───────────────────────────────────────────────────────────────────

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(['installTime'], (d) => {
    if (!d.installTime) {
      chrome.storage.local.set({ blockedCount: 0, installTime: Date.now() });
    }
  });
  chrome.alarms.create('quranReminder', { periodInMinutes: 60 });
  console.log('Saifullah v5 — activated. سيف الله المسلول.');
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'quranReminder') {
    chrome.notifications.create('r_' + Date.now(), {
      type: 'basic',
      iconUrl: 'icons/icon128.png',
      title: '⚔️ سيف الله — تذكير',
      message: 'يَسْتَخْفُونَ مِنَ النَّاسِ وَلَا يَسْتَخْفُونَ مِنَ اللَّهِ',
      contextMessage: 'An-Nisa 4:108 — They cannot hide from Allah',
      priority: 1
    });
  }
});

// ── BLOCKER 1: webNavigation — fires before the page loads ─────────────────

chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  if (details.frameId !== 0) return; // main frame only
  if (isAdult(details.url)) {
    doBlock(details.tabId, details.url);
  }
});

// ── BLOCKER 2: tabs.onUpdated — catches address bar + link clicks ──────────

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Only act when URL changes (not on every status change)
  if (!changeInfo.url) return;
  if (isAdult(changeInfo.url)) {
    doBlock(tabId, changeInfo.url);
  }
});

// ── MESSAGE HANDLER ────────────────────────────────────────────────────────

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'BLOCK_PAGE') {
    // Content script says: redirect this tab
    if (sender.tab && sender.tab.id) {
      doBlock(sender.tab.id, sender.tab.url);
    }
  }
  if (msg.type === 'GET_STATUS') {
    chrome.storage.local.get(['blockedCount'], (d) => sendResponse(d));
    return true;
  }
});
