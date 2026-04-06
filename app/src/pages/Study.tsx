import { FlashCard } from '../components/FlashCard'
import { ProgressBar } from '../components/ProgressBar'
import { DialogueView } from '../components/DialogueView'
import { ReadingView } from '../components/ReadingView'
import { useSRS } from '../hooks/useSRS'
import { getVocab, getDialogues } from '../data'
import { SCENARIOS, SCENARIO_ICONS } from '../types'

interface Props {
  scenario: number
  mode: 'flashcard' | 'dialogue' | 'reading'
  onBack: () => void
}

function navTitle(scenario: number, mode: string): { icon: string; title: string; subtitle: string } {
  if (mode === 'reading') return { icon: '📖', title: 'Bacaan Budaya', subtitle: 'Artikel Taiwan' }
  if (scenario === 0) return { icon: '🗺️', title: 'Tempat & Merek', subtitle: 'Flashcard Pengenalan' }
  return {
    icon: SCENARIO_ICONS[scenario] ?? '📚',
    title: SCENARIOS[scenario] ?? `Skenario ${scenario}`,
    subtitle: mode === 'flashcard' ? 'Flashcard SRS' : 'Dialog',
  }
}

export function Study({ scenario, mode, onBack }: Props) {
  const vocab = getVocab(scenario)
  const dialogues = getDialogues(scenario)
  const { current, showAnswer, reveal, rate, sessionDone, stats } = useSRS(
    mode === 'flashcard' ? vocab : []
  )

  const nav = navTitle(scenario, mode)

  return (
    <div className="flex flex-col min-h-svh">
      {/* Top nav */}
      <header className="flex items-center gap-3 p-4 border-b border-stone-100 bg-white sticky top-0 z-10">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-stone-100 text-stone-500 transition-colors text-lg"
          aria-label="Kembali"
        >
          ←
        </button>
        <span className="text-xl">{nav.icon}</span>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-stone-800 text-sm truncate">{nav.title}</p>
          <p className="text-stone-400 text-xs">{nav.subtitle}</p>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 p-4 md:p-8">
        {mode === 'reading' ? (
          <ReadingView />
        ) : mode === 'flashcard' ? (
          <div className="flex flex-col gap-6 max-w-lg mx-auto">
            <ProgressBar reviewed={stats.reviewed} remaining={stats.remaining} />

            {sessionDone ? (
              <div className="flex flex-col items-center gap-4 py-12 text-center">
                <p className="text-4xl">🎉</p>
                <p className="text-xl font-semibold text-stone-800">Sesi selesai!</p>
                <p className="text-stone-500 text-sm">{stats.reviewed} kartu direview hari ini.</p>
                <button
                  onClick={onBack}
                  className="mt-4 px-6 py-2 rounded-xl bg-stone-800 text-white hover:bg-stone-700 transition-colors"
                >
                  Kembali ke menu
                </button>
              </div>
            ) : current ? (
              <FlashCard
                entry={current}
                showAnswer={showAnswer}
                onReveal={reveal}
                onRate={rate}
              />
            ) : (
              <p className="text-center text-stone-400 py-12">Memuat kartu...</p>
            )}
          </div>
        ) : (
          <DialogueView dialogues={dialogues} />
        )}
      </main>
    </div>
  )
}
