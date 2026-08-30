import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { products } from '../../data/products'

const base = '/ko/templates/OHMT035-atelier-house'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return { title: 'Atelier House - 제품 상세' }
  return {
    title: `Atelier House - ${product.name}`,
    description: product.description,
    openGraph: {
      title: `Atelier House - ${product.name}`,
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

  if (!product) {
    notFound()
  }

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    category: product.category,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'KRW',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <section className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[2/3] overflow-hidden rounded-[8px]">
            <img
              src={`/templates/OHMT035-atelier-house/product-${product.slug}.jpg`}
              alt={product.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
              {product.category}
            </p>
            <h1 className="mt-3 font-display text-[length:var(--text-h3)] font-semibold tracking-tight text-[var(--color-text)]">
              {product.name}
            </h1>
            <p className="mt-4 text-xl font-semibold text-[var(--color-text)]">
              {product.price.toLocaleString()}원
            </p>
            <p className="mt-6 max-w-[440px] text-sm leading-relaxed text-[var(--color-text-muted)] word-keep-all">
              {product.description}
            </p>

            <div className="mt-8 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
              <div className="grid grid-cols-2 py-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  소재
                </p>
                <p className="text-sm text-[var(--color-text)]">{product.material}</p>
              </div>
              <div className="grid grid-cols-2 py-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  크기
                </p>
                <p className="text-sm text-[var(--color-text)]">{product.dimensions}</p>
              </div>
            </div>

            <button className="mt-8 inline-flex w-full items-center justify-center rounded-[4px] bg-[#1a1a1a] px-7 py-3.5 text-sm font-semibold text-white transition-opacity duration-300 hover:opacity-85 sm:w-auto">
              장바구니 담기
            </button>

            <p className="mt-6 text-xs text-[var(--color-text-muted)]">
              <Link href={`${base}/shop`} className="underline decoration-[var(--color-border)] underline-offset-4 hover:text-[var(--color-accent)]">
                샵으로 돌아가기
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
