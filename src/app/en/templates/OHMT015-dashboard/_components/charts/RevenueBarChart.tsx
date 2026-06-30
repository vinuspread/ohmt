'use client'

import { motion } from 'framer-motion'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts'
import { monthlyRevenue } from '../../data/dashboard-data'
import { chartDefaults, formatAxis } from '../../data/chart-theme'

export function RevenueBarChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)] flex-1"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-[var(--font-heading)] font-semibold text-[var(--color-text)]">
            Monthly Revenue Breakdown
          </h3>
          <p className="text-sm text-[var(--color-text-muted)]">Net Profit · Revenue · Cashflow - FY 2026</p>
        </div>
      </div>

      <div style={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={monthlyRevenue} barGap={6} barCategoryGap="35%">
            <CartesianGrid {...chartDefaults.cartesianGrid} />
            <XAxis dataKey="month" tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis tickFormatter={formatAxis} tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip {...chartDefaults.tooltip} cursor={{ fill: 'rgba(0,0,0,0.25)' }} />
            <Legend {...chartDefaults.legend} />
            <Bar dataKey="netProfit" name="Net Profit" fill="var(--color-primary)" radius={[4, 4, 0, 0]} barSize={10} isAnimationActive={false} animationDuration={800} animationEasing="ease-out" />
            <Bar dataKey="revenue" name="Revenue" fill="var(--color-success)" radius={[4, 4, 0, 0]} barSize={10} isAnimationActive={false} animationDuration={800} animationEasing="ease-out" />
            <Bar dataKey="cashflow" name="Cashflow" fill="var(--color-info)" radius={[4, 4, 0, 0]} barSize={10} isAnimationActive={false} animationDuration={800} animationEasing="ease-out" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}
