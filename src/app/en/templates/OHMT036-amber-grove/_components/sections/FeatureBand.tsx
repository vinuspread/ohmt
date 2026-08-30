import Image from 'next/image'

const tags = ['Field-picked', 'Paper packed', 'Cold held']

export function FeatureBand() {
  return (
    <section className="border-t border-[var(--color-border)] py-20 lg:py-28">
      <div className="grid grid-cols-12 items-center gap-y-10 sm:gap-x-10 lg:gap-x-20">
        <div className="relative col-span-12 aspect-[4/3] overflow-hidden lg:col-span-7">
          <Image src="/templates/OHMT036-amber-grove/feature-harvest.jpg" alt="Hands harvesting stone fruit into a crate" fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
        </div>
        <div className="col-span-12 lg:col-span-5">
          <p className="ledger-num text-sm font-bold text-[var(--color-accent)]">02 · Orchard practice</p>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-semibold leading-[1.05] sm:text-4xl">
            Picked for the day it reaches your kitchen.
          </h2>
          <p className="mt-5 text-base leading-7 text-[var(--color-text-muted)]">
            We do not chase perfect-looking fruit that travels forever. Each box is sorted for texture, aroma, and the number of days it needs before it is ready to eat.
          </p>
          <dl className="ledger-num mt-8 flex flex-wrap gap-x-12 gap-y-2 border-t border-[var(--color-border)] pt-5 text-sm">
            <div className="flex items-baseline gap-3">
              <dt className="text-[var(--color-text-muted)]">Pack room temp</dt>
              <dd className="font-medium">58°F</dd>
            </div>
            <div className="flex items-baseline gap-3">
              <dt className="text-[var(--color-text-muted)]">Years farming</dt>
              <dd className="font-medium">12</dd>
            </div>
          </dl>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((item) => (
              <span key={item} className="ledger-num rounded border border-[var(--color-border)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.06em] text-[var(--color-text-muted)]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
