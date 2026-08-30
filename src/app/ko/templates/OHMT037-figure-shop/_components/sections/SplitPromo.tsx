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
            alt="유리 선반 안에 놓인 컬렉터블 오브제"
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="relative mt-12 aspect-[9/16] bg-[var(--color-bg-tile)]">
          <Image
            src={`${IMG}/promo-b.webp`}
            alt="최종 검수 중인 컬렉터블 피스"
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="object-cover"
            unoptimized
          />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="max-w-[520px] text-2xl leading-[var(--leading-heading)] tracking-normal text-[var(--color-ink)] lg:text-4xl">
          다섯 개 라인을 스케일, 소재, 판매 상태 기준으로 천천히 비교해 보세요.
        </h2>
        <div className="mt-9">
          <Button href={`${BASE}/shop`}>전체 보기</Button>
        </div>
      </div>
    </section>
  )
}
