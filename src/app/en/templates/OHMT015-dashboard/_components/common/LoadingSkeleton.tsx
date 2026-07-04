'use client'

const SKELETON_WIDTHS = ['92%', '76%', '84%', '68%', '88%', '72%']

export function LoadingSkeleton({ rows = 4 }: { rows?: number }) {
  return (
    <div className="space-y-4 animate-pulse">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="h-4 bg-[var(--color-bg-surface)] rounded-[var(--radius-sm)]" style={{ width: SKELETON_WIDTHS[i % SKELETON_WIDTHS.length] }} />
      ))}
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-6 animate-pulse space-y-4">
      <div className="h-4 w-24 bg-[var(--color-bg-surface)] rounded-[var(--radius-sm)]" />
      <div className="h-8 w-28 bg-[var(--color-bg-surface)] rounded-[var(--radius-sm)]" />
      <div className="h-3 w-16 bg-[var(--color-bg-surface)] rounded-[var(--radius-sm)]" />
    </div>
  )
}
