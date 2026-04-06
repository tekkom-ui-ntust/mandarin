# Belajar Mandarin Taiwan 🇹🇼

Aplikasi flashcard untuk belajar Mandarin Taiwan sehari-hari — dengan terjemahan Bahasa Indonesia sebagai bahasa utama.

Bisa diakses dari browser PC maupun diinstal sebagai aplikasi di Android (PWA).

**Live app:** https://tekkom-ui-ntust.github.io/mandarin/

---

## Fitur

- **Flashcard SRS** — sistem pengulangan berbasis algoritma FSRS (ts-fsrs), progres tersimpan offline di perangkat
- **16 Skenario** kehidupan sehari-hari (lihat daftar di bawah)
- **Deck Tempat & Merek** — pengenalan nama toko, kota, dan tempat wisata Taiwan
- **Dialog Tap-to-Reveal** — percakapan realistis, buka baris per baris
- **Mode Reading** — artikel budaya beranotasi dengan kosakata inline
- **Ekspor Anki** — generate file `.txt` siap import ke Anki
- **Offline-capable** — PWA dengan service worker, bisa dipakai tanpa internet
- **Taiwan-first** — kosakata, ejaan, dan konteks budaya Taiwan (bukan mainland)

---

## Skenario

| # | Ikon | Nama |
|---|------|------|
| 1 | 🍜 | Makanan & Minuman |
| 2 | 🚇 | Transportasi |
| 3 | 🛍️ | Belanja |
| 4 | 💬 | Obrolan Sosial |
| 5 | 🏠 | Tempat Tinggal |
| 6 | 💼 | Kerja & Belajar |
| 7 | 🏥 | Kesehatan |
| 8 | 💰 | Uang & Bank |
| 9 | 📱 | Telepon & Digital |
| 10 | 🆘 | Darurat & Survival |
| 11 | 📍 | Tanya Lokasi |
| 12 | 🤝 | Tawar Menawar |
| 13 | 🕌 | Muslim & Halal |
| 14 | 💻 | Tech & Programming |
| 15 | 📐 | Kata Ukuran & Satuan |
| 16 | 📝 | Pola Tata Bahasa |

---

## Format Kartu

Setiap kartu memiliki:
- **漢字** — karakter Tradisional (Taiwan)
- **Pīnyīn** — romanisasi dengan tanda nada
- **Bahasa Indonesia** — terjemahan utama
- **English** — terjemahan sekunder
- **Catatan Taiwan** — konteks budaya atau perbedaan dengan Mandarin mainland (jika ada)

---

## Instalasi & Development

### Prasyarat
- Node.js 18+
- npm

### Jalankan lokal

```bash
cd app
npm install
npm run dev
```

Buka di browser: `http://localhost:5173`

### Build production

```bash
cd app
npm run build
```

Output ada di `app/dist/`.

### Ekspor ke Anki

```bash
node scripts/export-anki.mjs
```

File `.txt` akan dibuat di `data/anki/`. Import ke Anki via **File > Import**, separator: Tab.

---

## Deploy ke GitHub Pages

Deploy otomatis lewat GitHub Actions setiap push ke branch `main`.

Untuk setup pertama kali:
1. Buat repo di GitHub dengan nama `belajar-mandarin`
2. Push kode ke branch `main`
3. Aktifkan Pages di **Settings > Pages > Source: GitHub Actions**

---

## Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Framework | React 19 + TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 |
| SRS Algorithm | ts-fsrs v5 |
| Storage | IndexedDB (idb) |
| PWA | Manual manifest + service worker |
| Font | Noto Serif TC / Noto Sans TC |
| Deploy | GitHub Pages + GitHub Actions |

---

## Struktur Proyek

```
belajar-mandarin/
├── app/                    # Aplikasi React
│   ├── src/
│   │   ├── data/           # Kosakata & dialog per skenario
│   │   ├── components/     # FlashCard, DialogueView, ReadingView
│   │   ├── pages/          # Home, Study
│   │   ├── hooks/          # useSRS (spaced repetition)
│   │   ├── db/             # IndexedDB (progres SRS)
│   │   └── types/          # TypeScript interfaces
│   └── public/             # manifest.json, sw.js (PWA)
├── scripts/
│   └── export-anki.mjs     # Generator file Anki
├── data/
│   └── anki/               # Output ekspor Anki
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions CI/CD
```
