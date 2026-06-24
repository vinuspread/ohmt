'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
} from 'recharts'
import { DashboardLayout } from '../_components/layout/DashboardLayout'
import { PageHeader } from '../_components/common/PageHeader'
import { chartDefaults } from '../data/chart-theme'
import { TrendingUp, Users, MousePointerClick, Clock } from 'lucide-react'

const periods = ['7D', '30D', '90D', '1Y']

const statsCards = [
  { label: 'Sessions', value: '284,500', change: '+12.3%', icon: TrendingUp, color: 'var(--color-primary)' },
  { label: 'Visitors', value: '142,300', change: '+8.7%', icon: Users, color: 'var(--color-success)' },
  { label: 'Bounce Rate', value: '38.4%', change: '-2.1%', icon: MousePointerClick, color: 'var(--color-warning)' },
  { label: 'Avg Duration', value: '4m 32s', change: '+5.4%', icon: Clock, color: 'var(--color-info)' },
]

const trafficData = [
  { month: 'Jan', sessions: 18000, uniqueUsers: 12000, pageviews: 54000 },
  { month: 'Feb', sessions: 22000, uniqueUsers: 15000, pageviews: 66000 },
  { month: 'Mar', sessions: 19000, uniqueUsers: 13000, pageviews: 57000 },
  { month: 'Apr', sessions: 25000, uniqueUsers: 17000, pageviews: 75000 },
  { month: 'May', sessions: 28000, uniqueUsers: 19000, pageviews: 84000 },
  { month: 'Jun', sessions: 26000, uniqueUsers: 18000, pageviews: 78000 },
  { month: 'Jul', sessions: 31000, uniqueUsers: 21000, pageviews: 93000 },
  { month: 'Aug', sessions: 34000, uniqueUsers: 23000, pageviews: 102000 },
  { month: 'Sep', sessions: 30000, uniqueUsers: 20000, pageviews: 90000 },
  { month: 'Oct', sessions: 35000, uniqueUsers: 24000, pageviews: 105000 },
  { month: 'Nov', sessions: 38000, uniqueUsers: 26000, pageviews: 114000 },
  { month: 'Dec', sessions: 42000, uniqueUsers: 28000, pageviews: 126000 },
]

const trafficSources = [
  { name: 'Organic', value: 42, color: 'var(--color-primary)' },
  { name: 'Direct', value: 28, color: 'var(--color-success)' },
  { name: 'Social', value: 18, color: 'var(--color-info)' },
  { name: 'Referral', value: 12, color: 'var(--color-warning)' },
]

const topPages = [
  { url: '/dashboard', views: '12,400', bounce: '24%' },
  { url: '/analytics', views: '8,200', bounce: '31%' },
  { url: '/orders', views: '5,100', bounce: '28%' },
  { url: '/customers', views: '3,800', bounce: '22%' },
  { url: '/reports', views: '2,900', bounce: '35%' },
]

const devices = [
  { name: 'Desktop', percentage: 58, color: 'var(--color-primary)' },
  { name: 'Mobile', percentage: 34, color: 'var(--color-success)' },
  { name: 'Tablet', percentage: 8, color: 'var(--color-info)' },
]

function StatCard({ label, value, change, icon: Icon, color }: { label: string; value: string; change: string; icon: React.ElementType; color: string }) {
  const isPositive = change.startsWith('+')
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)]"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-[var(--color-text-muted)]">{label}</span>
        <div className="w-8 h-8 rounded-[var(--radius-md)] flex items-center justify-center" style={{ backgroundColor: `${color}15` }}>
          <Icon size={16} strokeWidth={1.5} style={{ color }} />
        </div>
      </div>
      <p className="text-xl font-[var(--font-mono)] font-bold text-[var(--color-text)]">{value}</p>
      <span className={`text-xs font-medium ${isPositive ? 'text-[var(--color-success)]' : 'text-[var(--color-danger)]'}`}>
        {change} vs last period
      </span>
    </motion.div>
  )
}

