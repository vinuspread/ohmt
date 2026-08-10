import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const base = '/ko/templates/OHMT034-nova-coffee'

export const metadata: Metadata = {
  title: '제품 - NOVA Coffee',
  description:
    'NOVA 제품 개요: 두 가지 마감, 기본 포함 구성품, 명시된 가격, 듀얼보일러 에스프레소 머신의 핵심 사양.',
}

const finishes = [
  {
    step: '01',
    title: '브러시드 스틸',
    desc: '측면 패널을 가로지르는 헤어라인 그레인이 살아있는 304 스테인리스. 밝은 하이라이트와 선명한 엣지 덕분에 메탈 그대로 읽히며, 밝은 스톤 카운터와 자연스럽게 어울립니다.',
    image: 'product-1.jpg',
    alt: '차가운 스톤 카운터 위에 놓인 브러시드 스틸 마감 NOVA 에스프레소 머신',
  },
  {
    step: '02',
    title: '매트 차콜',
    desc: '눈부심이 적은 저광 파우더코트 패널. 어두운 조명에서도 안정적인 실루엣을 유지해 톤이 깊은 주방에 잘 맞습니다.',
    image: 'story-lifestyle.jpg',
    alt: '현대적인 주방에 배치된 매트 차콜 마감 NOVA 에스프레소 머신',
  },
]

const inTheBox = [
  ['탈착식 물탱크', '1.5L, 카본 필터 카트리지 기본 장착'],
  ['바텀리스 포터필터', '추출 흐름이 보여 도징을 조정하기 쉽습니다'],
  ['18g 정밀 바스켓', '그룹헤드와 정합되어 도징을 반복 가능하게 합니다'],
  ['블라인드 바스켓', '별도 부품 없이 주 1회 백플러싱'],
  ['마이크로파이버 천', '브러시드 스틸 바디의 일상 관리용'],
  ['컴팩트 넉박스', '낮은 수납 공간과 좁은 코너에도 들어갑니다'],
]

