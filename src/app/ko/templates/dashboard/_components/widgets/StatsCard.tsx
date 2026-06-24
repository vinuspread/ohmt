'use client'

import { TrendingUp, TrendingDown, DollarSign, ShoppingCart, Navigation, Target } from 'lucide-react'
import { Area, AreaChart, ResponsiveContainer } from 'recharts'

function formatValue(value: number, suffix = '') {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M${suffix}`
  if (value >= 1000) return `${(value / 1000).toFixed(1)}K${suffix}`
  if (value % 1 === 0) return `${value}${suffix}`
  return `${value.toFixed(1)}${suffix}`
}

const sparkData = [
  { v: 30 }, { v: 45 }, { v: 38 }, { v: 52 }, { v: 48 },
]

const iconMap = {
  success: DollarSign,
  danger: ShoppingCart,
  info: Navigation,
  primary: Target,
}

export function StatsCard({
  label,
  value,
  suffix = '',
  change,
  positive,
  color,
}: {
  label: string
  value: number
  suffix?: string
  change: string
  positive: boolean
  color: 'success' | 'danger' | 'info' | 'primary'
}) {
  const colorMap = {
    success: 'var(--color-success)',
    danger: 'var(--color-danger)',
    info: 'var(--color-info)',
    primary: 'var(--color-primary)',
  }
  const accentColor = colorMap[color]
  const Icon = iconMap[color]

  return (
    <div className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)] cursor-default h-full">
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: `color-mix(in srgb, ${accentColor} 14%, transparent)` }}
        >
          <Icon size={17} style={{ color: accentColor }} strokeWidth={1.8} />
        </div>
        <div className="w-16 h-9">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={sparkData} style={{ background: 'transparent' }}>
              <defs>
                <linearGradient id={`spark-${label}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={accentColor} stopOpacity={0.15} />
                  <stop offset="100%" stopColor={accentColor} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="v" stroke={accentColor} strokeWidth={1.5} strokeOpacity={0.5} fill={`url(#spark-${label})`} dot={false} isAnimationActive={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.08em] text-[var(--color-text-muted)] font-medium mb-2">
          {label}
        </p>
        <div className="text-3xl font-[var(--font-mono)] font-bold text-[var(--color-text)] mb-2">
          {formatValue(value, suffix)}
        </div>
        <div className="flex items-center gap-1">
          {positive ? (
            <TrendingUp size={13} className="text-[var(--color-success)]" strokeWidth={1.5} />
          ) : (
            <TrendingDown size={13} className="text-[var(--color-danger)]" strokeWidth={1.5} />
          )}
          <span className={`text-xs font-medium ${positive ? 'text-[var(--color-success)]' : 'text-[var(--color-danger)]'}`}>
            {change}
          </span>
          <span className="text-xs text-[var(--color-text-muted)]">전월 대비</span>
        </div>
      </div>
    </div>
  )
}
