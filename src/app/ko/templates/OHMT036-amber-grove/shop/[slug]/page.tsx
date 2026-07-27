import type { Metadata } from 'next'
import TemplatePendingPage from '../../_components/TemplatePendingPage'
import { getProduct, products } from '../../data/products'

const base = '/ko/templates/OHMT036-amber-grove'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)

  if (!product) {
    return { title: '상품 상세 | 앰버 그로브' }
  }

  return {
    title: `${product.name} - 앰버 그로브`,
    description: product.description,
    openGraph: {
      title: `${product.name} - 앰버 그로브`,
      description: product.description,
      images: [{ url: product.image, width: 1200, height: 1200 }],
    },
  }
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params
  const product = getProduct(slug)
  const productName = product?.name ?? '앰버 그로브 과일 상자'

  return (
    <TemplatePendingPage
      eyebrow={`과일 상자 목록 · ${productName}`}
      title="상품 상세 페이지를 준비하고 있습니다."
      description={[
        '과일 구성과 수확 시기, 배송 안내를 담은 상세 콘텐츠를 준비하고 있습니다.',
        '이번 주 판매 상품은 과일 상자 목록에서 먼저 확인해 주세요.',
      ]}
      backHref={`${base}/shop`}
      backLabel="다른 상품 보기"
    />
  )
}
