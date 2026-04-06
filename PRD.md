# Product Requirements Document
## Taiwanese Mandarin Everyday Communication Learning System

**Version:** 1.0  
**Date:** 2026-04-05  
**Author:** Product Team  
**Status:** Draft

---

## 1. Overview

A self-directed Mandarin Chinese learning system focused on **Taiwanese variety** (Traditional Chinese) for practical, everyday communication. Target learner has a pinyin foundation and wants to progress to real conversational fluency — not textbook progression.

**Primary translation language:** Indonesian (Bahasa Indonesia — conversational register)  
**Secondary translation language:** English  
**Script:** Traditional Chinese (繁體字) — Taiwanese standard  
**Romanization:** Hanyu Pinyin with tone marks (diacritics)

---

## 2. Problem Statement

Most Mandarin learning resources:
- Teach Simplified Chinese (mainland variety), not Taiwanese Traditional
- Follow rigid textbook sequences disconnected from real life
- Lack Indonesian-first translation support
- Teach "classroom Mandarin" instead of natural, spoken Taiwanese Mandarin (including common sentence-final particles, local vocabulary, and colloquialisms)

---

## 3. Goals

| Goal | Description |
|------|-------------|
| Practical fluency | Communicate in everyday Taiwanese situations without relying on textbook scripts |
| Taiwanese authenticity | Use vocabulary, pronunciation norms, and expressions natural to Taiwan (not mainland China) |
| Indonesian-first | All content prioritizes Indonesian translation, English as supplement |
| Pinyin-aware | Learner already knows pinyin; no need to teach the system itself |
| Zero busywork | Every item learned should be immediately applicable to real life |

---

## 4. Content Scope & Data Sources

### 4.1 Primary Data Sources

