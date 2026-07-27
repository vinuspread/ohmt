import Link from 'next/link'
import { InstagramLogo, YoutubeLogo, XLogo } from '@phosphor-icons/react'

const base = '/ko/templates/OHMT034-nova-coffee'

const columns = [
  {
    title: '제품',
    links: [
      { label: '제품 홈', href: base },
      { label: '기술', href: `${base}/technology` },
    ],
  },
  {
    title: '지원',
    links: [
      { label: '관리 가이드', href: `${base}/support` },
      { label: '보증', href: `${base}/support#warranty` },
      { label: '매장 찾기', href: `${base}/support#store` },
    ],
  },
  {
    title: '브랜드',
    links: [
      { label: 'NOVA 소개', href: `${base}/company` },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-[var(--color-secondary)] px-5 md:px-8">
      <div className="mx-auto max-w-[1440px] py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <p className="font-display text-lg font-bold tracking-tight text-[var(--color-text-contrast)]">
              NOVA · OHMT
            </p>
            <p className="mt-3 max-w-[220px] text-xs leading-relaxed text-[var(--color-text-muted)]">
              온도와 압력을 직접 확인하고 조정하는 듀얼 보일러 에스프레소 머신.</p>
            <div className="mt-6 flex items-center gap-4">
              <Link href={base} aria-label="Instagram" className="text-[var(--color-text-muted-on-dark)] transition-colors hover:text-[var(--color-accent)]">
                <InstagramLogo size={18} />
              </Link>
              <Link href={base} aria-label="X (Twitter)" className="text-[var(--color-text-muted-on-dark)] transition-colors hover:text-[var(--color-accent)]">
                <XLogo size={18} />
              </Link>
              <Link href={base} aria-label="YouTube" className="text-[var(--color-text-muted-on-dark)] transition-colors hover:text-[var(--color-accent)]">
                <YoutubeLogo size={18} />
              </Link>
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-[var(--color-text-contrast)] transition-colors hover:text-[var(--color-accent)] focus-visible:outline-[var(--focus-outline)] focus-visible:outline-offset-[var(--focus-outline-offset)]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-[var(--color-text-muted)] md:flex-row md:items-center md:justify-between">
          <p>&copy; 2026 OHMT.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium uppercase tracking-wider text-white/30">레드닷 디자인 어워드 2026</span>
            <span className="h-3 w-px bg-white/20" />
            <span className="text-xs font-medium uppercase tracking-wider text-white/30">스페셜티 커피 협회</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
