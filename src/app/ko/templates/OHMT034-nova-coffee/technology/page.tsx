import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const base = '/ko/templates/OHMT034-nova-coffee'

export const metadata: Metadata = {
  title: '제품 기술 - NOVA 정밀 엔지니어링',
  description:
    'NOVA의 듀얼 보일러 구조, PID 온도 제어, 58mm 그룹 헤드, 프리인퓨전, 교체 가능한 내부 부품을 소개합니다.',
}

const modules = [
  {
    step: '01',
    title: '독립 듀얼 보일러',
    desc: '추출용과 스팀용 보일러가 각각 설정 온도를 유지합니다.',
    image: 'technology-internals.png',
  },
  {
    step: '02',
    title: '압력 게이지',
    desc: '압력 게이지로 추출 압력을 바로 확인합니다.',
    image: 'spec-control-detail.png',
  },
  {
    step: '03',
    title: '카운터에 맞춘 크기',
    desc: '상업용 그룹 헤드와 듀얼 보일러 구조를 가정용 카운터에 맞는 크기로 구성했습니다.',
    image: 'showroom-demo.png',
  },
]

const specGroups = [
  {
    step: '01',
    title: '추출 시스템',
    rows: [
      ['보일러', '스테인리스 듀얼 보일러, 추출용 0.5L / 스팀용 1.2L'],
      ['온도', '설정 온도 기준 ±0.5°C PID 제어'],
      ['펌프', '로터리 베인 펌프, 추출 압력 9bar'],
      ['프리인퓨전', '0~10초 저압 구간 설정'],
      ['그룹 헤드', '58mm 상업용 규격, 크롬 도금 황동'],
    ],
  },
  {
    step: '02',
    title: '설치와 사용',
    rows: [
      ['물탱크', '카본 필터를 포함한 1.5L 탈착식 물탱크'],
      ['크기', '14 in W x 18 in D x 16 in H'],
      ['예열', '콜드 스타트 기준 15분 이내'],
      ['소음', '로터리 펌프 기준 약 50dB'],
    ],
  },
  {
    step: '03',
    title: '마감과 유지관리',
    rows: [
      ['바디', '브러시드 304 스테인리스, 무광 차콜 패널'],
      ['보증', '보일러 5년, 전장 2년, 소모품 1년'],
      ['부품 교체', '보일러, 펌프, 그룹 헤드 개스킷을 모듈 단위로 교체'],
      ['관리', '수질에 따라 8~12주 간격으로 디스케일링'],
    ],
  },
]

const summary = [
  ['2', '독립 보일러'],
  ['58mm', '상업용 그룹 헤드'],
  ['9 bar', '추출 압력'],
  ['5년', '보일러 보증'],
]

const howItWorks = [
  ['01', '전원과 예열', '전원을 켜면 두 보일러가 설정 온도까지 각각 예열됩니다.'],
  ['02', '도징과 탬핑', '분쇄 원두를 담고 표면이 수평이 되도록 탬핑합니다.'],
  ['03', '장착과 추출', '프리인퓨전 후 9bar 압력으로 본 추출을 진행합니다.'],
  ['04', '스티밍과 서빙', '스팀 보일러를 사용하는 동안에도 추출 보일러는 설정 온도를 유지합니다.'],
]

export default function TechnologyPage() {
  return (
    <div>
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
              제품 기술</p>
            <h1 className="mt-4 max-w-[700px] font-display text-[length:var(--text-h1)] font-bold leading-[var(--leading-display)] tracking-tight text-[var(--color-text)]">
              추출 조건을 일정하게 유지하도록 설계한 내부 구조.</h1>
          </div>
          <p className="max-w-[560px] text-sm leading-relaxed text-[var(--color-text-muted)] md:col-span-7 md:justify-self-end md:text-sm">
            NOVA는 보일러 온도, 추출 압력, 그룹 헤드 열 안정성, 부품 교체 방식을 기준으로 설계했습니다.
            <br className="hidden md:block" />
            온도와 압력은 사용자가 직접 확인하고 조정할 수 있습니다.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-[1440px] gap-5 md:grid-cols-12">
          <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-bg-secondary)] md:col-span-7">
            <Image
              unoptimized
              src="/templates/OHMT034-nova-coffee/technology-internals.png"
              alt="스테인리스 보일러와 가공 프레임이 보이는 NOVA 듀얼 보일러 내부 구조"
              fill
              loading="eager"
              fetchPriority="high"
              className="object-cover brightness-[1.03] contrast-[1.05]"
              sizes="(min-width: 768px) 60vw, 100vw"
            />
          </div>
          <div className="nova-gradient-precision grid p-7 text-white md:col-span-5 md:p-9">
            <div className="self-end">
              <p className="font-mono text-[length:var(--text-display)] font-semibold leading-none">0.5</p>
              <p className="mt-3 text-sm leading-relaxed text-white/68">
                PID 제어기가 설정 온도를 계속 확인하고 보정합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-secondary)] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-display text-[length:var(--text-h3)] font-bold leading-tight text-[var(--color-text)]">
            세 가지 핵심 구조.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {modules.map((item) => (
              <article key={item.step} className="bg-white">
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-bg-secondary)]">
                  <Image
                    unoptimized
                    src={`/templates/OHMT034-nova-coffee/${item.image}`}
                    alt={`${item.title} 상세 이미지`}
                    fill
                    className="object-cover brightness-[1.05] contrast-[1.04]"
                    sizes="(min-width: 768px) 33vw, 100vw"
                  />
                </div>
                <div className="min-h-[220px] p-6 md:p-8">
                  <p className="font-mono text-xs font-semibold text-[var(--color-accent)]">{item.step}</p>
                  <div className="mt-10">
                    <h3 className="font-display text-2xl font-bold leading-tight text-[var(--color-text)]">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{item.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="specs" className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid border-l border-t border-[var(--color-border)] sm:grid-cols-2 lg:grid-cols-4">
            {summary.map(([value, label]) => (
              <div key={value} className="border-b border-r border-[var(--color-border)] p-6">
                <p className="font-mono text-[length:var(--text-h2)] font-semibold leading-none text-[var(--color-text)]">
                  {value}
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {specGroups.map((group) => (
              <article key={group.title} className="border-t border-[var(--color-border)] pt-6">
                <p className="font-mono text-xs font-semibold text-[var(--color-accent)]">{group.step}</p>
                <h2 className="mt-6 font-display text-2xl font-bold leading-tight text-[var(--color-text)]">
                  {group.title}
                </h2>
                <div className="mt-6 divide-y divide-[var(--color-border)]">
                  {group.rows.map(([label, value]) => (
                    <div key={label} className="py-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                        {label}
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-[var(--color-text)] md:text-sm">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 border-t border-[var(--color-border)] pt-10 md:grid-cols-4">
            {howItWorks.map(([step, title, desc]) => (
              <div key={step}>
                <p className="font-mono text-xs font-semibold text-[var(--color-accent)]">{step}</p>
                <h2 className="mt-3 font-display text-base font-bold leading-tight text-[var(--color-text)]">{title}</h2>
                <p className="mt-2 text-xs leading-relaxed text-[var(--color-text-muted)]">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 flex flex-col items-start gap-5 border-t border-[var(--color-border)] pt-10 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold text-[var(--color-text)]">직접 추출해보세요</h2>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">가까운 쇼룸에서 NOVA의 온도와 추출 압력을 직접 확인하세요.</p>
            </div>
            <Link
              href={`${base}/support`}
              className="inline-flex border border-[var(--color-text)] bg-[var(--color-text)] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-[var(--color-text)]"
            >
              매장 찾기
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
