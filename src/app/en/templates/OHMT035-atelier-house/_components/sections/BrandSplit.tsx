import Link from 'next/link'

const base = '/en/templates/OHMT035-atelier-house'

export function BrandSplit() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="max-w-[440px]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
            The studio
          </p>
          <h2 className="mt-4 font-display text-[length:var(--text-h3)] font-semibold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)]">
            Six people, one workshop, no catalog padding.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-[var(--color-text-muted)]">
            Atelier House keeps a small line on purpose. Every piece is drawn, prototyped, and sat in by the same
            six people before it ships, which is also why the catalog stays under thirty items instead of three
            hundred.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`${base}/about`}
              className="inline-flex items-center justify-center rounded-[4px] bg-[#1a1a1a] px-6 py-3 text-xs font-semibold text-white transition-opacity duration-300 hover:opacity-85"
            >
              More about
            </Link>
            <Link
              href={`${base}/about`}
              className="inline-flex items-center justify-center rounded-[4px] border border-[var(--color-border)] px-6 py-3 text-xs font-semibold text-[var(--color-text)] transition-colors duration-300 hover:border-[var(--color-text)]"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-[12px] md:h-[460px] md:aspect-auto">
          <img
            src="/templates/OHMT035-atelier-house/brand-workshop.jpg"
            alt="Small furniture workshop interior with people working at a workbench"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
