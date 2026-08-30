import type { Metadata } from 'next'
import { ShopExplorer } from '../_components/sections/ShopExplorer'
import { SubHero } from '../_components/ui/SubHero'

export const metadata: Metadata = {
  title: 'OHMT - Forma Figures | Shop',
  description: 'FORMA 전체 카탈로그. Scale, Mecha, Chibi, Garage Kit, Limited 라인을 상태별로 탐색합니다.',
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ line?: string }>
}) {
  const { line } = await searchParams
  return (
    <div className="pt-16">
      <SubHero
        title="전체 카탈로그"
        label="숍"
        description="라인, 스케일, 판매 상태를 기준으로 피규어를 골라보세요. 각 상세 페이지에서 소재, 에디션 수량, 소진율까지 이어서 확인해보세요."
      />
      <ShopExplorer initialLine={line} />
    </div>
  )
}
