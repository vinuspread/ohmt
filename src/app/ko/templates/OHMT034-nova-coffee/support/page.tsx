import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const base = '/ko/templates/OHMT034-nova-coffee'

export const metadata: Metadata = {
  title: '지원 - NOVA Coffee',
  description:
    'NOVA 관리 가이드, 디스케일링, 보증, 필터와 개스킷 교체, 쇼룸 데모 예약 안내.',
}

const supportItems = [
  {
    step: '01',
    title: '관리와 디스케일링',
    desc: '관리 순서, 디스케일링 주기, 맞는 클리닝 제품을 한곳에 모았습니다.',
    image: 'accessory-care-kit.png',
  },
  {
    step: '02',
    title: '부품과 보증',
    desc: '보일러, 펌프, 개스킷을 부품 단위로 구분해 안내합니다.',
    image: 'technology-internals.png',
  },
  {
    step: '03',
    title: '쇼룸 데모',
    desc: '구매 전 머신과 추출 흐름을 확인하는 45분 세션입니다.',
    image: 'showroom-demo.png',
  },
]

const kits = [
  {
    title: '데일리 샷 키트',
    desc: '바텀리스 포터필터, 18g 정밀 바스켓, 블라인드 바스켓, 마이크로파이버 천, 소형 넉박스.',
    meta: '론칭 주문 포함',
  },
  {
    title: '워터 케어 키트',
    desc: '카본 필터, 수질 테스트 스트립, 디스케일링 파우더, 6개월 리마인더 카드.',
    meta: '6개월마다 권장',
  },
  {
    title: '카운터 셋업 키트',
    desc: '낮은 탬핑 매트, 58mm 탬퍼, 도징 링, 좁은 주방용 슬림 툴 트레이.',
    meta: '선택 옵션',
  },
]

const faqs = [
  {
    q: '300달러짜리 머신과 무엇이 다른가요?',
    a: '싱글보일러 머신은 스팀을 만들 때 브루 온도가 흔들립니다. NOVA는 브루와 스팀 보일러가 따로 온도를 지킵니다.',
  },
  {
    q: '처음 써도 배울 수 있나요?',
    a: '압력 게이지가 추출 상태를 보여줍니다. 프리인퓨전은 자동으로 시작되어 첫 타이밍 부담을 줄입니다.',
  },
  {
    q: '이른 아침에 시끄럽지 않나요?',
    a: 'NOVA는 약 50dB 수준의 로터리 펌프를 사용합니다. 진동펌프보다 조용하고 떨림이 낮습니다.',
  },
  {
    q: '고장 나면 통째로 바꿔야 하나요?',
    a: '보일러, 펌프, 그룹헤드 개스킷은 각각 모듈 단위로 교체할 수 있습니다.',
  },
  {
    q: '보증 기간은 어떻게 되나요?',
    a: '보일러는 5년, 전장 부품은 2년, 개스킷과 스크린 같은 소모품은 1년 보증입니다.',
  },
  {
    q: '직접 설치할 수 있나요?',
    a: '표준 15A 콘센트에서 바로 사용할 수 있습니다. 직수 연결은 보증 유지를 위해 인증 설치를 권장합니다.',
  },
  {
    q: '디스케일링은 얼마나 자주 하나요?',
    a: '수질에 따라 8-12주마다 진행합니다. 백플러싱은 주 1회, 1분 이내로 끝납니다.',
  },
  {
    q: '수돗물을 써도 괜찮나요?',
    a: '1.5L 탈착식 탱크에 카본 필터가 포함됩니다. 경도가 높은 지역은 짧은 주기로 디스케일링하세요.',
  },
  {
    q: '우유 스티밍도 충분한가요?',
    a: '독립 스팀 보일러가 압력을 따로 유지합니다. 브루 보일러는 다음 샷 온도를 계속 지킵니다.',
  },
  {
    q: '예열 시간은 얼마나 걸리나요?',
    a: '콜드 스타트 기준 15분 이내입니다. 스탠바이 상태에서는 45초 안에 첫 샷을 준비합니다.',
  },
  {
    q: '해외 배송도 되나요?',
    a: 'NOVA는 12개국 공식 딜러망에서 판매합니다. 미국과 캐나다는 직접 배송도 가능합니다.',
  },
]

