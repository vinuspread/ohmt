const testimonials = [
  {
    quote: '딱 저희가 필요할 때 보내주세요. 맛은 더 이상 말할 필요가 없고요. 추천해주시는 과일도 너무 좋습니다.',
    name: '박세영',
    role: '레스토랑 구매 담당',
  },
  {
    quote: '손님들이 많이 찾으세요. 함께 보내주시는 기록지가 있어서 더 믿음이 가요.',
    name: '정회윤',
    role: '동네 청과상 운영',
  },
]

export function Testimonials() {
  return (
    <section className="border-t border-[var(--color-border)] py-20 lg:py-28">
      <div className="grid grid-cols-12 gap-y-8 sm:gap-x-10 lg:gap-x-16">
        <div className="col-span-12 lg:col-span-4">
          <p className="ledger-num text-sm font-bold text-[var(--color-accent)]">05 · 거래처의 말</p>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-semibold leading-[var(--leading-body)] sm:text-4xl">
            한번 경험하신 고객님은 앰버그로브의 단골이 됩니다.
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
              <blockquote className="text-lg font-medium leading-relaxed text-[var(--color-text)]">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
