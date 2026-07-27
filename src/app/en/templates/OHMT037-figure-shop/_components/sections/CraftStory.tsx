import Image from 'next/image'
import { BASE, IMG } from '../../data/figures'
import { Button } from '../ui/Button'

export function CraftStory() {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] px-4 py-16 lg:px-6 lg:py-24">
        <h2 className="max-w-[720px] text-4xl font-medium leading-[var(--leading-display)] tracking-tight text-[var(--color-ink)] lg:text-6xl">
          Small batches. Hand-lined masks. Numbered ledgers.
        </h2>
        <p className="mt-6 max-w-[560px] text-base leading-relaxed text-[var(--color-ink-muted)]">
          No figure leaves the studio without passing the same bench twice. We publish edition sizes before the claim window opens and never recast a closed run.
        </p>
        <div className="mt-9">
          <Button href={`${BASE}/story`}>Read the studio story</Button>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="relative aspect-[7/5] bg-[var(--color-bg-tile)] sm:col-span-2 sm:self-end">
            <Image
              src={`${IMG}/craft-01.webp`}
              alt="Airbrush bench with masked figure parts on stands"
              fill
              sizes="(max-width: 640px) 100vw, 66vw"
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="relative aspect-[5/7] bg-[var(--color-bg-tile)]">
            <Image
              src={`${IMG}/craft-02.webp`}
              alt="Sculpting desk with a clay maquette and tools"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  )
}
