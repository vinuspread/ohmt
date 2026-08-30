import Link from 'next/link'

const base = '/en/templates/OHMT034-nova-coffee'

const questions = [
  {
    q: 'Will it wake the house?',
    a: 'The rotary pump is rated around 50dB, noticeably quieter than the vibration pumps common under $1,000.',
  },
  {
    q: 'Can a beginner learn it?',
    a: 'The gauge shows extraction pressure in real time, while automatic pre-infusion handles the first timing step.',
  },
  {
    q: 'What happens when it breaks?',
    a: 'Boiler, pump, and grouphead gasket are serviceable modules, so the machine is repaired instead of replaced.',
  },
]

const facts = [
  ['2', 'independent boilers'],
  ['58mm', 'commercial group head'],
  ['5yr', 'boiler warranty'],
]

export function BuyerQuestions() {
  return (
    <section className="bg-[var(--color-bg-secondary)] px-5 py-18 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-2 md:gap-16">
        <div className="max-w-[620px] md:sticky md:top-28 md:self-start">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent)]">
            Buyer reality
          </p>
          <h2 className="mt-4 max-w-[560px] font-display text-[length:var(--text-h3)] font-bold leading-[var(--leading-heading)] tracking-tight text-[var(--color-text)]">
            The practical doubts before serious money changes hands.
          </h2>
          <p className="mt-5 max-w-[540px] text-sm leading-relaxed text-[var(--color-text-muted)] md:text-sm">
            Support is not an afterthought. These are the questions that decide whether a serious machine belongs
            in a home before checkout.
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
              <h3 className="font-display text-xl font-bold leading-[1.05] tracking-tight text-[var(--color-text)] md:col-span-5 md:text-3xl">
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
            Read ownership answers
          </Link>
        </div>
      </div>
    </section>
  )
}
