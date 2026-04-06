import { useState } from 'react'
import { READINGS, type ReadingArticle, type GlossedWord } from '../data/readings'

function isGlossed(seg: string | GlossedWord): seg is GlossedWord {
  return typeof seg === 'object'
}

function Segment({ seg }: { seg: string | GlossedWord }) {
  const [open, setOpen] = useState(false)

  if (!isGlossed(seg)) {
    return <span className="text-stone-800">{seg}</span>
  }

  return (
    <span className="relative inline-block">
      <button
        onClick={() => setOpen(v => !v)}
        className={`underline decoration-dotted decoration-stone-400 cursor-pointer transition-colors ${
          open ? 'text-amber-700' : 'text-stone-900 hover:text-amber-700'
        }`}
        style={{ fontFamily: "'Noto Serif TC', serif" }}
      >
        {seg.hanzi}
      </button>
      {open && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 z-10 bg-stone-800 text-white text-xs rounded-lg px-2 py-1.5 whitespace-nowrap shadow-lg flex flex-col items-center gap-0.5">
          <span className="text-stone-300">{seg.pinyin}</span>
          <span>{seg.indonesian}</span>
        </span>
      )}
    </span>
  )
}

function Article({ article }: { article: ReadingArticle }) {
  const [revealAll, setRevealAll] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3
            className="text-xl font-bold text-stone-900"
            style={{ fontFamily: "'Noto Serif TC', serif" }}
          >
            {article.title}
          </h3>
          <p className="text-sm text-stone-400">{article.titlePinyin}</p>
          <p className="text-sm text-stone-500">{article.titleIndonesian}</p>
        </div>
        <span className="text-xs px-2 py-1 bg-stone-100 text-stone-500 rounded-full shrink-0">
          {article.category}
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {article.paragraphs.map((para, pi) => (
          <p key={pi} className="text-lg leading-relaxed text-stone-800">
            {para.segments.map((seg, si) =>
              revealAll && isGlossed(seg) ? (
                <span key={si} className="inline">
                  <span
                    className="text-amber-700 underline decoration-dotted"
                    style={{ fontFamily: "'Noto Serif TC', serif" }}
                  >
                    {seg.hanzi}
                  </span>
                  <span className="text-xs text-stone-400 ml-0.5">({seg.indonesian})</span>
                </span>
              ) : (
                <Segment key={si} seg={seg} />
              )
            )}
          </p>
        ))}
      </div>

      <button
        onClick={() => setRevealAll(v => !v)}
        className="self-start text-sm px-3 py-1.5 rounded-lg bg-stone-100 text-stone-600 hover:bg-stone-200 transition-colors"
      >
        {revealAll ? 'Sembunyikan terjemahan' : 'Tampilkan semua terjemahan'}
      </button>

      <p className="text-xs text-stone-300">
        Ketuk kata yang digarisbawahi untuk lihat pinyin + terjemahan
      </p>
    </div>
  )
}

export function ReadingView() {
  const [activeId, setActiveId] = useState(READINGS[0].id)
  const article = READINGS.find(r => r.id === activeId)!

  return (
    <div className="flex flex-col gap-4 w-full max-w-lg mx-auto">
      {/* Article selector */}
      <div className="flex gap-2 flex-wrap">
        {READINGS.map(r => (
          <button
            key={r.id}
            onClick={() => setActiveId(r.id)}
            className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
              r.id === activeId
                ? 'bg-stone-800 text-white'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            {r.titleIndonesian}
          </button>
        ))}
      </div>

      <Article key={activeId} article={article} />
    </div>
  )
}
