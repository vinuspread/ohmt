import Link from 'next/link'
import { ProductCard } from './ProductCard'
import { products } from '../../data/products'

const base = '/en/templates/OHMT035-atelier-house'

export function SecondaryProductRow() {
  const featured = products.slice(3, 5)

  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 md:grid-cols-2 md:items-end md:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
              Room-ready pairings
            </p>
            <h2 className="mt-4 font-display text-[length:var(--text-h3)] font-semibold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)]">
              Two pieces that make the room feel settled.
            </h2>
            <p className="mt-5 max-w-[460px] text-sm leading-relaxed text-[var(--color-text-muted)]">
              A deeper sofa, a lower table, and enough negative space around both. The template keeps this section
              reusable for seasonal edits without inventing a new card system.
            </p>
            <Link
              href={`${base}/shop`}
              className="mt-7 inline-flex items-center rounded-[4px] bg-[#1a1a1a] px-6 py-3 text-xs font-semibold text-white transition-opacity duration-300 hover:opacity-85"
            >
              View pairings
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:gap-y-4">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
