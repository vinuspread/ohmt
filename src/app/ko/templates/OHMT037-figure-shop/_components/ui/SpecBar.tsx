import { clsx } from 'clsx'

type SpecBarProps = {
  label: string
  valueLabel: string
  pct: number
  accent?: boolean
}

export function SpecBar({ label, valueLabel, pct, accent = false }: SpecBarProps) {
  const clamped = Math.max(0, Math.min(100, pct))
  return (
    <div className="flex items-center gap-4">
      <span className="meta-label w-32 shrink-0 text-[var(--color-ink-muted)]">{label}</span>
      <div
        className="h-2 flex-1 border border-[var(--color-border)]"
        role="img"
        aria-label={`${label}: ${valueLabel}`}
      >
        <div
          className={clsx('h-full', accent ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-ink)]')}
          style={{ width: `${clamped}%` }}
        />
      </div>
      <span className="value-text w-16 shrink-0 text-right text-[var(--color-ink)]">{valueLabel}</span>
    </div>
  )
}
