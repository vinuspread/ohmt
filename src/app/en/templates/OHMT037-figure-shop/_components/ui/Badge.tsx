import { clsx } from 'clsx'
import type { FigureStatus } from '../../data/figures'

type BadgeVariant = 'new' | 'preorder' | 'soldout' | 'limited' | 'neutral'

const styles: Record<BadgeVariant, string> = {
  new: 'bg-white border-[var(--color-ink)] text-[var(--color-ink)]',
  preorder: 'bg-white border-[var(--color-accent)] text-[var(--color-accent)]',
  soldout: 'bg-white border-[var(--color-border)] text-[var(--color-ink-faint)]',
  limited: 'bg-[var(--color-accent)] border-[var(--color-accent)] text-white',
  neutral: 'bg-white border-[var(--color-border)] text-[var(--color-ink-muted)]',
}

export function Badge({ variant = 'neutral', children }: { variant?: BadgeVariant; children: React.ReactNode }) {
  return (
    <span
      className={clsx(
        'inline-flex min-h-7 items-center justify-center rounded-full border px-3 text-[11px] font-semibold uppercase leading-none tracking-wider',
        styles[variant]
      )}
    >
      {children}
    </span>
  )
}

export function statusBadgeVariant(status: FigureStatus): BadgeVariant {
  if (status === 'Pre-order') return 'preorder'
  if (status === 'Sold out') return 'soldout'
  if (status === 'Coming soon') return 'neutral'
  return 'new'
}

export function statusBadgeLabel(status: FigureStatus): string {
  if (status === 'In stock') return 'New'
  return status
}
