import { useState } from 'react'
import type { Dialogue } from '../types'

interface Props {
  dialogues: Dialogue[]
}

export function DialogueView({ dialogues }: Props) {
  const [activeIdx, setActiveIdx] = useState(0)
  const [revealed, setRevealed] = useState<Set<number>>(new Set())

  const dialogue = dialogues[activeIdx]
  if (!dialogue) return <p className="text-stone-400 text-center py-8">Belum ada dialog untuk skenario ini.</p>

  const revealLine = (i: number) => setRevealed(prev => new Set([...prev, i]))
  const revealAll = () => setRevealed(new Set(dialogue.lines.map((_, i) => i)))
  const reset = () => setRevealed(new Set())

  return (
    <div className="flex flex-col gap-4 w-full max-w-lg mx-auto">
      {/* Dialogue selector */}
      {dialogues.length > 1 && (
        <div className="flex gap-2 flex-wrap">
          {dialogues.map((d, i) => (
            <button
              key={d.id}
              onClick={() => { setActiveIdx(i); reset() }}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                i === activeIdx
                  ? 'bg-stone-800 text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {i + 1}. {d.title}
            </button>
          ))}
        </div>
      )}

      {/* Title */}
      <h3 className="font-semibold text-stone-700">{dialogue.title}</h3>

      {/* Lines */}
      <div className="flex flex-col gap-3">
        {dialogue.lines.map((line, i) => (
          <div
            key={i}
            className="rounded-xl border border-stone-100 bg-white p-4 cursor-pointer hover:border-stone-300 transition-colors"
            onClick={() => revealLine(i)}
          >
            <div className="flex items-start gap-3">
              <span className="text-xs font-medium text-stone-400 min-w-[36px] pt-1">{line.speaker}</span>
              <div className="flex flex-col gap-1 flex-1">
                <p
                  className="text-2xl text-stone-900 leading-snug"
                  style={{ fontFamily: "'Noto Serif TC', serif" }}
                >
                  {line.hanzi}
                </p>
                <p className="text-sm text-stone-400">{line.pinyin}</p>
                {revealed.has(i) ? (
                  <p className="text-base text-stone-700 mt-1">{line.indonesian}</p>
                ) : (
                  <p className="text-sm text-stone-300 mt-1">Ketuk untuk lihat terjemahan</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex gap-2 mt-2">
        <button
          onClick={revealAll}
          className="flex-1 py-2 rounded-lg bg-stone-100 text-stone-700 text-sm hover:bg-stone-200 transition-colors"
        >
          Tampilkan Semua
        </button>
        <button
          onClick={reset}
          className="flex-1 py-2 rounded-lg bg-stone-100 text-stone-700 text-sm hover:bg-stone-200 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
