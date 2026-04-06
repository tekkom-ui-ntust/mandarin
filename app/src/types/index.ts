export type Register = 'casual' | 'formal' | 'slang'

export interface VocabEntry {
  id: string           // e.g. "s01-001"
  hanzi: string
  pinyin: string
  indonesian: string
  english: string
  pos: string          // noun, verb, adjective, interjection, particle, etc.
  register: Register
  scenario: number     // 1–10
  taiwan_note?: string
  tags?: string[]      // e.g. ["Hokkien"], ["Taiwan"]
}

export interface Dialogue {
  id: string
  scenario: number
  title: string        // e.g. "Ordering at a breakfast shop"
  lines: DialogueLine[]
}

export interface DialogueLine {
  speaker: string      // e.g. "A", "B", or name
  hanzi: string
  pinyin: string
  indonesian: string
}

export const SCENARIOS: Record<number, string> = {
  1: 'Makanan & Minuman',
  2: 'Transportasi',
  3: 'Belanja',
  4: 'Obrolan Sosial',
  5: 'Tempat Tinggal',
  6: 'Kerja & Belajar',
  7: 'Kesehatan',
  8: 'Uang & Bank',
  9: 'Telepon & Digital',
  10: 'Darurat & Survival',
  11: 'Tanya Lokasi',
  12: 'Tawar Menawar',
  13: 'Muslim & Halal',
  14: 'Tech & Programming',
  15: 'Kata Ukuran & Satuan',
  16: 'Pola Tata Bahasa',
}

export const SCENARIO_ICONS: Record<number, string> = {
  1: '🍜',
  2: '🚇',
  3: '🛍️',
  4: '💬',
  5: '🏠',
  6: '💼',
  7: '🏥',
  8: '💰',
  9: '📱',
  10: '🆘',
  11: '📍',
  12: '🤝',
  13: '🕌',
  14: '💻',
  15: '📐',
  16: '📝',
}
