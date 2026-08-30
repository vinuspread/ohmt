'use client'

import { useMemo, useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { clsx } from 'clsx'
import { FIGURES, LINES, statusLabel, type FigureStatus, type LineId } from '../../data/figures'
import { FigureCard } from '../ui/FigureCard'

const STATUSES: FigureStatus[] = ['In stock', 'Pre-order', 'Coming soon', 'Sold out']

const isLineId = (v: string): v is LineId => LINES.some((l) => l.id === v)

export function ShopExplorer({ initialLine }: { initialLine?: string }) {
  const [line, setLine] = useState<LineId | 'all'>(
    initialLine && isLineId(initialLine) ? initialLine : 'all',
  )
  const [status, setStatus] = useState<FigureStatus | 'all'>('all')
  const [panelOpen, setPanelOpen] = useState(false)

  const filtered = useMemo(
    () =>
      FIGURES.filter(
        (f) => (line === 'all' || f.line === line) && (status === 'all' || f.status === status),
      ),
    [line, status],
  )

  return (
    <>
      <div className="flex h-12 items-center justify-between bg-[var(--color-bg-tile-deep)] px-4 lg:px-6">
        <span className="meta-label text-[var(--color-ink-muted)]">
          {filtered.length} / {FIGURES.length}
        </span>
        <button
          type="button"
          className="meta-label flex items-center gap-2 text-[var(--color-ink)]"
          aria-expanded={panelOpen}
          onClick={() => setPanelOpen((v) => !v)}
        >
          필터
          {panelOpen ? <Minus size={14} aria-hidden /> : <Plus size={14} aria-hidden />}
        </button>
      </div>

      {panelOpen ? (
        <div className="px-4 py-6 lg:px-6">
          <p className="meta-label text-[var(--color-ink-faint)]">라인</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {(['all', ...LINES.map((l) => l.id)] as const).map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => setLine(id)}
                aria-pressed={line === id}
                className={clsx(
                  'meta-label rounded-full border px-3 py-2 transition-colors duration-150',
                  line === id
                    ? 'border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-on-dark)]'
                    : 'border-[var(--color-border)] text-[var(--color-ink-muted)] hover:border-[var(--color-ink)]',
                )}
              >
                {id === 'all' ? '전체' : LINES.find((l) => l.id === id)?.label}
              </button>
            ))}
          </div>
          <p className="meta-label mt-6 text-[var(--color-ink-faint)]">상태</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {(['all', ...STATUSES] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStatus(s)}
                aria-pressed={status === s}
                className={clsx(
                  'meta-label rounded-full border px-3 py-2 transition-colors duration-150',
                  status === s
                    ? 'border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-on-dark)]'
                    : 'border-[var(--color-border)] text-[var(--color-ink-muted)] hover:border-[var(--color-ink)]',
                )}
              >
                {s === 'all' ? '전체' : statusLabel(s)}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {filtered.length === 0 ? (
        <p className="px-4 py-24 text-center text-base text-[var(--color-ink-muted)] lg:px-6">
          조건에 맞는 피규어가 없습니다.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-6 bg-[var(--color-bg)] px-4 py-6 lg:grid-cols-4 lg:px-6">
          {filtered.map((figure) => (
            <FigureCard key={figure.slug} figure={figure} />
          ))}
        </div>
      )}
    </>
  )
}
