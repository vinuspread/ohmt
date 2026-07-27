import { BASE, CAMPAIGN } from '../../data/figures'
import { Button } from '../ui/Button'
import { ParallaxImage } from '../ui/ParallaxImage'

export function CampaignBand() {
  return (
    <section className="relative flex min-h-[520px] items-end overflow-hidden bg-[var(--color-bg-tile)] lg:min-h-[70vh]">
      <ParallaxImage
        src={CAMPAIGN.image}
        alt="밝은 스튜디오 세트에 놓인 Ceramic Art Series 01 오브제"
        sizes="100vw"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[rgba(27,27,24,0.65)] to-transparent"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 pb-16 pt-24 lg:px-6">
        <h2 className="max-w-[800px] text-4xl leading-[var(--leading-display)] tracking-normal text-white lg:text-8xl">
          {CAMPAIGN.title}
        </h2>
        <p className="mt-4 max-w-[520px] text-base leading-relaxed text-white/80">
          {CAMPAIGN.subtitle}
        </p>
        <div className="mt-9">
          <Button href={`${BASE}/shop?line=limited`} variant="solid-white">
            시리즈 보기
          </Button>
        </div>
      </div>
    </section>
  )
}
