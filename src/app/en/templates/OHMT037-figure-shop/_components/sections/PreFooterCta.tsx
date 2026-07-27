import { BASE, IMG } from '../../data/figures'
import { Button } from '../ui/Button'
import { ParallaxImage } from '../ui/ParallaxImage'

export function PreFooterCta() {
  return (
    <section className="relative flex min-h-[400px] items-end overflow-hidden bg-[var(--color-bg-tile)]">
      <ParallaxImage
        src={`${IMG}/prefooter-bg.webp`}
        alt="Aesthetic designer toys and ceramic objects on a minimalist shelf"
        sizes="100vw"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-full bg-black/45"
      />
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-start gap-9 px-4 pb-12 pt-24 lg:flex-row lg:items-end lg:justify-between lg:px-6 lg:pb-16">
        <h2 className="max-w-[720px] text-4xl font-medium leading-[var(--leading-display)] tracking-tight text-white lg:text-6xl">
          The next claim window opens with Series 04.
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="solid-white" href={`${BASE}/shop`}>
            Shop all
          </Button>
          <Button variant="outline-inverse" href={`${BASE}/story#visit`}>
            Get drop alerts
          </Button>
        </div>
      </div>
    </section>
  )
}
