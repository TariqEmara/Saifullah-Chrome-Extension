// سيف الله | Saifullah v5 — Content Script
// Runs on every page. Two jobs:
// 1. If THIS page's URL is adult → tell background to redirect
// 2. Filter Google/Bing/DuckDuckGo search results

const KW_EN = [
  'porn','xxx','nude','naked','hentai','erotic','nsfw','onlyfans',
  'camgirl','fetish','masturbat','blowjob','hardcore','softcore',
  'xvideos','xnxx','xhamster','redtube','chaturbate','brazzers',
  'spankbang','stripchat','livejasmin','sex.com','nhentai','rule34',
  'beeg','fuq','eporner','bangbros','naughtyamerica','4tube','tnaflix'
];

const KW_AR = [
  'سكس','جنس','إباحي','اباحي','بورن','بورنو','نيك','زنا',
  'دعارة','فاحشة','شهواني','لواط','سحاق','عاهرة','شرموطة',
  'طيز','كس','زب','لحس','تنتاك','محارم','عاري','عارية'
];

function isAdult(text) {
  if (!text) return false;
  const low = text.toLowerCase();
  let dec = low;
  try { dec = decodeURIComponent(low); } catch(e) {}
  return (
    KW_EN.some(k => low.includes(k) || dec.includes(k)) ||
    KW_AR.some(k => low.includes(k) || dec.includes(k))
  );
}

// ── 1. CHECK CURRENT PAGE URL ──────────────────────────────────────────────
// (Belt-and-suspenders: background should have caught it, but just in case)
function checkSelf() {
  const url = window.location.href;
  // Don't redirect if we're already on the blocked page
  if (url.includes('blocked.html')) return;
  if (isAdult(url)) {
    chrome.runtime.sendMessage({ type: 'BLOCK_PAGE' });
  }
}

// ── 2. FILTER SEARCH RESULTS ───────────────────────────────────────────────
// Hides result cards that contain adult keywords in their text or links

const RESULT_SELECTORS = [
  // Google Web
  'div.g', 'div.tF2Cxc', 'div.MjjYud > div', 'div.kvH3mc',
  'div[data-hveid]', 'div[data-sokoban-container]',
  // Google Images
  'div[jsaction*="mousedown"]', 'div[data-ri]',
  // Bing
  'li.b_algo', 'div.b_imgres',
  // DuckDuckGo
  'article[data-testid="result"]', 'li.result',
  // Yahoo
  'div.algo', 'div.searchCenterMiddle li',
  // Yandex
  'li.serp-item', 'div.organic'
];

function filterResults() {
  for (const sel of RESULT_SELECTORS) {
    document.querySelectorAll(sel).forEach(el => {
      if (el.dataset.saifChecked) return;
      el.dataset.saifChecked = '1';

      let bad = false;
      // Check visible text
      const txt = (el.innerText || el.textContent || '').slice(0, 600);
      if (isAdult(txt)) bad = true;
      // Check all link hrefs
      if (!bad) {
        el.querySelectorAll('a[href]').forEach(a => {
          if (isAdult(a.href || a.getAttribute('href') || '')) bad = true;
        });
      }
      if (bad) {
        el.style.cssText = 'display:none!important;visibility:hidden!important;height:0!important;overflow:hidden!important;';
      }
    });
  }
}

// ── RUN ────────────────────────────────────────────────────────────────────

checkSelf();

// Filter on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', filterResults);
} else {
  filterResults();
}

// Watch for dynamically loaded content (Google lazy-loads results)
let debounce = null;
const obs = new MutationObserver(() => {
  clearTimeout(debounce);
  debounce = setTimeout(filterResults, 200);
});
obs.observe(document.documentElement, { childList: true, subtree: true });

// Handle Google SPA navigation (search without full reload)
let lastHref = location.href;
new MutationObserver(() => {
  if (location.href !== lastHref) {
    lastHref = location.href;
    checkSelf();
    setTimeout(filterResults, 400);
  }
}).observe(document.body || document.documentElement, { childList: true, subtree: true });
