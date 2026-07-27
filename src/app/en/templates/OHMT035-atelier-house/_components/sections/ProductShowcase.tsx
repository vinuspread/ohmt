import Link from 'next/link'
import { ProductCard } from './ProductCard'
import { products } from '../../data/products'

const base = '/en/templates/OHMT035-atelier-house'

export function ProductShowcase() {
  const featured = products.slice(0, 3)

  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--color-text)]">
            New arrivals
          </h2>
          <Link
            href={`${base}/shop`}
            className="hidden text-xs font-semibold text-[var(--color-text)] underline decoration-[var(--color-border)] underline-offset-4 transition-colors duration-300 hover:text-[var(--color-accent)] md:inline"
          >
            View all
          </Link>
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
