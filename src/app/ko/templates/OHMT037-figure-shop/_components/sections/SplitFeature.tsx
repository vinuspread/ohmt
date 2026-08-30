import { BASE, IMG } from '../../data/figures'
import { Button } from '../ui/Button'
import { ParallaxImage } from '../ui/ParallaxImage'

export function SplitFeature() {
  return (
    <section className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-4 py-16 lg:grid-cols-2 lg:gap-24 lg:px-6 lg:py-24">
      <div className="flex flex-col justify-center lg:order-1">
        <h2 className="max-w-[520px] text-2xl leading-[var(--leading-heading)] tracking-normal text-[var(--color-ink)] lg:text-4xl">
          마스크 라인은 한 번에 긋고, 무광 표면은 어느 각도에서도 부드럽게 읽히도록 조정합니다.
        </h2>
        <p className="mt-6 max-w-[480px] text-base leading-relaxed text-[var(--color-ink-muted)]">
          Solis는 베이스 플레이트에 에디션 번호를 새기고, 도색 벤치에서 작성한 프로세스 카드를 함께 보냅니다.
          작품을 고를 때부터 수량과 제작 흔적을 함께 볼 수 있도록 설계했습니다.
        </p>
        <div className="mt-9">
          <Button href={`${BASE}/figures/vala-kaiju-03`}>Solis 보기</Button>
        </div>
      </div>
      <div className="relative aspect-[2/3] bg-[var(--color-bg-tile)] lg:order-2">
        <ParallaxImage
          src={`${IMG}/feature-tall.webp`}
          alt="Solis 오브제의 손도색 마감 디테일"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </section>
  )
}
