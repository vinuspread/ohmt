'use client'

import { useRef } from 'react'
import { BASE, figuresBySlugs } from '../../data/figures'
import { FigureCard } from '../ui/FigureCard'
import { LabelRow } from '../ui/LabelRow'

type DropStripProps = {
  id?: string
  label: string
  slugs: string[]
  priorityImages?: boolean
}

export function DropStrip({ id, label, slugs, priorityImages = false }: DropStripProps) {
  const railRef = useRef<HTMLDivElement>(null)
  const figures = figuresBySlugs(slugs)

  const scrollBy = (dir: 1 | -1) => {
    const rail = railRef.current
    if (!rail) return
    const card = rail.firstElementChild as HTMLElement | null
    const step = card ? card.offsetWidth + 16 : rail.clientWidth / 2
    rail.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section id={id} className="scroll-mt-16">
      <LabelRow
        label={label}
        link={{ label: 'Shop all', href: `${BASE}/shop` }}
        onPrev={() => scrollBy(-1)}
        onNext={() => scrollBy(1)}
      />
      <div
        ref={railRef}
        className="rail-scroll flex gap-4 overflow-x-auto bg-[var(--color-bg)] px-4 py-4 lg:px-6"
      >
        {figures.map((figure, i) => (
          <div key={figure.slug} className="w-[70vw] shrink-0 sm:w-[40vw] lg:w-[calc((100%_-_64px)/5)]">
            <FigureCard figure={figure} priority={priorityImages && i < 3} />
          </div>
        ))}
      </div>
    </section>
  )
}
