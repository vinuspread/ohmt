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
            alt="유리 선반에 전시된 소량 생산 피규어"
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="relative mt-12 aspect-[9/16] bg-[var(--color-bg-tile)]">
          <Image
            src={`${IMG}/promo-b.webp`}
            alt="최종 검수 중인 피규어"
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="object-cover"
            unoptimized
          />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="max-w-[520px] text-2xl leading-[var(--leading-heading)] tracking-normal text-[var(--color-ink)] lg:text-4xl">
          다섯 가지 제품 라인을 크기와 소재, 판매 상태에 따라 비교해 보세요.</h2>
        <div className="mt-9">
          <Button href={`${BASE}/shop`}>전체 보기</Button>
        </div>
      </div>
    </section>
  )
}
