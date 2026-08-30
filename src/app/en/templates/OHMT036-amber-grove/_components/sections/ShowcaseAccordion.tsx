'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { products } from '../../data/products'

export function ShowcaseAccordion() {
  const [active, setActive] = useState(products[0])

  return (
    <section className="border-t border-[var(--color-border)] py-20 lg:py-28">
      <div className="grid grid-cols-12 gap-y-10 sm:gap-x-10 lg:gap-x-20 lg:items-start">
        <div className="col-span-12 lg:col-span-7">
          <p className="ledger-num text-sm font-bold text-[var(--color-accent)]">03 · Fruit calendar</p>
          <h2 className="mt-4 max-w-xl font-[family-name:var(--font-heading)] text-2xl font-semibold leading-[1.05] sm:text-4xl">
            Six ways to buy from the same harvest rhythm.
          </h2>
          <div className="mt-10 max-w-2xl divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
            {products.map((product, index) => {
              const selected = active.slug === product.slug
              return (
                <button
                  key={product.slug}
                  type="button"
                  onMouseEnter={() => setActive(product)}
                  onFocus={() => setActive(product)}
                  onClick={() => setActive(product)}
                  className="grid w-full gap-4 py-4 text-left transition-colors duration-200 sm:grid-cols-3 sm:items-center"
                >
                  <span className={`ledger-num text-xs font-semibold ${selected ? 'text-[var(--color-accent)]' : 'text-[var(--color-text-muted)]'}`}>0{index + 1}</span>
                  <span>
                    <span className={`block text-lg ${selected ? 'font-semibold text-[var(--color-text)]' : 'font-medium text-[var(--color-text)]'}`}>{product.category}</span>
                    <span className="mt-0.5 block text-xs text-[var(--color-text-muted)]">{product.season}</span>
                  </span>
                  <span className="ledger-num hidden text-xs font-semibold text-[var(--color-text-muted)] sm:block">{product.price}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="col-span-12 hidden lg:sticky lg:top-28 lg:col-span-5 lg:block">
          <div className="overflow-hidden p-4">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image src={active.image} alt={active.name} fill sizes="32vw" className="object-cover" />
            </div>
            <div className="pt-4">
              <p className="text-xs font-semibold text-[var(--color-accent)]">{active.category}</p>
              <h3 className="mt-2 font-[family-name:var(--font-heading)] text-2xl font-semibold">{active.name}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">{active.description}</p>
              <Link href={`/en/templates/OHMT036-amber-grove/shop/${active.slug}`} className="mt-5 inline-flex items-center justify-center rounded bg-[var(--color-bg-dark)] px-5 py-2 text-sm font-semibold text-[var(--color-text-contrast)] transition-colors duration-200 hover:opacity-90">
                View crate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
