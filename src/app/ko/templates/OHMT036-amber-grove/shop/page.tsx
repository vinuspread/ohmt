import Image from 'next/image'
import Link from 'next/link'
import { products } from '../data/products'

const base = '/ko/templates/OHMT036-amber-grove'

export default function ShopPage() {
  return (
    <div>
      <section className="py-20 lg:py-28">
        <p className="ledger-num text-sm font-bold text-[var(--color-accent)]">이번 주 수확</p>
        <div className="mt-4 grid grid-cols-12 gap-y-6 sm:gap-x-10 lg:items-end">
          <h1 className="col-span-12 font-[family-name:var(--font-heading)] text-3xl font-semibold leading-[var(--leading-body)] sm:text-5xl lg:col-span-7">가장 신선한 과일을 엄선해 다양한 식감과 맛을 즐기실 수 있게 구성합니다.</h1>
          <p className="col-span-12 text-lg leading-8 text-[var(--color-text-muted)] lg:col-span-5">
            구성은 수확에 따라 매주 바뀝니다. 모든 상자에는 밭과 과일의 기록지를 동봉합니다.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] pb-24 pt-14">
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.slug} className="group">
              <Link href={`${base}/shop/${product.slug}`} className="block">
                <div className="relative aspect-square overflow-hidden bg-[var(--color-bg-secondary)]">
                  <Image src={product.image} alt={product.name} fill loading="eager" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-[var(--color-accent)]">{product.category}</p>
                    <h2 className="mt-2 text-2xl font-bold leading-[var(--leading-body)]">{product.name}</h2>
                  </div>
                  <p className="ledger-num rounded border border-[var(--color-border)] px-3 py-1.5 text-sm font-bold">{product.price}</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">{product.description}</p>
                <span className="mt-4 inline-block text-sm font-bold text-[var(--color-accent)] underline decoration-1 underline-offset-4">
                  자세히 보기
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
