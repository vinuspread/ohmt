'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { news } from '../../data/news'
import { ButtonLink } from '../ui/ButtonLink'

const base = '/en/templates/OHMT033-foundation'
const preview = news.slice(0, 3)

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export function NewsroomPreview() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-16 md:px-12 md:py-32">
      <div className="mx-auto flex max-w-[1344px] flex-col gap-12">
        <div className="flex flex-col gap-6 overflow-hidden">
          <div className="h-px w-full bg-[#111827]" />
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <h2 className="w-full font-heading text-3xl font-semibold leading-[var(--leading-heading)] text-[var(--color-text)] md:w-[420px] md:text-3xl">
              Latest from the Foundation
            </h2>
            <ButtonLink
              href={`${base}/newsroom`}
              variant="outline"
              size="sm"
            >
              View newsroom
            </ButtonLink>
          </div>
        </div>

        <div className="grid gap-6 overflow-hidden md:grid-cols-3 md:gap-12">
          {preview.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 17, delay: i * 0.08 }}
            >
              <Link href={`${base}/newsroom`} className="group flex flex-col gap-6">
                <div className="relative h-[205px] w-full overflow-hidden md:h-[262px]">
                  <Image
                    unoptimized
                    priority
                    src={`/templates/OHMT033-foundation/${item.image}`}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
                    sizes="(min-width: 768px) 420px, calc(100vw - 48px)"
                  />
                </div>
                <div className="flex w-full flex-col gap-2 overflow-hidden md:w-[380px] md:gap-4">
                  <p className="text-xs font-bold leading-[var(--leading-heading)] text-[var(--color-primary)] md:font-medium md:text-[var(--color-text-muted)]">
                    {item.tag} &middot; {formatDate(item.date)}
                  </p>
                  <h3 className="font-heading text-lg font-semibold leading-[var(--leading-body)] text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                    {item.title}
                  </h3>
                  <p className="text-xs leading-[var(--leading-body)] text-[#5a615c] md:hidden">
                    The expanded cohort adds two new workshop cities and a returning-mentor track for alumni.
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
