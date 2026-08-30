'use client'

import { Header } from './layout/Header'
import { Footer } from './layout/Footer'

export function TemplateWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-[var(--color-bg)] text-[var(--color-text)]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
