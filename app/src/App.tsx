import { useState } from 'react'
import { Home } from './pages/Home'
import { Study } from './pages/Study'

type View =
  | { page: 'home' }
  | { page: 'study'; scenario: number; mode: 'flashcard' | 'dialogue' | 'reading' }

export default function App() {
  const [view, setView] = useState<View>({ page: 'home' })

  if (view.page === 'study') {
    return (
      <Study
        scenario={view.scenario}
        mode={view.mode}
        onBack={() => setView({ page: 'home' })}
      />
    )
  }

  return (
    <Home
      onSelect={(scenario, mode) => setView({ page: 'study', scenario, mode })}
    />
  )
}
