'use client'

import { motion, useReducedMotion } from 'framer-motion'

export function StatementBlock() {
  const reduced = useReducedMotion()
  return (
    <section className="px-4 py-24 lg:px-6 lg:py-32">
      <motion.h2
        initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
        whileInView={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="mx-auto max-w-[1040px] text-center text-4xl leading-[var(--leading-display)] tracking-normal text-[var(--color-ink)] lg:text-6xl"
      >
        하나의 원형으로 정해진 수량만 제작하고, 모든 피규어에 에디션 번호를 남깁니다.</motion.h2>
    </section>
  )
}
