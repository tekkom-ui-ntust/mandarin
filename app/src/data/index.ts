import { vocab as s01vocab, dialogues as s01dialogues } from './scenario-01'
import { vocab as s02vocab, dialogues as s02dialogues } from './scenario-02'
import { vocab as s03vocab, dialogues as s03dialogues } from './scenario-03'
import { vocab as s04vocab, dialogues as s04dialogues } from './scenario-04'
import { vocab as s05vocab, dialogues as s05dialogues } from './scenario-05'
import { vocab as s06vocab, dialogues as s06dialogues } from './scenario-06'
import { vocab as s07vocab, dialogues as s07dialogues } from './scenario-07'
import { vocab as s08vocab, dialogues as s08dialogues } from './scenario-08'
import { vocab as s09vocab, dialogues as s09dialogues } from './scenario-09'
import { vocab as s10vocab, dialogues as s10dialogues } from './scenario-10'
import { vocab as s11vocab, dialogues as s11dialogues } from './scenario-11'
import { vocab as s12vocab, dialogues as s12dialogues } from './scenario-12'
import { vocab as s13vocab, dialogues as s13dialogues } from './scenario-13'
import { vocab as s14vocab, dialogues as s14dialogues } from './scenario-14'
import { vocab as s15vocab, dialogues as s15dialogues } from './scenario-15'
import { vocab as s16vocab, dialogues as s16dialogues } from './scenario-16'
import { vocab as placesVocab } from './scenario-places'
import type { VocabEntry, Dialogue } from '../types'

export const ALL_VOCAB: Record<number, VocabEntry[]> = {
  1: s01vocab,
  2: s02vocab,
  3: s03vocab,
  4: s04vocab,
  5: s05vocab,
  6: s06vocab,
  7: s07vocab,
  8: s08vocab,
  9: s09vocab,
  10: s10vocab,
  11: s11vocab,
  12: s12vocab,
  13: s13vocab,
  14: s14vocab,
  15: s15vocab,
  16: s16vocab,
  0: placesVocab, // Places & Brands recognition deck
}

export const ALL_DIALOGUES: Record<number, Dialogue[]> = {
  1: s01dialogues,
  2: s02dialogues,
  3: s03dialogues,
  4: s04dialogues,
  5: s05dialogues,
  6: s06dialogues,
  7: s07dialogues,
  8: s08dialogues,
  9: s09dialogues,
  10: s10dialogues,
  11: s11dialogues,
  12: s12dialogues,
  13: s13dialogues,
  14: s14dialogues,
  15: s15dialogues,
  16: s16dialogues,
}

export function getVocab(scenario: number): VocabEntry[] {
  return ALL_VOCAB[scenario] ?? []
}

export function getDialogues(scenario: number): Dialogue[] {
  return ALL_DIALOGUES[scenario] ?? []
}

export const AVAILABLE_SCENARIOS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

export function getAllVocab(): VocabEntry[] {
  return Object.values(ALL_VOCAB).flat()
}
