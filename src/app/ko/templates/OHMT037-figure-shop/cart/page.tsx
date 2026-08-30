import type { Metadata } from 'next'
import { CartView } from '../_components/sections/CartView'
import { SubHero } from '../_components/ui/SubHero'

export const metadata: Metadata = {
  title: 'OHMT - Forma Figures | Cart',
  description: '장바구니에 담은 FORMA 에디션과 주문 요약.',
}

export default function CartPage() {
  return (
    <div className="pt-16">
      <SubHero
        title="장바구니"
        label="주문"
        description="담아둔 에디션, 컬러웨이, 수량을 한 번 더 확인합니다."
      />
      <CartView />
    </div>
  )
}
