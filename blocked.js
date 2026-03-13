(function () {

// ══════════════════════════════════════════════════════════════════
//  SILHOUETTES — one distinct man figure per Sahabi
//  Each SVG: 1200×340, pure fill, panoramic, sits at bottom
// ══════════════════════════════════════════════════════════════════

var SIL = {};

// ── PAGE 1: KHALID ────────────────────────────────────────────────
// Lone warrior on horseback, sword raised to sky, mid-gallop, desert
SIL.gold = `<svg viewBox="0 0 1200 340" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet">
<g fill="#c07010">
<!-- desert ground -->
<rect x="0" y="308" width="1200" height="32"/>
<path d="M0,308 Q180,292 360,305 Q540,318 720,302 Q900,288 1200,308 L1200,340 L0,340 Z"/>
<ellipse cx="200" cy="308" rx="220" ry="18"/>
<ellipse cx="950" cy="308" rx="260" ry="16"/>
<!-- HORSE body -->
<ellipse cx="600" cy="248" rx="128" ry="58"/>
<!-- neck -->
<path d="M698,204 Q724,162 717,132 Q710,116 698,120 Q686,128 692,158 Z"/>
<!-- head -->
<ellipse cx="712" cy="122" rx="32" ry="24" transform="rotate(-18,712,122)"/>
<!-- nostril / mouth area -->
<ellipse cx="722" cy="130" rx="8" ry="5" transform="rotate(-18,722,130)"/>
<!-- ears -->
<path d="M700,104 Q704,88 712,93 Q707,106 700,104 Z"/>
<path d="M716,100 Q722,84 730,89 Q724,103 716,100 Z"/>
<!-- mane -->
<path d="M696,120 Q682,112 670,108 Q664,106 666,114 Q676,118 690,124 Z"/>
<!-- tail flowing back -->
<path d="M476,248 Q452,228 434,202 Q427,190 438,186 Q452,190 466,216 Q480,234 488,250 Z"/>
<!-- horse legs — extended gallop pose -->
<!-- front legs stretched forward -->
<path d="M522,300 Q518,264 514,232 Q512,218 522,217 Q532,217 534,230 Q536,262 534,300 Z"/>
<path d="M558,300 Q556,262 554,228 Q553,214 564,213 Q575,213 576,228 Q577,262 574,300 Z"/>
<!-- back legs stretched back -->
<path d="M658,300 Q664,262 670,228 Q672,214 682,215 Q692,217 690,230 Q686,264 680,300 Z"/>
<path d="M694,300 Q702,262 710,226 Q713,212 724,214 Q734,216 732,230 Q726,265 718,300 Z"/>
<!-- RIDER — Khalid, upright proud posture, turban, long robe, arm up with sword -->
<!-- lower robe / saddle area -->
<path d="M618,200 Q598,215 585,230 Q580,240 590,244 Q605,240 620,225 Q634,210 640,200 Z"/>
<path d="M658,196 Q672,208 680,222 Q684,232 674,238 Q660,236 648,222 Q638,208 636,198 Z"/>
<!-- torso -->
<ellipse cx="648" cy="175" rx="26" ry="44"/>
<!-- head -->
<circle cx="648" cy="122" r="24"/>
<!-- turban — layered wrapping -->
<path d="M626,112 Q648,94 670,112 Q656,100 648,104 Q640,100 626,112 Z"/>
<path d="M622,118 Q622,108 630,106 Q626,116 622,118 Z"/>
<path d="M674,118 Q674,108 666,106 Q670,116 674,118 Z"/>
<!-- beard -->
<path d="M636,138 Q648,148 660,138 Q654,146 648,144 Q642,146 636,138 Z"/>
<!-- SWORD ARM raised — right arm sweeping upward -->
<path d="M668,155 Q692,130 714,100 Q720,90 726,100 Q722,116 698,144 Q680,164 669,170 Z"/>
<!-- sword blade -->
<path d="M714,100 L754,48 L762,54 L722,108 Z"/>
<!-- sword crossguard -->
<path d="M710,98 L716,88 L724,92 L718,102 Z"/>
<!-- blade tip -->
<path d="M754,48 L762,54 L758,40 Z"/>
<!-- shield on left arm -->
<path d="M628,158 Q608,162 594,170 Q587,178 594,186 Q606,186 618,178 Q630,168 634,158 Z"/>
<!-- shield round bump -->
<ellipse cx="600" cy="178" rx="14" ry="18"/>
<!-- robe flowing behind in wind -->
<path d="M624,218 Q600,238 590,260 Q586,274 598,272 Q614,256 628,236 Z"/>
<path d="M668,215 Q688,232 696,252 Q700,266 688,266 Q674,250 662,232 Z"/>
<!-- dust cloud from hooves -->
<ellipse cx="490" cy="304" rx="70" ry="12" opacity="0.5"/>
<ellipse cx="740" cy="304" rx="55" ry="10" opacity="0.4"/>
<!-- sun behind warrior -->
<circle cx="1080" cy="80" r="52" opacity="0.25"/>
<circle cx="1080" cy="80" r="38" opacity="0.18"/>
</g></svg>`;

// ── PAGE 2: ABU BAKR ─────────────────────────────────────────────
// Old man seated in cave, head slightly bowed, hands open in du'a, humble
SIL.blue = `<svg viewBox="0 0 1200 340" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet">
<g fill="#5870c0">
<!-- ground -->
<rect x="0" y="308" width="1200" height="32"/>
<path d="M0,308 Q300,295 600,305 Q900,315 1200,308 L1200,340 L0,340 Z"/>
<!-- CAVE arch — Jabal Thawr feel -->
<path d="M320,308 Q295,260 278,210 Q265,170 268,140 Q272,115 288,110 Q308,108 328,135 Q348,165 356,208 Q366,255 368,308 Z"/>
<!-- cave left wall -->
<path d="M880,308 Q905,260 922,210 Q935,170 932,140 Q928,115 912,110 Q892,108 872,135 Q852,165 844,208 Q834,255 832,308 Z"/>
<!-- cave right wall -->
<!-- cave ceiling arc -->
<path d="M280,115 Q600,60 920,115 Q600,82 280,115 Z"/>
<!-- cave interior shadow -->
<ellipse cx="600" cy="200" rx="230" ry="140" opacity="0.3"/>
<!-- rocks on floor -->
<ellipse cx="400" cy="308" rx="40" ry="12"/>
<ellipse cx="450" cy="308" rx="25" ry="8"/>
<ellipse cx="780" cy="308" rx="35" ry="10"/>
<!-- ABU BAKR — seated cross-legged, old man posture, hands raised in dua -->
<!-- crossed legs / lap -->
<ellipse cx="600" cy="268" rx="62" ry="24"/>
<!-- right foot peeking -->
<ellipse cx="650" cy="278" rx="18" ry="8" transform="rotate(15,650,278)"/>
<!-- left foot -->
<ellipse cx="550" cy="276" rx="18" ry="8" transform="rotate(-15,550,276)"/>
<!-- robe body -->
<ellipse cx="600" cy="234" rx="44" ry="46"/>
<!-- shoulders/chest wider at top -->
<ellipse cx="600" cy="210" rx="40" ry="28"/>
<!-- head — slightly bowed in reverence -->
<circle cx="600" cy="168" r="28"/>
<!-- turban with tail — Abu Bakr known for long turban tail -->
<path d="M576,154 Q600,134 624,154 Q608,140 600,144 Q592,140 576,154 Z"/>
<path d="M622,156 Q636,148 638,138 Q634,128 626,132 Q622,144 622,156 Z"/>
<path d="M628,138 Q638,120 636,106 Q630,100 624,108 Q622,122 626,136 Z"/>
<!-- long beard of Abu Bakr -->
<path d="M582,186 Q600,202 618,186 Q610,198 600,196 Q590,198 582,186 Z"/>
<path d="M586,195 Q600,215 614,195 Q607,210 600,208 Q593,210 586,195 Z"/>
<!-- LEFT ARM raised in du'a -->
<path d="M562,218 Q538,206 522,194 Q514,186 520,177 Q530,176 544,188 Q558,202 564,220 Z"/>
<!-- left forearm vertical up -->
<path d="M520,192 Q512,172 513,154 Q516,144 524,149 Q526,165 524,182 Z"/>
<!-- left open hand -->
<ellipse cx="516" cy="148" rx="11" ry="14" transform="rotate(-15,516,148)"/>
<!-- RIGHT ARM raised in du'a -->
<path d="M638,218 Q662,206 678,194 Q686,186 680,177 Q670,176 656,188 Q642,202 636,220 Z"/>
<!-- right forearm up -->
<path d="M680,192 Q688,172 687,154 Q684,144 676,149 Q674,165 676,182 Z"/>
<!-- right open hand -->
<ellipse cx="684" cy="148" rx="11" ry="14" transform="rotate(15,684,148)"/>
<!-- robe folds -->
<path d="M562,248 Q544,264 540,282 Q543,292 554,288 Q566,272 568,254 Z"/>
<path d="M638,248 Q656,264 660,282 Q657,292 646,288 Q634,272 632,254 Z"/>
<!-- light from cave entrance — shaft of light -->
<path d="M320,115 Q380,150 420,200 Q440,228 440,260 Q410,230 390,200 Q358,155 320,115 Z" opacity="0.15"/>
</g></svg>`;

// ── PAGE 3: UMAR ─────────────────────────────────────────────────
// Tall commanding man striding forward, staff in hand, cloak swept back
SIL.green = `<svg viewBox="0 0 1200 340" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet">
<g fill="#2e8044">
<!-- ground / Medina streets -->
<rect x="0" y="305" width="1200" height="35"/>
<path d="M0,305 Q200,295 400,302 Q600,309 800,298 Q1000,288 1200,305 L1200,340 L0,340 Z"/>
<!-- distant buildings / city silhouette -->
<rect x="80" y="240" width="120" height="70"/>
<rect x="180" y="210" width="80" height="100"/>
<rect x="240" y="228" width="100" height="82"/>
<rect x="920" y="235" width="110" height="75"/>
<rect x="1010" y="215" width="90" height="95"/>
<rect x="1080" y="248" width="80" height="62"/>
<!-- mosque dome distant left -->
<ellipse cx="200" cy="210" rx="55" ry="44"/>
<rect x="155" y="210" width="90" height="25"/>
<!-- mosque dome distant right -->
<ellipse cx="1020" cy="215" rx="50" ry="40"/>
<rect x="978" y="215" width="84" height="22"/>
<!-- UMAR — tall, powerful stride, arm forward with staff, head high -->
<!-- stride: left leg forward, right leg back -->
<!-- right leg back -->
<path d="M620,305 Q635,275 644,244 Q647,230 658,230 Q669,231 668,244 Q662,276 652,305 Z"/>
<!-- left leg forward -->
<path d="M556,305 Q548,272 544,240 Q542,226 552,225 Q562,226 565,240 Q569,272 568,305 Z"/>
<!-- robe body — broad, powerful -->
<ellipse cx="600" cy="215" rx="46" ry="70"/>
<!-- cloak swept back in stride -->
<path d="M646,205 Q672,220 690,244 Q697,258 684,260 Q668,252 651,230 Q638,212 642,205 Z"/>
<path d="M646,240 Q668,256 678,278 Q680,290 668,288 Q654,272 645,252 Z"/>
<!-- left arm forward, holding staff -->
<path d="M558,195 Q534,200 514,208 Q505,215 510,224 Q522,226 540,218 Q557,208 562,197 Z"/>
<!-- staff — tall, vertical, held at angle -->
<path d="M510,222 L492,140 Q492,132 498,130 Q504,130 506,138 L524,220 Z"/>
<!-- staff tip ornament -->
<ellipse cx="495" cy="128" rx="6" ry="9"/>
<!-- right arm back, natural swing -->
<path d="M642,200 Q664,188 676,180 Q683,174 680,165 Q671,163 660,172 Q647,183 641,198 Z"/>
<!-- upper torso / chest -->
<ellipse cx="600" cy="182" rx="36" ry="36"/>
<!-- neck -->
<rect x="590" y="138" width="20" height="28" rx="8"/>
<!-- head — large, strong Umar's build -->
<circle cx="600" cy="120" r="30"/>
<!-- turban — distinctive tall Umar turban -->
<path d="M572,106 Q600,82 628,106 Q610,88 600,92 Q590,88 572,106 Z"/>
<path d="M568,112 Q568,96 576,93 Q572,108 568,112 Z"/>
<path d="M632,112 Q632,96 624,93 Q628,108 632,112 Z"/>
<!-- turban height -->
<ellipse cx="600" cy="86" rx="28" ry="12"/>
<!-- full beard — Umar's famous beard -->
<path d="M578,140 Q600,158 622,140 Q612,154 600,151 Q588,154 578,140 Z"/>
<path d="M580,150 Q600,170 620,150 Q610,166 600,163 Q590,166 580,150 Z"/>
<path d="M584,162 Q600,178 616,162 Q607,174 600,171 Q593,174 584,162 Z"/>
<!-- robe chest folds -->
<path d="M566,198 Q548,214 544,232 Q548,242 558,238 Q568,222 570,204 Z"/>
</g></svg>`;

// ── PAGE 4: ALI ──────────────────────────────────────────────────
// Young warrior, wide fighter's stance, sword drawn and raised, fierce
SIL.rose = `<svg viewBox="0 0 1200 340" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet">
<g fill="#7e2856">
<!-- battlefield ground -->
<rect x="0" y="306" width="1200" height="34"/>
<path d="M0,306 Q150,296 300,305 Q450,314 600,302 Q750,290 900,302 Q1050,314 1200,306 L1200,340 L0,340 Z"/>
<!-- battle dust / haze -->
<ellipse cx="300" cy="306" rx="280" ry="20" opacity="0.4"/>
<ellipse cx="900" cy="306" rx="250" ry="18" opacity="0.35"/>
<!-- fallen banner in background -->
<rect x="100" y="240" width="8" height="70"/>
<path d="M108,240 Q140,250 136,272 Q130,285 108,288 L108,240 Z"/>
<!-- distant warriors faint -->
<ellipse cx="180" cy="290" rx="16" ry="24" opacity="0.5"/>
<circle cx="180" cy="262" r="12" opacity="0.5"/>
<ellipse cx="1020" cy="290" rx="16" ry="24" opacity="0.5"/>
<circle cx="1020" cy="262" r="12" opacity="0.5"/>
<!-- ALI — young lion, wide fighter stance, Dhul Fiqar raised -->
<!-- wide stance legs -->
<!-- left leg planted forward-left -->
<path d="M556,306 Q546,274 540,242 Q537,227 548,225 Q559,226 562,241 Q567,274 567,306 Z"/>
<!-- right leg planted forward-right -->
<path d="M644,306 Q654,274 660,242 Q663,227 652,225 Q641,226 638,241 Q633,274 633,306 Z"/>
<!-- powerful torso — wide warrior chest -->
<ellipse cx="600" cy="210" rx="50" ry="66"/>
<!-- broad shoulders -->
<ellipse cx="600" cy="182" rx="48" ry="28"/>
<!-- upper chest -->
<ellipse cx="600" cy="160" rx="36" ry="22"/>
<!-- neck -->
<rect x="588" y="130" width="24" height="25" rx="10"/>
<!-- head — young, determined Ali -->
<circle cx="600" cy="112" r="28"/>
<!-- turban -->
<path d="M574,98 Q600,76 626,98 Q608,82 600,86 Q592,82 574,98 Z"/>
<path d="M570,105 Q570,90 578,87 Q574,103 570,105 Z"/>
<path d="M630,105 Q630,90 622,87 Q626,103 630,105 Z"/>
<!-- DHU AL-FIQAR — the famous double-pointed sword, raised high in right hand -->
<!-- right arm sweeping high -->
<path d="M646,172 Q672,146 698,112 Q706,100 714,112 Q710,128 684,158 Q664,178 648,185 Z"/>
<!-- DHU AL-FIQAR blade — distinctive two-pointed tip -->
<path d="M698,112 L732,62 L740,67 L706,118 Z"/>
<!-- second point (forked tip) -->
<path d="M730,60 L744,72 L748,56 L734,44 Z"/>
<path d="M740,58 L752,48 L748,38 L736,48 Z"/>
<!-- sword crossguard -->
<path d="M694,110 L702,100 L712,105 L704,115 Z"/>
<!-- left arm raised with small round shield (turs) -->
<path d="M554,172 Q528,150 510,132 Q503,122 510,114 Q520,112 534,124 Q550,140 558,172 Z"/>
<!-- round shield -->
<path d="M506,116 Q490,106 484,118 Q482,132 494,140 Q508,144 518,136 Q524,124 514,116 Z"/>
<ellipse cx="502" cy="128" rx="20" ry="26" transform="rotate(-15,502,128)"/>
<!-- shield boss (center knob) -->
<circle cx="502" cy="128" r="6"/>
<!-- robe flowing open in battle stance -->
<path d="M552,238 Q530,256 524,276 Q522,290 535,288 Q550,270 556,250 Z"/>
<path d="M648,238 Q670,256 676,276 Q678,290 665,288 Q650,270 644,250 Z"/>
<!-- young beard -->
<path d="M584,132 Q600,146 616,132 Q608,143 600,141 Q592,143 584,132 Z"/>
</g></svg>`;

// ── PAGE 5: BILAL ────────────────────────────────────────────────
// Man standing on top of Kaaba/minaret platform, cupped hands calling adhan
SIL.purple = `<svg viewBox="0 0 1200 340" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet">
<g fill="#504090">
<!-- ground -->
<rect x="0" y="308" width="1200" height="32"/>
<path d="M0,308 Q300,298 600,306 Q900,314 1200,308 L1200,340 L0,340 Z"/>
<!-- ── TALL MINARET CENTER ── -->
<!-- base -->
<rect x="552" y="190" width="96" height="120"/>
<!-- shaft lower -->
<rect x="560" y="80" width="80" height="115"/>
<!-- balcony platform -->
<rect x="536" y="186" width="128" height="14" rx="3"/>
<!-- balcony railing -->
<path d="M536,186 Q536,176 542,174 L542,186 Z"/>
<path d="M664,186 Q664,176 658,174 L658,186 Z"/>
<rect x="536" y="174" width="128" height="6" rx="2"/>
<!-- balcony arched underside -->
<path d="M536,186 Q600,172 664,186"/>
<!-- shaft upper -->
<rect x="570" y="30" width="60" height="54"/>
<!-- spire arch -->
<path d="M564,80 Q600,54 636,80 Z"/>
<!-- upper section -->
<rect x="576" y="4" width="48" height="30"/>
<!-- needle -->
<rect x="596" y="-12" width="8" height="20"/>
<!-- crescent -->
<path d="M594,-12 Q600,-22 606,-12 Q603,-18 600,-16 Q597,-18 594,-12 Z"/>
<!-- ── BILAL ON BALCONY — hands cupped to sides of mouth, head tilted up ── -->
<!-- legs on platform -->
<path d="M588,308 Q584,260 582,220 Q581,210 590,208 Q599,208 600,218 Q601,238 600,260 L598,308 Z"/>
<path d="M612,308 Q616,260 618,220 Q619,210 610,208 Q601,208 600,218 Q599,238 600,260 L602,308 Z"/>
<!-- torso on balcony -->
<ellipse cx="600" cy="170" rx="22" ry="30"/>
<!-- chest -->
<ellipse cx="600" cy="153" rx="20" ry="18"/>
<!-- neck -->
<rect x="591" y="128" width="18" height="18" rx="7"/>
<!-- head tilted slightly up — calling -->
<circle cx="600" cy="112" r="24"/>
<!-- Bilal's distinctive head covering (simple cap, no elaborate turban) -->
<path d="M578,102 Q600,84 622,102 Q606,88 600,92 Q594,88 578,102 Z"/>
<!-- mouth open — calling adhan -->
<ellipse cx="600" cy="118" rx="7" ry="4"/>
<!-- LEFT ARM up, elbow bent, hand cupped to mouth-left -->
<path d="M580,158 Q558,148 542,138 Q534,130 540,122 Q550,120 562,132 Q575,145 582,160 Z"/>
<!-- left forearm to face -->
<path d="M540,122 Q530,110 528,98 Q530,88 538,93 Q542,105 542,120 Z"/>
<!-- left cupped hand -->
<ellipse cx="530" cy="90" rx="10" ry="14" transform="rotate(-20,530,90)"/>
<!-- RIGHT ARM up, mirroring -->
<path d="M620,158 Q642,148 658,138 Q666,130 660,122 Q650,120 638,132 Q625,145 618,160 Z"/>
<path d="M660,122 Q670,110 672,98 Q670,88 662,93 Q658,105 658,120 Z"/>
<ellipse cx="670" cy="90" rx="10" ry="14" transform="rotate(20,670,90)"/>
<!-- robe -->
<path d="M580,198 Q564,214 560,234 Q558,246 570,244 Q582,228 584,210 Z"/>
<path d="M620,198 Q636,214 640,234 Q642,246 630,244 Q618,228 616,210 Z"/>
<!-- stars around him -->
<circle cx="430" cy="80" r="3" opacity="0.65"/>
<circle cx="360" cy="44" r="2" opacity="0.65"/>
<circle cx="760" cy="64" r="3" opacity="0.65"/>
<circle cx="840" cy="36" r="2" opacity="0.65"/>
<circle cx="200" cy="100" r="2" opacity="0.55"/>
<circle cx="1000" cy="88" r="3" opacity="0.55"/>
<circle cx="1100" cy="52" r="2" opacity="0.55"/>
<!-- crescent moon -->
<path d="M140,68 Q114,54 114,30 Q101,52 112,72 Q121,85 140,78 Q128,74 123,60 Q124,46 132,40 Q136,56 140,68 Z" opacity="0.6"/>
<!-- sound wave rings from his call -->
<path d="M570,108 Q545,108 534,94" stroke="#504090" fill="none" stroke-width="3" opacity="0.4"/>
<path d="M630,108 Q655,108 666,94" stroke="#504090" fill="none" stroke-width="3" opacity="0.4"/>
</g></svg>`;

// ── PAGE 6: IBN MASUD ────────────────────────────────────────────
// Scholar seated with large open book in lap, lamp beside him, leaning in
SIL.parch = `<svg viewBox="0 0 1200 340" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet">
<g fill="#8c5a18">
<!-- floor / library -->
<rect x="0" y="306" width="1200" height="34"/>
<path d="M0,306 Q300,296 600,304 Q900,312 1200,306 L1200,340 L0,340 Z"/>
<!-- bookshelves background -->
<!-- shelf left -->
<rect x="60" y="180" width="220" height="130"/>
<rect x="58" y="174" width="224" height="10" rx="2"/>
<rect x="58" y="232" width="224" height="8" rx="2"/>
<rect x="58" y="288" width="224" height="8" rx="2"/>
<!-- books on shelves — vertical rectangles of varying heights -->
<rect x="70" y="183" width="14" height="48"/>
<rect x="86" y="188" width="12" height="43"/>
<rect x="100" y="180" width="16" height="51"/>
<rect x="118" y="185" width="11" height="46"/>
<rect x="131" y="183" width="15" height="48"/>
<rect x="148" y="186" width="13" height="45"/>
<rect x="163" y="182" width="16" height="49"/>
<rect x="181" y="185" width="12" height="46"/>
<rect x="195" y="183" width="14" height="48"/>
<rect x="211" y="188" width="11" height="43"/>
<rect x="224" y="181" width="16" height="50"/>
<rect x="70" y="240" width="14" height="47"/>
<rect x="86" y="244" width="12" height="43"/>
<rect x="100" y="238" width="16" height="49"/>
<rect x="118" y="241" width="11" height="46"/>
<rect x="131" y="239" width="15" height="48"/>
<rect x="148" y="242" width="13" height="45"/>
<rect x="163" y="238" width="16" height="49"/>
<rect x="181" y="241" width="12" height="46"/>
<rect x="195" y="239" width="14" height="48"/>
<rect x="211" y="244" width="11" height="43"/>
<rect x="224" y="237" width="16" height="50"/>
<!-- shelf right -->
<rect x="920" y="180" width="220" height="130"/>
<rect x="918" y="174" width="224" height="10" rx="2"/>
<rect x="918" y="232" width="224" height="8" rx="2"/>
<rect x="918" y="288" width="224" height="8" rx="2"/>
<rect x="930" y="183" width="14" height="48"/>
<rect x="946" y="188" width="12" height="43"/>
<rect x="960" y="180" width="16" height="51"/>
<rect x="978" y="185" width="11" height="46"/>
<rect x="991" y="183" width="15" height="48"/>
<rect x="1008" y="186" width="13" height="45"/>
<rect x="1023" y="182" width="16" height="49"/>
<rect x="1041" y="185" width="12" height="46"/>
<rect x="1055" y="183" width="14" height="48"/>
<rect x="1071" y="188" width="11" height="43"/>
<rect x="1084" y="181" width="16" height="50"/>
<rect x="930" y="240" width="14" height="47"/>
<rect x="946" y="244" width="12" height="43"/>
<rect x="960" y="238" width="16" height="49"/>
<rect x="978" y="241" width="11" height="46"/>
<rect x="991" y="239" width="15" height="48"/>
<rect x="1008" y="242" width="13" height="45"/>
<rect x="1023" y="238" width="16" height="49"/>
<!-- IBN MASUD — seated cross-legged, leaning forward over large open book -->
<!-- cross-legged base -->
<ellipse cx="600" cy="282" rx="70" ry="26"/>
<!-- right knee -->
<ellipse cx="658" cy="272" rx="22" ry="14" transform="rotate(20,658,272)"/>
<!-- left knee -->
<ellipse cx="542" cy="270" rx="22" ry="14" transform="rotate(-20,542,270)"/>
<!-- LARGE OPEN BOOK / MUSHAF in lap, spread wide -->
<!-- book spine -->
<rect x="590" y="240" width="20" height="48" rx="2"/>
<!-- left page -->
<path d="M510,238 Q550,232 590,240 L590,288 Q550,282 510,280 Z"/>
<!-- right page -->
<path d="M610,240 Q650,232 690,238 L690,280 Q650,282 610,288 Z"/>
<!-- text lines on pages -->
<line x1="522" y1="248" x2="582" y2="246"/>
<line x1="524" y1="256" x2="580" y2="254"/>
<line x1="526" y1="264" x2="578" y2="262"/>
<line x1="526" y1="272" x2="578" y2="270"/>
<line x1="618" y1="248" x2="678" y2="246"/>
<line x1="618" y1="256" x2="676" y2="254"/>
<line x1="620" y1="264" x2="674" y2="262"/>
<line x1="620" y1="272" x2="672" y2="270"/>
<!-- torso leaning forward -->
<ellipse cx="600" cy="230" rx="36" ry="40"/>
<!-- upper body -->
<ellipse cx="600" cy="208" rx="30" ry="26"/>
<!-- head bowed reading, chin slightly toward chest -->
<circle cx="600" cy="180" r="26"/>
<!-- turban simple wrap -->
<path d="M576,168 Q600,150 624,168 Q606,154 600,158 Q594,154 576,168 Z"/>
<path d="M572,174 Q572,158 580,155 Q576,170 572,174 Z"/>
<path d="M628,174 Q628,158 620,155 Q624,170 628,174 Z"/>
<!-- both arms resting on open book, fingers following lines -->
<path d="M564,230 Q545,240 530,252 Q524,260 530,268 Q540,268 552,256 Q563,244 567,232 Z"/>
<path d="M530,264 Q514,264 508,272 Q510,282 522,282 Q532,276 532,266 Z"/>
<!-- right arm mirror -->
<path d="M636,230 Q655,240 670,252 Q676,260 670,268 Q660,268 648,256 Q637,244 633,232 Z"/>
<path d="M670,264 Q686,264 692,272 Q690,282 678,282 Q668,276 668,266 Z"/>
<!-- OIL LAMP to his right, with flame -->
<rect x="730" y="278" width="28" height="22" rx="4"/>
<ellipse cx="744" cy="278" rx="14" ry="6"/>
<path d="M744,278 Q740,264 744,252 Q748,264 744,278 Z" opacity="0.8"/>
<rect x="736" y="298" width="16" height="6" rx="2"/>
<!-- lamp glow circle -->
<ellipse cx="744" cy="268" rx="30" ry="22" opacity="0.2"/>
<!-- QUILL PEN on floor beside him -->
<path d="M460,306 Q468,280 486,256 Q492,246 497,258 Q488,278 476,302 Z"/>
<!-- ink well -->
<rect x="430" y="288" width="24" height="20" rx="4"/>
<ellipse cx="442" cy="288" rx="12" ry="5"/>
<!-- beard short, Ibn Masud not old here -->
<path d="M584,196 Q600,210 616,196 Q608,207 600,205 Q592,207 584,196 Z"/>
</g></svg>`;

// ── PAGE 7: ABU UBAYDA ───────────────────────────────────────────
// Man at ship's prow, arm stretched forward pointing, cloak in sea wind
SIL.teal = `<svg viewBox="0 0 1200 340" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet">
<g fill="#187888">
<!-- OCEAN — layered waves -->
<path d="M0,282 Q80,266 160,278 Q240,290 320,275 Q400,260 480,274 Q560,288 640,274 Q720,260 800,274 Q880,288 960,275 Q1040,262 1120,275 Q1160,281 1200,272 L1200,340 L0,340 Z"/>
<path d="M0,296 Q100,283 200,293 Q300,303 400,291 Q500,279 600,291 Q700,303 800,291 Q900,279 1000,292 Q1100,305 1200,292 L1200,340 L0,340 Z" opacity="0.55"/>
<path d="M0,310 Q150,302 300,309 Q450,316 600,308 Q750,300 900,309 Q1050,318 1200,308 L1200,340 L0,340 Z" opacity="0.4"/>
<!-- LARGE SHIP -->
<!-- main hull -->
<path d="M300,222 Q600,200 900,222 L922,288 Q600,306 278,288 Z"/>
<!-- hull curve details -->
<path d="M300,222 Q288,255 278,288"/>
<path d="M900,222 Q912,255 922,288"/>
<!-- PROW (front) -->
<path d="M876,222 Q910,215 935,204 Q944,196 936,190 Q924,190 910,202 Q894,216 878,224 Z"/>
<path d="M930,198 Q948,192 956,184 Q958,176 950,174 Q940,176 932,186 Q926,196 930,200 Z"/>
<!-- STERN (back) -->
<path d="M322,222 Q298,218 280,224 Q272,232 278,240 Q290,242 308,232 Z"/>
<!-- deck rail -->
<rect x="300" y="218" width="600" height="7" rx="2"/>
<!-- MAIN MAST -->
<rect x="551" y="60" width="18" height="164"/>
<!-- main yard (horizontal) -->
<rect x="480" y="96" width="160" height="8" rx="3"/>
<!-- MAIN SAIL — billowing full -->
<path d="M569,68 Q640,92 636,134 Q628,158 569,164 L569,68 Z"/>
<path d="M551,68 Q480,92 484,134 Q492,158 551,164 L551,68 Z"/>
<!-- sail tension lines -->
<path d="M569,68 Q560,96 560,120" stroke="#187888" fill="none" stroke-width="2" opacity="0.5"/>
<path d="M551,68 Q560,96 560,120" stroke="#187888" fill="none" stroke-width="2" opacity="0.5"/>
<!-- FORE MAST -->
<rect x="443" y="84" width="14" height="140"/>
<rect x="400" y="112" width="100" height="6" rx="2"/>
<path d="M457,90 Q498,108 494,136 Q490,148 457,152 L457,90 Z"/>
<path d="M443,90 Q402,108 406,136 Q410,148 443,152 L443,90 Z"/>
<!-- AFT MAST -->
<rect x="660" y="86" width="14" height="138"/>
<rect x="620" y="114" width="100" height="6" rx="2"/>
<path d="M674,92 Q715,110 711,138 Q707,150 674,154 L674,92 Z"/>
<path d="M660,92 Q619,110 623,138 Q627,150 660,154 L660,92 Z"/>
<!-- RIGGING lines -->
<path d="M560,60 Q443,84 443,88" stroke="#187888" fill="none" stroke-width="2" opacity="0.4"/>
<path d="M560,60 Q667,86 667,90" stroke="#187888" fill="none" stroke-width="2" opacity="0.4"/>
<!-- FLAG on main mast -->
<path d="M560,60 Q556,50 560,40 Q564,50 560,60 Z"/>
<rect x="556" y="22" width="5" height="20"/>
<!-- FIGURE ON PROW — ABU UBAYDA, arm outstretched, cloak in wind -->
<!-- feet on prow deck -->
<path d="M890,288 Q886,262 883,238 Q881,228 890,226 Q899,227 900,237 Q901,262 900,288 Z"/>
<path d="M912,288 Q918,262 922,238 Q924,228 914,226 Q904,227 903,237 Q902,262 904,288 Z"/>
<!-- robe / cloak body -->
<ellipse cx="900" cy="218" rx="24" ry="36"/>
<!-- CLOAK BLOWING BACK dramatically in sea wind -->
<path d="M922,208 Q948,196 968,182 Q978,174 972,162 Q958,160 942,174 Q924,190 920,210 Z"/>
<path d="M922,228 Q950,220 972,214 Q984,210 980,196 Q966,194 948,204 Q930,216 920,230 Z"/>
<path d="M920,244 Q946,240 966,242 Q978,244 974,256 Q960,260 942,252 Q926,244 920,246 Z"/>
<!-- torso upper -->
<ellipse cx="900" cy="196" rx="20" ry="24"/>
<!-- neck -->
<rect x="891" y="168" width="18" height="20" rx="7"/>
<!-- head — commanding, looking forward -->
<circle cx="900" cy="152" r="24"/>
<!-- turban -->
<path d="M878,140 Q900,122 922,140 Q906,126 900,130 Q894,126 878,140 Z"/>
<!-- RIGHT ARM dramatically outstretched pointing horizon -->
<path d="M918,190 Q944,176 966,160 Q976,152 978,140 Q970,132 958,140 Q944,152 930,168 Q917,184 916,192 Z"/>
<!-- pointing hand -->
<path d="M974,138 Q984,128 992,120 Q996,112 988,110 Q980,114 974,124 Q970,134 972,140 Z"/>
<ellipse cx="988" cy="114" rx="8" ry="12" transform="rotate(-30,988,114)"/>
<!-- left arm on ship rail -->
<path d="M882,196 Q865,196 854,204 Q849,213 856,219 Q867,219 878,210 Q886,202 884,196 Z"/>
<path d="M852,216 Q840,220 834,230 Q836,240 846,238 Q857,230 856,220 Z"/>
<!-- beard -->
<path d="M884,168 Q900,182 916,168 Q908,179 900,177 Q892,179 884,168 Z"/>
<!-- horizon / distant land -->
<path d="M0,268 Q200,260 400,265 Q600,270 800,262 Q1000,254 1200,264" stroke="#187888" fill="none" stroke-width="2" opacity="0.3"/>
<!-- stars / navigation -->
<circle cx="150" cy="80" r="3" opacity="0.6"/>
<circle cx="280" cy="44" r="2" opacity="0.6"/>
<circle cx="420" cy="68" r="3" opacity="0.6"/>
<circle cx="1050" cy="55" r="2" opacity="0.6"/>
<circle cx="1140" cy="80" r="3" opacity="0.6"/>
<!-- navigation star bright -->
<path d="M700,38 L703,47 L712,47 L705,52 L708,62 L700,57 L692,62 L695,52 L688,47 L697,47 Z" opacity="0.55"/>
<!-- crescent -->
<path d="M200,70 Q175,57 175,34 Q163,55 173,74 Q182,86 200,79 Q188,75 184,62 Q185,48 193,42 Q196,58 200,70 Z" opacity="0.58"/>
</g></svg>`;

// ══════════════════════════════════════════════════════════════════
//  PAGE CONFIG — image backgrounds per page
// ══════════════════════════════════════════════════════════════════

var CFG = [
  {theme:'prophet', img:'p0.png'},  // PBUH — desert night, flag, divine light
  {theme:'gold',    img:'p1.png'},  // Khalid — horseback warrior, red sky
  {theme:'blue',    img:'p2.png'},  // Abu Bakr — man in cave praying, lantern
  {theme:'green',   img:'p3.png'},  // Umar — striding man with staff, city
  {theme:'rose',    img:'p4.png'},  // Ali — warrior with sword raised, purple
  {theme:'purple',  img:'p5.png'},  // Bilal — calling adhan on the Kaaba
  {theme:'parch',   img:'p6.png'},  // Ibn Masud — scholar reading Quran
  {theme:'teal',    img:'p7.png'}   // Abu Ubayda — commander on boat
];

function getImageUrl(filename) {
  return chrome.runtime.getURL('images/' + filename);
}

function show(idx, count) {
  var c = CFG[idx] || CFG[1];
  document.body.className = c.theme;

  // Set full-screen background image on body
  var imgUrl = getImageUrl(c.img);
  document.body.style.backgroundImage = 'url("' + imgUrl + '")';
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center bottom';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundAttachment = 'fixed';

  // Hide the SVG silhouette div (no longer used)
  var sDiv = document.getElementById('silhouette');
  if (sDiv) sDiv.style.display = 'none';

  if (idx === 0) {
    // Prophet ﷺ — hide the SVG bg elements, use CSS background instead
    var mosqueEl = document.getElementById('p0-mosque');
    if (mosqueEl) mosqueEl.style.display = 'none';
    var bgEl = document.getElementById('p0-bg');
    if (bgEl) bgEl.style.display = 'none';
    document.getElementById('p0').style.display = 'block';
    var cp = document.getElementById('cnt-p');
    if (cp) cp.textContent = count.toLocaleString();
  } else {
    var el = document.getElementById('p' + idx);
    if (!el) { el = document.getElementById('p1'); document.body.className = 'gold'; }
    el.style.display = 'block';
    var sf = document.getElementById('sahabi-footer');
    if (sf) sf.style.display = 'block';
    var cc = document.getElementById('cnt');
    if (cc) cc.textContent = count.toLocaleString();
  }
}

try {
  chrome.storage.local.get(['blockedCount'], function(d) {
    var count = (d && d.blockedCount) ? parseInt(d.blockedCount) : 0;
    // Pages 0-7: 0=Prophet, 1=Khalid, 2=AbuBakr, 3=Umar, 4=Ali, 5=Bilal, 6=IbnMasud, 7=AbuUbayda
    var idx = count % 8;
    show(idx, count);
    // Increment AFTER showing so next visit gets the next page
    chrome.storage.local.set({ blockedCount: count + 1 });
  });
} catch(e) {
  // Fallback if no chrome API (shouldn't happen but just in case)
  var fallbackIdx = Math.floor(Date.now() / 1000) % 8;
  show(fallbackIdx, 0);
}

})();
