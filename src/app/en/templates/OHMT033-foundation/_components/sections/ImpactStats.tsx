'use client'

import { Fragment } from 'react'
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
          className="grid grid-cols-1 gap-6 md:grid-cols-12"
        >
          {stats.map((stat, index) => (
            <Fragment key={stat.id}>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 26 },
                  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 110, damping: 16 } },
                }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-2 py-5 md:gap-6 md:py-0"
              >
                <p className="font-heading text-5xl font-semibold leading-none text-[var(--color-text)] md:text-6xl md:font-bold">
                  <MetricValue stat={stat} />
                </p>
                <p className="text-xs font-normal leading-[var(--leading-heading)] text-[var(--color-text-muted)] md:max-w-[250px] md:text-sm md:font-medium">
                  {stat.label}
                </p>
              </motion.div>
              {index < stats.length - 1 ? <div className="h-px bg-[rgba(16,20,18,0.11)] md:h-auto md:w-px" /> : null}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
