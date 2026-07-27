'use client'

import Link from 'next/link'
import { InstagramLogo, PinterestLogo, YoutubeLogo } from '@phosphor-icons/react'

const base = '/en/templates/OHMT035-atelier-house'

const columns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Products', href: `${base}/shop` },
      { label: 'Seating', href: `${base}/shop` },
      { label: 'Tables', href: `${base}/shop` },
      { label: 'Lighting', href: `${base}/shop` },
    ],
  },
  {
    title: 'Studio',
    links: [
      { label: 'About', href: `${base}/about` },
      { label: 'Journal', href: `${base}/journal` },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-[var(--color-secondary)] px-5 md:px-8">
      <div className="mx-auto max-w-[1440px] py-16">
        <form
          onSubmit={(event) => event.preventDefault()}
          className="mb-14 grid gap-5 border-b border-white/10 pb-10 md:grid-cols-2 md:items-end"
        >
          <div>
            <p className="font-display text-[length:var(--text-lead)] font-semibold tracking-tight text-[var(--color-text-contrast)]">
              Stay updated
            </p>
            <p className="mt-3 max-w-[420px] text-xs leading-relaxed text-white/55">
              New small-batch releases, finish care notes, and room-sizing guides.
            </p>
          </div>
          <div className="flex w-full max-w-[440px] flex-col gap-2 sm:flex-row">
            <label htmlFor="atelier-newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="atelier-newsletter-email"
              type="email"
              placeholder="Email address"
              className="min-h-12 flex-1 rounded-[4px] border border-white/16 bg-white/5 px-4 text-sm text-white outline-none transition-colors placeholder:text-white/42 focus:border-white/44"
            />
            <button
              type="submit"
              className="min-h-12 rounded-[4px] bg-white px-5 text-xs font-semibold text-[#1A1A1A] transition-opacity hover:opacity-85"
            >
              Subscribe
            </button>
          </div>
        </form>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-2">
            <p className="font-display text-base font-semibold tracking-tight text-[var(--color-text-contrast)]">
              ATELIER HOUSE
            </p>
            <p className="mt-3 max-w-[280px] text-xs leading-relaxed text-white/55">
              Solid-wood furniture and lighting, built for rooms that get used every day.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Link href={base} aria-label="Instagram" className="text-white/50 transition-colors hover:text-[var(--color-accent)]">
                <InstagramLogo size={18} />
              </Link>
              <Link href={base} aria-label="Pinterest" className="text-white/50 transition-colors hover:text-[var(--color-accent)]">
                <PinterestLogo size={18} />
              </Link>
              <Link href={base} aria-label="YouTube" className="text-white/50 transition-colors hover:text-[var(--color-accent)]">
                <YoutubeLogo size={18} />
              </Link>
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/75 transition-colors hover:text-[var(--color-accent)] focus-visible:outline-[var(--focus-outline)] focus-visible:outline-offset-[var(--focus-outline-offset)]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-xs text-white/40">
          <p>&copy; 2026 OHMT.</p>
        </div>
      </div>
    </footer>
  )
}
