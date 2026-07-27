import type { Metadata } from 'next'
import { CartView } from '../_components/sections/CartView'
import { SubHero } from '../_components/ui/SubHero'

export const metadata: Metadata = {
  title: 'OHMT - Forma Figures | Cart',
  description: 'Your FORMA cart: numbered editions held for checkout.',
}

export default function CartPage() {
  return (
    <div className="pt-16">
      <SubHero
        title="Cart"
        label="Order"
        description="Review held editions, quantities, and the current template checkout summary."
      />
      <CartView />
    </div>
  )
}
