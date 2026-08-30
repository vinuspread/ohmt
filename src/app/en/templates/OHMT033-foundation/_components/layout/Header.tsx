'use client'

import { useState } from 'react'
import Link from 'next/link'
import { List, X } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'framer-motion'
import { ButtonLink } from '../ui/ButtonLink'

const base = '/en/templates/OHMT033-foundation'

const navLinks = [
  { label: 'About', href: `${base}/about` },
  { label: 'Stories', href: `${base}/stories` },
  { label: 'Programs', href: `${base}/programs` },
  { label: 'Newsroom', href: `${base}/newsroom` },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 px-6 py-4 backdrop-blur md:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex h-10 items-center justify-between">
          <Link href={base} className="group leading-none">
            <span className="text-base font-bold tracking-tight text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-primary)]">
              VERITAS Foundation
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="relative text-xs font-medium text-[var(--color-text)] transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[var(--color-primary)] after:transition-transform after:duration-300 hover:text-[var(--color-primary)] hover:after:scale-x-100 focus-visible:outline-[var(--focus-outline)] focus-visible:outline-offset-[var(--focus-outline-offset)]"
              >
                {l.label}
              </Link>
            ))}
            <ButtonLink href={`${base}/#contact`} size="sm" variant="dark">
              Partner With Us
            </ButtonLink>
          </nav>

          <motion.button
            onClick={() => setOpen((v) => !v)}
            whileTap={{ scale: 0.92 }}
            className="flex h-10 w-10 items-center justify-center border border-black/[0.1] text-[var(--color-text)] transition-colors duration-300 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={21} weight="regular" /> : <List size={21} weight="regular" />}
          </motion.button>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-3 border border-black/[0.08] bg-white p-3">
                <div className="flex flex-col">
                  {navLinks.map((l) => (
                    <Link
                      key={l.label}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="border-b border-[var(--color-border)] px-2 py-3 text-base font-medium text-[var(--color-text)]"
                    >
                      {l.label}
                    </Link>
                  ))}
                  <ButtonLink
                    href={`${base}/#contact`}
                    onClick={() => setOpen(false)}
                    variant="primary"
                    className="mt-3 justify-between"
                  >
                    Partner With Us
                  </ButtonLink>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
