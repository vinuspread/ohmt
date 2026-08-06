import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const base = '/ko/templates/OHMT034-nova-coffee'

export const metadata: Metadata = {
  title: '기술 - NOVA 정밀 엔지니어링',
  description:
    'NOVA 듀얼보일러 구조, PID 온도 제어, 58mm 그룹헤드, 프리인퓨전, 수리 가능한 내부 설계.',
}

const modules = [
  {
    step: '01',
    title: '독립 보일러',
    desc: '브루와 스팀 회로가 각각 온도를 유지합니다.',
    image: 'technology-internals.png',
  },
  {
    step: '02',
    title: '보이는 압력',
    desc: '게이지와 펌프 흐름으로 추출 상태를 바로 확인합니다.',
    image: 'spec-control-detail.png',
  },
  {
    step: '03',
    title: '카운터에 맞는 크기',
    desc: '상업용 머신의 작동 논리를 주방 크기에 맞췄습니다.',
    image: 'showroom-demo.png',
  },
]

const specGroups = [
  {
    step: '01',
    title: '추출 시스템',
    rows: [
      ['보일러', '듀얼 스테인리스, 브루 0.5L / 스팀 1.2L'],
      ['온도', '목표 온도 기준 ±0.5°C PID 제어'],
      ['펌프', '로터리 베인, 9bar 기준 압력'],
      ['프리인퓨전', '0-10초 저압 구간 프로그래밍'],
      ['그룹헤드', '58mm 상업용 규격 크롬 도금 브라스'],
    ],
  },
  {
    step: '02',
    title: '설치와 사용',
    rows: [
      ['물탱크', '카본 필터가 포함된 1.5L 탈착식 탱크'],
      ['크기', '14 in W x 18 in D x 16 in H'],
      ['예열', '콜드 스타트 기준 15분 이내'],
      ['소음', '로터리 펌프 기준 약 50dB'],
    ],
  },
  {
    step: '03',
    title: '마감과 소유',
    rows: [
      ['바디', '브러시드 304 스테인리스와 매트 차콜 패널'],
      ['보증', '보일러 5년, 전장 2년, 소모품 1년'],
      ['서비스', '보일러, 펌프, 그룹헤드 개스킷 모듈 교체'],
      ['관리', '수질에 따라 8-12주마다 디스케일링'],
    ],
  },
]

const summary = [
  ['2', '독립 보일러'],
  ['58mm', '상업용 그룹헤드'],
  ['9 bar', '로터리 압력'],
  ['5년', '보일러 보증'],
]

const howItWorks = [
  ['01', '급수와 전원', '두 보일러가 각각 목표 온도까지 독립적으로 예열됩니다.'],
  ['02', '도징과 탬핑', '원두를 담고 수평으로 탬핑합니다.'],
  ['03', '장착과 추출', '프리인퓨전 뒤 9bar 압력으로 추출합니다.'],
  ['04', '스팀과 서빙', '스티밍 중에도 브루 보일러는 다음 샷 온도를 지킵니다.'],
]

export default function TechnologyPage() {
  return (
    <div>
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
              Technology
            </p>
            <h1 className="mt-4 max-w-[700px] font-display text-[length:var(--text-h1)] font-bold leading-[var(--leading-display)] tracking-tight text-[var(--color-text)]">
              같은 맛을 반복하는 내부 구조.
            </h1>
          </div>
          <p className="max-w-[560px] text-sm leading-relaxed text-[var(--color-text-muted)] md:col-span-7 md:justify-self-end md:text-sm">
            NOVA는 온도, 압력, 포화, 수리 가능성을 기준으로 설계했습니다.
            핵심 변수는 프리셋 뒤에 감추지 않고, 사용자가 바로 확인할 수 있게 둡니다.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-[1440px] gap-5 md:grid-cols-12">
          <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-bg-secondary)] md:col-span-7">
            <Image
              unoptimized
              src="/templates/OHMT034-nova-coffee/technology-internals.png"
              alt="스테인리스 보일러와 가공 프레임이 보이는 NOVA 듀얼보일러 내부 구조"
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
                PID 컨트롤러가 목표 온도 범위를 계속 확인하고 보정합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-secondary)] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-display text-[length:var(--text-h3)] font-bold leading-tight text-[var(--color-text)]">
            세 시스템이 역할을 나눕니다.
          </h2>
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
                <div className="grid min-h-[220px] p-6 md:p-8">
                  <p className="font-mono text-xs font-semibold text-[var(--color-accent)]">{item.step}</p>
                  <div className="self-end">
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
              <h2 className="font-display text-2xl font-bold text-[var(--color-text)]">직접 추출해보세요.</h2>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">가까운 쇼룸에서 NOVA의 압력과 온도를 직접 확인하세요.</p>
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
