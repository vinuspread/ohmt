import type { Metadata } from 'next'
import { Badge, statusBadgeLabel, statusBadgeVariant } from '../_components/ui/Badge'
import { Button } from '../_components/ui/Button'
import { FigureCard } from '../_components/ui/FigureCard'
import { LabelRow } from '../_components/ui/LabelRow'
import { SubHero } from '../_components/ui/SubHero'
import {
  ART_TOY_DROPS,
  BASE,
  FIGURES,
  NEW_DROPS,
  figuresBySlugs,
  formatUsd,
  lineLabel,
} from '../data/figures'

export const metadata: Metadata = {
  title: 'OHMT - Forma Figures | Drops',
  description:
    'FORMA drop calendar and edition ledger for new collectible figure releases, pre-orders, sold out runs, and art toy batches.',
}

const openDrops = figuresBySlugs(NEW_DROPS)
const artToyDrops = figuresBySlugs(ART_TOY_DROPS)
const preorderCount = FIGURES.filter((figure) => figure.status === 'Pre-order').length
const liveCount = FIGURES.filter((figure) => figure.status === 'In stock').length
const soldOutCount = FIGURES.filter((figure) => figure.status === 'Sold out').length

const ledgerRows = [
  { label: 'Live now', value: liveCount.toString(), caption: 'in-stock editions' },
  { label: 'Pre-order', value: preorderCount.toString(), caption: 'numbered runs open' },
  { label: 'Closed', value: soldOutCount.toString(), caption: 'archived editions' },
]

export default function DropsPage() {
  return (
    <div className="pt-16">
      <SubHero
        title="One run at a time."
        label="Edition drops"
        description="New releases, quiet restocks, and closed editions live here before they fold into the full catalog."
      >
        <Button href={`${BASE}/shop`} variant="solid">
          Shop all
        </Button>
        <Button href={`${BASE}/story#visit`}>Get drop alerts</Button>
      </SubHero>

      <LabelRow label="Drop ledger" link={{ label: 'Full catalog', href: `${BASE}/shop` }} />
      <section className="grid grid-cols-1 gap-6 bg-[var(--color-bg)] px-4 py-6 md:grid-cols-3 lg:px-6">
        {ledgerRows.map((row) => (
          <article
            key={row.label}
            className="bg-[var(--color-bg-tile)] px-6 py-10 lg:px-8 lg:py-14"
          >
            <p className="meta-label text-[var(--color-ink-faint)]">{row.label}</p>
            <p className="mt-4 font-mono text-6xl font-light tracking-tight text-[var(--color-ink)] md:text-7xl">
              {row.value}
            </p>
            <p className="mt-4 text-sm leading-[var(--leading-body)] text-[var(--color-ink-muted)]">
              {row.caption}
            </p>
          </article>
        ))}
      </section>

      <LabelRow label="Open drops" link={{ label: 'Shop all', href: `${BASE}/shop` }} />
      <section className="grid grid-cols-1 gap-6 bg-[var(--color-bg)] px-4 py-6 sm:grid-cols-2 lg:grid-cols-5 lg:px-6">
        {openDrops.map((figure, index) => (
          <FigureCard key={figure.slug} figure={figure} priority={index < 3} />
        ))}
      </section>

      <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-4 py-16 lg:grid-cols-2 lg:gap-24 lg:px-6 lg:py-24">
        <div>
          <p className="meta-label mb-6 text-[var(--color-ink-faint)]">Release notes</p>
          <h2 className="text-4xl font-medium leading-[var(--leading-heading)] tracking-tight text-[var(--color-ink)] lg:text-6xl">
            Claimed counts stay visible.
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {FIGURES.map((figure) => (
            <article
              key={figure.slug}
              className="grid grid-cols-1 gap-4 bg-[var(--color-bg-tile)] p-5 md:grid-cols-3 md:items-center md:p-6"
            >
              <div>
                <p className="text-lg font-medium text-[var(--color-ink)]">{figure.name}</p>
                <p className="meta-label mt-1 text-[var(--color-ink-faint)]">{lineLabel(figure.line)}</p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant={statusBadgeVariant(figure.status)}>{statusBadgeLabel(figure.status)}</Badge>
                <span className="meta-label text-[var(--color-ink-muted)]">
                  {figure.claimedPct}% claimed
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 md:justify-end">
                <span className="value-text text-[var(--color-ink)]">{formatUsd(figure.priceUsd)}</span>
                <Button href={`${BASE}/figures/${figure.slug}`} className="px-5 py-2">
                  View
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <LabelRow label="Art toys" link={{ label: 'Browse line', href: `${BASE}/shop?line=chibi` }} />
      <section className="grid grid-cols-1 gap-6 bg-[var(--color-bg)] px-4 py-6 sm:grid-cols-2 lg:grid-cols-5 lg:px-6">
        {artToyDrops.map((figure) => (
          <FigureCard key={figure.slug} figure={figure} />
        ))}
      </section>
    </div>
  )
}
