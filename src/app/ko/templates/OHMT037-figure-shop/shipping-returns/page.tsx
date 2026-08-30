import type { Metadata } from 'next'
import { BASE } from '../data/figures'
import { Button } from '../_components/ui/Button'
import { SubHero } from '../_components/ui/SubHero'

export const metadata: Metadata = {
  title: 'OHMT - Forma Figures | Shipping & Returns',
  description: 'FORMA 넘버드 에디션의 포장, 배송, 파손 클레임, 반품 기준.',
}

const SHIPPING = [
  {
    title: '포장',
    body: '각 피규어는 넘버드 박스에 넣고 컷폼으로 고정합니다. 외부 박스 안에서 흔들리지 않도록 한 번 더 잡은 뒤 출고합니다.',
  },
  {
    title: '국내 배송',
    body: '에디션 윈도가 닫힌 뒤 3영업일 안에 스튜디오에서 출고합니다. 국내 배송은 출고 후 보통 2~5영업일이 걸립니다.',
  },
  {
    title: '해외 배송',
    body: '해외 배송은 지역과 통관 상황에 따라 5~12영업일이 더 걸릴 수 있습니다. 관세와 수입 수수료는 결제 금액에 포함되지 않습니다.',
  },
  {
    title: '여러 개 주문',
    body: '같은 클레임 윈도에서 주문한 피스는 검수와 넘버링을 마친 뒤 함께 보냅니다. 하나의 주문을 여러 번 나눠 발송하지 않습니다.',
  },
]

const RETURNS = [
  {
    title: '넘버드 에디션은 최종 판매입니다',
    body: '베이스 플레이트에 번호가 새겨진 뒤에는 단순 변심 반품을 받지 않습니다. 구매 전 에디션 상태와 수량을 먼저 확인해 주세요.',
  },
  {
    title: '배송 중 파손',
    body: '외부 박스와 파손 부위를 먼저 촬영해 주세요. 배송 완료 5일 안에 접수된 건은 확인 후 가능한 한 다음 캐스팅 런에서 교체합니다.',
  },
  {
    title: '제작 결함',
    body: '캐스팅 결함, 도색 이염, 헐거운 조인트는 수령 후 14일 안에 접수하면 수리 또는 교체합니다. 일반적인 사용 흔적은 대상에 포함되지 않습니다.',
  },
  {
    title: '예약 주문 취소',
    body: '에디션 윈도가 닫히기 전에는 예약 주문을 취소할 수 있습니다. 캐스팅이 시작되면 해당 피스는 지정된 번호로 고정됩니다.',
  },
]

const FAQ = [
  {
    q: '주문 후 배송지를 바꿀 수 있나요?',
    a: '출고 전까지 가능합니다. 주문 번호와 새 주소를 함께 보내주세요.',
  },
  {
    q: '사서함으로 받을 수 있나요?',
    a: '어렵습니다. 외부 박스 크기와 파손 방지 기준 때문에 일반 주소 배송을 기준으로 보냅니다.',
  },
  {
    q: '에디션 번호가 잘못 도착하면 어떻게 하나요?',
    a: '반품이 아니라 결함 클레임으로 처리합니다. 베이스 플레이트 번호와 주문 번호를 함께 보내주시면 원장 기준으로 확인합니다.',
  },
]

export default function ShippingReturnsPage() {
  return (
    <div className="pt-16">
      <SubHero
        title="배송과 반품"
        label="배송과 클레임"
        description="각 피스는 번호가 새겨진 뒤 출고됩니다. 포장 방식, 배송 일정, 파손 접수, 예약 주문 취소 기준을 이 페이지에서 확인해보세요."
      />

      <section id="shipping" className="mx-auto max-w-[1440px] scroll-mt-16 px-4 py-16 lg:px-6 lg:py-24">
        <h2 className="max-w-[720px] text-4xl leading-[var(--leading-display)] tracking-normal text-[var(--color-ink)] lg:text-6xl">
          배송
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6">
          {SHIPPING.map((s) => (
            <article
              key={s.title}
              className="grid grid-cols-1 gap-4 bg-[var(--color-bg-tile)] p-6 md:grid-cols-2 md:gap-12"
            >
              <h3 className="text-2xl tracking-normal text-[var(--color-ink)]">{s.title}</h3>
              <p className="max-w-[600px] text-base leading-relaxed text-[var(--color-ink-muted)]">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="returns" className="scroll-mt-16 bg-[var(--color-bg-tile)]">
        <div className="mx-auto max-w-[1440px] px-4 py-16 lg:px-6 lg:py-24">
          <h2 className="max-w-[720px] text-4xl leading-[var(--leading-display)] tracking-normal text-[var(--color-ink)] lg:text-6xl">
            반품과 클레임
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6">
            {RETURNS.map((r) => (
              <article
                key={r.title}
                className="grid grid-cols-1 gap-4 bg-[var(--color-bg)] p-6 md:grid-cols-2 md:gap-12"
              >
                <h3 className="text-2xl tracking-normal text-[var(--color-ink)]">{r.title}</h3>
                <p className="max-w-[600px] text-base leading-relaxed text-[var(--color-ink-muted)]">{r.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-4 py-16 lg:px-6 lg:py-24">
        <h2 className="max-w-[720px] text-4xl leading-[var(--leading-display)] tracking-normal text-[var(--color-ink)] lg:text-6xl">
          자주 묻는 질문
        </h2>
        <ul className="mt-9 grid grid-cols-1 gap-4">
          {FAQ.map((item) => (
            <li key={item.q} className="bg-[var(--color-bg)] p-6">
              <span className="text-lg font-semibold text-[var(--color-ink)]">{item.q}</span>
              <p className="mt-2 max-w-[680px] text-base leading-relaxed text-[var(--color-ink-muted)]">{item.a}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-6 px-4 py-16 lg:flex-row lg:items-center lg:justify-between lg:px-6 lg:py-24">
          <div>
            <h2 className="max-w-[520px] text-3xl leading-[var(--leading-display)] tracking-normal text-[var(--color-ink)] lg:text-4xl">
              주문 관련 도움이 필요하신가요?
            </h2>
            <p className="mt-4 max-w-[480px] text-base leading-relaxed text-[var(--color-ink-muted)]">
              배송 메모와 클레임은 FORMA 스튜디오 데스크에서 함께 확인합니다. 주문 번호를 보내주시면 가장 빠르게 확인해보세요.
            </p>
          </div>
          <Button variant="solid" href={`${BASE}/story#visit`}>
            스튜디오에 문의하기
          </Button>
        </div>
      </section>
    </div>
  )
}