| Source | Content | Usage |
|--------|---------|-------|
| [ivankra/dangdai](https://github.com/ivankra/dangdai) | Structured vocab from NTNU "當代中文課程" — Traditional Chinese, Pinyin, English, POS | Vocabulary base, selectively filtered for everyday relevance |
| [frank890417/taiwan-md](https://github.com/frank890417/taiwan-md) | 940+ articles about Taiwan culture, food, society, lifestyle | Reading material, cultural context, topic-based vocabulary extraction |

### 4.2 Vocabulary Entry Format

Each vocabulary/phrase entry must contain:

```
{
  "hanzi": "謝謝",               // Traditional Chinese
  "pinyin": "xiè​xiè",           // Hanyu Pinyin with diacritical tone marks
  "indonesian": "terima kasih", // Primary translation
  "english": "thank you",       // Secondary translation
  "pos": "interjection",        // Part of speech
  "register": "casual",         // formal / casual / slang
  "taiwan_note": "",            // Taiwan-specific usage note if applicable
  "scenario": "social"          // see §5 below
}
```

### 4.3 Taiwanese-Specific Additions (not in dangdai)

These must be added manually or sourced separately:

- Common sentence-final particles: 啦 (la), 喔 (o), 欸 (ēi), 嘛 (ma), 囉 (lo)
- Taiwan-specific words: 機車 (scooter, not motorcycle), 便當 (bento box), 夜市 (night market), 捷運 (MRT)
- Common fillers: 就是說、對啊、然後
- Hokkien loanwords common in Taiwan Mandarin — tagged `[Hokkien]`: 歐吉桑 (ōujísāng, older man), 歐巴桑 (ōubāsāng, older woman), 便所 (biànsuǒ, toilet — archaic but heard)
- 你好 vs 你好嗎 — Taiwanese preference for indirect greetings

---

## 5. Everyday Life Scenarios (Learning Tracks)

Content is organized by **real-life scenarios**, not by grammar chapter. Each scenario contains vocabulary, phrases, and short dialogues.

### Priority Order (Most Useful First)

| # | Scenario | Key Situations |
|---|----------|---------------|
| 1 | **Food & Drink** | Ordering at restaurants, night market, breakfast shops (早餐店), bubble tea shops (飲料店), asking for takeaway (外帶) |
| 2 | **Getting Around** | MRT (捷運), bus (公車), taxi/Uber, asking directions, scooter rental |
| 3 | **Shopping** | Convenience stores (7-11, FamilyMart), markets, asking price, bargaining, paying |
| 4 | **Social Talk** | Greetings, small talk, compliments, making plans, apologizing, WeChat/Line messaging phrases |
| 5 | **Housing** | Renting an apartment, talking to a landlord, utilities, neighborhood |
| 6 | **Work & Study** | Office small talk, meetings, asking for help, deadlines, complimenting work |
| 7 | **Health** | Pharmacy (藥局), clinic (診所), describing symptoms, buying medicine |
| 8 | **Money & Banking** | ATM, bank transactions, splitting bills, sending money |
| 9 | **Phone & Digital** | Line/WeChat phrases, texting slang, making phone calls |
| 10 | **Emergency & Survival** | Getting help, describing a problem, police, hospital |

---

## 6. Learning Modes

### 6.1 Flashcard Review (SRS)
- Spaced repetition system (similar to Anki)
- Card types:
  - **Hanzi → Indonesian** (primary)
  - **Audio → Hanzi** (listening)
  - **Indonesian → Hanzi + Pinyin** (production)
- Cards are tagged by scenario; user can study one scenario at a time

### 6.2 Dialogue Shadowing
- Short real-life dialogues (4–8 lines)
- Shown in layers: Indonesian → Pinyin → Hanzi
- Audio from native Taiwanese speakers (or TTS in Taiwan Mandarin accent)
- User can shadow (repeat) each line

### 6.3 Scenario Drills
- Fill-in-the-blank within a real context (e.g., "You're at a breakfast shop. The owner asks 要內用還是外帶？ — you answer...")
- Multiple choice with Indonesian explanations

### 6.4 Cultural Reading (from taiwan-md)
- Short articles about Taiwan food, culture, daily life — in Traditional Chinese
- Vocabulary from the article is pre-annotated with pinyin + Indonesian gloss
- Difficulty: graded by HSK/TOCFL equivalent level

---

## 7. Content Design Principles

| Principle | Detail |
|-----------|--------|
| **Taiwanese over textbook** | Prefer colloquial Taiwanese expressions over formal mainland alternatives |
| **Indonesian first** | Every card, dialogue, and explanation leads with Indonesian |
| **No useless words** | Filter out words unlikely to appear in daily Taiwan life (e.g., classical terms, political vocabulary) |
| **Register awareness** | Mark items as casual/formal/slang so learner knows when to use them |
| **Tone sandhi** | Mark Taiwanese tone sandhi rules (especially 一, 不, and third-tone sandhi) |
| **Traditional only** | Never show Simplified characters |

---

## 8. Vocabulary Filtering (from dangdai source)

The `dangdai` repo covers NTNU textbook books 1–6. Apply these filters:

**Include:**
- Everyday nouns, verbs, adjectives — especially those mapped to scenarios in §5
- Common measure words (量詞)
- Time expressions
- Common adverbs and connectives used in speech

**Exclude:**
- Book 5–6 vocabulary that is academic/literary
- Items tagged as "Name" (proper nouns for textbook characters)
- Vocabulary specific to mainland Chinese culture or institutions
- Rarely-used formal/written forms

**Augment with:**
- Taiwan-specific terms not in dangdai (see §4.3)
- Indonesian translations (dangdai only has English)

---

## 9. Platform Requirements

### 9.1 Target Platforms

| Platform | Target | Priority |
|----------|--------|----------|
| **Android app** | Android 10+ (API 29+) | P1 |
| **PC web browser** | Chrome, Firefox, Edge — desktop | P1 |
| iOS / Safari mobile | Not required initially | Out of scope |

### 9.2 Technology Recommendation

Use a **cross-platform web stack** so the same codebase serves both targets:

| Layer | Recommendation | Reason |
|-------|---------------|--------|
| Frontend framework | **React** (or Vue) | Runs in browser natively; wrappable for Android |
| Android packaging | **PWA (Progressive Web App)** | Installable from browser, no app store required; works offline |
| Alternative Android | **Capacitor** (wraps the web app) | If native Android features needed (e.g., notifications) |
| Data storage | **IndexedDB / localStorage** | Offline-first SRS progress saved on device |
| Backend (optional) | Static file hosting (GitHub Pages, Netlify) | No server needed if data is bundled; free to host |
| SRS engine | **ts-fsrs** (TypeScript FSRS library) | Open-source spaced repetition, works entirely in browser |

### 9.3 PWA Requirements (Android installability)

The app must meet PWA installability criteria:

- `manifest.json` with app name, icons (192×192, 512×512), `display: standalone`
- Service worker for offline caching of all vocabulary data
- HTTPS hosting
- Works without internet after first load (all content pre-bundled per scenario)

### 9.4 Responsive Design

- **Mobile (Android):** Single-column layout, large tap targets (min 48×48dp), bottom navigation bar
- **Desktop (PC browser):** Two-column layout — study card on left, deck/progress panel on right
- Font size: minimum 18px for Hanzi, 14px for Pinyin annotation below

### 9.5 Chinese Font Requirements

Traditional Chinese characters must render correctly on all platforms:

- Preferred font stack: `"Noto Serif TC", "Noto Sans TC", serif`
- Bundle or load via Google Fonts CDN
- Pinyin diacritics (ā á ǎ à etc.) must render without fallback to boxes

---

## 10. Output Formats (Data Pipeline)

| Format | Description |
|--------|-------------|
| **JSON** | Primary app data format — one file per scenario, loaded by the web/Android app |
| **Anki deck (.apkg)** | One deck per scenario; cards always show Pinyin (text-only, no audio initially); tagged with scenario + register + `[Hokkien]` where applicable |
| **Markdown files** | One file per scenario with vocabulary tables + dialogues (for review/editing) |
| **CSV** | Spreadsheet-friendly for manual editing before import |

---

## 11. Taiwanese Pronunciation Notes

These Taiwanese Mandarin specifics must be reflected in pinyin annotations and audio:

| Feature | Detail |
|---------|--------|
| **Erhua (兒化)** | Rare in Taiwan Mandarin; avoid adding erhua unless natural |
| **Third-tone sandhi** | 你好 → ní hǎo (second + third); annotate natural spoken form |
| **入聲 remnants** | Some Taiwan speakers preserve shorter vowel duration in certain syllables |
| **-n / -ng distinction** | Taiwanese speakers sometimes merge; note where this occurs |
| **前 vs 錢** | Some homophones differ from mainland pronunciation |

---

## 12. Non-Goals

- Teaching pinyin from scratch (user already knows it)
- Simplified Chinese / mainland vocabulary focus
- Grammar-heavy exercises (grammar emerges from context)
- HSK exam preparation
- Classical Chinese or Literary Chinese
- Cantonese, Hokkien/Taiwanese (台語) — separate project

---

## 13. Success Metrics

| Metric | Target |
|--------|--------|
| Vocabulary coverage of daily scenarios | ≥ 800 core items across all 10 scenarios |
| Dialogues per scenario | ≥ 5 realistic dialogues |
| Indonesian translation completeness | 100% of vocabulary entries |
| Taiwanese-specific annotation | All Taiwan-specific items flagged and explained |
| Time to first usable output | Scenario 1 (Food & Drink) completable within 2 weeks of study |

---

## 14. Implementation Phases

### Phase 1 — Foundation (Weeks 1–2)
- Set up React web app with PWA manifest + service worker (runs in browser + installable on Android)
- Parse and filter `dangdai` CSV data → export to JSON (one file per scenario)
- Add Indonesian translations to filtered vocabulary
- Implement SRS flashcard UI for Scenarios 1–3 (Food, Transport, Shopping)
- Produce Anki deck export for Scenarios 1–3 (parallel artifact)

### Phase 2 — Dialogues (Weeks 3–4)
- Write 5+ dialogues per scenario (1–3)
- Add Taiwanese-specific vocabulary not in dangdai
- Cultural reading articles from `taiwan-md` for Scenario 1

### Phase 3 — Expansion (Weeks 5–8)
- Complete Scenarios 4–10
- Add register/formality tags
- Review tone sandhi annotations

### Phase 4 — Polish
- Audio (TTS or native recordings)
- Full JSON export
- Anki deck finalized with media

---

## 15. Taiwan Proper Nouns Reference

Learners encounter these names constantly in daily life. Each entry should be learned as a recognition item (reading + pronunciation), not active recall.

### 14.1 Fast Food & Chain Restaurants

| Hanzi | Pinyin | Indonesian | English |
|-------|--------|-----------|---------|
| 麥當勞 | Màidāngláo | McDonald's | McDonald's |
| 肯德基 | Kěndéjī | KFC | KFC |
| 摩斯漢堡 | Mósī Hànbǎo | MOS Burger | MOS Burger |
| 漢堡王 | Hànbǎo Wáng | Burger King | Burger King |
| 必勝客 | Bìshèngkè | Pizza Hut | Pizza Hut |
| 達美樂 | Dámèilè | Domino's | Domino's |
| 吉野家 | Jíyějiā | Yoshinoya | Yoshinoya |
| 爭鮮 | Zhēngxiān | Sushiro / Zheng Xian | Sushiro (conveyor belt sushi) |
| 鼎泰豐 | Dǐng Tài Fēng | Din Tai Fung | Din Tai Fung |
| 王品 | Wángpǐn | Wang Steak Group | Wang Steak |
| 夜市 | yèshì | pasar malam | night market |
| 早餐店 | zǎocān diàn | warung sarapan | breakfast shop |

### 14.2 Convenience Stores

| Hanzi | Pinyin | Indonesian | English |
|-------|--------|-----------|---------|
| 7-Eleven / 統一超商 | Tǒngyī Chāoshāng | 7-Eleven | 7-Eleven |
| 全家 | Quánjiā | FamilyMart | FamilyMart |
| 萊爾富 | Lái'ěrfù | Hi-Life | Hi-Life |
| OK超商 | OK Chāoshāng | OK Mart | OK Mart |

### 14.3 Supermarkets & Hypermarkets

| Hanzi | Pinyin | Indonesian | English |
|-------|--------|-----------|---------|
| 全聯福利中心 | Quánlián Fúlì Zhōngxīn | PX Mart | PX Mart |
| 大潤發 | Dàrùnfā | RT Mart | RT Mart |
| 家樂福 | Jiālèfú | Carrefour | Carrefour |
| 好市多 | Hǎoshìduō | Costco | Costco |
| 愛買 | Àimǎi | AEON | AEON / AiMall |
| 美聯社 | Měiliánshè | Wellcome | Wellcome Supermarket |
| 頂好 | Dǐnghǎo | Wellcome | Wellcome (older name) |

### 14.4 Bubble Tea & Café Chains

| Hanzi | Pinyin | Indonesian | English |
|-------|--------|-----------|---------|
| 50嵐 | Wǔshí Lán | 50 Lan | 50 Lan |
| 清心福全 | Qīngxīn Fúquán | Ching Shin | Ching Shin |
| 天仁茗茶 | Tiānrén Mínchá | Ten Ren Tea | Ten Ren Tea |
| 星巴克 | Xīngbākè | Starbucks | Starbucks |
| 路易莎 | Lùyìshā | Louisa Coffee | Louisa Coffee |
| 伯朗咖啡 | Bólǎng Kāfēi | Mr. Brown Coffee | Mr. Brown Coffee |
| 85度C | Bāwǔ Dù C | 85°C Bakery Cafe | 85°C Bakery Cafe |

### 14.5 Pharmacies & Health Stores

| Hanzi | Pinyin | Indonesian | English |
|-------|--------|-----------|---------|
| 康是美 | Kāngshìměi | Cosmed | Cosmed (pharmacy/drugstore) |
| 屈臣氏 | Qūchénshì | Watson's | Watson's |
| 寶雅 | Bǎoyǎ | POYA | POYA (beauty/lifestyle store) |
| 藥局 | yàojú | apotek | pharmacy |
| 診所 | zhěnsuǒ | klinik | clinic |

### 14.6 Banks & Financial

| Hanzi | Pinyin | Indonesian | English |
|-------|--------|-----------|---------|
| 台灣銀行 | Táiwān Yínháng | Bank of Taiwan | Bank of Taiwan |
| 中國信託 | Zhōngguó Xìntuō | CTBC Bank | CTBC Bank |
| 國泰世華 | Guótài Shìhuá | Cathay United Bank | Cathay United Bank |
| 玉山銀行 | Yùshān Yínháng | E. Sun Bank | E. Sun Bank |
| 郵局 | yóujú | kantor pos | post office (also has banking) |
| 提款機 | tíkuǎnjī | ATM | ATM |

### 14.7 Cities & Administrative Areas

| Hanzi | Pinyin | Indonesian | English |
|-------|--------|-----------|---------|
| 台灣 | Táiwān | Taiwan | Taiwan |
| 台北 | Táiběi | Taipei | Taipei |
| 新北 | Xīnběi | New Taipei | New Taipei City |
| 基隆 | Jīlóng | Keelung | Keelung |
| 桃園 | Táoyuán | Taoyuan | Taoyuan |
| 新竹 | Xīnzhú | Hsinchu | Hsinchu |
| 苗栗 | Miáolì | Miaoli | Miaoli |
| 台中 | Táizhōng | Taichung | Taichung |
| 彰化 | Zhānghùa | Changhua | Changhua |
| 南投 | Nántóu | Nantou | Nantou |
| 雲林 | Yúnlín | Yunlin | Yunlin |
| 嘉義 | Jiāyì | Chiayi | Chiayi |
| 台南 | Táinán | Tainan | Tainan |
| 高雄 | Gāoxióng | Kaohsiung | Kaohsiung |
| 屏東 | Píngdōng | Pingtung | Pingtung |
| 花蓮 | Huālián | Hualien | Hualien |
| 台東 | Táidōng | Taitung | Taitung |
| 宜蘭 | Yílán | Yilan | Yilan |
| 澎湖 | Pénghú | Penghu | Penghu (Pescadores) |
| 金門 | Jīnmén | Kinmen | Kinmen (Quemoy) |
| 馬祖 | Mǎzǔ | Matsu | Matsu |

### 14.8 Taipei Districts & Neighborhoods

| Hanzi | Pinyin | Indonesian | English |
|-------|--------|-----------|---------|
| 信義區 | Xìnyì Qū | Distrik Xinyi | Xinyi District (101, malls) |
| 中正區 | Zhōngzhèng Qū | Distrik Zhongzheng | Zhongzheng (CKS Memorial) |
| 大安區 | Dà'ān Qū | Distrik Da'an | Da'an (Da'an Park, cafes) |
| 中山區 | Zhōngshān Qū | Distrik Zhongshan | Zhongshan (shopping, hotels) |
| 萬華區 | Wànhuá Qū | Distrik Wanhua | Wanhua (Longshan Temple) |
| 士林區 | Shìlín Qū | Distrik Shilin | Shilin (night market) |
| 內湖區 | Nèihú Qū | Distrik Neihu | Neihu (tech area) |
| 北投區 | Běitóu Qū | Distrik Beitou | Beitou (hot springs) |

### 14.9 Major Attractions & Landmarks

| Hanzi | Pinyin | Indonesian | English |
|-------|--------|-----------|---------|
| 台北101 | Táiběi Yī-líng-yī | Taipei 101 | Taipei 101 |
| 故宮博物院 | Gùgōng Bówùyuàn | Museum Istana Nasional | National Palace Museum |
| 中正紀念堂 | Zhōngzhèng Jìniàntáng | Aula Peringatan CKS | CKS Memorial Hall |
| 龍山寺 | Lóngshān Sì | Kuil Longshan | Longshan Temple |
| 陽明山 | Yángmíng Shān | Gunung Yangmingshan | Yangmingshan (volcano park) |
| 九份 | Jiǔfèn | Jiufen | Jiufen (old mining village) |
| 平溪 | Píngxī | Pingxi | Pingxi (sky lanterns) |
| 日月潭 | Rìyuè Tán | Danau Sun Moon | Sun Moon Lake |
| 墾丁 | Kěndīng | Kenting | Kenting (beach resort) |
| 花蓮太魯閣 | Huālián Tàilǔgé | Taman Taroko Hualien | Taroko Gorge, Hualien |
| 奮起湖 | Fènqǐhú | Fenqihu | Fenqihu (Alishan area) |
| 阿里山 | Ālǐshān | Gunung Alishan | Alishan |
| 士林夜市 | Shìlín Yèshì | Pasar Malam Shilin | Shilin Night Market |
| 饒河夜市 | Ráohé Yèshì | Pasar Malam Raohe | Raohe Night Market |
| 逢甲夜市 | Féngjiǎ Yèshì | Pasar Malam Fengjia | Fengjia Night Market (Taichung) |
| 六合夜市 | Liùhé Yèshì | Pasar Malam Liuhe | Liuhe Night Market (Kaohsiung) |

### 14.10 Transport Hubs

| Hanzi | Pinyin | Indonesian | English |
|-------|--------|-----------|---------|
| 台灣桃園國際機場 | Táiwān Táoyuán Guójì Jīchǎng | Bandara Internasional Taoyuan | Taiwan Taoyuan International Airport |
| 台北車站 | Táiběi Chēzhàn | Stasiun Taipei | Taipei Main Station |
| 高鐵 | gāotiě | kereta cepat | Taiwan High Speed Rail (HSR) |
| 台鐵 | Tái Tiě | kereta Taiwan | Taiwan Railways (TRA) |
| 捷運 | jiéyùn | MRT / metro | MRT (Taipei Metro) |
| 公車 | gōngchē | bus | city bus |
| 客運 | kèyùn | bus antar kota | intercity bus |

---

## 16. Design Decisions (Resolved)

| # | Question | Decision | Rationale |
|---|----------|----------|-----------|
| 1 | Indonesian register | **Everyday conversational** (bukan bahasa baku) | More natural and accurate for real communication; formal register sounds stiff in practice |
| 2 | Anki audio | **Text-only for now** — Pinyin must always be shown | Easier to implement; Pinyin compensates for lack of audio and enables self-pronunciation |
| 3 | Hokkien loanwords | **Include with `[Hokkien]` tag** | Common in Taiwan daily speech; learner should recognize them but know they're not standard Mandarin |
| 4 | Anki deck structure | **One deck per scenario** | Easier to study in focused sessions; learner can prioritize which scenario to tackle first |
