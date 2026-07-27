import type { Metadata } from 'next'
import { TemplatePendingPage } from '../../_components/TemplatePendingPage'

const base = '/ko/templates/OHMT034-nova-coffee'

type ProductPageProps = {
  params: Promise<{ id: string }>
}

export const metadata: Metadata = {
  title: '상품 상세 페이지 - NOVA Coffee',
  description: 'NOVA 듀얼 보일러 에스프레소 머신의 상품 상세 페이지 안내.',
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const productName = id === 'nova-dual-boiler' ? 'NOVA 듀얼 보일러' : 'NOVA'

  return (
    <TemplatePendingPage
      eyebrow={`${productName} · 상품 상세 페이지`}
      title="상세페이지 준비 중"
      description={[
        'NOVA 듀얼 보일러 에스프레소 머신의 상세 콘텐츠를 준비하고 있습니다.',
        '본 템플릿의 상품 상세페이지는 비공개이며, 제품 구성과 판매 정보에 따라 달라집니다.',
      ]}
      backHref={base}
      backLabel="템플릿으로 돌아가기"
    />
  )
}
