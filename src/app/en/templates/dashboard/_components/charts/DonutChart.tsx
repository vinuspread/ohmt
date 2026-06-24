'use client'

export function DonutChart({
  percentage,
  label,
  subLabel,
  color = 'var(--color-primary)',
  bgColor = 'var(--color-border)',
  metrics,
}: {
  percentage: number
  label: string
  subLabel: string
  color?: string
  bgColor?: string
  metrics?: { label: string; value: string }[]
}) {
  const circumference = 2 * Math.PI * 42
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)]">
      <div className="flex flex-col items-center">
        <div className="relative w-[120px] h-[120px]">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle r={42} cx={50} cy={50} fill="none" stroke={bgColor} strokeWidth={8} />
            <circle r={42} cx={50} cy={50} fill="none" stroke={color} strokeWidth={8} strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-[var(--font-mono)] font-bold text-[var(--color-text)]">
              {percentage}%
            </span>
          </div>
        </div>

        <h4 className="mt-3 text-sm font-medium text-[var(--color-text)]">{label}</h4>
        <p className="text-xs text-[var(--color-success)]">{subLabel}</p>

        {metrics && (
          <div className="mt-4 w-full space-y-1.5 border-t border-[var(--color-border)] pt-3">
            {metrics.map((m) => (
              <div key={m.label} className="flex items-center justify-between text-xs">
                <span className="text-[var(--color-text-muted)]">{m.label}</span>
                <span className="font-[var(--font-mono)] text-[var(--color-text)]">{m.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
