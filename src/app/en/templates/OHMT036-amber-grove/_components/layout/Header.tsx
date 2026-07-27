'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X } from '@phosphor-icons/react'

const navItems = [
  { href: '/en/templates/OHMT036-amber-grove/shop', label: 'Shop', note: 'Seasonal fruit boxes' },
  { href: '/en/templates/OHMT036-amber-grove/about', label: 'About', note: 'Third-generation orchard' },
  { href: '/en/templates/OHMT036-amber-grove/journal', label: 'Journal', note: 'Field notes and harvest care' },
  { href: '/en/templates/OHMT036-amber-grove/visit', label: 'Visit', note: 'Pickup and wholesale' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white -mx-4 sm:-mx-6 lg:mx-0 px-4 sm:px-6 lg:px-0">
      <nav className="flex h-16 items-center justify-between">
        <Link href="/en/templates/OHMT036-amber-grove" className="font-[var(--font-body)] text-lg font-bold tracking-[0.08em] text-[var(--color-bg-dark)]">
          OHMT
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-[var(--color-text)] transition-colors duration-200 hover:text-[var(--color-accent)]">
              {item.label}
            </Link>
          ))}
        </div>

        <Link href="/en/templates/OHMT036-amber-grove/shop/orchard-gift-crate" className="hidden items-center rounded bg-[var(--color-bg-dark)] px-5 py-2 text-sm font-semibold text-[var(--color-text-contrast)] transition-colors duration-200 hover:opacity-90 md:flex">
          Seasonal box
        </Link>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex h-9 w-9 items-center justify-center text-[var(--color-bg-dark)] md:hidden"
          aria-label="Open menu"
        >
          <List size={24} />
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[60] bg-white md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex h-full flex-col">
              <div className="flex h-16 items-center justify-between px-4 sm:px-6">
                <span className="text-lg font-bold tracking-[0.08em] text-[var(--color-bg-dark)]">
                  OHMT
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-9 w-9 items-center justify-center text-[var(--color-bg-dark)]"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-1 flex-col justify-center px-8 pb-24">
                <nav className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group"
                    >
                      <p className="font-[family-name:var(--font-heading)] text-3xl font-semibold leading-tight text-[var(--color-text)] transition-colors duration-200 group-hover:text-[var(--color-accent)] sm:text-4xl">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm text-[var(--color-text-muted)] sm:text-base">{item.note}</p>
                    </Link>
                  ))}
                </nav>

                <Link
                  href="/en/templates/OHMT036-amber-grove/shop/orchard-gift-crate"
                  onClick={() => setOpen(false)}
                  className="mt-14 inline-flex items-center justify-center rounded bg-[var(--color-accent)] px-8 py-3 text-base font-bold text-[var(--color-text-contrast)] transition-colors duration-200 hover:opacity-90"
                >
                  Build a seasonal box
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
