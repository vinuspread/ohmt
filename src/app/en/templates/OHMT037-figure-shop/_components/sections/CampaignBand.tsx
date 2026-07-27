import { BASE, CAMPAIGN } from '../../data/figures'
import { Button } from '../ui/Button'
import { ParallaxImage } from '../ui/ParallaxImage'

export function CampaignBand() {
  return (
    <section className="relative flex min-h-[520px] items-end overflow-hidden bg-[var(--color-bg-tile)] lg:min-h-[70vh]">
      <ParallaxImage
        src={CAMPAIGN.image}
        alt="Three kaiju figures of Series 03 arranged as a playful diorama on a bright studio set"
        sizes="100vw"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[rgba(27,27,24,0.65)] to-transparent"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 pb-16 pt-24 lg:px-6">
        <h2 className="max-w-[800px] text-4xl font-medium leading-[var(--leading-display)] tracking-tight text-white lg:text-8xl">
          {CAMPAIGN.title}
        </h2>
        <p className="mt-4 max-w-[480px] text-base leading-relaxed text-white/80">
          {CAMPAIGN.subtitle}
        </p>
        <div className="mt-9">
          <Button href={`${BASE}/shop?line=limited`} variant="solid-white">Shop the series</Button>
        </div>
      </div>
    </section>
  )
}
