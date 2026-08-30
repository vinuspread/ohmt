import Image from 'next/image'

const fields = [
  ['로트 번호', 'AG-0728-C'],
  ['수확일', '7월 24일~26일'],
  ['수확 구역', '동쪽 12번 줄'],
  ['품종', '황도 복숭아'],
]

export function CrateLedgerBand() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-dark)]">
      <div className="relative h-[420px] sm:h-[480px]">
        <Image
          src="/templates/OHMT036-amber-grove/tracking-crates.jpg"
          alt="로트 번호가 적힌 채 포장실에 쌓여 있는 과일 상자들"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,35,24,0.8),transparent_55%)]" />

        <div className="absolute inset-x-0 top-4 px-4 sm:top-6 sm:px-6 lg:top-8 lg:px-10">
          <div className="max-w-md text-[var(--color-text-contrast)]">
            <p className="ledger-num text-xs font-bold text-[var(--color-accent-light)]">04 · 상자의 기록</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/78">
              모든 선물상자에는 기록카드가 들어갑니다. 몇 번째 줄에서 언제 어떤 품종을 땄는지 확인해보세요.
            </p>
            <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-white/25 pt-5">
              {fields.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs text-white/55">{label}</dt>
                  <dd className="ledger-num mt-1 text-sm font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
