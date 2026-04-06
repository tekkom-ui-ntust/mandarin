interface Props {
  reviewed: number
  remaining: number
}

export function ProgressBar({ reviewed, remaining }: Props) {
  const total = reviewed + remaining
  const pct = total === 0 ? 0 : Math.round((reviewed / total) * 100)

  return (
    <div className="w-full flex flex-col gap-1">
      <div className="flex justify-between text-xs text-stone-400">
        <span>{reviewed} selesai</span>
        <span>{remaining} tersisa</span>
      </div>
      <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-stone-800 rounded-full transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
