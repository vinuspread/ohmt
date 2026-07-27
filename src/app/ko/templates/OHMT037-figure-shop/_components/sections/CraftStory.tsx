import Image from 'next/image'
import { BASE, IMG } from '../../data/figures'
import { Button } from '../ui/Button'

export function CraftStory() {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] px-4 py-16 lg:px-6 lg:py-24">
        <h2 className="max-w-[760px] text-4xl leading-[var(--leading-display)] tracking-normal text-[var(--color-ink)] lg:text-6xl">
          소량 생산과 손도색,
          <br />
          공개된 에디션 번호.
        </h2>
        <p className="mt-6 max-w-[640px] text-base leading-relaxed text-[var(--color-ink-muted)]">
          모든 피규어는 두 차례 검수를 거칩니다.
          <br className="hidden sm:block" />
          판매 전에 제작 수량을 공개하고, 판매가 끝난 에디션은 같은 구성으로 다시 만들지 않습니다.
          <br className="hidden sm:block" />각 번호는 장식이 아니라 한 제품의 제작 이력을 나타냅니다.
        </p>
        <div className="mt-9">
          <Button href={`${BASE}/story`}>제작 과정 보기</Button>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="relative aspect-[7/5] bg-[var(--color-bg-tile)] sm:col-span-2 sm:self-end">
            <Image
              src={`${IMG}/craft-01.webp`}
              alt="도색 전 작업대에 놓인 마스킹 파츠"
              fill
              sizes="(max-width: 640px) 100vw, 66vw"
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="relative aspect-[5/7] bg-[var(--color-bg-tile)]">
            <Image
              src={`${IMG}/craft-02.webp`}
              alt="클레이 원형과 조형 도구가 놓인 작업대"
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
