import Image from 'next/image'

const tags = ['손 수확', '종이 포장', '저온 보관']

export function FeatureBand() {
  return (
    <section className="border-t border-[var(--color-border)] py-20 lg:py-28">
      <div className="grid grid-cols-12 items-center gap-y-10 sm:gap-x-10 lg:gap-x-20">
        <div className="relative col-span-12 aspect-[4/3] overflow-hidden lg:col-span-7">
          <Image src="/templates/OHMT036-amber-grove/feature-harvest.jpg" alt="복숭아를 상자에 담는 손" fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
        </div>
        <div className="col-span-12 lg:col-span-5">
          <p className="ledger-num text-sm font-bold text-[var(--color-accent)]">02 · 과수원의 방식</p>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-2xl font-semibold leading-[var(--leading-body)] sm:text-4xl">
            식탁에 오르는 날에 맞춰 수확합니다.
          </h2>
          <p className="mt-5 text-base leading-7 text-[var(--color-text-muted)]">
            오래 두고 즐길 수 있는 과일을 선별합니다. 상자마다 식감과 향, 그리고 함께 드시기 좋은 제품으로 구성합니다.
          </p>
          <dl className="ledger-num mt-8 flex flex-wrap gap-x-12 gap-y-2 border-t border-[var(--color-border)] pt-5 text-sm">
            <div className="flex items-baseline gap-3">
              <dt className="text-[var(--color-text-muted)]">포장실 온도</dt>
              <dd className="font-medium">14°C</dd>
            </div>
            <div className="flex items-baseline gap-3">
              <dt className="text-[var(--color-text-muted)]">재배 경력</dt>
              <dd className="font-medium">12년</dd>
            </div>
          </dl>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((item) => (
              <span key={item} className="ledger-num rounded border border-[var(--color-border)] px-3 py-1 text-xs font-semibold text-[var(--color-text-muted)]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
