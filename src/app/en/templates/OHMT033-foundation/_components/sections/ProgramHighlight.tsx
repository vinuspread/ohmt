'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { ButtonLink } from '../ui/ButtonLink'

const base = '/en/templates/OHMT033-foundation'

export function ProgramHighlight() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section ref={ref} className="bg-white px-6 py-16 md:px-12 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ type: 'spring', stiffness: 90, damping: 18 }}
        className="mx-auto max-w-[1440px] border-t border-[var(--color-text)] pt-6 md:pt-12"
      >
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <p className="mb-4 text-sm font-semibold leading-none text-[var(--color-accent)]">
              Featured Program
            </p>
            <h2 className="font-heading text-[length:var(--text-h2)] font-semibold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)]">
              Youth in Tech
            </h2>
            <p className="mt-6 max-w-[600px] text-base leading-relaxed text-[var(--color-text-muted)] md:text-base">
              Since 2020, 2,400 students have built their first robot through this program. Weekend labs and
              mentorship turn technical education into a pathway, not a one-day workshop.
            </p>
            <ButtonLink href={`${base}/programs#youth-in-tech`} className="mt-9">
              Learn more
            </ButtonLink>
          </div>

          <div className="grid gap-6 pt-2 md:mt-6 md:border-l md:border-[var(--color-border)] md:pl-6 md:pt-0">
            <div>
              <p className="font-heading text-[length:var(--text-h2)] font-semibold leading-none tracking-tight text-[var(--color-text)]">
                2,400
              </p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--color-text-muted)]">
                Students since 2020
              </p>
            </div>
            <div>
              <p className="font-heading text-[length:var(--text-h2)] font-semibold leading-none tracking-tight text-[var(--color-text)]">
                74%
              </p>
              <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--color-text-muted)]">
                Continue into engineering or digital pathways
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-12 min-h-[320px] overflow-hidden bg-[var(--color-media-dark)] md:mt-16 md:min-h-[680px] ohmt033-photo-frame">
          <Image
            unoptimized
            src={`/templates/OHMT033-foundation/program-1.jpg`}
            alt="Youth in Tech students working with robotics equipment during a weekend workshop"
            fill
            className="object-cover object-[center_42%] ohmt033-photo-cool"
            sizes="(min-width: 768px) 1320px, 100vw"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,rgba(8,13,24,0)_0%,rgba(8,13,24,0.7)_100%)]" />
          <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col gap-3 md:bottom-6 md:left-6 md:right-6 md:flex-row md:items-end md:justify-between">
            <p className="max-w-[360px] text-sm font-medium leading-relaxed text-white/82">
              Weekend lab / robotics / peer mentoring
            </p>
            <p className="w-fit bg-white px-4 py-3 text-xs font-semibold text-[var(--color-text)]">
              2,400 students since 2020
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
