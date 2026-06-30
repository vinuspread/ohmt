'use client'

import { motion } from 'framer-motion'
import {
  RadarChart as RechartsRadar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip, ResponsiveContainer, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
} from 'recharts'
import { radarData } from '../../data/dashboard-data'
import { chartDefaults, formatAxis } from '../../data/chart-theme'

export function CloudStorageRadar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)]"
    >
      <h3 className="text-base font-[var(--font-heading)] font-semibold text-[var(--color-text)] mb-4">
        Model Performance Radar
      </h3>
      <div style={{ height: 200 }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsRadar data={radarData}>
            <PolarGrid stroke="var(--chart-grid)" />
            <PolarAngleAxis dataKey="axis" tick={{ fill: 'var(--color-text-muted)', fontSize: 11 }} />
            <PolarRadiusAxis tick={false} axisLine={false} />
            <Tooltip {...chartDefaults.tooltip} />
            <Legend {...chartDefaults.legend} />
            <Radar name="2022" dataKey="2022" stroke="var(--color-border-strong)" fill="var(--color-border-strong)" fillOpacity={0.2} isAnimationActive={false} animationDuration={800} />
            <Radar name="2024" dataKey="2024" stroke="var(--color-info)" fill="var(--color-info)" fillOpacity={0.2} isAnimationActive={false} animationDuration={800} />
            <Radar name="2026" dataKey="2026" stroke="var(--color-primary)" fill="var(--color-primary)" fillOpacity={0.3} isAnimationActive={false} animationDuration={800} />
          </RechartsRadar>
        </ResponsiveContainer>
      </div>
      <button className="mt-4 w-full py-2 rounded-[var(--radius-md)] text-sm font-medium text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-colors">
        View Full Report
      </button>
    </motion.div>
  )
}

const activityData = [
  { name: 'EV Orders Fulfilled', v: 86 },
  { name: 'Test Drive Conversion', v: 62 },
  { name: 'Dealer Satisfaction', v: 91 },
]

export function ActivityCards() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)]"
    >
      <h3 className="text-base font-[var(--font-heading)] font-semibold text-[var(--color-text)] mb-4">
        Operations KPIs
      </h3>
      <div className="space-y-4">
        {activityData.map((item) => (
          <div key={item.name}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-[var(--color-text-muted)]">{item.name}</span>
              <span className="text-xs font-[var(--font-mono)] text-[var(--color-text)]">{item.v}%</span>
            </div>
            <div className="h-1.5 bg-[var(--color-bg-surface)] rounded-full overflow-hidden">
              <div className="h-full bg-[var(--color-primary)] rounded-full" style={{ width: `${item.v}%` }} />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-[var(--color-text-muted)] leading-relaxed">
        All KPIs measured against Q2 2026 targets. Dealer satisfaction based on NPS survey across 48 regional partners.
      </p>
    </motion.div>
  )
}

function SimpleDonut({ percentage, label, suffix = '%', color }: { percentage: number; label: string; suffix?: string; color: string }) {
  const circumference = 2 * Math.PI * 36
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)] flex flex-col items-center">
      <div className="relative w-[100px] h-[100px]">
        <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
          <circle r={36} cx={40} cy={40} fill="none" stroke="var(--color-border)" strokeWidth={6} />
          <circle r={36} cx={40} cy={40} fill="none" stroke={color} strokeWidth={6} strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-[var(--font-mono)] font-bold text-[var(--color-text)]">
            {percentage}{suffix}
          </span>
        </div>
      </div>
      <p className="mt-2 text-sm text-[var(--color-text-muted)] text-center">{label}</p>
    </div>
  )
}

export function BounceRateDonut() {
  return <SimpleDonut percentage={67} label="Return Visit Rate" color="var(--color-warning)" />
}

export function ConversionRing() {
  return <SimpleDonut percentage={48} label="Lead Close Rate" color="var(--color-success)" />
}

const analyticsBarData = [
  { year: '2022', profit: 1170000, revenue: 3640000 },
  { year: '2023', profit: 1540000, revenue: 4650000 },
  { year: '2024', profit: 1980000, revenue: 5870000 },
  { year: '2025', profit: 2580000, revenue: 7420000 },
  { year: '2026', profit: 3340000, revenue: 9280000 },
]

export function AnalyticsBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)]"
    >
      <h3 className="text-base font-[var(--font-heading)] font-semibold text-[var(--color-text)] mb-4">
        5-Year Revenue vs. Net Profit
      </h3>
      <div style={{ height: 250 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={analyticsBarData} layout="vertical" barGap={4}>
            <CartesianGrid {...chartDefaults.cartesianGrid} />
            <XAxis type="number" tickFormatter={formatAxis} tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis dataKey="year" type="category" tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip {...chartDefaults.tooltip} cursor={{ fill: 'rgba(0,0,0,0.25)' }} />
            <Legend {...chartDefaults.legend} />
            <Bar dataKey="profit" name="Net Profit" fill="var(--color-primary)" radius={[0, 4, 4, 0]} isAnimationActive={false} animationDuration={800} />
            <Bar dataKey="revenue" name="Revenue" fill="var(--color-success)" radius={[0, 4, 4, 0]} isAnimationActive={false} animationDuration={800} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}
