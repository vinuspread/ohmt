'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts'
import { saleReports } from '../../data/dashboard-data'
import { chartDefaults, formatAxis } from '../../data/chart-theme'

const years = ['2022', '2023', '2024', '2025', '2026']

export function SaleReportChart() {
  const [activeYear, setActiveYear] = useState('2026')
  const data = saleReports[activeYear]
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)]"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-[var(--font-heading)] font-semibold text-[var(--color-text)]">
          Annual Sales Report
        </h3>
        <div className="flex gap-1">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-3 py-1 rounded-[var(--radius-md)] text-xs font-medium transition-colors ${
                activeYear === year
                  ? 'bg-[var(--color-primary)] text-white'
                  : 'text-[var(--color-text-muted)] hover:bg-[var(--color-bg-hover)] hover:text-[var(--color-text)]'
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div style={{ height: 280 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            initial={reduce ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ width: '100%', height: '100%' }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid {...chartDefaults.cartesianGrid} />
                <XAxis dataKey="month" tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tickFormatter={formatAxis} tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip {...chartDefaults.tooltip} cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }} />
                <Line type="monotone" dataKey="revenue" name="Revenue" stroke="var(--color-primary)" strokeWidth={2} dot={false} activeDot={{ r: 4 }} isAnimationActive={false} animationDuration={1000} animationEasing="ease-in-out" />
                <Line type="monotone" dataKey="profit" name="Profit" stroke="var(--color-success)" strokeWidth={2} dot={false} activeDot={{ r: 4 }} isAnimationActive={false} animationDuration={1000} animationEasing="ease-in-out" />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
