import { BASE, IMG } from '../../data/figures'
import { Button } from '../ui/Button'
import { ParallaxImage } from '../ui/ParallaxImage'

export function PreFooterCta() {
  return (
    <section className="relative flex min-h-[400px] items-end overflow-hidden bg-[var(--color-bg-tile)]">
      <ParallaxImage
        src={`${IMG}/prefooter-bg.webp`}
        alt="미니멀한 선반 위의 디자이너 토이와 세라믹 오브제"
        sizes="100vw"
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-full bg-black/45" />
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-start gap-9 px-4 pb-12 pt-24 lg:flex-row lg:items-end lg:justify-between lg:px-6 lg:pb-16">
        <h2 className="max-w-[760px] text-4xl leading-[var(--leading-display)] tracking-normal text-white lg:text-6xl">
          다음 예약 판매는 Series 04와 함께 시작됩니다.</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="solid-white" href={`${BASE}/shop`}>
            전체 상품 보기</Button>
          <Button variant="outline-inverse" href={`${BASE}/story#visit`}>
            신규 발매 알림 받기</Button>
        </div>
      </div>
    </section>
  )
}
