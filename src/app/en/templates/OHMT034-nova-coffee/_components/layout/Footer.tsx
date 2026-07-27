import Link from 'next/link'
import { InstagramLogo, YoutubeLogo, XLogo } from '@phosphor-icons/react'

const base = '/en/templates/OHMT034-nova-coffee'

const columns = [
  {
    title: 'Product',
    links: [
      { label: 'Product Home', href: base },
      { label: 'Technology', href: `${base}/technology` },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Care Guide', href: `${base}/support` },
      { label: 'Warranty', href: `${base}/support#warranty` },
      { label: 'Find a Store', href: `${base}/support#store` },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About NOVA', href: `${base}/company` },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-[var(--color-secondary)] px-5 md:px-8">
      <div className="mx-auto max-w-[1440px] py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="font-display text-lg font-bold tracking-tight text-[var(--color-text-contrast)]">
              NOVA · OHMT
            </p>
            <p className="mt-3 max-w-[220px] text-xs leading-relaxed text-[var(--color-text-muted)]">
              Precision espresso engineering. Built for those who measure by degrees.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Link href={base} aria-label="Instagram" className="text-[var(--color-text-muted-on-dark)] transition-colors hover:text-[var(--color-accent)]">
                <InstagramLogo size={18} />
              </Link>
              <Link href={base} aria-label="X (Twitter)" className="text-[var(--color-text-muted-on-dark)] transition-colors hover:text-[var(--color-accent)]">
                <XLogo size={18} />
              </Link>
              <Link href={base} aria-label="YouTube" className="text-[var(--color-text-muted-on-dark)] transition-colors hover:text-[var(--color-accent)]">
                <YoutubeLogo size={18} />
              </Link>
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-[var(--color-text-contrast)] transition-colors hover:text-[var(--color-accent)] focus-visible:outline-[var(--focus-outline)] focus-visible:outline-offset-[var(--focus-outline-offset)]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-[var(--color-text-muted)] md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 OHMT.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium uppercase tracking-wider text-white/30">Red Dot Design Award 2026</span>
            <span className="h-3 w-px bg-white/20" />
            <span className="text-xs font-medium uppercase tracking-wider text-white/30">Specialty Coffee Association</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
