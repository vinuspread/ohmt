import { ProductCard } from './ProductCard'
import { products } from '../../data/products'

export function ProductShowcase() {
  const featured = products.slice(0, 3)

  return (
    <section className="px-5 py-12 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--color-text)]">
            새로운 컬렉션
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-y-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