export default function ProductPage() {
  return (
    <div>
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
              Product
            </p>
            <h1 className="mt-4 max-w-[700px] font-display text-[length:var(--text-h1)] font-bold leading-[var(--leading-display)] tracking-tight text-[var(--color-text)]">
              머신의 사양, 가격까지 전부 공개합니다.
            </h1>
          </div>
          <p className="max-w-[560px] text-sm leading-relaxed text-[var(--color-text-muted)] md:col-span-7 md:justify-self-end md:text-sm">
            가격은 처음부터 명시됩니다. 표준 주방 카운터에 맞춘 크기와 함께, 박스에 무엇이 들어가는지도
            바로 확인할 수 있습니다.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-[1440px] gap-5 md:grid-cols-12">
          <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-bg-secondary)] md:col-span-7">
            <Image
              unoptimized
              src="/templates/OHMT034-nova-coffee/product-1.jpg"
              alt="차가운 스톤 카운터 위에 놓여 추출을 준비하는 NOVA 에스프레소 머신"
              fill
              loading="eager"
              fetchPriority="high"
              className="object-cover brightness-[1.04] contrast-[1.04]"
              sizes="(min-width: 768px) 60vw, 100vw"
            />
          </div>
          <div className="nova-gradient-precision grid p-7 text-white md:col-span-5 md:p-9">
            <div className="self-end">
              <p className="font-mono text-[length:var(--text-h2)] font-semibold leading-none">4,550,000원</p>
              <p className="mt-3 text-sm leading-relaxed text-white/68">
                시작 가격, 데일리 샷 키트 포함 배송됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-secondary)] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-5">
              <h2 className="font-display text-[length:var(--text-h3)] font-bold leading-tight text-[var(--color-text)]">
                두 가지 마감, 하나의 머신.
              </h2>
            </div>
            <p className="max-w-[560px] text-sm leading-relaxed text-[var(--color-text-muted)] md:col-span-7 md:justify-self-end md:text-sm">
              내부 시스템은 두 마감에서 동일합니다. 선택은 표면뿐이므로, 주방과 어울리는 쪽을 고르면 됩니다.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {finishes.map((item) => (
              <article key={item.title} className="bg-white">
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-bg-secondary)]">
                  <Image
                    unoptimized
                    src={`/templates/OHMT034-nova-coffee/${item.image}`}
                    alt={item.alt}
                    fill
                    className="object-cover brightness-[1.05] contrast-[1.04]"
                    sizes="(min-width: 768px) 50vw, 100vw"
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

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                Included
              </p>
              <h2 className="mt-4 max-w-[520px] font-display text-[length:var(--text-h3)] font-bold leading-tight text-[var(--color-text)]">
                모든 NOVA에 함께 배송되는 것.
              </h2>
            </div>
            <p className="max-w-[560px] text-sm leading-relaxed text-[var(--color-text-muted)] md:col-span-8 md:justify-self-end md:text-sm">
              첫 샷에 필요한 구성은 전부 박스에 담겨 있습니다. 따로 액세서리를 고르지 않아도 바로
              추출을 시작할 수 있습니다.
            </p>
          </div>
          <div className="mt-10 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
            {inTheBox.map(([name, note]) => (
              <div
                key={name}
                className="flex flex-col gap-2 py-6 md:flex-row md:items-baseline md:gap-8"
              >
                <p className="font-display text-base font-bold leading-tight text-[var(--color-text)]">{name}</p>
                <p className="text-sm leading-relaxed text-[var(--color-text-muted)] md:ml-auto md:max-w-[520px] md:text-right">
                  {note}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href={`${base}/support`}
              className="inline-flex text-sm font-semibold text-[var(--color-text)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-4 transition-colors hover:text-[var(--color-accent)]"
            >
              관리·유지보수 키트가 필요하신가요?
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-6">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                Specs
              </p>
              <h2 className="mt-4 font-display text-[length:var(--text-h3)] font-bold leading-tight text-[var(--color-text)]">
                두 숫자로 시작합니다.
              </h2>
            </div>
            <p className="max-w-[560px] text-sm leading-relaxed text-[var(--color-text-muted)] md:col-span-6 md:justify-self-end md:text-sm">
              전체 스펙 시트는 기술 페이지에 있습니다. 이 두 수치는 구매자가 가장 먼저 묻는 질문에 답합니다.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="nova-gradient-precision grid min-h-[220px] p-7 text-white md:p-9">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-white/55">
                Dimensions
              </p>
              <div className="self-end">
                <p className="font-mono text-[length:var(--text-h2)] font-semibold leading-none">14 x 18 x 16 in</p>
                <p className="mt-3 text-sm leading-relaxed text-white/68">
                  W x D x H — 표준 상부장 아래에도 들어가는 높이.
                </p>
              </div>
            </div>
            <div className="nova-gradient-precision grid min-h-[220px] p-7 text-white md:p-9">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-white/55">
                Temperature
              </p>
              <div className="self-end">
                <p className="font-mono text-[length:var(--text-h2)] font-semibold leading-none">±0.5°C</p>
                <p className="mt-3 text-sm leading-relaxed text-white/68">
                  PID가 추출 내내 목표 온도를 유지합니다.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-14">
            <Link
              href={`${base}/technology#specs`}
              className="inline-flex border border-[var(--color-text)] bg-[var(--color-text)] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-[var(--color-text)]"
            >
              전체 사양 보기
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-secondary)] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mx-auto max-w-[640px] text-center">
            <h2 className="font-display text-[length:var(--text-h2)] font-bold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text-contrast)]">
              결정 전에, 머신을 직접 보세요.
            </h2>
            <p className="mx-auto mt-4 max-w-[560px] text-sm leading-relaxed text-[var(--color-text-muted-on-dark)]">
              가까운 쇼룸에서 데모를 예약하거나, NOVA를 취급하는 매장을 찾아보세요.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <Link
                href={`${base}/support`}
                className="inline-flex border border-white bg-white px-7 py-3 text-xs font-semibold text-[var(--color-text)] transition-colors duration-300 hover:bg-transparent hover:text-white"
              >
                데모 예약
              </Link>
              <Link
                href={`${base}/support#store`}
                className="inline-flex border border-white/40 px-7 py-3 text-xs font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
              >
                매장 찾기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
