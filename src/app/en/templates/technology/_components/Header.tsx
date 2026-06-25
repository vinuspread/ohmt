"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
    <header className="sticky top-0 z-50 w-full bg-[var(--color-bg)]/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/en/templates/OHMT016-technology" className="flex items-center gap-2 group">
          <svg className="w-6 h-6 text-[var(--color-accent)] transition-transform duration-300 group-hover:rotate-90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="6" height="6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" rx="1"/>
            <rect x="15" y="3" width="6" height="6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" rx="1"/>
            <rect x="3" y="15" width="6" height="6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" rx="1"/>
            <rect x="15" y="15" width="6" height="6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" rx="1"/>
            <circle cx="12" cy="12" r="2" fill="currentColor"/>
          </svg>
          <span className="text-xl font-bold tracking-tight text-[var(--color-text)] font-heading">
            Oh My Template
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/en/templates/OHMT016-technology/products" className="text-base font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200">
            Products
          </Link>
          <Link href="/en/templates/OHMT016-technology/about" className="text-base font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200">
            About
          </Link>
          <Link href="/en/templates/OHMT016-technology/contact" className="text-base font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-200">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="#models"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-[var(--color-accent)] text-white font-bold text-xs uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all duration-300 rounded-md"
          >
            Reserve Now
          </Link>
        </div>

        {/* Mobile Menu Button - only when closed */}
        {!mobileMenuOpen && (
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors p-1"
          >
            <span className="sr-only">Open menu</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}
      </div>

    </header>

      {/* Mobile Fullscreen Menu - outside header to avoid stacking context */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-[var(--color-bg)] flex flex-col px-6 pb-12">
          {/* Top bar with logo + close */}
          <div className="flex items-center justify-between py-4 mb-8">
            <Link href="/en/templates/OHMT016-technology" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
              <svg className="w-6 h-6 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="6" height="6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" rx="1"/>
                <rect x="15" y="3" width="6" height="6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" rx="1"/>
                <rect x="3" y="15" width="6" height="6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" rx="1"/>
                <rect x="15" y="15" width="6" height="6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" rx="1"/>
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
              </svg>
              <span className="text-xl font-bold tracking-tight text-[var(--color-text)] font-heading">Oh My Template</span>
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} className="p-1 text-[var(--color-text)]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-2 flex-1">
            {[
              { label: 'Products', href: '/en/templates/OHMT016-technology/products' },
              { label: 'About', href: '/en/templates/OHMT016-technology/about' },
              { label: 'Contact', href: '/en/templates/OHMT016-technology/contact' },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[clamp(2.5rem,12vw,4rem)] font-extrabold tracking-[-0.03em] text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-200 leading-[1.1] border-b border-[var(--color-border)]/40 py-4"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8">
            <Link
              href="/en/templates/OHMT016-technology/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center py-4 bg-[var(--color-accent)] text-white font-bold text-sm uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all duration-300 rounded-md"
            >
              Reserve Now
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
