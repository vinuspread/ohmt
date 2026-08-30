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
        <Footer />
      </div>
    </CartProvider>
  )
}
