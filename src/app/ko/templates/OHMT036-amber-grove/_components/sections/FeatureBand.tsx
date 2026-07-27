import Image from 'next/image'

const tags = ['손으로 수확', '종이 포장', '저온 보관']

export function FeatureBand() {
  return (
    <section className="border-t border-[var(--color-border)] py-20 lg:py-28">
      <div className="grid grid-cols-12 items-center gap-y-10 sm:gap-x-10 lg:gap-x-20">
        <div className="relative col-span-12 aspect-[4/3] overflow-hidden lg:col-span-7">
          <Image src="/templates/OHMT036-amber-grove/feature-harvest.jpg" alt="복숭아를 상자에 담는 손" fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
        </div>
        <div className="col-span-12 lg:col-span-5">
          <p className="ledger-num text-sm font-bold text-[var(--color-accent)]">02 · 과수원의 방식</p>
          <h2 className="copy-heading mt-4 font-[family-name:var(--font-heading)] text-2xl font-semibold leading-[var(--leading-body)] sm:text-4xl">
            먹기 좋은 때에 맞춰 수확
          </h2>
          <p className="copy-body mt-5 max-w-xl text-base leading-7 text-[var(--color-text-muted)]">
            수확한 뒤에도 맛이 이어지도록 익은 정도와 식감을 살펴 선별합니다.
            <br className="hidden sm:block" /> 바로 먹기 좋은 과일과 후숙이 필요한 과일을 함께 구성하고 안내 카드를 넣습니다.
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
