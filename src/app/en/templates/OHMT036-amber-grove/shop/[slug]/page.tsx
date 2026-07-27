import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, CheckCircle } from '@phosphor-icons/react/dist/ssr'
import { getProduct, products } from '../../data/products'

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)

  if (!product) {
    return {}
  }

  return {
    title: `${product.name} - Amber Grove`,
    description: product.description,
    openGraph: {
      title: `${product.name} - Amber Grove`,
      description: product.description,
      images: [{ url: product.image, width: 1200, height: 1200 }],
    },
  }
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params
  const product = getProduct(slug)

  if (!product) {
    notFound()
  }

  return (
    <div>
      <section className="py-14 lg:py-20">
        <Link href="/en/templates/OHMT036-amber-grove/shop" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-accent)]">
          <ArrowLeft size={16} weight="bold" />
          Back to shop
        </Link>

        <div className="mt-8 grid grid-cols-12 gap-y-10 sm:gap-x-10">
          <div className="relative col-span-12 aspect-square overflow-hidden bg-[var(--color-bg-secondary)] lg:col-span-7">
            <Image src={product.image} alt={product.name} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-28">
            <p className="ledger-num text-sm font-bold text-[var(--color-accent)]">{product.category}</p>
            <h1 className="mt-5 font-[family-name:var(--font-heading)] text-4xl font-semibold leading-tight sm:text-6xl">{product.name}</h1>
            <p className="ledger-num mt-6 text-2xl font-bold">{product.price}</p>
            <p className="mt-5 text-lg leading-8 text-[var(--color-text-muted)]">{product.description}</p>
            <div className="mt-8 border-t border-[var(--color-border)] pt-6">
              <p className="text-sm font-bold text-[var(--color-accent)]">Ships</p>
              <p className="mt-2 text-base leading-7 text-[var(--color-text-muted)]">{product.shipWindow}</p>
            </div>
            <ul className="mt-7 space-y-3">
              {product.details.map((detail) => (
                <li key={detail} className="flex gap-3 text-sm font-semibold">
                  <CheckCircle size={20} className="shrink-0 text-[var(--color-accent)]" weight="fill" />
                  {detail}
                </li>
              ))}
            </ul>
            <Link href="/en/templates/OHMT036-amber-grove/shop" className="mt-9 inline-flex items-center justify-center rounded bg-[var(--color-bg-dark)] px-7 py-2.5 text-sm font-bold text-[var(--color-text-contrast)] transition-colors duration-200 hover:opacity-90">
              Choose another crate
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
