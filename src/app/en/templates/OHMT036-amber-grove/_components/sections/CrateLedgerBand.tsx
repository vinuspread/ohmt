import Image from 'next/image'

const fields = [
  ['Lot No.', 'AG-0728-C'],
  ['Harvest date', 'Jul 24-26'],
  ['Orchard block', 'Row 12, East'],
  ['Variety', 'Elberta peach'],
]

export function CrateLedgerBand() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-dark)]">
      <div className="relative h-[420px] sm:h-[480px]">
        <Image
          src="/templates/OHMT036-amber-grove/tracking-crates.jpg"
          alt="Fruit crates stacked in the orchard packing room, each marked with a lot number"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,35,24,0.8),transparent_55%)]" />

        <div className="absolute inset-x-0 top-4 px-4 sm:top-6 sm:px-6 lg:top-8 lg:px-10">
          <div className="max-w-md text-[var(--color-text-contrast)]">
            <p className="ledger-num text-xs font-bold text-[var(--color-accent-light)]">04 · Trace the crate</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/78">
              Every box is written into the ledger before it ships · customers see the exact row, date, and variety.
            </p>
            <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-white/25 pt-5">
              {fields.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs uppercase tracking-[0.08em] text-white/55">{label}</dt>
                  <dd className="ledger-num mt-1 text-sm font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
