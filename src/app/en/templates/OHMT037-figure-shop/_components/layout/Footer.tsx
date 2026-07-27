import Link from 'next/link'
import { BASE, LINES } from '../../data/figures'
import { Button } from '../ui/Button'

const INFO_LINKS = [
  { label: 'Shipping', href: `${BASE}/shipping-returns#shipping` },
  { label: 'Returns', href: `${BASE}/shipping-returns#returns` },
  { label: 'Edition ledger', href: `${BASE}/shop` },
  { label: 'Care guide', href: `${BASE}/story` },
]

const STUDIO_LINKS = [
  { label: 'About FORMA', href: `${BASE}/story` },
  { label: 'Artists', href: `${BASE}/story#artists` },
  { label: 'Process', href: `${BASE}/story#process` },
  { label: 'Contact', href: `${BASE}/story#visit` },
]

export function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-[var(--color-on-dark)]">
      <div className="mx-auto max-w-[1440px] px-4 py-16 lg:px-6 lg:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="meta-label text-[var(--color-on-dark-muted)]">Info</h2>
            <ul className="mt-4 flex flex-col gap-2">
              {INFO_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="ui-label text-[var(--color-on-dark)] transition-colors duration-150 hover:text-[var(--color-accent)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="meta-label text-[var(--color-on-dark-muted)]">Lines</h2>
            <ul className="mt-4 flex flex-col gap-2">
              {LINES.map((line) => (
                <li key={line.id}>
                  <Link
                    href={`${BASE}/shop?line=${line.id}`}
                    className="ui-label text-[var(--color-on-dark)] transition-colors duration-150 hover:text-[var(--color-accent)]"
                  >
                    {line.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="meta-label text-[var(--color-on-dark-muted)]">Studio</h2>
            <ul className="mt-4 flex flex-col gap-2">
              {STUDIO_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="ui-label text-[var(--color-on-dark)] transition-colors duration-150 hover:text-[var(--color-accent)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xl font-medium leading-snug">
              Edition news, studio notes, and early claim windows.
            </p>
            <div className="mt-6">
              <Button variant="outline-inverse" href={`${BASE}/story#visit`}>
                Get drop alerts
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-[var(--color-border-dark)] pt-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-[0.2em]">FORMA</p>
            <p className="meta-label mt-2 max-w-[320px] text-[var(--color-on-dark-muted)]">
              Small-batch collectible figures. Sculpted, cast, and hand-finished in one studio.
            </p>
          </div>
          <p className="meta-label text-[var(--color-on-dark-muted)]">© 2026 OHMT.</p>
        </div>
      </div>
    </footer>
  )
}
