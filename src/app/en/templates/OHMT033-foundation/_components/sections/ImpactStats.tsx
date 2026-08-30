'use client'

import { motion } from 'framer-motion'
import { stats } from '../../data/stats'

function CountUp({ value, decimals = 0 }: { value: number; decimals?: number }) {
  return (
    <span>
      {value.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
    </span>
  )
}

function MetricValue({ stat }: { stat: (typeof stats)[number] }) {
  const rendered = <CountUp value={stat.value} decimals={stat.decimals} />
  if (stat.suffix === 'K+') {
    return (
      <>
        {stat.prefix}
        {rendered}
        <span>K</span>
        <span className="text-[var(--color-primary)]">+</span>
      </>
    )
  }

  return (
    <>
      {stat.prefix}
      {rendered}
      <span className="text-[var(--color-primary)]">{stat.suffix}</span>
    </>
  )
}

export function ImpactStats() {
  return (
    <section className="bg-[var(--color-bg)] px-6 py-16 md:px-12 md:py-32">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12">
        <div className="flex flex-col gap-6 border-t border-[#111827] pt-6">
          <div className="grid gap-4 md:grid-cols-2 md:items-start md:justify-between">
          <h2 className="max-w-[700px] font-heading text-4xl font-semibold leading-[var(--leading-heading)] text-[var(--color-text)] md:text-5xl">
            Impact, in numbers.
          </h2>
          <p className="max-w-[460px] text-base leading-[var(--leading-body)] text-[var(--color-text-muted)] md:justify-self-end">
            The field photography lives elsewhere. This section stays simple and lets the outcomes hold the page.
          </p>
          </div>
        </div>

        <motion.div
          initial="show"
          animate="show"
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
                hidden: { opacity: 0, y: 26 },
                show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 110, damping: 16 } },
              }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex min-w-0 flex-col gap-4 border-b border-[rgba(16,20,18,0.11)] py-7 last:border-b-0 md:border-b-0 md:border-r md:px-7 md:py-2 md:first:pl-0 md:last:border-r-0 md:last:pr-0 lg:px-10"
            >
              <p className="whitespace-nowrap font-heading text-[clamp(3rem,5.2vw,4.75rem)] font-bold leading-none tracking-[-0.015em] text-[var(--color-text)]">
                <MetricValue stat={stat} />
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
