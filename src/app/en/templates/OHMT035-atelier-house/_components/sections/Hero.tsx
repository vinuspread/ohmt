'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const base = '/en/templates/OHMT035-atelier-house'

export function Hero() {
  return (
    <section className="bg-[var(--color-bg)] px-4 py-4 md:px-6 md:py-6">
      <div className="mx-auto grid min-h-[560px] max-w-[1440px] gap-4 md:grid-cols-2 md:min-h-[62vh]">
        <div className="relative min-h-[420px] overflow-hidden rounded-[12px]">
          <img
            src="/templates/OHMT035-atelier-house/hero-left.jpg"
            alt="Quiet living room with a low lounge chair and solid wood table"
            className="absolute inset-0 h-full w-full object-cover object-[75%_center]"
          />
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-5 left-5 right-5 max-w-[430px] rounded-[8px] bg-[#FAFAF8] p-6 text-[var(--color-text)] shadow-[0_8px_24px_rgba(0,0,0,0.14)] md:bottom-8 md:left-8 md:right-auto md:p-8"
          >
            <p className="font-display text-[length:var(--text-h2)] font-semibold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)]">
              Furniture built to be lived on, not around.
            </p>
            <p className="mt-4 max-w-[360px] text-sm leading-relaxed text-[var(--color-text-muted)]">
              Solid-wood seating, tables, lighting, and textiles from a studio that repairs before it replaces.
            </p>
            <Link
              href={`${base}/shop`}
              className="mt-6 inline-flex items-center rounded-[4px] bg-[#1a1a1a] px-6 py-3 text-xs font-semibold text-white transition-opacity duration-300 hover:opacity-85"
            >
              Shop the collection
            </Link>
          </motion.div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-[12px]">
          <img
            src="/templates/OHMT035-atelier-house/hero-right.jpg"
            alt="Dining corner with a solid oak table and woven textile detail"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-5 top-5 w-[min(78%,320px)] rounded-[8px] bg-[#1A1A1A] p-5 text-white md:right-8 md:top-8 md:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/45">New</p>
                <p className="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight">
                  Quarry Dining Table
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center rounded-[4px] bg-white px-2.5 py-1 text-xs font-semibold uppercase leading-none tracking-wider text-[var(--color-text)]">
                Oak
              </span>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-white/62">
              A six-seat oak table with a resurfacing-friendly oil finish.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
