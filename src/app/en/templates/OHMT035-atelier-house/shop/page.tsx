import type { Metadata } from 'next'
import { ProductCard } from '../_components/sections/ProductCard'
import { products } from '../data/products'

export const metadata: Metadata = {
  title: 'OHMT - Shop',
  description: 'Browse Atelier House solid-wood seating, tables, lighting, and textiles.',
}

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Atelier House Products',
  numberOfItems: products.length,
  itemListElement: products.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.name,
    url: `/en/templates/OHMT035-atelier-house/shop/${p.slug}`,
  })),
}

export default function ShopPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <section className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1440px]">
          <h1 className="font-display text-[length:var(--text-h2)] font-semibold tracking-tight text-[var(--color-text)]">
            Shop
          </h1>
          <p className="mt-3 max-w-[520px] text-sm leading-relaxed text-[var(--color-text-muted)]">
            Solid-wood seating, tables, lighting, and textiles. Every piece ships assembled or with a five-minute setup.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-y-14">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </div>
  )
}
