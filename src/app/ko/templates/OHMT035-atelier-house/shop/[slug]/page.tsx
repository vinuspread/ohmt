import type { Metadata } from 'next'
import { products } from '../../data/products'
import TemplatePendingPage from '../../_components/TemplatePendingPage'

const base = '/ko/templates/OHMT035-atelier-house'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return { title: '제품 상세 | 아틀리에 하우스' }
  return {
    title: `${product.name} | 아틀리에 하우스`,
    description: product.description,
    openGraph: {
      title: `${product.name} | 아틀리에 하우스`,
      description: product.description,
      images: [{ url: '/templates/OHMT035-atelier-house/og-image.jpg', width: 1200, height: 630 }],
    },
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  const productName = product?.name ?? '아틀리에 하우스 제품'

  return (
    <TemplatePendingPage
      eyebrow={`${productName} · 상품 상세 페이지`}
      title="상세페이지 준비 중"
      description={[
        '상품 상세 콘텐츠를 준비하고 있습니다.',
        '본 템플릿의 상세페이지는 비공개이며, 제품의 종류와 정보에 따라 달라집니다.',
      ]}
      backHref={base}
      backLabel="템플릿으로 돌아가기"
    />
  )
}
