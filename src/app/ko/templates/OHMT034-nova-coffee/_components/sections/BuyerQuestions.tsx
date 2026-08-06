import Link from 'next/link'

const base = '/ko/templates/OHMT034-nova-coffee'

const questions = [
  {
    q: '집 안이 시끄럽지 않을까요?',
    a: '로터리 펌프는 약 50dB 수준으로 작동합니다. 입문형 머신에 흔한 진동펌프보다 소음과 떨림이 낮습니다.',
  },
  {
    q: '처음 써도 배울 수 있나요?',
    a: '압력 게이지가 추출 상태를 바로 보여줍니다. 프리인퓨전은 자동으로 시작되어 첫 타이밍 부담을 줄입니다.',
  },
  {
    q: '고장 나면 통째로 바꿔야 하나요?',
    a: '보일러, 펌프, 그룹헤드 개스킷은 각각 분리해 교체할 수 있습니다.',
  },
]

const facts = [
  ['2', '독립 보일러'],
  ['58mm', '상업용 그룹헤드'],
  ['5년', '보일러 보증'],
]

export function BuyerQuestions() {
  return (
    <section className="bg-[var(--color-bg-secondary)] px-5 py-18 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-2 md:gap-16">
        <div className="max-w-[620px] md:sticky md:top-28 md:self-start">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
            구매 전 확인할 것
          </p>
          <h2 className="mt-4 max-w-[560px] font-display text-[length:var(--text-h3)] font-bold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)]">
            결제 전에 확인해야 할 현실적인 질문.
          </h2>
          <p className="mt-5 max-w-[540px] text-sm leading-relaxed text-[var(--color-text-muted)] md:text-sm">
            비싼 머신은 멋진 사진만으로 고르기 어렵습니다. 소음, 학습 난이도, 수리 가능성까지 먼저 확인해야 합니다.
          </p>
          <div className="mt-8 max-w-[560px] border-t border-[var(--color-border)]">
            {facts.map(([value, label]) => (
              <div key={value} className="grid grid-cols-12 items-baseline gap-6 border-b border-[var(--color-border)] py-5 md:gap-9">
                <p className="col-span-4 font-mono text-3xl font-semibold leading-none text-[var(--color-text)] md:col-span-3">{value}</p>
                <p className="col-span-8 text-xs leading-snug text-[var(--color-text-muted)] md:col-span-9">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid border-t border-[var(--color-border)]">
          {questions.map((item) => (
            <article key={item.q} className="grid gap-5 border-b border-[var(--color-border)] py-7 md:grid-cols-12 md:gap-12 md:py-9">
              <h3 className="font-display text-xl font-bold leading-tight tracking-tight text-[var(--color-text)] md:col-span-5 md:text-3xl">
                {item.q}
              </h3>
              <p className="max-w-[560px] text-sm leading-relaxed text-[var(--color-text-muted)] md:col-span-7 md:text-sm">
                {item.a}
              </p>
            </article>
          ))}
          <Link
            href={`${base}/support`}
            className="mt-8 inline-flex w-fit items-center border border-[var(--color-text)] bg-[var(--color-text)] px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-transparent hover:text-[var(--color-text)]"
          >
            지원 기준 보기
          </Link>
        </div>
      </div>
    </section>
  )
}
