"use client"

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg)] py-12 md:py-24 border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo and About */}
          <div className="md:col-span-5">
            <Link href="/en/templates/OHMT016-technology" className="flex items-center gap-2 mb-4">
              <svg className="w-6 h-6 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="6" height="6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" rx="1"/>
                <rect x="15" y="3" width="6" height="6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" rx="1"/>
                <rect x="3" y="15" width="6" height="6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" rx="1"/>
                <rect x="15" y="15" width="6" height="6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" rx="1"/>
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
              </svg>
              <span className="text-xl font-bold tracking-tight text-[var(--color-text)] font-heading">
                OHMT
              </span>
            </Link>
            <p className="text-sm text-[var(--color-text-muted)] leading-[1.2] max-w-sm">
              Empowering next generation engineering startups and autonomous creators with modular hardware ecosystems.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-text)] mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                  Key Features
                </Link>
              </li>
              <li>
                <Link href="#specs" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                  Specifications
                </Link>
              </li>
              <li>
                <Link href="#models" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                  Models Available
                </Link>
              </li>
            </ul>
          </div>

          {/* Licensing and contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-text)] mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#models" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                  Licensing Guidelines
                </Link>
              </li>
              <li>
                <Link href="#news" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <span className="text-sm text-[var(--color-text-muted)]">
                  Contact: info@robotflow.net
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-[var(--color-text-muted)]">
            © 2026 Oh My Template.
          </p>
          <div className="flex gap-6 sm:gap-4">
            <span className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent)] cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent)] cursor-pointer transition-colors">
              Changelog
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
