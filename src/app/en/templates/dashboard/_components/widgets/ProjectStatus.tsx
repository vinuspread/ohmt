'use client'

import { motion } from 'framer-motion'
import { Avatar } from '../common/Avatar'

const people: Record<string, string> = {
  'Morgan Chen': '/templates/portfolio/portfolio-1.jpg',
  'Sarah Yoon': '/templates/portfolio/portfolio-5.png',
  'James Kang': '/templates/portfolio/portfolio-4.png',
  'Mia Torres': '/templates/portfolio/portfolio-3.png',
  'Daniel Park': '/templates/portfolio/portfolio-2.jpg',
}

const projects = [
  {
    name: 'EV9 Global Launch - Phase 2',
    manager: 'Morgan Chen',
    team: ['Sarah Yoon', 'James Kang', 'Mia Torres'],
    progress: 78,
    status: 'On Track',
    statusColor: 'var(--color-success)',
    due: 'Jul 15',
  },
  {
    name: 'GT7 Dealer Onboarding Program',
    manager: 'James Kang',
    team: ['Morgan Chen', 'Daniel Park'],
    progress: 52,
    status: 'At Risk',
    statusColor: 'var(--color-danger)',
    due: 'Jun 30',
  },
  {
    name: 'Online Configurator v3.0',
    manager: 'Mia Torres',
    team: ['Sarah Yoon', 'Daniel Park', 'James Kang'],
    progress: 91,
    status: 'Ahead',
    statusColor: 'var(--color-info)',
    due: 'Jun 18',
  },
]

export function ProjectStatus({ className = '' }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className={`bg-[var(--color-bg-elevated)] rounded-[var(--radius-lg)] p-5 border border-[var(--color-border)] ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-[var(--color-text)]">Active Projects</h3>
        <button className="text-xs text-[var(--color-primary)] hover:underline">All Projects</button>
      </div>
      <div className="space-y-4">
        {projects.map((p) => (
          <div key={p.name} className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[var(--color-text)]">{p.name}</p>
                <p className="text-xs text-[var(--color-text-muted)]">Due {p.due} · {p.manager}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {p.team.slice(0, 3).map(name => (
                    <Avatar key={name} name={name} src={people[name]} size="xs" className="ring-2 ring-[var(--color-bg-elevated)]" />
                  ))}
                </div>
                <span
                  className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{ color: p.statusColor, background: `color-mix(in srgb, ${p.statusColor} 15%, transparent)` }}
                >
                  {p.status}
                </span>
              </div>
            </div>
            <div className="h-1.5 rounded-full bg-[var(--color-border)] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${p.progress}%` }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-full"
                style={{ background: p.statusColor }}
              />
            </div>
            <p className="text-[10px] text-[var(--color-text-muted)] text-right">{p.progress}% complete</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
