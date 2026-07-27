import Image from 'next/image'
import { BASE, IMG } from '../../data/figures'
import { Button } from '../ui/Button'

export function SplitPromo() {
  return (
    <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-4 py-16 lg:grid-cols-2 lg:gap-24 lg:px-6 lg:py-24">
      <div className="grid grid-cols-2 gap-6">
        <div className="relative aspect-[4/5] self-start bg-[var(--color-bg-tile)]">
          <Image
            src={`${IMG}/promo-a.webp`}
            alt="Collector shelf with softly lit figures behind glass"
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="relative mt-12 aspect-[9/16] bg-[var(--color-bg-tile)]">
          <Image
            src={`${IMG}/promo-b.webp`}
            alt="A figure held in a gloved hand for final inspection"
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="object-cover"
            unoptimized
          />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="max-w-[480px] text-2xl font-medium leading-[var(--leading-heading)] tracking-tight text-[var(--color-ink)] lg:text-4xl">
          Nine figures across five lines. Filter by line, scale, and status.
        </h2>
        <div className="mt-9">
          <Button href={`${BASE}/shop`}>Shop all</Button>
        </div>
      </div>
    </section>
  )
}
