'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function VisionStatement() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section ref={ref} className="border-b border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-16 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1120px] border-t border-[var(--color-text)] pt-6 md:pt-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ type: 'spring', stiffness: 90, damping: 18 }}
          className="max-w-[900px]"
        >
          <p className="text-sm font-semibold leading-none text-[var(--color-accent)]">
            People Change Together
          </p>
          <h2 className="mt-6 font-heading text-[length:var(--text-h2)] font-semibold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)] md:mt-6">
            We believe impact should be <span className="text-[var(--color-primary)]">provable</span>, not just promised:
            measured in hours volunteered, trees planted, and lives that changed course.
          </h2>
          <p className="mt-4 max-w-[560px] text-base leading-relaxed text-[var(--color-text-muted)] md:mt-6">
            Photography creates feeling. Numbers create trust. This template is designed to make both languages work on the same page.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
