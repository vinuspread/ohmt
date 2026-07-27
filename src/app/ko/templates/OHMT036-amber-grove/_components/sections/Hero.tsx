import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

const base = '/ko/templates/OHMT036-amber-grove'

const ledger = [
  ['1984', '과수원 시작'],
  ['5만 평', '재배 면적'],
  ['28주 차', '이번 주 수확'],
  ['18종', '재배 품종'],
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-dark)] text-[var(--color-text-contrast)]">
      <Image
        src="/templates/OHMT036-amber-grove/hero-orchard-v3.jpg"
        alt="아침 햇살이 비치는 앰버 그로브 과수원의 나무들"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,35,24,0.78),rgba(28,35,24,0.24)),linear-gradient(0deg,rgba(28,35,24,0.6),transparent_46%)]" />

      <div className="relative px-4 py-14 sm:px-6 lg:px-10 lg:py-16">
        <div className="flex min-h-[42dvh] items-end">
          <div className="max-w-4xl">
            <p className="ledger-num mb-5 text-sm font-bold text-[var(--color-accent-light)]">01 · 과수원에서 바로 배송</p>
            <h1 className="copy-heading font-[family-name:var(--font-heading)] text-3xl font-semibold leading-[var(--leading-heading)] sm:text-5xl lg:text-6xl">
              먹기 좋게 익은 과일을
              <br />
              수확해 바로 보내드립니다.
            </h1>
            <p className="copy-body mt-6 max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
              앰버 그로브는 가족이 직접 재배하고 수확한 과일을 농장 안 포장동에서 선별해 보냅니다.
              <br className="hidden sm:block" /> 상자에는 수확 날짜와 구역, 품종을 적은 기록 카드를 함께 넣습니다.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={`${base}/shop`} className="inline-flex items-center justify-center gap-2 rounded bg-[var(--color-accent-light)] px-6 py-2.5 text-sm font-bold text-[var(--color-bg-dark)] transition-colors duration-200 hover:bg-white active:scale-[0.98]">
                이번 주 과일 보기
                <ArrowRight size={17} weight="bold" />
              </Link>
              <Link href={`${base}/about`} className="inline-flex items-center justify-center rounded border border-white/25 px-6 py-2.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-white/10">
                과수원 소개
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/12 bg-[var(--color-bg-dark)] px-4 py-6 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 sm:divide-x sm:divide-white/12">
          {ledger.map(([value, label]) => (
            <div key={label} className="px-4 py-3 sm:px-6 sm:py-0">
              <p className="ledger-num text-xl font-semibold sm:text-3xl">{value}</p>
              <p className="mt-0.5 text-xs text-[var(--color-text-muted-contrast)] sm:mt-1 sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
