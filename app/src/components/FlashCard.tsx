import type { VocabEntry } from '../types'
import type { RatingLabel } from '../hooks/useSRS'

interface Props {
  entry: VocabEntry
  showAnswer: boolean
  onReveal: () => void
  onRate: (r: RatingLabel) => void
}

const RATING_BUTTONS: { label: RatingLabel; text: string; color: string }[] = [
  { label: 'again', text: 'Lagi', color: 'bg-red-100 text-red-700 hover:bg-red-200' },
  { label: 'hard', text: 'Susah', color: 'bg-orange-100 text-orange-700 hover:bg-orange-200' },
  { label: 'good', text: 'Oke', color: 'bg-green-100 text-green-700 hover:bg-green-200' },
  { label: 'easy', text: 'Mudah', color: 'bg-blue-100 text-blue-700 hover:bg-blue-200' },
]

export function FlashCard({ entry, showAnswer, onReveal, onRate }: Props) {
  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-lg mx-auto">
      {/* Tags */}
      <div className="flex gap-2 flex-wrap justify-center">
        <span className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-500">{entry.pos}</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-500">{entry.register}</span>
        {entry.tags?.map(t => (
          <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">[{t}]</span>
        ))}
      </div>

      {/* Card face */}
      <div
        className="w-full rounded-2xl border border-stone-200 bg-white shadow-sm p-8 flex flex-col items-center gap-4 min-h-[220px] justify-center cursor-pointer select-none"
        onClick={!showAnswer ? onReveal : undefined}
      >
        {/* Hanzi — always visible */}
        <p
          className="text-6xl leading-tight text-center text-stone-900"
          style={{ fontFamily: "'Noto Serif TC', serif" }}
        >
          {entry.hanzi}
        </p>

        {/* Pinyin — always visible */}
        <p className="text-xl text-stone-400 tracking-wide">{entry.pinyin}</p>

        {/* Answer — revealed on tap */}
        {showAnswer ? (
          <div className="mt-2 flex flex-col items-center gap-1 border-t border-stone-100 pt-4 w-full">
            <p className="text-2xl font-medium text-stone-800">{entry.indonesian}</p>
            <p className="text-base text-stone-400">{entry.english}</p>
            {entry.taiwan_note && (
              <p className="mt-2 text-sm text-amber-700 bg-amber-50 rounded-lg px-3 py-1.5 text-center">
                🇹🇼 {entry.taiwan_note}
              </p>
            )}
          </div>
        ) : (
          <p className="text-stone-300 text-sm mt-2">Ketuk untuk lihat jawaban</p>
        )}
      </div>

      {/* Action buttons */}
      {showAnswer ? (
        <div className="grid grid-cols-4 gap-2 w-full">
          {RATING_BUTTONS.map(btn => (
            <button
              key={btn.label}
              onClick={() => onRate(btn.label)}
              className={`py-3 rounded-xl font-medium text-sm transition-colors ${btn.color}`}
            >
              {btn.text}
            </button>
          ))}
        </div>
      ) : (
        <button
          onClick={onReveal}
          className="w-full py-3 rounded-xl bg-stone-800 text-white font-medium hover:bg-stone-700 transition-colors"
        >
          Lihat Jawaban
        </button>
      )}
    </div>
  )
}
