'use client'

import { useState } from 'react'
import Link from 'next/link'
import { List, X, ShoppingBag } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'framer-motion'

const base = '/ko/templates/OHMT035-atelier-house'

const navLinks = [
  { label: '홈', href: base },
  { label: '샵', href: `${base}/shop` },
  { label: '저널', href: `${base}/journal` },
  { label: '소개', href: `${base}/about` },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/95 px-5 py-4 backdrop-blur md:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex h-10 items-center justify-between">
          <Link href={base} className="group leading-none">
            <span className="font-display text-base font-semibold tracking-tight text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
              ATELIER HOUSE
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-[var(--color-text)] transition-colors duration-300 hover:text-[var(--color-accent)] focus-visible:outline-[var(--focus-outline)] focus-visible:outline-offset-[var(--focus-outline-offset)]"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href={`${base}/shop`}
              aria-label="장바구니"
              className="relative flex h-9 w-9 items-center justify-center text-[var(--color-text)] transition-colors duration-300 hover:text-[var(--color-accent)]"
            >
              <ShoppingBag size={19} weight="light" />
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-secondary)] text-xs font-semibold text-[var(--color-text-contrast)]">
                0
              </span>
            </Link>

            <motion.button
              onClick={() => setOpen((v) => !v)}
              whileTap={{ scale: 0.92 }}
              className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-[var(--color-border)] text-[var(--color-text)] md:hidden"
              aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
              aria-expanded={open}
            >
              {open ? <X size={20} weight="light" /> : <List size={20} weight="light" />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-3 border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
                <div className="flex flex-col gap-1">
                  {navLinks.map((l) => (
                    <Link
                      key={l.label}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="border-b border-[var(--color-border)] px-2 py-3 text-sm font-medium text-[var(--color-text)]"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
