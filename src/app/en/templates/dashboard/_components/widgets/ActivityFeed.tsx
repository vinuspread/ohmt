'use client'

import { motion } from 'framer-motion'
import { Avatar } from '../common/Avatar'

const activities = [
  { user: 'Daniel Park', src: '/templates/portfolio/portfolio-2.jpg', action: 'Confirmed EV9 order - Obsidian Black, Full spec', time: '4m ago', type: 'success' },
  { user: 'Mia Torres', src: '/templates/portfolio/portfolio-3.png', action: 'Submitted GT7 test drive request at Seoul flagship', time: '22m ago', type: 'info' },
  { user: 'James Kang', src: '/templates/portfolio/portfolio-4.png', action: 'Closed X5 fleet deal - 12 units for Lotte Corp.', time: '51m ago', type: 'primary' },
  { user: 'Sarah Yoon', src: '/templates/portfolio/portfolio-5.png', action: 'Updated S3 configurator pricing for KR market', time: '1h ago', type: 'neutral' },
]

const typeColor: Record<string, string> = {
  success: 'var(--color-success)',
  info: 'var(--color-info)',
  primary: 'var(--color-primary)',
  neutral: 'var(--color-text-muted)',
}

export function ActivityFeed({ className = '' }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)] flex flex-col ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-[var(--color-text)]">Recent Activity</h3>
        <button className="text-xs text-[var(--color-primary)] hover:underline">View all</button>
      </div>
      <ul className="divide-y divide-[var(--color-border)]">
        {activities.map((a, i) => (
          <li key={i} className="flex items-start gap-3 py-3">
            <div className="relative shrink-0">
              <Avatar name={a.user} src={a.src} size="sm" />
              <span
                className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-[var(--color-bg-elevated)]"
                style={{ background: typeColor[a.type] }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-[var(--color-text)] truncate">
                <span className="font-medium">{a.user}</span>{' '}
                <span className="text-[var(--color-text-muted)]">{a.action}</span>
              </p>
              <p className="text-sm text-[var(--color-text-muted)] mt-0.5">{a.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
