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
        <Footer />
      </div>
    </div>
  )
}
