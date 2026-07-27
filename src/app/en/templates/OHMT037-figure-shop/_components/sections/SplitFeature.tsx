import { BASE, IMG } from '../../data/figures'
import { Button } from '../ui/Button'
import { ParallaxImage } from '../ui/ParallaxImage'

export function SplitFeature() {
  return (
    <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-4 py-16 lg:grid-cols-2 lg:gap-24 lg:px-6 lg:py-24">
      <div className="flex flex-col justify-center lg:order-1">
        <h2 className="max-w-[480px] text-2xl font-medium leading-[var(--leading-heading)] tracking-tight text-[var(--color-ink)] lg:text-4xl">
          Twelve paint passes, one brush for the mask line. Polystone body, PVC armor, and a finish that reads matte from every angle.
        </h2>
        <p className="mt-6 max-w-[440px] text-base leading-relaxed text-[var(--color-ink-muted)]">
          Every Vala leaves the studio with its edition number engraved on the base plate and a signed process card from the paint bench that finished it.
        </p>
        <div className="mt-9">
          <Button href={`${BASE}/figures/vala-kaiju-03`}>View Vala</Button>
        </div>
      </div>
      <div className="relative aspect-[2/3] bg-[var(--color-bg-tile)] lg:order-2">
        <ParallaxImage
          src={`${IMG}/feature-tall.webp`}
          alt="Extreme close-up of hand-painted face and mask detail on the Vala figure"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </section>
  )
}
