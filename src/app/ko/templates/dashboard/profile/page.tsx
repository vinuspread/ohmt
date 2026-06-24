'use client'

import { motion } from 'framer-motion'
import { MapPin, Briefcase, Edit3, Mail, Phone, Globe, TrendingUp, FileText, ShoppingCart, Users, Star, Clock, Video, Users2, Car } from 'lucide-react'
import { DashboardLayout } from '../_components/layout/DashboardLayout'
import { Badge } from '../_components/common/Badge'
import Image from 'next/image'

const skills = ['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'TailwindCSS', 'PostgreSQL', 'AWS']

const activityFeed = [
  { id: 1, action: 'Deployed EV9 configurator v2.1 to production', time: '2 hours ago', category: 'deploy', color: 'var(--color-primary)' },
  { id: 2, action: 'Updated GT7 API documentation', time: 'Yesterday', category: 'docs', color: 'var(--color-info)' },
  { id: 3, action: 'Closed dealer onboarding issue #421', time: 'Jun 8, 2026', category: 'code', color: 'var(--color-success)' },
  { id: 4, action: 'Reviewed PR #89 - S3 pricing module', time: 'Jun 7, 2026', category: 'review', color: 'var(--color-warning)' },
  { id: 5, action: 'Q2 sprint planning with operations team', time: 'Jun 6, 2026', category: 'meeting', color: 'var(--color-danger)' },
]

const statCards = [
  { label: '리포트', value: 142, icon: FileText, color: 'var(--color-primary)' },
  { label: '주문', value: 284, icon: ShoppingCart, color: 'var(--color-success)' },
  { label: '고객', value: 47, icon: Users, color: 'var(--color-info)' },
  { label: '성과', value: '94%', icon: TrendingUp, color: 'var(--color-warning)' },
]

const schedule = [
  { id: 1, title: 'EV9 Launch Review', time: '10:00', end: '11:00', date: 'Today', icon: Car, color: 'var(--color-primary)' },
  { id: 2, title: 'Q2 Strategy Sync', time: '14:00', end: '15:30', date: 'Today', icon: Users2, color: 'var(--color-info)' },
  { id: 3, title: 'GT7 Dealer Call', time: '09:30', end: '10:00', date: 'Tomorrow', icon: Video, color: 'var(--color-success)' },
  { id: 4, title: 'S3 Pricing Standup', time: '11:00', end: '11:30', date: 'Tomorrow', icon: Clock, color: 'var(--color-warning)' },
  { id: 5, title: 'Monthly KPI Report', time: '15:00', end: '16:00', date: 'Jun 13', icon: FileText, color: 'var(--color-danger)' },
]

const contactInfo = [
  { icon: Mail, label: 'morgan@ohmytemplate.io' },
  { icon: Phone, label: '+82 10-1234-5678' },
  { icon: Globe, label: 'ohmytemplate.io/morgan' },
  { icon: MapPin, label: 'Seoul, Korea' },
]

export default function ProfilePage() {
  return (
    <DashboardLayout title="프로필">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-3"
      >
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-border)]"
        >
          <div className="bg-[var(--color-bg-elevated)] px-8 py-5">
            <div className="flex items-center gap-4">
              <div className="relative shrink-0">
                <div className="w-16 h-16 rounded-full border-2 border-[var(--color-border)] overflow-hidden bg-[var(--color-bg-surface)]">
                  <Image src="/templates/OHMT007-portfolio/portfolio-1.jpg" alt="Morgan Chen" width={64} height={64} className="object-cover w-full h-full" />
                </div>
                <div className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-[var(--color-success)] border-2 border-[var(--color-bg-elevated)]" />
              </div>
              <div className="flex-1 pb-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-xl font-[var(--font-heading)] font-semibold text-[var(--color-text)]">Morgan Chen</h2>
                  <Badge variant="primary">리드 개발자</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-[var(--color-text-muted)]">
                  <span className="flex items-center gap-1.5"><Briefcase size={13} strokeWidth={1.5} /> VINUSPREAD Motors</span>
                  <span className="flex items-center gap-1.5"><MapPin size={13} strokeWidth={1.5} /> Seoul, Korea</span>
                  <span className="flex items-center gap-1.5"><Star size={13} strokeWidth={1.5} className="text-[var(--color-warning)]" /> 평점 4.9</span>
                </div>
              </div>
              <button className="flex items-center gap-1.5 px-4 py-2 bg-[var(--color-primary)] text-white text-sm font-medium rounded-[var(--radius-sm)] hover:bg-[var(--color-primary-hover)] transition-colors shrink-0">
                <Edit3 size={14} strokeWidth={1.5} />
                프로필 편집
              </button>
            </div>
          </div>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-4 gap-3">
          {statCards.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)] flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-[var(--radius-md)] flex items-center justify-center shrink-0"
                style={{ background: `color-mix(in srgb, ${s.color} 14%, transparent)` }}>
                <s.icon size={18} strokeWidth={1.5} style={{ color: s.color }} />
              </div>
              <div>
                <p className="text-xs text-[var(--color-text-muted)] mb-0.5">{s.label}</p>
                <p className="text-xl font-[var(--font-mono)] font-bold text-[var(--color-text)]">{s.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main content */}
        <div className="grid grid-cols-12 gap-3">

          {/* Left: About + Contact + Skills */}
          <div className="col-span-4 space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)]"
            >
              <h3 className="text-sm font-semibold text-[var(--color-text)] mb-3">소개</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                VINUSPREAD Motors에서 8년 이상 확장 가능한 웹 애플리케이션을 구축해온 풀스택 개발자입니다. 개발자 도구, 디자인 시스템, 성능 최적화에 열정을 가지고 있습니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)]"
            >
              <h3 className="text-sm font-semibold text-[var(--color-text)] mb-3">연락처</h3>
              <div className="space-y-2.5">
                {contactInfo.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 text-sm text-[var(--color-text-muted)]">
                    <Icon size={14} strokeWidth={1.5} className="shrink-0 text-[var(--color-primary)]" />
                    <span className="truncate">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)]"
            >
              <h3 className="text-sm font-semibold text-[var(--color-text)] mb-3">기술</h3>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((skill) => (
                  <Badge key={skill} variant="primary">{skill}</Badge>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Center: Activity timeline */}
          <div className="col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)] h-full"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-sm font-semibold text-[var(--color-text)]">최근 활동</h3>
                <button className="text-xs text-[var(--color-primary)] hover:underline">전체 보기</button>
              </div>
              <div className="relative">
                <div className="absolute left-[7px] top-1 bottom-1 w-px bg-[var(--color-border)]" />
                <div className="divide-y divide-[var(--color-border)]">
                  {activityFeed.map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: 0.2 + i * 0.06 }}
                      className="flex items-start gap-4 py-4"
                    >
                      <div className="w-[15px] shrink-0 flex justify-center relative z-10 mt-0.5">
                        <div className="w-3 h-3 rounded-full border-2" style={{ backgroundColor: 'var(--color-bg-elevated)', borderColor: item.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-[var(--color-text)]">{item.action}</p>
                        <p className="text-xs text-[var(--color-text-muted)] mt-0.5">{item.time}</p>
                      </div>
                      <span
                        className="text-[10px] font-medium px-2 py-0.5 rounded-full shrink-0 capitalize"
                        style={{ color: item.color, background: `color-mix(in srgb, ${item.color} 14%, transparent)` }}
                      >
                        {item.category}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Schedule */}
          <div className="col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)] h-full"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-sm font-semibold text-[var(--color-text)]">다가오는 일정</h3>
                <button className="text-xs text-[var(--color-primary)] hover:underline">캘린더</button>
              </div>
              <div className="space-y-1">
                {schedule.map((ev, i) => {
                  const Icon = ev.icon
                  return (
                    <motion.div
                      key={ev.id}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: 0.25 + i * 0.05 }}
                      className="flex items-start gap-3 p-2.5 rounded-[var(--radius-md)] hover:bg-[var(--color-bg-hover)] transition-colors"
                    >
                      <div
                        className="w-8 h-8 rounded-[var(--radius-md)] flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: `color-mix(in srgb, ${ev.color} 14%, transparent)` }}
                      >
                        <Icon size={14} strokeWidth={1.5} style={{ color: ev.color }} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-[var(--color-text)] truncate">{ev.title}</p>
                        <p className="text-[11px] text-[var(--color-text-muted)] mt-0.5">
                          {ev.date} · {ev.time}–{ev.end}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </DashboardLayout>
  )
}
