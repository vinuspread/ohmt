'use client'

import { CartProvider } from './CartContext'
import { Header } from './layout/Header'
import { Footer } from './layout/Footer'

export function TemplateWrapper({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <div className="ohmt037fs min-h-dvh">
        <Header />
        <main>{children}</main>
        <p className="text-center text-[11px] leading-relaxed text-neutral-400 px-6 py-6">This page is a website design template demo by OHMT, not an actual client or operating business. The brand names, people, testimonials, contact details, and performance figures shown are example content.</p>
        <Footer />
      </div>
    </CartProvider>
  )
}
