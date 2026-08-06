import Link from 'next/link'

const base = '/en/templates/OHMT033-foundation'

const columns = [
  {
    title: 'Programs',
    links: [
      { label: 'Youth in Tech', href: `${base}/programs#youth-in-tech` },
      { label: 'Neighborhood Health Corps', href: `${base}/programs#neighborhood-health-corps` },
      { label: 'Green Futures', href: `${base}/programs#green-futures` },
      { label: 'First Gen Scholars', href: `${base}/programs#first-gen-scholars` },
    ],
  },
  {
    title: 'Foundation',
    links: [
      { label: 'About', href: `${base}/about` },
      { label: 'Stories', href: `${base}/stories` },
      { label: 'Newsroom', href: `${base}/newsroom` },
      { label: 'Annual report', href: `${base}/newsroom` },
    ],
  },
  {
    title: 'Get involved',
    links: [
      { label: 'Volunteer', href: `${base}/#contact` },
      { label: 'Partner inquiry', href: `${base}/#contact` },
      { label: 'Apply for a grant', href: `${base}/programs` },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-white px-6 pb-11 pt-16 md:px-12 md:py-16">
      <div className="mx-auto max-w-[1440px] md:border-t md:border-[var(--color-border)] md:pt-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-24">
          <div>
            <p className="text-base font-semibold leading-[var(--leading-heading)] text-[var(--color-text)] md:text-xs">OHMT Foundation</p>
            <p className="mt-3 max-w-[260px] text-xs leading-[var(--leading-body)] text-[var(--color-text-muted)]">
              Human-centered stories and verifiable program data for social impact.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-bold leading-[var(--leading-heading)] tracking-[0.08em] text-[var(--color-text-muted)] md:font-semibold md:tracking-normal">
                {col.title}
              </p>
              <ul className="mt-2 flex flex-col gap-2 md:mt-3 md:gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-xs leading-[var(--leading-heading)] text-[var(--color-text)] transition-colors hover:text-[var(--color-primary)] focus-visible:outline-[var(--focus-outline)] focus-visible:outline-offset-[var(--focus-outline-offset)]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 text-xs leading-[var(--leading-body)] text-[var(--color-text-muted)] md:flex-row md:items-center md:justify-between md:border-t md:border-[var(--color-border)] md:pt-6">
          <p>&copy; 2026 OHMT.</p>
          <p>contact@ohmt.site</p>
        </div>
      </div>
    </footer>
  )
}
