import Link from 'next/link'
import { categories } from '../../data/categories-data'

const base = '/en/templates/OHMT032-community'

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 py-8 text-sm text-[var(--color-text-muted)] lg:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-semibold text-[var(--color-text)]">OHMT Community</p>
          <p>© 2026 OHMT. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.slice(0, 4).map((category) => (
            <Link key={category.slug} href={`${base}/board/${category.slug}`} className="hover:text-[var(--color-accent)]">
              {category.name}
            </Link>
          ))}
          <Link href={`${base}/about`} className="hover:text-[var(--color-accent)]">
            About
          </Link>
        </div>
      </div>
    </footer>
  )
}
