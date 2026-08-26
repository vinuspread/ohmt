'use client'

import { Header } from './layout/Header'
import { Footer } from './layout/Footer'

export function TemplateWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-transparent text-[var(--color-text)] lg:pt-6">
      <div className="mx-auto max-w-[1440px]">
        <div className="bg-white px-4 pb-6 sm:px-6 sm:pb-12 lg:px-14 lg:pb-14 lg:pt-8">
          <Header />
          <main>{children}</main>
        </div>
        <p className="text-center text-[11px] leading-relaxed text-neutral-400 px-6 py-6">This page is a website design template demo by OHMT, not an actual client or operating business. The brand names, people, testimonials, contact details, and performance figures shown are example content.</p>
        <Footer />
      </div>
    </div>
  )
}
