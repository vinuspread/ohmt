import type { Metadata } from 'next'
import { ProductCard } from '../_components/sections/ProductCard'
import { products } from '../data/products'

export const metadata: Metadata = {
  title: 'Atelier House - 제품 목록',
  description: '아틀리에 하우스의 단단한 참나무와 자작나무 의자, 테이블, 조명, 패브릭 제품군을 둘러보세요.',
}

const itemListJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: '아틀리에 하우스 제품군',
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
            샵
          </h1>
          <p className="mt-3 max-w-[520px] text-sm leading-relaxed text-[var(--color-text-muted)] word-keep-all">
            자작나무 의자, 참나무 테이블, 조명 그리고 패브릭. 아틀리에 하우스의 모든 제품은 완제품 상태로 배송되거나 5분 내외의 초간단 설치만으로 바로 일상에서 사용할 수 있습니다.
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
