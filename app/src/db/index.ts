import { openDB, type DBSchema, type IDBPDatabase } from 'idb'
import type { Card, State } from 'ts-fsrs'

export interface CardRecord {
  id: string        // matches VocabEntry.id
  card: Card
  state: State
  due: Date
  lastReview: Date | null
}

interface MandarinDB extends DBSchema {
  cards: {
    key: string
    value: CardRecord
    indexes: { 'by-due': Date; 'by-scenario': string }
  }
}

let _db: IDBPDatabase<MandarinDB> | null = null

export async function getDB(): Promise<IDBPDatabase<MandarinDB>> {
  if (_db) return _db
  _db = await openDB<MandarinDB>('mandarin-learning', 1, {
    upgrade(db) {
      const store = db.createObjectStore('cards', { keyPath: 'id' })
      store.createIndex('by-due', 'due')
      store.createIndex('by-scenario', 'id') // prefix-based filtering
    },
  })
  return _db
}

export async function getCard(id: string): Promise<CardRecord | undefined> {
  const db = await getDB()
  return db.get('cards', id)
}

export async function saveCard(record: CardRecord): Promise<void> {
  const db = await getDB()
  await db.put('cards', record)
}

export async function getDueCards(limit = 20): Promise<CardRecord[]> {
  const db = await getDB()
  const now = new Date()
  const all = await db.getAllFromIndex('cards', 'by-due', IDBKeyRange.upperBound(now))
  return all.slice(0, limit)
}

export async function getAllCards(): Promise<CardRecord[]> {
  const db = await getDB()
  return db.getAll('cards')
}
