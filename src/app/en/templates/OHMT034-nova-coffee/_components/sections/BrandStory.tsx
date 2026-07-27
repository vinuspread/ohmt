'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight } from '@phosphor-icons/react'

const base = '/en/templates/OHMT034-nova-coffee'

const iconLinks = [
  {
    label: 'Company',
    desc: 'The Portland team and the three design principles',
    href: `${base}/company`,
  },
]

export function BrandStory() {
  return (
    <section className="bg-[var(--color-bg-secondary)] px-5 py-16 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display text-[length:var(--text-h3)] font-bold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)]">
              Built by engineers, explained on its own page.
            </h2>
            <p className="mt-5 max-w-[480px] text-sm leading-relaxed text-[var(--color-text-muted)] md:text-sm">
              The product page should stay focused on the machine. The company page carries the longer story:
              why two commercial-machine engineers built a smaller dual-boiler platform for serious homes.
            </p>
            <p className="mt-4 max-w-[480px] text-sm leading-relaxed text-[var(--color-text-muted)] md:text-sm">
              If you want the operating principles behind NOVA, start with the team, the repair logic, and the
              reason the machine is built around visible variables.
            </p>

            <div className="mt-8 max-w-[480px] border-t border-[var(--color-border)]">
              {iconLinks.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 1, y: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: 0.18 + 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between gap-5 border-b border-[var(--color-border)] py-4 transition-colors duration-300 hover:border-[var(--color-text)]"
                  >
                    <span>
                      <span className="block font-display text-sm font-bold text-[var(--color-text)]">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-xs text-[var(--color-text-muted)]">{item.desc}</span>
                    </span>
                    <ArrowRight
                      size={15}
                      className="shrink-0 text-[var(--color-text-muted)] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--color-text)]"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[5/6] overflow-hidden bg-[var(--color-bg)] md:h-[640px] md:aspect-auto"
          >
            <Image
              unoptimized
              loading="eager"
              src="/templates/OHMT034-nova-coffee/story-lifestyle.jpg"
              alt="NOVA espresso machine staged on a dark stone countertop in a minimal modern kitchen corner"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
