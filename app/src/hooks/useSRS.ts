import { useState, useEffect, useCallback } from 'react'
import { createEmptyCard, fsrs, generatorParameters, Rating, type Card, type Grade } from 'ts-fsrs'
import { getCard, saveCard } from '../db'
import type { VocabEntry } from '../types'

const params = generatorParameters({ enable_fuzz: true })
const f = fsrs(params)

export type RatingLabel = 'again' | 'hard' | 'good' | 'easy'

const RATING_MAP: Record<RatingLabel, Grade> = {
  again: Rating.Again,
  hard: Rating.Hard,
  good: Rating.Good,
  easy: Rating.Easy,
}

export function useSRS(entries: VocabEntry[]) {
  const [queue, setQueue] = useState<VocabEntry[]>([])
  const [current, setCurrent] = useState<VocabEntry | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [sessionDone, setSessionDone] = useState(false)
  const [stats, setStats] = useState({ reviewed: 0, remaining: 0 })

  // Build the due queue on mount / when entries change
  useEffect(() => {
    if (entries.length === 0) return
    buildQueue(entries).then(q => {
      setQueue(q)
      setCurrent(q[0] ?? null)
      setSessionDone(q.length === 0)
      setStats({ reviewed: 0, remaining: q.length })
    })
  }, [entries])

  const advance = useCallback((remaining: VocabEntry[]) => {
    if (remaining.length === 0) {
      setCurrent(null)
      setSessionDone(true)
    } else {
      setCurrent(remaining[0])
    }
    setShowAnswer(false)
  }, [])

  const rate = useCallback(async (label: RatingLabel) => {
    if (!current) return

    const grade = RATING_MAP[label]
    const existing = await getCard(current.id)
    const card: Card = existing?.card ?? createEmptyCard()
    const now = new Date()

    const { card: nextCard } = f.next(card, now, grade)

    await saveCard({
      id: current.id,
      card: nextCard,
      state: nextCard.state,
      due: nextCard.due,
      lastReview: now,
    })

    const next = queue.slice(1)
    setQueue(next)
    setStats(s => ({ reviewed: s.reviewed + 1, remaining: next.length }))
    advance(next)
  }, [current, queue, advance])

  const reveal = useCallback(() => setShowAnswer(true), [])

  return { current, showAnswer, reveal, rate, sessionDone, stats }
}

async function buildQueue(entries: VocabEntry[]): Promise<VocabEntry[]> {
  const now = new Date()
  const due: VocabEntry[] = []
  const newCards: VocabEntry[] = []

  for (const entry of entries) {
    const record = await getCard(entry.id)
    if (!record) {
      newCards.push(entry)
    } else if (record.due <= now) {
      due.push(entry)
    }
  }

  // Due cards first, then new cards (cap new at 20 per session)
  return [...due, ...newCards.slice(0, 20)]
}
