import type { Metadata } from 'next'
import { CartView } from '../_components/sections/CartView'
import { SubHero } from '../_components/ui/SubHero'

export const metadata: Metadata = {
  title: 'FORMA 피규어 | 장바구니',
  description: '장바구니에 담은 FORMA 피규어와 수량, 주문 금액을 확인합니다.',
}

export default function CartPage() {
  return (
    <div className="pt-16">
      <SubHero
        title="장바구니"
        label="주문 확인"
        description={'담아둔 피규어의 에디션과 색상을 확인하고,\n주문할 수량을 다시 살펴보세요.'}
      />
      <CartView />
    </div>
  )
}
