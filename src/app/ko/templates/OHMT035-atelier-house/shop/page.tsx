import type { Metadata } from 'next'
import { ProductCard } from '../_components/sections/ProductCard'
import { products } from '../data/products'

export const metadata: Metadata = {
  title: '제품 | 아틀리에 하우스',
  description: '아틀리에 하우스의 원목 의자와 테이블, 조명, 패브릭 제품을 한곳에서 살펴보세요.',
}

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: '아틀리에 하우스 제품',
  numberOfItems: products.length,
  itemListElement: products.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.name,
    url: `/ko/templates/OHMT035-atelier-house/shop/${p.slug}`,
  })),
}

export default function ShopPage() {
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <section className="px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1440px]">
          <h1 className="font-display text-[length:var(--text-h2)] font-semibold tracking-tight text-[var(--color-text)]">
            제품</h1>
          <p className="mt-3 max-w-[520px] text-sm leading-relaxed text-[var(--color-text-muted)] word-keep-all">
            자작나무 의자와 참나무 테이블, 조명, 패브릭 제품을 소개합니다.
            <br className="hidden md:block" />
            제품에 따라 완제품으로 배송되거나 약 5분 정도의 간단한 설치 후 사용할 수 있습니다.
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
