import Image from 'next/image'
import Link from 'next/link'
import { products } from '../data/products'

export default function ShopPage() {
  return (
    <div>
      <section className="py-20 lg:py-28">
        <p className="ledger-num text-sm font-bold text-[var(--color-accent)]">Shop the harvest</p>
        <div className="mt-4 grid grid-cols-12 gap-y-6 sm:gap-x-10 lg:items-end">
          <h1 className="col-span-12 font-[family-name:var(--font-heading)] text-4xl font-semibold leading-[1.05] sm:text-6xl lg:col-span-7">Fruit boxes packed around the current crop.</h1>
          <p className="col-span-12 text-lg leading-8 text-[var(--color-text-muted)] lg:col-span-5">
            Every product below uses a distinct harvest image and square thumbnail framing, so the shop stays clean on mobile and desktop.
          </p>
        </div>
      </section>

      <section className="border-t border-[var(--color-border)] pb-24 pt-14">
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.slug} className="group">
              <Link href={`/en/templates/OHMT036-amber-grove/shop/${product.slug}`} className="block">
                <div className="relative aspect-square overflow-hidden bg-[var(--color-bg-secondary)]">
                  <Image src={product.image} alt={product.name} fill loading="eager" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-[var(--color-accent)]">{product.category}</p>
                    <h2 className="mt-2 text-2xl font-bold leading-[1.05]">{product.name}</h2>
                  </div>
                  <p className="ledger-num rounded border border-[var(--color-border)] px-3 py-1.5 text-sm font-bold">{product.price}</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">{product.description}</p>
                <span className="mt-4 inline-block text-sm font-bold text-[var(--color-accent)] underline decoration-1 underline-offset-4">
                  View details
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
