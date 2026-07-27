import type { Metadata } from 'next'
import { FigureDetail } from '../../_components/sections/FigureDetail'
import { DropStrip } from '../../_components/sections/DropStrip'
import TemplatePendingPage from '../../_components/TemplatePendingPage'
import { BASE, FIGURES, figureBySlug } from '../../data/figures'

export function generateStaticParams() {
  return FIGURES.map((f) => ({ slug: f.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const figure = figureBySlug(slug)
  if (!figure) return { title: 'FORMA 피규어' }
  return {
    title: `${figure.name} | FORMA 피규어`,
    description: figure.description,
    openGraph: {
      title: `${figure.name} | FORMA 피규어`,
      description: figure.description,
      images: [{ url: figure.images.main }],
    },
  }
}

export default async function FigurePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const figure = figureBySlug(slug)
  if (!figure) {
    return (
      <div className="pt-16">
        <TemplatePendingPage
          eyebrow="피규어 상세"
          title="새 에디션의 상세 페이지를 준비하고 있습니다."
          description={[
            '소재와 제작 수량, 판매 일정이 확정되면 상세 정보를 공개합니다.',
            '현재 판매 중인 피규어는 전체 카탈로그에서 먼저 확인해 주세요.',
          ]}
          backHref={`${BASE}/shop`}
          backLabel="전체 카탈로그 보기"
        />
      </div>
    )
  }

  const related = FIGURES.filter((f) => f.slug !== figure.slug)
    .slice(0, 5)
    .map((f) => f.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: figure.name,
    description: figure.description,
    image: `https://ohmytemplate.com${figure.images.main}`,
    brand: { '@type': 'Brand', name: 'FORMA' },
    offers: {
      '@type': 'Offer',
      price: figure.priceKrw.toString(),
      priceCurrency: 'KRW',
      availability:
        figure.status === 'Sold out'
          ? 'https://schema.org/SoldOut'
          : figure.status === 'Coming soon'
            ? 'https://schema.org/PreOrder'
            : 'https://schema.org/InStock',
    },
  }

  return (
    <div className="pt-16">
      <FigureDetail figure={figure} />
      <DropStrip label="다른 피규어 보기" slugs={related} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  )
}
