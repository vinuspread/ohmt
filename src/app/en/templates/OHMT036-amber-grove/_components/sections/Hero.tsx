import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

const ledger = [
  ['1984', 'Est.'],
  ['42', 'Acres under care'],
  ['Wk 28', 'Current harvest'],
  ['18', 'Now growing'],
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-dark)] text-[var(--color-text-contrast)]">
      <Image
        src="/templates/OHMT036-amber-grove/hero-orchard-v3.jpg"
        alt="Morning light across Amber Grove orchard rows"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,35,24,0.78),rgba(28,35,24,0.24)),linear-gradient(0deg,rgba(28,35,24,0.6),transparent_46%)]" />

      <div className="relative px-4 py-14 sm:px-6 lg:px-10 lg:py-16">
        <div className="flex min-h-[42dvh] items-end">
          <div className="max-w-3xl">
            <p className="ledger-num mb-5 text-sm font-bold text-[var(--color-accent-light)]">01 · Organic orchard fruit</p>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl font-semibold leading-[var(--leading-heading)] sm:text-6xl lg:text-7xl">
              Seasonal fruit, picked with its story intact.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/78 sm:text-lg">
              Amber Grove grows, packs, and ships fruit from one family orchard with field notes from the week it was picked.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/en/templates/OHMT036-amber-grove/shop" className="inline-flex items-center justify-center gap-2 rounded bg-[var(--color-accent-light)] px-6 py-2.5 text-sm font-bold text-[var(--color-bg-dark)] transition-colors duration-200 hover:bg-white active:scale-[0.98]">
                Shop this harvest
                <ArrowRight size={17} weight="bold" />
              </Link>
              <Link href="/en/templates/OHMT036-amber-grove/about" className="inline-flex items-center justify-center rounded border border-white/25 px-6 py-2.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-white/10">
                Meet the orchard
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/12 bg-[var(--color-bg-dark)] px-4 py-6 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 sm:divide-x sm:divide-white/12">
          {ledger.map(([value, label]) => (
            <div key={label} className="px-4 py-3 sm:px-6 sm:py-0">
              <p className="ledger-num text-xl font-semibold sm:text-3xl">{value}</p>
              <p className="mt-0.5 text-xs text-[var(--color-text-muted-contrast)] sm:mt-1 sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