export default function AnalyticsPage() {
  const [activePeriod, setActivePeriod] = useState('30D')

  return (
    <DashboardLayout title="Analytics">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-3"
      >
        <PageHeader
          title="Analytics"
          action={
            <div className="flex gap-1 bg-[var(--color-bg-surface)] rounded-[var(--radius-md)] p-0.5">
              {periods.map((p) => (
                <button
                  key={p}
                  onClick={() => setActivePeriod(p)}
                  className={`px-3 py-1.5 rounded-[var(--radius-sm)] text-xs font-medium transition-colors relative ${
                    activePeriod === p ? 'text-[var(--color-text)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'
                  }`}
                >
                  {activePeriod === p && (
                    <motion.div layoutId="periodTab" className="absolute inset-0 bg-[var(--color-bg-elevated)] rounded-[var(--radius-sm)] border border-[var(--color-border)]" />
                  )}
                  <span className="relative z-10">{p}</span>
                </button>
              ))}
            </div>
          }
        />

        <div className="grid grid-cols-4 gap-3">
          {statsCards.map((card) => (
            <StatCard key={card.label} {...card} />
          ))}
        </div>

        <div className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)]">
          <h3 className="text-base font-[var(--font-heading)] font-semibold text-[var(--color-text)] mb-4">Traffic Overview</h3>
          <div style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="sessionsGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="usersGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-success)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="var(--color-success)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="pageviewsGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-info)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="var(--color-info)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid {...chartDefaults.cartesianGrid} />
                <XAxis dataKey="month" tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip {...chartDefaults.tooltip} />
                <Area type="monotone" dataKey="sessions" name="Sessions" stroke="var(--color-primary)" strokeWidth={2} fill="url(#sessionsGrad)" dot={false} isAnimationActive={false} animationDuration={1000} />
                <Area type="monotone" dataKey="uniqueUsers" name="Unique Users" stroke="var(--color-success)" strokeWidth={2} fill="url(#usersGrad)" dot={false} isAnimationActive={false} animationDuration={1000} />
                <Area type="monotone" dataKey="pageviews" name="Pageviews" stroke="var(--color-info)" strokeWidth={2} fill="url(#pageviewsGrad)" dot={false} isAnimationActive={false} animationDuration={1000} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)]"
            >
              <h3 className="text-base font-[var(--font-heading)] font-semibold text-[var(--color-text)] mb-4">Traffic Sources</h3>
              <div className="flex items-center gap-6">
                <div style={{ width: 160, height: 160 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={trafficSources} cx="50%" cy="50%" innerRadius={45} outerRadius={70} paddingAngle={3} dataKey="value" isAnimationActive={false} animationDuration={800}>
                        {trafficSources.map((entry) => (
                          <Cell key={entry.name} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip {...chartDefaults.tooltip} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex-1 space-y-3">
                  {trafficSources.map((src) => (
                    <div key={src.name} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: src.color }} />
                        <span className="text-[var(--color-text-muted)]">{src.name}</span>
                      </div>
                      <span className="font-[var(--font-mono)] text-[var(--color-text)] font-medium">{src.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)]"
            >
              <h3 className="text-base font-[var(--font-heading)] font-semibold text-[var(--color-text)] mb-4">Top Pages</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    <th className="text-left text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)] font-medium px-3 py-2.5">Page URL</th>
                    <th className="text-right text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)] font-medium px-3 py-2.5">Views</th>
                    <th className="text-right text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)] font-medium px-3 py-2.5">Bounce Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {topPages.map((page, i) => (
                    <motion.tr
                      key={page.url}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: i * 0.05 }}
                      className="border-b border-[var(--color-border)] hover:bg-[var(--color-bg-hover)] transition-colors"
                    >
                      <td className="px-3 py-3 text-[var(--color-text)] font-medium">/{page.url}</td>
                      <td className="px-3 py-3 text-right font-[var(--font-mono)] text-[var(--color-text)]">{page.views}</td>
                      <td className="px-3 py-3 text-right font-[var(--font-mono)] text-[var(--color-warning)]">{page.bounce}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)]"
        >
          <h3 className="text-base font-[var(--font-heading)] font-semibold text-[var(--color-text)] mb-4">Device Breakdown</h3>
          <div className="grid grid-cols-3 gap-8">
            {devices.map((device) => (
              <div key={device.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[var(--color-text)]">{device.name}</span>
                  <span className="text-sm font-[var(--font-mono)] font-medium" style={{ color: device.color }}>{device.percentage}%</span>
                </div>
                <div className="h-2 bg-[var(--color-bg-surface)] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: device.color }}
                    initial={{ width: '0%' }}
                    animate={{ width: `${device.percentage}%` }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  )
}
