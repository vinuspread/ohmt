'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts'
import { DashboardLayout } from '../_components/layout/DashboardLayout'
import { PageHeader } from '../_components/common/PageHeader'
import { Badge } from '../_components/common/Badge'
import { chartDefaults } from '../data/chart-theme'
import { reports, reportTypeMeta, type ReportType } from '../data/reports-data'
import { Download, TrendingUp, TrendingDown, Plus } from 'lucide-react'

const filterTabs = ['전체', '매출', '트래픽', '영업'] as const
type FilterTab = (typeof filterTabs)[number]

const filterTypeMap: Record<FilterTab, ReportType | null> = {
  '전체': null,
  '매출': 'revenue',
  '트래픽': 'traffic',
  '영업': 'sales',
}

const annualRevenueData = [
  { month: 'Jan', revenue: 45000, profit: 12000 },
  { month: 'Feb', revenue: 52000, profit: 15000 },
  { month: 'Mar', revenue: 48000, profit: 13000 },
  { month: 'Apr', revenue: 61000, profit: 18000 },
  { month: 'May', revenue: 58000, profit: 16000 },
  { month: 'Jun', revenue: 63000, profit: 19000 },
  { month: 'Jul', revenue: 69000, profit: 21000 },
  { month: 'Aug', revenue: 72000, profit: 23000 },
  { month: 'Sep', revenue: 65000, profit: 20000 },
  { month: 'Oct', revenue: 70000, profit: 22000 },
  { month: 'Nov', revenue: 75000, profit: 24000 },
  { month: 'Dec', revenue: 80000, profit: 26000 },
]

function TrendBadge({ trend }: { trend: number }) {
  const isPositive = trend > 0
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-medium ${isPositive ? 'text-[var(--color-success)]' : 'text-[var(--color-danger)]'}`}>
      {isPositive ? <TrendingUp size={12} strokeWidth={2} /> : <TrendingDown size={12} strokeWidth={2} />}
      {isPositive ? '+' : ''}{trend}%
    </span>
  )
}

export default function ReportsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>('전체')

  const filteredReports = activeFilter === '전체'
    ? reports
    : reports.filter((r) => r.type === filterTypeMap[activeFilter])

  return (
    <DashboardLayout title="리포트">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-3"
      >
        <PageHeader
          title="Reports"
          action={
            <button className="flex items-center gap-1.5 px-3 py-2 bg-[var(--color-primary)] text-white text-sm font-medium rounded-[var(--radius-md)] hover:bg-[var(--color-primary-hover)] transition-colors">
              <Plus size={16} strokeWidth={1.5} />
              새 리포트
            </button>
          }
        />

        <div className="flex gap-1 bg-[var(--color-bg-surface)] rounded-[var(--radius-md)] p-0.5 w-fit">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-medium transition-colors relative ${
                activeFilter === tab ? 'text-[var(--color-text)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
              }`}
            >
              {activeFilter === tab && (
                <motion.div layoutId="filterTab" className="absolute inset-0 bg-[var(--color-bg-elevated)] rounded-[var(--radius-sm)] border border-[var(--color-border)]" />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3">
          <AnimatePresence mode="popLayout">
            {filteredReports.map((report, i) => (
              <motion.div
                key={report.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: i * 0.03 }}
                className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)]"
              >
                <div className="flex items-start justify-between mb-3">
                  <Badge variant={report.type === 'revenue' ? 'primary' : report.type === 'traffic' ? 'info' : 'success'}>
                    {reportTypeMeta[report.type].label}
                  </Badge>
                  <TrendBadge trend={report.trend} />
                </div>
                <h4 className="text-sm font-medium text-[var(--color-text)] mb-1">{report.title}</h4>
                <p className="text-sm text-[var(--color-text-muted)] mb-4">{report.date}</p>
                <button className="flex items-center gap-1.5 text-xs text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors font-medium">
                  <Download size={14} strokeWidth={1.5} />
                  다운로드
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredReports.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-sm text-[var(--color-text-muted)]">필터에 해당하는 리포트가 없습니다.</p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)]"
        >
          <h3 className="text-base font-[var(--font-heading)] font-semibold text-[var(--color-text)] mb-4">연간 매출 추이</h3>
          <div style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={annualRevenueData}>
                <CartesianGrid {...chartDefaults.cartesianGrid} />
                <XAxis dataKey="month" tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip {...chartDefaults.tooltip} />
                <Line type="monotone" dataKey="revenue" name="Revenue" stroke="var(--color-primary)" strokeWidth={2} dot={false} activeDot={{ r: 4 }} isAnimationActive={false} animationDuration={1000} animationEasing="ease-in-out" />
                <Line type="monotone" dataKey="profit" name="Profit" stroke="var(--color-success)" strokeWidth={2} dot={false} activeDot={{ r: 4 }} isAnimationActive={false} animationDuration={1000} animationEasing="ease-in-out" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  )
}
