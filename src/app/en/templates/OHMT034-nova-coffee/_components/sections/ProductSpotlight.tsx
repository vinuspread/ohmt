'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight } from '@phosphor-icons/react'

const base = '/en/templates/OHMT034-nova-coffee'

const products = [
  {
    image: 'product-1.jpg',
    alt: 'NOVA espresso machine on dark stone countertop, brushed steel body with exposed group head',
    label: '1.5L filtered tank',
    desc: 'A compact footprint with enough capacity for the daily counter.',
  },
  {
    image: 'product-2.jpg',
    alt: 'Extreme macro of espresso extraction with crema streaming into a demitasse cup',
    label: '±0.5°C PID',
    desc: 'Temperature stability you can taste across repeated shots.',
  },
  {
    image: 'product-3.jpg',
    alt: 'Hand locking the portafilter into the NOVA group head on a dark stone kitchen counter',
    label: '9 bar rotary pump',
    desc: 'Quiet pressure delivery for early kitchens and late apartments.',
  },
]

export function ProductSpotlight() {
  return (
    <section className="bg-[var(--color-bg)] px-5 py-16 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-5 md:grid-cols-12 md:items-end"
        >
          <h2 className="font-display max-w-[460px] text-[length:var(--text-h3)] font-bold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)] md:col-span-5">
            Product decisions, visible at a glance.
          </h2>
          <p className="max-w-[560px] text-sm leading-relaxed text-[var(--color-text-muted)] md:col-span-7 md:justify-self-end md:text-sm">
            Product is the first menu because the machine has to make sense before the story does: counter fit,
            extraction stability, and daily handling.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-12 md:grid-rows-2">
          {products.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
              className={`group ${i === 0 ? 'md:col-span-7 md:row-span-2' : 'md:col-span-5'}`}
            >
              <div className={`relative overflow-hidden bg-[var(--color-bg-secondary)] ${i === 0 ? 'aspect-[4/3] md:h-full md:aspect-auto' : 'aspect-[16/10]'}`}>
                <Image
                  unoptimized
                  loading="eager"
                  src={`/templates/OHMT034-nova-coffee/${p.image}`}
                  alt={p.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4 border-t border-[var(--color-border)] pt-4">
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                    {p.label}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-muted)]">{p.desc}</p>
                </div>
                <Link
                  href={`${base}/technology`}
                  className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors duration-300 hover:border-[var(--color-text)] hover:text-[var(--color-text)]"
                  aria-label={`Learn more about ${p.label}`}
                >
                  <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
