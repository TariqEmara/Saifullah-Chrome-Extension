# سيف الله | Saifullah

[![Vibecoded with Claude](https://img.shields.io/badge/vibecoded%20with-Claude-orange?style=flat)](https://claude.ai)

**An Islamic adult content blocker for Chrome.**
Named after the title the Prophet ﷺ gave to Khalid ibn al-Walid — the Drawn Sword of Allah.

---

## What it does

- Blocks **50+ adult domains** before they load using Chrome's declarativeNetRequest API
- Detects adult keywords in **English and Arabic** — including percent-encoded Arabic in URLs
- Filters **Google, Bing, and DuckDuckGo** search results in real time
- Catches direct address bar navigation to adult URLs
- Every blocked attempt shows a **rotating page** dedicated to one of the Sahabah (رضي الله عنهم) or the Prophet ﷺ himself — with their image, their Ayah, their story, and one question: *Don't you want to meet him?*
- Sends an **hourly Quranic verse** reminder notification
- Tracks a **blocked-attempts counter** stored locally on your device

## The 8 pages

| # | Companion | Theme |
|---|-----------|-------|
| 0 | Prophet Muhammad ﷺ | Desert night, divine light, Shahada flag |
| 1 | Khalid ibn al-Walid | Horseback warrior, red sky |
| 2 | Abu Bakr as-Siddiq | Cave du'a under rock arch |
| 3 | Umar ibn al-Khattab | Striding with staff, city skyline |
| 4 | Ali ibn Abi Talib | Warrior with sword raised, purple sky |
| 5 | Bilal ibn Rabah | Calling adhan atop the Kaaba |
| 6 | Abdullah ibn Masud | Scholar reading Quran at night |
| 7 | Abu Ubayda ibn al-Jarrah | Commander on ship's prow |

## Install from source

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions`
3. Enable **Developer Mode** (top right toggle)
4. Click **Load unpacked**
5. Select the `porn-blocker/` folder (the one containing `manifest.json`)
6. Done — the sword is drawn

## File structure

`manifest.json` — Extension config (Manifest V3)
`background.js` — Service worker: URL blocking, keyword detection, notifications
`content.js` — Search result filtering and URL checking on every page
`rules.json` — declarativeNetRequest rules: 50 adult domains → blocked.html
`blocked.html` — The 8-page rotating blocked screen
`blocked.js` — Logic: page selection, image loading, counter
`popup.html/js` — Extension popup with stats
`images/` — One background image per Sahabi page
`icons/` — Extension icons (16, 48, 128px)

## Privacy

No data is collected, transmitted, or stored externally.
The only local storage used is a blocked-attempts counter and install timestamp — both stay on your device.
No accounts. No servers. No analytics.

## Permissions

| Permission | Why |
|------------|-----|
| declarativeNetRequest | Block 50+ adult domains at network level |
| webNavigation | Intercept keyword URLs before page loads |
| tabs | Redirect tab to blocked page |
| scripting | Fallback redirect if tabs API fails |
| storage | Save blocked-attempts counter locally |
| alarms | Schedule hourly Quranic reminder |
| notifications | Display the hourly Quranic verse |
| host_permissions | Filter search results on all search engines |

---
يَسْتَخْفُونَ مِنَ النَّاسِ وَلَا يَسْتَخْفُونَ مِنَ اللَّهِ
They hide from people, but they cannot hide from Allah. — An-Nisa 4:108
