import Link from 'next/link'
import Image from 'next/image'
import { BASE, formatUsd, lineLabel, type Figure } from '../../data/figures'
import { Badge, statusBadgeLabel, statusBadgeVariant } from './Badge'

export function FigureCard({ figure, priority = false }: { figure: Figure; priority?: boolean }) {
  return (
    <Link
      href={`${BASE}/figures/${figure.slug}`}
      className="group block bg-[var(--color-bg)]"
      aria-label={`${figure.name}, ${formatUsd(figure.priceUsd)}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-bg-tile)] transition-colors duration-200 group-hover:bg-[var(--color-bg-tile-deep)]">
        <div className="absolute left-3 top-3 z-10">
          <Badge variant={statusBadgeVariant(figure.status)}>{statusBadgeLabel(figure.status)}</Badge>
        </div>
        <Image
          src={figure.images.main}
          alt={`${figure.name}, ${lineLabel(figure.line)} 라인`}
          fill
          priority={priority}
          sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 20vw"
          className="object-cover transition-opacity duration-200 group-hover:opacity-0"
          unoptimized
        />
        <Image
          src={figure.images.alt}
          alt=""
          aria-hidden
          fill
          sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 20vw"
          className="object-cover opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          unoptimized
        />
      </div>
      <div className="flex flex-col gap-1 px-4 py-4">
        <span className="text-base font-semibold leading-tight text-[var(--color-ink)]">{figure.name}</span>
        <span className="meta-label text-[var(--color-ink-faint)]">{lineLabel(figure.line)}</span>
        <span className="value-text mt-1 text-[var(--color-ink)]">{formatUsd(figure.priceUsd)}</span>
      </div>
    </Link>
  )
}
