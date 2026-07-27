'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BASE, LINES } from '../../data/figures'
import { LabelRow } from '../ui/LabelRow'

export function LineTiles() {
  const railRef = useRef<HTMLDivElement>(null)

  const scrollBy = (dir: 1 | -1) => {
    const rail = railRef.current
    if (!rail) return
    const card = rail.firstElementChild as HTMLElement | null
    const step = card ? card.offsetWidth + 16 : rail.clientWidth / 2
    rail.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section>
      <LabelRow
        label="Explore by line"
        link={{ label: 'Shop all', href: `${BASE}/shop` }}
        onPrev={() => scrollBy(-1)}
        onNext={() => scrollBy(1)}
      />
      <div
        ref={railRef}
        className="rail-scroll flex gap-4 overflow-x-auto bg-[var(--color-bg)] px-4 py-4 lg:px-6"
      >
        {LINES.map((line) => (
          <Link
            key={line.id}
            href={`${BASE}/shop?line=${line.id}`}
            className="group relative aspect-[4/5] w-[70vw] shrink-0 overflow-hidden bg-[var(--color-bg-tile)] sm:w-[40vw] lg:w-[calc((100%_-_64px)/5)]"
          >
            <Image
              src={line.image}
              alt={`${line.label} line`}
              fill
              sizes="(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 20vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              unoptimized
            />
            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[rgba(25,27,24,0.6)] to-transparent"
            />
            <span className="absolute bottom-4 left-4 text-lg font-medium text-[var(--color-on-dark)] lg:text-xl">
              {line.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
