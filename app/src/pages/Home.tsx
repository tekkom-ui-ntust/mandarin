import { SCENARIOS, SCENARIO_ICONS } from '../types'
import { AVAILABLE_SCENARIOS } from '../data'

interface Props {
  onSelect: (scenario: number, mode: 'flashcard' | 'dialogue' | 'reading') => void
}

export function Home({ onSelect }: Props) {
  return (
    <div className="flex flex-col gap-5 p-4 md:p-8 max-w-2xl mx-auto w-full">
      {/* Header */}
      <div className="text-center pt-4 pb-2">
        <h1
          className="text-4xl font-bold text-stone-900 mb-1"
          style={{ fontFamily: "'Noto Serif TC', serif" }}
        >
          學中文
        </h1>
        <p className="text-stone-500 text-sm">Mandarin Taiwan · Bahasa Indonesia</p>
      </div>

      {/* Reading mode card */}
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">📖</span>
          <div>
            <p className="font-semibold text-stone-800">Bacaan Budaya</p>
            <p className="text-stone-500 text-sm">Artikel Taiwan dengan glos pinyin + Indonesia</p>
          </div>
        </div>
        <button
          onClick={() => onSelect(0, 'reading')}
          className="w-full py-2 rounded-xl bg-amber-600 text-white text-sm font-medium hover:bg-amber-700 transition-colors"
        >
          Baca Artikel
        </button>
      </div>

      {/* Places & Brands deck */}
      <div className="rounded-2xl border border-stone-200 bg-white p-4 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🗺️</span>
          <div>
            <p className="font-semibold text-stone-800">Tempat & Merek</p>
            <p className="text-stone-500 text-sm">Toko, kota, objek wisata — kenali saja</p>
          </div>
        </div>
        <button
          onClick={() => onSelect(0, 'flashcard')}
          className="w-full py-2 rounded-xl bg-stone-800 text-white text-sm font-medium hover:bg-stone-700 transition-colors"
        >
          Flashcard Pengenalan
        </button>
      </div>

      {/* Divider */}
      <p className="text-xs text-stone-400 font-medium uppercase tracking-wider px-1">10 Skenario Sehari-hari</p>

      {/* Scenario cards */}
      <div className="flex flex-col gap-3">
        {AVAILABLE_SCENARIOS.map(n => (
          <div
            key={n}
            className="rounded-2xl border border-stone-200 bg-white p-4 flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{SCENARIO_ICONS[n]}</span>
              <div>
                <p className="font-semibold text-stone-800">Skenario {n}</p>
                <p className="text-stone-500 text-sm">{SCENARIOS[n]}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => onSelect(n, 'flashcard')}
                className="flex-1 py-2 rounded-xl bg-stone-800 text-white text-sm font-medium hover:bg-stone-700 transition-colors"
              >
                Flashcard SRS
              </button>
              <button
                onClick={() => onSelect(n, 'dialogue')}
                className="flex-1 py-2 rounded-xl bg-stone-100 text-stone-700 text-sm font-medium hover:bg-stone-200 transition-colors"
              >
                Dialog
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-stone-300 pb-4">
        繁體字 · SRS dengan ts-fsrs · Offline-ready
      </p>
    </div>
  )
}
