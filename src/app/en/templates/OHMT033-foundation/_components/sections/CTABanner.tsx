'use client'

import { motion } from 'framer-motion'
import { ActionButton } from '../ui/ActionButton'

export function CTABanner() {
  return (
    <section id="contact" className="bg-white px-6 py-16 md:px-12 md:pb-0 md:pt-32">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 90, damping: 18 }}
        className="mx-auto grid max-w-[1440px] border-y border-[#111827] md:grid-cols-2"
      >
        <div className="border-b border-[var(--color-border)] py-6 md:border-b-0 md:border-r md:py-12 md:pr-12">
          <p className="text-xs font-semibold leading-[var(--leading-heading)] text-[var(--color-primary)] md:text-sm">Contact</p>
          <h2 className="mt-6 max-w-[560px] font-heading text-4xl font-semibold leading-[var(--leading-heading)] text-[var(--color-text)] md:text-5xl">
            Partner with a foundation that shows its work.
          </h2>
        </div>
        <div className="flex flex-col gap-6 py-12 md:pb-12 md:pl-12 md:pt-20">
          <p className="max-w-[520px] text-base leading-[var(--leading-body)] text-[var(--color-text-muted)]">
            Whether you&rsquo;re a company exploring a giving partnership or an individual ready to volunteer, we&rsquo;ll
            route you to the right program within two business days.
          </p>
          <form className="flex max-w-[520px] flex-col gap-3 sm:flex-row">
            <label htmlFor="foundation-contact-email" className="sr-only">
              Email address
            </label>
            <input
              id="foundation-contact-email"
              type="email"
              required
              placeholder="you@company.com"
              className="ohmt033-contact-input h-12 w-full flex-1 border border-[rgba(17,24,39,0.12)] bg-[var(--color-bg)] px-5 text-sm text-[var(--color-text)] placeholder-[#788087] outline-none transition-colors focus:border-[var(--color-primary)] sm:w-[330px] sm:flex-none"
              style={{ height: 48 }}
            />
            <ActionButton type="submit" className="h-12 bg-[var(--color-text)] px-6 py-4 text-white hover:border-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-white">
              Get in touch
            </ActionButton>
          </form>
        </div>
      </motion.div>
    </section>
  )
}