export default function SupportPage() {
  return (
    <div>
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
              Ownership
            </p>
            <h1 className="mt-4 max-w-[700px] font-display text-[length:var(--text-h1)] font-bold leading-[var(--leading-display)] tracking-tight text-[var(--color-text)]">
              오래 쓰는 머신에는 지원도 설계되어야 합니다.
            </h1>
          </div>
          <p className="max-w-[560px] text-sm leading-relaxed text-[var(--color-text-muted)] md:col-span-7 md:justify-self-end md:text-sm">
            NOVA는 5년 보일러 보증, 교체 가능한 모듈 구조, 영업일 기준 하루 안에 응답하는 지원팀을 갖췄습니다.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-[1440px] gap-5 md:grid-cols-12">
          <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-bg-secondary)] md:col-span-7">
            <Image
              unoptimized
              src="/templates/OHMT034-nova-coffee/showroom-demo.png"
              alt="차가운 스톤 카운터 위 NOVA 쇼룸 시음 세팅"
              fill
              loading="eager"
              fetchPriority="high"
              className="object-cover brightness-[1.04] contrast-[1.04]"
              sizes="(min-width: 768px) 60vw, 100vw"
            />
          </div>
          <div className="nova-gradient-precision grid p-7 text-white md:col-span-5 md:p-9">
            <div className="self-end">
              <p className="font-mono text-[length:var(--text-display)] font-semibold leading-none">1</p>
              <p className="mt-3 text-sm leading-relaxed text-white/68">
                지원, 부품 안내, 데모 예약 요청은 영업일 기준으로 응답합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="warranty" className="bg-[var(--color-bg-secondary)] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-display text-[length:var(--text-h3)] font-bold leading-tight text-[var(--color-text)]">
            소유 이후의 지원은 세 갈래입니다.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {supportItems.map((item) => (
              <article key={item.title} className="bg-white">
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-bg-secondary)]">
                  <Image
                    unoptimized
                    src={`/templates/OHMT034-nova-coffee/${item.image}`}
                    alt={`${item.title} 지원 이미지`}
                    fill
                    className="object-cover brightness-[1.06] contrast-[1.05]"
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

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
                Care kits
              </p>
              <h2 className="mt-4 max-w-[520px] font-display text-[length:var(--text-h3)] font-bold leading-tight text-[var(--color-text)]">
                매일의 루틴을 더 정확하게 만드는 작은 부품들.
              </h2>
            </div>
            <p className="max-w-[560px] text-sm leading-relaxed text-[var(--color-text-muted)] md:col-span-7 md:justify-self-end md:text-sm">
              액세서리는 장식이 아니라 머신 경험의 일부입니다. 반복 추출, 관리, 카운터 사용성을 높이는 구성만 남겼습니다.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {kits.map((kit, index) => (
              <article key={kit.title} className="grid min-h-[260px] border border-[var(--color-border)] p-6 md:p-8">
                <div className="flex items-start justify-between gap-6">
                  <p className="font-mono text-xs font-semibold text-[var(--color-accent)]">0{index + 1}</p>
                  <p className="max-w-[150px] text-right text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                    {kit.meta}
                  </p>
                </div>
                <div className="self-end">
                  <h3 className="font-display text-2xl font-bold leading-tight text-[var(--color-text)]">{kit.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">{kit.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="font-display text-[length:var(--text-h3)] font-bold leading-tight text-[var(--color-text)]">
              지원팀이 가장 먼저 받는 질문.
            </h2>
            <p className="mt-4 max-w-[420px] text-sm leading-relaxed text-[var(--color-text-muted)]">
              소유 이후의 걱정은 결제 전에 확인하는 편이 좋습니다.
            </p>
          </div>
          <div className="divide-y divide-[var(--color-border)] border-t border-[var(--color-border)] md:col-span-8">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-[var(--color-text)] md:text-sm">
                  {faq.q}
                  <span className="shrink-0 text-[var(--color-text-muted)] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[640px] text-xs leading-relaxed text-[var(--color-text-muted)] md:text-sm">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="store" className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-5 border-t border-[var(--color-border)] pt-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-[var(--color-text)]">결정 전이라면, 직접 추출해보세요.</h2>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">쇼룸에서 첫 샷의 온도와 압력을 확인하세요.</p>
          </div>
          <Link
            href={`${base}/support#store`}
            className="inline-flex border border-[var(--color-text)] bg-[var(--color-text)] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-[var(--color-text)]"
          >
            매장 찾기
          </Link>
        </div>
      </section>
    </div>
  )
}
