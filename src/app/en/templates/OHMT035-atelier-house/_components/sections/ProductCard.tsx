import Link from 'next/link'
import { ShoppingBagOpen } from '@phosphor-icons/react/dist/ssr'
import type { Product } from '../../data/products'

const base = '/en/templates/OHMT035-atelier-house'

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`${base}/shop/${product.slug}`} className="group block">
      <div className="relative aspect-square overflow-hidden rounded-[8px]">
        <img
          src={`/templates/OHMT035-atelier-house/product-${product.slug}.jpg`}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 inline-flex items-center rounded-[4px] bg-white px-2.5 py-1 text-xs font-semibold uppercase leading-none tracking-wider text-[var(--color-text)]">
          {product.tag}
        </span>
        <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--color-text)] opacity-0 shadow-[var(--shadow,0_2px_8px_rgba(0,0,0,0.08))] transition-opacity duration-300 group-hover:opacity-100">
          <ShoppingBagOpen size={16} weight="light" />
        </span>
      </div>
      <p className="mt-3 text-xs font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
        {product.category}
      </p>
      <h3 className="mt-1 text-sm font-semibold text-[var(--color-text)]">{product.name}</h3>
      <p className="mt-1 text-sm font-semibold text-[var(--color-text)]">${product.price}</p>
    </Link>
  )
}
