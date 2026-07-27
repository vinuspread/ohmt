import type { Metadata } from 'next'
import { ShopExplorer } from '../_components/sections/ShopExplorer'
import { SubHero } from '../_components/ui/SubHero'

export const metadata: Metadata = {
  title: 'FORMA 피규어 | 전체 상품',
  description: 'FORMA의 스케일 피규어, 메카, 치비, 개러지 키트, 한정 에디션을 판매 상태별로 살펴보세요.',
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
        label="스토어"
        description={
          '라인과 크기, 판매 상태에 따라 피규어를 찾아보세요.\n상세 페이지에서 소재와 제작 수량, 판매 현황을 확인할 수 있습니다.'
        }
      />
      <ShopExplorer initialLine={line} />
    </div>
  )
}
