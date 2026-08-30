import Link from 'next/link'

const base = '/ko/templates/OHMT036-amber-grove'

const columns = [
  { label: '전화', value: '054-533-0891' },
  { label: '이메일', value: 'harvest@ambergrove.test' },
  { label: '운영', value: '목~일 09:00~17:00' },
  { label: '위치', value: '경북 상주시' },
]

export function Footer() {
  return (
    <footer id="visit" className="bg-[var(--color-bg-dark)] text-[var(--color-text-contrast)] w-full">
      <div className="mx-auto px-4 pb-10 pt-14 sm:px-6 lg:px-14 lg:pt-20">
        <div className="grid grid-cols-12 gap-y-6 border-b border-white/12 pb-8 sm:gap-x-10 lg:gap-x-16 lg:items-center">
          <div className="col-span-12 lg:col-span-7">
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-semibold leading-[var(--leading-body)] sm:text-3xl">
              이번 주에 수확한 과일의 선물상자를 경험해보세요.
            </h2>
            <Link href={`${base}/shop`} className="mt-4 inline-flex items-center justify-center rounded bg-[var(--color-secondary-accent)] px-5 py-2 text-sm font-semibold text-[var(--color-bg-dark)] transition-colors duration-200 hover:opacity-90">
              이번 주 수확 보기
            </Link>
          </div>

          <form className="col-span-12 flex items-center gap-2 lg:col-span-5">
            <input
              aria-label="수확 소식을 받을 이메일"
              type="email"
              placeholder="앰버그로브 소식 받기"
              className="w-full border-b border-white/20 bg-transparent py-2 text-sm text-white placeholder:text-white/40 focus:border-[var(--color-accent-light)] focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 text-sm font-semibold text-[var(--color-accent-light)] transition-colors duration-200 hover:text-white"
            >
              구독
            </button>
          </form>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-3 border-b border-white/12 py-6 text-sm">
          {columns.map((item) => (
            <p key={item.label} className="text-white/70">
              <span className="text-white/40">{item.label} </span>
              <span className="ledger-num text-white">{item.value}</span>
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-4 pt-5 text-sm text-[var(--color-text-muted-contrast)] sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-white">앰버 그로브</p>
          <div className="flex gap-5">
            <Link href={`${base}/shop`} className="hover:text-white">스토어</Link>
            <Link href={`${base}/about`} className="hover:text-white">소개</Link>
            <Link href={`${base}/journal`} className="hover:text-white">저널</Link>
            <Link href={`${base}/visit`} className="hover:text-white">방문</Link>
          </div>
          <p>&copy; 2026 Oh My Template.</p>
        </div>
      </div>
    </footer>
  )
}
