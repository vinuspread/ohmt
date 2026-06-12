'use client'

import { motion } from 'framer-motion'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart,
} from 'recharts'
import { monthlyRevenue, companyGrowthData } from '../../data/dashboard-data'
import { chartDefaults, formatAxis } from '../../data/chart-theme'
import { TrendingUp } from 'lucide-react'

export function WebsiteAnalyticsLine() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)]"
    >
      <h3 className="text-base font-[var(--font-heading)] font-semibold text-[var(--color-text)] mb-4">
        Monthly Sales Trend
      </h3>
      <div style={{ height: 250 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={monthlyRevenue}>
            <CartesianGrid {...chartDefaults.cartesianGrid} />
            <XAxis dataKey="month" tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tickFormatter={formatAxis} tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip {...chartDefaults.tooltip} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }} />
            <Line type="monotone" dataKey="netProfit" name="Net Profit" stroke="var(--color-primary)" strokeWidth={2} dot={false} activeDot={{ r: 4, fill: 'var(--color-primary)' }} isAnimationActive={false} animationDuration={1000} animationEasing="ease-in-out" />
            <Line type="monotone" dataKey="revenue" name="Revenue" stroke="var(--color-success)" strokeWidth={2} dot={false} activeDot={{ r: 4, fill: 'var(--color-success)' }} isAnimationActive={false} animationDuration={1000} animationEasing="ease-in-out" />
            <Line type="monotone" dataKey="cashflow" name="Cashflow" stroke="var(--color-info)" strokeWidth={2} dot={false} activeDot={{ r: 4, fill: 'var(--color-info)' }} isAnimationActive={false} animationDuration={1000} animationEasing="ease-in-out" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}

export function CompanyGrowth() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)]"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-[var(--font-heading)] font-semibold text-[var(--color-text)]">
          Global Unit Sales Growth
        </h3>
        <span className="flex items-center gap-1 text-xs font-medium text-[var(--color-success)]">
          <TrendingUp size={14} strokeWidth={1.5} />
          +20% avg growth
        </span>
      </div>
      <div style={{ height: 250 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={companyGrowthData}>
            <defs>
              <linearGradient id="growthGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.3} />
                <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid {...chartDefaults.cartesianGrid} />
            <XAxis dataKey="month" tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tickFormatter={formatAxis} tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip {...chartDefaults.tooltip} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }} />
            <Area type="monotone" dataKey="value" stroke="var(--color-primary)" strokeWidth={2} fill="url(#growthGrad)" dot={false} isAnimationActive={false} animationDuration={1000} animationEasing="ease-in-out" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}
