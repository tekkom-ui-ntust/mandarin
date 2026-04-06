/**
 * Anki Export Script — generates .txt files importable into Anki
 *
 * Usage:
 *   node scripts/export-anki.mjs
 *
 * Output:
 *   data/anki/scenario-XX.txt  — one per scenario, tab-separated
 *   data/anki/all-scenarios.txt — combined deck
 *
 * Import into Anki:
 *   File > Import > select the .txt file
 *   Separator: Tab
 *   Fields: Hanzi | Pinyin | Indonesian | English | Tags
 *
 * For .apkg generation, use the 'anki-apkg-export' npm package (optional step below).
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dir = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dir, '..')
const OUT = join(ROOT, 'data', 'anki')

mkdirSync(OUT, { recursive: true })

// ─── Load vocab data by importing the compiled JS ────────────────────────────
// We read the TypeScript source files directly and extract the vocab arrays.
// This is simpler than setting up a TS runner.

const SCENARIO_NAMES = {
  0:  'Tempat & Merek',
  1:  'Makanan & Minuman',
  2:  'Transportasi',
  3:  'Belanja',
  4:  'Obrolan Sosial',
  5:  'Tempat Tinggal',
  6:  'Kerja & Belajar',
  7:  'Kesehatan',
  8:  'Uang & Bank',
  9:  'Telepon & Digital',
  10: 'Darurat & Survival',
  11: 'Tanya Lokasi',
  12: 'Tawar Menawar',
  13: 'Muslim & Halal',
  14: 'Tech & Programming',
  15: 'Kata-Ukuran & Satuan',
  16: 'Pola-Tata-Bahasa',
}

// Parse a scenario TS file and extract vocab entries as objects
function parseVocabFromTS(filePath) {
  const src = readFileSync(filePath, 'utf8')

  // Extract everything inside the vocab array
  const match = src.match(/export const vocab[^=]*=\s*\[([\s\S]*?)\]\s*;?\s*export/)
  if (!match) {
    // Try end of file
    const match2 = src.match(/export const vocab[^=]*=\s*\[([\s\S]*)\]/)
    if (!match2) return []
    return parseEntries(match2[1])
  }
  return parseEntries(match[1])
}

function parseEntries(block) {
  const entries = []
  // Match each { id: '...', hanzi: '...', ... } object
  const objRegex = /\{([^{}]+)\}/g
  let m
  while ((m = objRegex.exec(block)) !== null) {
    const obj = {}
    const inner = m[1]
    // Extract key: 'value' pairs (handles single and double quotes, and backticks)
    const kvRegex = /(\w+):\s*['"`]([^'"`]*)['"`]/g
    let kv
    while ((kv = kvRegex.exec(inner)) !== null) {
      obj[kv[1]] = kv[2]
    }
    // Extract tags array if present
    const tagsMatch = inner.match(/tags:\s*\[([^\]]*)\]/)
    if (tagsMatch) {
      obj.tags = tagsMatch[1].replace(/['"` ]/g, '').split(',').filter(Boolean)
    }
    if (obj.id && obj.hanzi) entries.push(obj)
  }
  return entries
}

// Build Anki TSV line
// Format: Hanzi [TAB] Pinyin [TAB] Indonesian [TAB] English [TAB] Note [TAB] Tags
function toAnkiLine(entry, scenarioName) {
  const tags = [
    `scenario::${scenarioName.replace(/ /g, '_')}`,
    `register::${entry.register || 'casual'}`,
    ...(entry.tags || []).map(t => `tag::${t}`),
    ...(entry.taiwan_note ? ['taiwan'] : []),
  ].join(' ')

  const note = (entry.taiwan_note || '').replace(/\t/g, ' ')
  const fields = [
    entry.hanzi,
    entry.pinyin,
    entry.indonesian,
    entry.english,
    note,
    tags,
  ]
  return fields.join('\t')
}

// Header comment for Anki import
const ANKI_HEADER = [
  '#separator:tab',
  '#html:false',
  '#notetype:Basic',
  '#deck:Mandarin Taiwan',
  '#columns:Hanzi\tPinyin\tIndonesian\tEnglish\tTaiwan Note\tTags',
  '',
].join('\n')

// ─── Process each scenario ────────────────────────────────────────────────────
const scenarios = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
const allLines = []

for (const n of scenarios) {
  const fileName = n === 0 ? 'scenario-places.ts' : n < 10 ? `scenario-0${n}.ts` : `scenario-${n}.ts`
  const filePath = join(ROOT, 'app', 'src', 'data', fileName)

  let entries
  try {
    entries = parseVocabFromTS(filePath)
  } catch {
    console.warn(`Skipping ${fileName} — not found`)
    continue
  }

  const scenarioName = SCENARIO_NAMES[n] || `Skenario ${n}`
  const lines = entries.map(e => toAnkiLine(e, scenarioName))

  const outFile = join(OUT, `scenario-${String(n).padStart(2, '0')}-${scenarioName.replace(/ /g, '-')}.txt`)
  const content = ANKI_HEADER + lines.join('\n') + '\n'
  writeFileSync(outFile, content, 'utf8')

  console.log(`✓ ${fileName} → ${lines.length} cards → ${outFile.replace(ROOT, '.')}`)
  allLines.push(...lines)
}

// Combined deck
const allFile = join(OUT, 'all-scenarios.txt')
writeFileSync(allFile, ANKI_HEADER + allLines.join('\n') + '\n', 'utf8')
console.log(`\n✓ Combined: ${allLines.length} total cards → ./data/anki/all-scenarios.txt`)
console.log('\nImport into Anki: File > Import > select .txt > Separator: Tab')
