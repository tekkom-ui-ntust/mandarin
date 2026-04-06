# Implementation Checkpoints
## Taiwanese Mandarin Learning App

Legend: `[ ]` not started · `[~]` in progress · `[x]` done

---

## Phase 1 — Foundation

### CP-01 · Project Scaffold
- [x] Initialize React app (Vite 8 + React 19 + TypeScript)
- [x] Configure Tailwind CSS v4 for styling
- [x] Set up project folder structure (`/src/components`, `/hooks`, `/pages`, `/data`, `/db`, `/types`)
- [x] Add PWA manifest (`manifest.json` with `display: standalone`)
- [x] Register service worker for offline caching (`public/sw.js`)
- [ ] Verify app is installable on Android Chrome
- [ ] Deploy to static host (GitHub Pages or Netlify)

### CP-02 · Data Pipeline — Vocabulary
- [x] Vocabulary hand-curated for Scenarios 1–3 with Indonesian translations
- [x] All entries tagged with scenario, register, Taiwan notes, Hokkien tags
- [x] Taiwan-specific entries added (particles, fillers, local vocab, bubble tea orders)
- [x] Data lives in `app/src/data/scenario-0X.ts` (typed TypeScript)
- [ ] Download and parse `dangdai` CSV for bulk vocabulary expansion (Phase 2)
- [ ] Add proper nouns from PRD §15 as a separate deck

### CP-03 · Flashcard SRS Engine
- [x] Integrate `ts-fsrs` v5 for spaced repetition scheduling
- [x] Card state stored in IndexedDB via `idb` library (`app/src/db/index.ts`)
- [x] Progress persists on device across sessions
- [x] Always show Pinyin below Hanzi
- [x] Show `[Hokkien]` / `[Taiwan]` tags on card
- [x] Rating buttons: Lagi / Susah / Oke / Mudah (Again / Hard / Good / Easy)

### CP-04 · Flashcard UI — Scenarios 1–3
- [x] Scenario 1: Makanan & Minuman — 30+ cards + 3 dialogues
- [x] Scenario 2: Transportasi — 30+ cards + 2 dialogues
- [x] Scenario 3: Belanja — 30+ cards + 2 dialogues
- [x] Scenario selector on Home screen
- [x] Progress bar (selesai / tersisa) during session
- [x] Session complete screen with return to menu

### CP-05 · Responsive Layout
- [x] Mobile layout: single column, large tap targets
- [x] Sticky top nav with back button and scenario icon
- [x] Noto Serif TC / Noto Sans TC loaded via Google Fonts
- [x] Pinyin diacritics render correctly
- [x] Build passes clean (246 kB JS gzipped 77 kB)

---

## Phase 2 — Dialogues & Content

### CP-06 · Dialogues (Scenarios 1–3)
- [x] 6 dialogues for Scenario 1: Food & Drink (incl. night market, vegetarian, spicy)
- [x] 5 dialogues for Scenario 2: Transport (incl. HSR ticket, MRT help, EasyCard)
- [x] 5 dialogues for Scenario 3: Shopping (incl. return, supermarket, payment issue)
- [x] Each dialogue: Hanzi + Pinyin + Indonesian line-by-line
- [x] Dialogue viewer UI — tap to reveal per line

### CP-07 · Taiwan-Specific Content Pass
- [x] Sentence-final particles (啦、喔、欸、嘛、囉) as cards in Scenario 1 + 4
- [x] Fillers (就是說、對啊、然後呢) as cards in Scenario 4
- [x] All vocab reviewed for Taiwan authenticity (冷氣 not 空調, 捷運 not 地鐵, etc.)
- [x] Taiwan notes on culturally specific items (垃圾車 music, 發票 lottery, 健保卡, etc.)

### CP-08 · Proper Nouns Deck
- [x] 50 proper noun cards in `scenario-places.ts` (stores, cities, attractions, transport)
- [x] Accessible as "Tempat & Merek" flashcard deck on Home screen

---

## Phase 3 — Expansion

### CP-09 · Scenarios 4–7
- [x] Scenario 4: Obrolan Sosial — 38 vocab cards, 5 dialogues
- [x] Scenario 5: Tempat Tinggal — 26 vocab cards, 5 dialogues
- [x] Scenario 6: Kerja & Belajar — 28 vocab cards, 5 dialogues
- [x] Scenario 7: Kesehatan — 26 vocab cards, 5 dialogues
- [x] Register/formality tags on all entries

### CP-10 · Scenarios 8–10
- [x] Scenario 8: Uang & Bank — 21 vocab cards, 5 dialogues
- [x] Scenario 9: Telepon & Digital — 26 vocab cards, 5 dialogues (incl. 已讀不回, LINE stickers)
- [x] Scenario 10: Darurat & Survival — 23 vocab cards, 5 dialogues (incl. 110/119 numbers)

### CP-11 · Cultural Reading Mode
- [x] 3 articles: Budaya Sarapan, Pasar Malam, Cara Pakai EasyCard
- [x] Inline glossed words — tap to reveal pinyin + Indonesian tooltip
- [x] "Tampilkan semua terjemahan" toggle button
- [x] Article selector UI — accessible from Home screen

---

## Phase 4 — Polish

### CP-12 · Anki Export
- [x] Script: `scripts/export-anki.mjs` — run with `node scripts/export-anki.mjs`
- [x] Output: `data/anki/` — one .txt file per scenario + combined `all-scenarios.txt`
- [x] **350 total cards** exported across 11 decks
- [x] Tags: scenario, register, `[Hokkien]`, `[Taiwan]`, taiwan_note
- [ ] Test import in Anki desktop and AnkiDroid

### CP-13 · Audio (Deferred)
- [ ] Evaluate TTS options for Taiwanese Mandarin accent
- [ ] Add audio playback to flashcard

### CP-14 · Quality & Launch
- [ ] Tone sandhi annotations reviewed
- [ ] Indonesian translations reviewed for conversational accuracy
- [ ] Lighthouse PWA audit
- [ ] Test install on Android device
- [ ] Final deployment (GitHub Pages / Netlify)

---

## Current Status

**All phases implemented ✓**  
**Last updated:** 2026-04-06  
**Total vocab cards:** ~350 (10 scenarios + 50 places)  
**Total dialogues:** 47 (4–6 per scenario)  
**Anki export:** `data/anki/` — ready to import  
**Remaining:** Anki import test, Android install test, deployment
