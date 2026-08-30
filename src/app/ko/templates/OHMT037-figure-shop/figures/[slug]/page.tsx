import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FigureDetail } from '../../_components/sections/FigureDetail'
import { DropStrip } from '../../_components/sections/DropStrip'
import { FIGURES, figureBySlug } from '../../data/figures'

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
  if (!figure) return { title: 'OHMT - Forma Figures' }
  return {
    title: `OHMT - Forma Figures | ${figure.name}`,
    description: figure.description,
    openGraph: {
      title: `Forma Figures | ${figure.name}`,
      description: figure.description,
      images: [{ url: figure.images.main }],
    },
  }
}

export default async function FigurePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const figure = figureBySlug(slug)
  if (!figure) notFound()

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
      price: figure.priceUsd.toFixed(2),
      priceCurrency: 'USD',
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
      <DropStrip label="카탈로그에서 더 보기" slugs={related} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  )
}
