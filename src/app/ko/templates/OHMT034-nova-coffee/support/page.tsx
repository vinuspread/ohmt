import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const base = '/ko/templates/OHMT034-nova-coffee'

export const metadata: Metadata = {
  title: '제품 지원 - NOVA Coffee',
  description:
    'NOVA 관리 가이드, 디스케일링 주기, 보증 범위, 부품 교체, 쇼룸 데모 예약 안내.',
}

const supportItems = [
  {
    step: '01',
    title: '관리와 디스케일링',
    desc: '일상 관리 순서와 디스케일링 주기, 권장 클리닝 제품을 한곳에 정리했습니다.',
    image: 'accessory-care-kit.png',
  },
  {
    step: '02',
    title: '부품과 보증',
    desc: '보일러, 펌프, 개스킷의 교체 방법과 보증 범위를 부품별로 안내합니다.',
    image: 'technology-internals.png',
  },
  {
    step: '03',
    title: '쇼룸 데모',
    desc: '구매 전에 머신 조작과 에스프레소 추출 과정을 확인하는 45분 데모입니다.',
    image: 'showroom-demo.png',
  },
]

const kits = [
  {
    title: '일상 추출 키트',
    desc: '바텀리스 포터필터, 18g 정밀 바스켓, 블라인드 바스켓, 극세사 천, 소형 넉박스로 구성됩니다.',
    meta: '출시 기간 주문에 포함',
  },
  {
    title: '수질 관리 키트',
    desc: '카본 필터, 수질 테스트지, 디스케일링 파우더, 6개월 관리 알림 카드로 구성됩니다.',
    meta: '6개월마다 권장',
  },
  {
    title: '카운터 정리 키트',
    desc: '낮은 탬핑 매트, 58mm 탬퍼, 도징 링, 좁은 주방에 맞춘 슬림 도구 트레이로 구성됩니다.',
    meta: '선택 옵션',
  },
]

const faqs = [
  {
    q: '300달러대 머신과 무엇이 다른가요?',
    a: '싱글 보일러 머신은 스팀을 사용할 때 추출 온도가 달라질 수 있습니다.\nNOVA는 추출용과 스팀용 보일러를 분리해 각각의 설정 온도를 유지합니다.',
  },
  {
    q: '처음 사용하는 사람도 익힐 수 있나요?',
    a: '압력 게이지로 추출 상태를 확인할 수 있습니다.\n프리인퓨전은 자동으로 시작돼 추출 초반의 조작 부담을 줄입니다.',
  },
  {
    q: '이른 아침에도 사용하기 괜찮을까요?',
    a: 'NOVA의 로터리 펌프는 약 50dB 수준으로 작동합니다.\n일반적인 진동 펌프보다 소음과 진동이 적습니다.',
  },
  {
    q: '고장 나면 통째로 바꿔야 하나요?',
    a: '보일러, 펌프, 그룹 헤드 개스킷은 각각 모듈 단위로 분리해 교체할 수 있습니다.',
  },
  {
    q: '보증 기간은 어떻게 되나요?',
    a: '보일러는 5년, 전장 부품은 2년, 개스킷과 스크린 등 소모품은 1년 동안 보증합니다.',
  },
  {
    q: '직접 설치할 수 있나요?',
    a: '표준 15A 콘센트에 연결해 사용할 수 있습니다.\n직수 연결은 보증 조건을 위해 인증 설치 기사를 통한 작업을 권장합니다.',
  },
  {
    q: '디스케일링은 얼마나 자주 하나요?',
    a: '수질에 따라 8~12주 간격으로 디스케일링하고, 백플러싱은 주 1회 진행합니다.\n작업은 약 1분 걸립니다.',
  },
  {
    q: '수돗물을 써도 괜찮나요?',
    a: '1.5L 탈착식 물탱크에 카본 필터가 포함됩니다.\n물 경도가 높은 지역에서는 권장 주기보다 자주 디스케일링하세요.',
  },
  {
    q: '우유 스티밍과 추출을 함께 할 수 있나요?',
    a: '독립된 스팀 보일러가 스팀 압력을 유지합니다.\n스티밍 중에도 추출 보일러는 다음 샷을 위한 온도를 유지합니다.',
  },
  {
    q: '예열 시간은 얼마나 걸리나요?',
    a: '전원이 완전히 꺼진 상태에서는 15분 이내, 대기 상태에서는 45초 안에 추출 준비가 끝납니다.',
  },
  {
    q: '해외 배송도 되나요?',
    a: 'NOVA는 12개국 공식 판매점을 통해 판매합니다.\n미국과 캐나다에서는 직접 배송도 지원합니다.',
  },
]

export default function SupportPage() {
  return (
    <div>
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-5">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
              구매 후 지원</p>
            <h1 className="mt-4 max-w-[700px] font-display text-[length:var(--text-h1)] font-bold leading-[var(--leading-display)] tracking-tight text-[var(--color-text)]">
              오래 사용하기 위한 관리와 지원.</h1>
          </div>
          <p className="max-w-[560px] text-sm leading-relaxed text-[var(--color-text-muted)] md:col-span-7 md:justify-self-end md:text-sm">
            NOVA는 5년 보일러 보증과 교체 가능한 모듈 구조를 제공합니다.
            <br className="hidden md:block" />
            지원팀은 영업일 기준 1일 이내 답변을 목표로 합니다.
          </p>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-[1440px] gap-5 md:grid-cols-12">
          <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-bg-secondary)] md:col-span-7">
            <Image
              unoptimized
              src="/templates/OHMT034-nova-coffee/showroom-demo.png"
              alt="스톤 카운터 위에 마련된 NOVA 쇼룸 시음 공간"
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
                지원 문의, 부품 안내, 데모 예약은 영업일 기준 1일 이내 답변을 목표로 합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="warranty" className="bg-[var(--color-bg-secondary)] px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="font-display text-[length:var(--text-h3)] font-bold leading-tight text-[var(--color-text)]">
            구매 후 지원은 세 가지로 나뉩니다.</h2>
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
                관리 키트</p>
              <h2 className="mt-4 max-w-[520px] font-display text-[length:var(--text-h3)] font-bold leading-tight text-[var(--color-text)]">
                추출과 관리를 돕는 액세서리.</h2>
            </div>
            <p className="max-w-[560px] text-sm leading-relaxed text-[var(--color-text-muted)] md:col-span-7 md:justify-self-end md:text-sm">
              반복 추출과 청소, 좁은 카운터 정리에 필요한 구성만 골랐습니다.</p>
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
              구매 전 자주 묻는 질문.</h2>
            <p className="mt-4 max-w-[420px] text-sm leading-relaxed text-[var(--color-text-muted)]">
              설치, 관리, 보증에 관한 궁금증을 구매 전에 확인하세요.</p>
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
                <p className="mt-3 max-w-[640px] whitespace-pre-line text-xs leading-relaxed text-[var(--color-text-muted)] md:text-sm">
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
            <h2 className="font-display text-2xl font-bold text-[var(--color-text)]">구매 전, 직접 추출해보세요.</h2>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">쇼룸에서 첫 샷의 온도와 추출 압력을 직접 확인하세요.</p>
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
