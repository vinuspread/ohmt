import Link from 'next/link'

const base = '/ko/templates/OHMT035-atelier-house'

export function BrandSplit() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 md:grid-cols-2 md:gap-16">
        <div className="max-w-[440px]">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
            스튜디오 소개
          </p>
          <h2 className="mt-4 whitespace-pre-line font-display text-[length:var(--text-h3)] font-semibold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)] word-keep-all">
            여섯명의 목수가
하나의 작업실에서 공동으로 제작합니다.</h2>
          <p className="mt-5 text-sm leading-relaxed text-[var(--color-text-muted)] word-keep-all">
            아틀리에 하우스는 제품 수를 무작정 늘리지 않습니다.
            <br className="hidden md:block" />
            300개가 넘는 양산형 카탈로그 대신 30개 이내의 제품을 선별해 운영합니다.
            <br className="hidden md:block" />
            의자와 식탁은 스케치부터 가공, 조립, 마감까지 여섯 명의 제작자가 직접 확인합니다.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`${base}/about`}
              className="inline-flex items-center justify-center rounded-[4px] bg-[#1a1a1a] px-6 py-3 text-xs font-semibold text-white transition-opacity duration-300 hover:opacity-85"
            >
              스튜디오 이야기</Link>
            <Link
              href={`${base}/about`}
              className="inline-flex items-center justify-center rounded-[4px] border border-[var(--color-border)] px-6 py-3 text-xs font-semibold text-[var(--color-text)] transition-colors duration-300 hover:border-[var(--color-text)]"
            >
              문의하기
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-[12px] md:h-[460px] md:aspect-auto">
          <img
            src="/templates/OHMT035-atelier-house/brand-workshop.jpg"
            alt="목재 가공 기구와 일하는 목수들이 있는 차분한 아틀리에 하우스 작업실"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
