v5.1.0 — Arabic word boundary fix

Fixed false positive: the word ينتكس was incorrectly triggering the block
Introduced Arabic word boundary detection — short explicit keywords now only match when standing alone as a word, not as letters inside a longer Arabic word
All short keywords restored to the blocklist with no reduction in coverage
Boundary check applied in both background.js and content.js

v5.0.0 — Real artwork

Replaced SVG silhouettes with 8 custom illustrated artwork images — one per companion and the Prophet ﷺ
Images serve as full-screen backgrounds with a 60% dark overlay for text readability
Prophet ﷺ page uses a desert night scene with the Shahada flag and divine light
Content script restructured — sends BLOCK_PAGE message to background for reliable redirect

v4.0.0 — Search filtering & page overhaul

Added real-time search result filtering for Google, Bing, and DuckDuckGo
MutationObserver added to catch dynamically loaded search results
Prophet ﷺ page rebuilt as full-screen majestic layout — grand mosque SVG background, radiant glow, deep personal tribute
Each Sahabi page redesigned with unique hand-drawn SVG silhouette scene
Fixed double-increment counter bug — pages now rotate correctly through all 8
Fixed web_accessible_resources manifest entry — blocked page now loads reliably
Added scripting permission as fallback redirect mechanism
Pre-encoded Arabic keyword list added to catch percent-encoded URLs

v3.0.0 — Arabic & keyword blocking

Added Arabic keyword detection — blocks Arabic adult search terms in URLs
Added decodeURIComponent() pass to catch percent-encoded Arabic in the address bar
Added tabs.onUpdated listener to catch direct URL typing
Expanded domain blocklist to 50+ adult sites
Fixed rules.json syntax — switched to ||domain.com format for reliable domain matching
Added SVG silhouette illustrations to each blocked page

v2.0.0 — The Sahabah update

Introduced 8 rotating blocked pages — one for the Prophet ﷺ and one for each of 7 Sahabah
Each page features the companion's name in Arabic, an Ayah, their story, and their quote
Unique color theme per companion
Added hourly Quranic verse reminder via Chrome notifications
CSP compliance fix — all JavaScript moved to external files

v1.0.0 — Initial release

Extension named سيف الله | Saifullah — after the title the Prophet ﷺ gave to Khalid ibn al-Walid
Basic adult domain blocking via declarativeNetRequest
Single blocked page with Islamic reminder
Popup with blocked-attempts counter
