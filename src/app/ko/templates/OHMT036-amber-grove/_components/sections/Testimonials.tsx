const testimonials = [
  {
    quote: '필요한 날짜에 맞춰 보내주셔서 좋아요.\n과일 상태가 좋고, 그때그때 추천해 주시는 품종도 만족스럽습니다.',
    name: '박세영',
    role: '레스토랑 식재료 구매 담당',
  },
  {
    quote: '손님 반응이 좋아 꾸준히 주문하고 있습니다.\n함께 오는 수확 기록을 설명드리면 더 안심하고 구매하세요.',
    name: '정회윤',
    role: '동네 청과점 운영',
  },
]

export function Testimonials() {
  return (
    <section className="border-t border-[var(--color-border)] py-20 lg:py-28">
      <div className="grid grid-cols-12 gap-y-8 sm:gap-x-10 lg:gap-x-16">
        <div className="col-span-12 lg:col-span-4">
          <p className="ledger-num text-sm font-bold text-[var(--color-accent)]">05 · 거래처 후기</p>
          <h2 className="copy-heading mt-4 font-[family-name:var(--font-heading)] text-2xl font-semibold leading-[var(--leading-body)] sm:text-4xl">
            함께 거래하는
            <br className="hidden lg:block" /> 분들의 이야기
          </h2>
        </div>
        <div className="col-span-12 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)] lg:col-span-8">
          {testimonials.map((item, index) => (
            <figure key={item.name} className="grid gap-3 py-10 sm:grid-cols-2 sm:gap-6">
              <figcaption className="flex items-start gap-3 sm:flex-col sm:gap-1">
                <span className="ledger-num text-xs font-semibold text-[var(--color-text-muted)]">0{index + 1}</span>
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-[var(--color-text-muted)]">{item.role}</p>
                </div>
              </figcaption>
              <blockquote className="copy-body text-lg font-medium leading-relaxed text-[var(--color-text)]">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
