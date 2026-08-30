import Image from 'next/image'
import { BASE, IMG } from '../../data/figures'
import { Button } from '../ui/Button'

export function CraftStory() {
  return (
    <section>
      <div className="mx-auto max-w-[1440px] px-4 py-16 lg:px-6 lg:py-24">
        <h2 className="max-w-[760px] text-4xl leading-[var(--leading-display)] tracking-normal text-[var(--color-ink)] lg:text-6xl">
          소량 생산, 손으로 잡은 마스크 라인, 공개된 에디션 번호.
        </h2>
        <p className="mt-6 max-w-[600px] text-base leading-relaxed text-[var(--color-ink-muted)]">
          모든 피스는 같은 벤치를 두 번 지나갑니다. 판매 전에는 수량을 공개하고, 종료된 런은 다시 만들지 않습니다.
          그래서 각 번호가 단순한 장식이 아니라 제작 기록으로 남습니다.
        </p>
        <div className="mt-9">
          <Button href={`${BASE}/story`}>스튜디오 스토리 보기</Button>
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
              alt="클레이 마케트와 도구가 놓인 조형 작업대"
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
