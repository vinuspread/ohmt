import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const base = '/ko/templates/OHMT034-nova-coffee'

export const metadata: Metadata = {
  title: '브랜드 소개 - NOVA Coffee',
  description:
    '포틀랜드에서 시작한 NOVA의 설계 원칙과 수리 가능한 듀얼 보일러 에스프레소 머신 개발 이야기.',
}

const principles = [
  [
    '01',
    '온도를 직접 확인',
    '샷마다 온도와 압력 변화를 직접 확인할 수 있도록 설계합니다.',
    'spec-control-detail.png',
  ],
  [
    '02',
    '교체 가능한 부품',
    '보일러, 펌프, 개스킷을 각각 교체할 수 있는 부품으로 구성합니다.',
    'technology-internals.png',
  ],
  [
    '03',
    '주방에 맞는 크기',
    '상업용 장비의 핵심 기능을 담되 주방 카운터를 과도하게 차지하지 않도록 설계합니다.',
    'showroom-demo.png',
  ],
]

export default function CompanyPage() {
  return (
    <div>
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
              브랜드 소개</p>
            <h1 className="mt-4 max-w-[700px] font-display text-[length:var(--text-h1)] font-bold leading-[var(--leading-display)] tracking-tight text-[var(--color-text)]">
              온도와 압력을 직접 확인하는 머신.</h1>
          </div>
          <p className="max-w-[560px] text-sm leading-relaxed text-[var(--color-text-muted)] md:col-span-7 md:justify-self-end md:text-sm">
            NOVA는 2019년 포틀랜드에서 시작했습니다.
            <br className="hidden md:block" />
            가정용 머신의 크기와 상업용 장비의 성능을 함께 갖춘 에스프레소 머신이 필요했습니다.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-[1440px] gap-5 md:grid-cols-12">
          <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-bg-secondary)] md:col-span-7">
            <Image
              unoptimized
              src="/templates/OHMT034-nova-coffee/story-lifestyle.jpg"
              alt="현대적인 주방 카운터에 놓인 NOVA 에스프레소 머신"
              fill
              loading="eager"
              fetchPriority="high"
              className="object-cover brightness-[1.06] contrast-[1.04]"
              sizes="(min-width: 768px) 60vw, 100vw"
            />
          </div>
          <div className="nova-gradient-precision grid p-7 text-white md:col-span-5 md:p-9">
            <div className="self-end">
              <p className="font-mono text-[length:var(--text-display)] font-semibold leading-none">12</p>
              <p className="mt-3 text-sm leading-relaxed text-white/68">
                12명의 엔지니어, 디자이너, 서비스 담당자가 하나의 제품군을 함께 개발합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-secondary)] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-display text-[length:var(--text-h3)] font-bold leading-tight text-[var(--color-text)]">
            세 가지 설계 원칙.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {principles.map(([step, title, desc, image]) => (
              <article key={step} className="bg-white">
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-bg-secondary)]">
                  <Image
                    unoptimized
                    src={`/templates/OHMT034-nova-coffee/${image}`}
                    alt={`${title} 설계 원칙을 보여주는 제품 이미지`}
                    fill
                    className="object-cover brightness-[1.05] contrast-[1.04]"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="grid min-h-[220px] p-6 md:p-8">
                  <p className="font-mono text-xs font-semibold text-[var(--color-accent)]">{step}</p>
                  <div className="self-end">
                    <h3 className="font-display text-2xl font-bold leading-tight text-[var(--color-text)]">{title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-5 border-t border-[var(--color-border)] pt-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-[var(--color-text)]">내부 구조를 확인하세요.</h2>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">NOVA의 설계 기준은 내부 구조에서 확인할 수 있습니다.</p>
          </div>
          <Link
            href={`${base}/technology`}
            className="inline-flex border border-[var(--color-text)] bg-[var(--color-text)] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-[var(--color-text)]"
          >
            기술 자세히 보기</Link>
        </div>
      </section>
    </div>
  )
}
