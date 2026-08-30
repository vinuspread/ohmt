'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '../../data/stats'

function CountUp({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) {
      const frame = requestAnimationFrame(() => setDisplay(value))
      return () => cancelAnimationFrame(frame)
    }

    const durationMs = 950
    const start = performance.now()

    let frame: number
    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(value * eased)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <span ref={ref}>
      {display.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
    </span>
  )
}

export function ImpactStats() {
  return (
    <section className="bg-[var(--color-section-muted)] px-6 py-16 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-6 grid gap-6 border-t border-[var(--color-text)] pt-6 md:mb-12 md:grid-cols-2 md:items-end md:pt-6">
          <h2 className="max-w-[700px] font-heading text-[length:var(--text-h2)] font-semibold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)]">
            성과를 숫자로 확인하세요
          </h2>
          <p className="max-w-[480px] text-base leading-relaxed text-[var(--color-text-muted)] md:justify-self-end">
            참여자의 이야기는 사진과 글로 전하고, 프로그램의 성과는 확인 가능한 수치로 공개합니다.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.28 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07 } },
          }}
          className="grid grid-cols-1 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: [0.16, 1, 0.3, 1] } },
              }}
              className="flex min-w-0 flex-col gap-4 border-b border-[#d8dee5] py-7 last:border-b-0 md:border-b-0 md:border-r md:px-7 md:py-2 md:first:pl-0 md:last:border-r-0 md:last:pr-0 lg:px-10"
            >
              <p className="whitespace-nowrap font-heading text-[clamp(3rem,5.2vw,4.75rem)] font-bold leading-none tracking-[-0.015em] text-[var(--color-text)]">
                {stat.prefix}
                <CountUp value={stat.value} decimals={stat.decimals} />
                <span className="font-bold text-[var(--color-primary)]">{stat.suffix}</span>
              </p>
              <p className="max-w-[15rem] text-sm font-medium leading-[1.42] text-[var(--color-text-muted)]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
