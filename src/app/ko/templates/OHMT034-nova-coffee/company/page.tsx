import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const base = '/ko/templates/OHMT034-nova-coffee'

export const metadata: Metadata = {
  title: '브랜드 - NOVA Coffee',
  description:
    '포틀랜드 엔지니어링 팀이 만든 수리 가능한 듀얼보일러 에스프레소 머신, NOVA의 설계 기준.',
}

const principles = [
  [
    '01',
    '온도를 보이게',
    '한 샷과 다음 샷 사이에 무엇이 달라졌는지 확인할 수 있어야 합니다.',
    'spec-control-detail.png',
  ],
  [
    '02',
    '수리를 전제로',
    '보일러, 펌프, 개스킷은 교체 가능한 서비스 부품으로 다룹니다.',
    'technology-internals.png',
  ],
  [
    '03',
    '카운터를 존중',
    '진지한 장비처럼 느껴지되 주방 전체를 차지하지 않습니다.',
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
              Company
            </p>
            <h1 className="mt-4 max-w-[700px] font-display text-[length:var(--text-h1)] font-bold leading-[var(--leading-display)] tracking-tight text-[var(--color-text)]">
              감춰진 변수를 줄이려는 사람들이 만든 머신.
            </h1>
          </div>
          <p className="max-w-[560px] text-sm leading-relaxed text-[var(--color-text-muted)] md:col-span-7 md:justify-self-end md:text-sm">
            NOVA는 2019년 포틀랜드에서 시작했습니다. 약한 가전과 과한 카페 장비 사이에 놓을
            홈 에스프레소 머신이 필요했습니다.
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
                엔지니어, 디자이너, 서비스 담당자가 하나의 머신 패밀리에 집중합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-secondary)] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-display text-[length:var(--text-h3)] font-bold leading-tight text-[var(--color-text)]">
            세 가지 원칙으로 설계합니다.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {principles.map(([step, title, desc, image]) => (
              <article key={step} className="bg-white">
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-bg-secondary)]">
                  <Image
                    unoptimized
                    src={`/templates/OHMT034-nova-coffee/${image}`}
                    alt={`${title} 원칙을 보여주는 제품 이미지`}
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
            <h2 className="font-display text-2xl font-bold text-[var(--color-text)]">이제 구조를 보세요.</h2>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">브랜드의 기준은 내부 설계에서 확인됩니다.</p>
          </div>
          <Link
            href={`${base}/technology`}
            className="inline-flex border border-[var(--color-text)] bg-[var(--color-text)] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-[var(--color-text)]"
          >
            기술 보기
          </Link>
        </div>
      </section>
    </div>
  )
}
