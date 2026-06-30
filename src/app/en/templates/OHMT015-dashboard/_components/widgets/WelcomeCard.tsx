'use client'

import { motion, useReducedMotion } from 'framer-motion'

export function WelcomeCard() {
  const reduce = useReducedMotion()

  return (
    <div className="relative overflow-hidden rounded-[var(--radius-lg)] p-6 bg-gradient-to-br from-[var(--color-primary-muted)] to-[var(--color-bg-elevated)] border border-[var(--color-border)] h-full">
      <div className="relative z-10">
        <p className="text-sm text-[var(--color-text-muted)] mb-1">Good morning, Alex.</p>
        <h2 className="text-xl font-[var(--font-heading)] font-semibold text-[var(--color-text)]">
          VINUSPREAD Motors
        </h2>
        <p className="text-sm text-[var(--color-text-muted)] mt-1">Operations & Sales Dashboard</p>

        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[var(--color-text-secondary)]">Q2 delivery target</span>
            <span className="text-sm font-[var(--font-mono)] text-[var(--color-primary)]">86%</span>
          </div>
          <div className="h-2 bg-[var(--color-bg-surface)] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[var(--color-primary)] rounded-full"
              initial={reduce ? false : { width: '0%' }}
              animate={{ width: '86%' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <p className="text-sm text-[var(--color-text-muted)] mt-1">1,204 of 1,400 units delivered</p>
        </div>
      </div>
    </div>
  )
}
