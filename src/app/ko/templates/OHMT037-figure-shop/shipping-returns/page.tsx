import type { Metadata } from 'next'
import { BASE } from '../data/figures'
import { Button } from '../_components/ui/Button'
import { SubHero } from '../_components/ui/SubHero'

export const metadata: Metadata = {
  title: 'FORMA 피규어 | 배송·교환 안내',
  description: 'FORMA 한정 에디션의 포장과 배송, 파손·불량 접수, 반품 기준을 안내합니다.',
}

const SHIPPING = [
  {
    title: '포장 방식',
    body: '각 피규어는 전용 박스에 넣고 형태에 맞춘 완충재로 고정합니다.\n배송 중 흔들리지 않도록 외부 상자 안에서 한 번 더 보호해 출고합니다.',
  },
  {
    title: '국내 배송',
    body: '예약 판매가 끝난 뒤 3영업일 안에 출고합니다.\n국내 배송은 출고 후 보통 2~5영업일이 걸립니다.',
  },
  {
    title: '해외 배송',
    body: '해외 배송은 지역과 통관 상황에 따라 5~12영업일이 더 걸릴 수 있습니다.\n관세와 수입 수수료는 결제 금액에 포함되지 않습니다.',
  },
  {
    title: '여러 제품을 주문한 경우',
    body: '같은 예약 기간에 주문한 피규어는 검수와 번호 각인을 마친 뒤 함께 발송합니다.\n한 주문을 여러 차례로 나눠 보내지 않습니다.',
  },
]

const RETURNS = [
  {
    title: '한정 에디션 반품 안내',
    body: '베이스 플레이트에 에디션 번호가 새겨진 뒤에는 단순 변심에 따른 반품이 어렵습니다.\n구매 전 판매 상태와 제작 수량을 확인해 주세요.',
  },
  {
    title: '배송 중 파손',
    body: '외부 상자와 파손 부위를 촬영해 주세요.\n배송 완료 후 5일 안에 접수된 건은 확인을 거쳐 가능한 경우 다음 생산분으로 교환합니다.',
  },
  {
    title: '제작 결함',
    body: '성형 불량, 도색 번짐, 헐거운 관절은 수령 후 14일 안에 접수하면 확인 후 수리하거나 교환합니다.\n사용 중 생긴 흔적은 대상에서 제외됩니다.',
  },
  {
    title: '예약 주문 취소',
    body: '예약 판매가 끝나기 전에는 주문을 취소할 수 있습니다.\n제작이 시작된 뒤에는 해당 제품의 에디션 번호가 확정됩니다.',
  },
]

const FAQ = [
  {
    q: '주문 후 배송지를 바꿀 수 있나요?',
    a: '출고 전까지 가능합니다. 주문 번호와 새 주소를 함께 보내주세요.',
  },
  {
    q: '사서함으로 받을 수 있나요?',
    a: '사서함 배송은 어렵습니다. 포장 상자의 크기와 파손 방지 기준 때문에 일반 도로명 주소로만 발송합니다.',
  },
  {
    q: '에디션 번호가 잘못 도착하면 어떻게 하나요?',
    a: '상품 정보가 잘못 전달된 건으로 접수합니다. 베이스 플레이트의 에디션 번호와 주문 번호를 보내주시면 제작 기록을 확인하겠습니다.',
  },
]

export default function ShippingReturnsPage() {
  return (
    <div className="pt-16">
      <SubHero
        title="배송과 교환·반품"
        label="배송·교환 안내"
        description={
          '각 피규어는 에디션 번호를 새긴 뒤 출고합니다.\n포장 방식과 배송 일정, 파손·불량 접수, 예약 주문 취소 기준을 확인해 주세요.'
        }
      />

      <section id="shipping" className="mx-auto max-w-[1440px] scroll-mt-16 px-4 py-16 lg:px-6 lg:py-24">
        <h2 className="max-w-[720px] text-4xl leading-[var(--leading-display)] tracking-normal text-[var(--color-ink)] lg:text-6xl">
          배송 안내</h2>
        <div className="mt-12 grid grid-cols-1 gap-6">
          {SHIPPING.map((s) => (
            <article
              key={s.title}
              className="grid grid-cols-1 gap-4 bg-[var(--color-bg-tile)] p-6 md:grid-cols-2 md:gap-12"
            >
              <h3 className="text-2xl tracking-normal text-[var(--color-ink)]">{s.title}</h3>
              <p className="preserve-lines max-w-[600px] text-base leading-relaxed text-[var(--color-ink-muted)]">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="returns" className="scroll-mt-16 bg-[var(--color-bg-tile)]">
        <div className="mx-auto max-w-[1440px] px-4 py-16 lg:px-6 lg:py-24">
          <h2 className="max-w-[720px] text-4xl leading-[var(--leading-display)] tracking-normal text-[var(--color-ink)] lg:text-6xl">
            교환·반품 안내</h2>
          <div className="mt-12 grid grid-cols-1 gap-6">
            {RETURNS.map((r) => (
              <article
                key={r.title}
                className="grid grid-cols-1 gap-4 bg-[var(--color-bg)] p-6 md:grid-cols-2 md:gap-12"
              >
                <h3 className="text-2xl tracking-normal text-[var(--color-ink)]">{r.title}</h3>
                <p className="preserve-lines max-w-[600px] text-base leading-relaxed text-[var(--color-ink-muted)]">
                  {r.body}
                </p>
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
              주문과 배송에
              <br />
              도움이 필요하신가요?
            </h2>
            <p className="mt-4 max-w-[480px] text-base leading-relaxed text-[var(--color-ink-muted)]">
              주문 번호와 문의 내용을 보내주시면 FORMA 스튜디오에서
              <br className="hidden sm:block" />
              배송과 교환·불량 접수를 함께 확인해 드립니다.
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
