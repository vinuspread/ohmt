'use client'

import { motion } from 'motion/react'

const specs = [
  {
    title: 'Dual Boiler',
    desc: 'Separate brew and steam boilers for simultaneous operation without temperature recovery wait.',
    target: '2',
    unit: 'boilers',
    size: 'compact',
  },
  {
    title: 'PID Temperature Control',
    desc: 'Monitors and adjusts brew temperature within ±0.5°C of target - shot after shot.',
    target: '0.5',
    unit: '°C',
    size: 'compact',
  },
  {
    title: 'Commercial Group Head',
    desc: 'Heat-retention mass matched to café equipment for shot-to-shot thermal consistency.',
    target: '58',
    unit: 'mm',
    size: 'compact',
  },
  {
    title: 'Programmable Pre-Infusion',
    desc: 'Low-pressure soak phase before full extraction evens puck saturation and reduces channeling.',
    target: '10',
    unit: 's',
    size: 'wide',
  },
  {
    title: 'Shot Repeatability',
    desc: 'The aggregate promise: the tenth espresso of the day tastes like the first.',
    target: '100',
    unit: 'shots',
    size: 'compact',
  },
  {
    title: 'Hand-Finished Materials',
    desc: 'Brushed stainless steel, exposed brass fittings, machined dials - every surface inspectable.',
    target: '20+',
    unit: 'hours',
    size: 'wide',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
}

function SpecValue({ target, unit }: { target: string; unit: string }) {
  return (
    <span className="font-mono text-[length:var(--text-h1)] font-semibold leading-none tracking-tight text-white">
      {target}
      <span className="ml-2 align-baseline text-xs font-normal text-white/58 md:text-sm">{unit}</span>
    </span>
  )
}

export function PrecisionEngineering() {
  return (
    <section className="nova-gradient-precision px-5 py-16 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-12 md:gap-16">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-4 md:sticky md:top-28 md:self-start"
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-white/52">
            Precision block
          </p>
          <h2 className="mt-5 max-w-[520px] font-display text-[length:var(--text-h3)] font-bold leading-[var(--leading-heading)] tracking-tight text-white">
            Built around heat, pressure, repeat.
          </h2>
          <p className="mt-8 max-w-[400px] text-sm leading-relaxed text-white/68 md:text-sm">
            The page should feel mechanical because the promise is mechanical: control the variables that ruin home
            espresso, then make them visible.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="visible"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid border-l border-t border-white/18 md:col-span-8 md:grid-cols-3"
        >
          {specs.map((spec, index) => (
            <motion.div
              key={spec.title}
              variants={itemVariants}
              className={`grid min-h-[190px] border-b border-r border-white/18 p-5 md:min-h-[260px] md:p-7 ${
                spec.size === 'wide' ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-6">
                <SpecValue target={spec.target} unit={spec.unit} />
                <p className="font-mono text-xs text-white/38">0{index + 1}</p>
              </div>
              <div className="mt-8 self-end">
                <h3 className="font-display text-base font-bold leading-tight text-white md:text-lg">{spec.title}</h3>
                <p className={`mt-3 text-xs leading-relaxed text-white/72 md:text-sm ${
                  spec.size === 'wide' ? 'max-w-[520px]' : 'max-w-[330px]'
                }`}>{spec.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
