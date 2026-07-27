import Link from 'next/link'
import { BASE, LINES } from '../../data/figures'
import { Button } from '../ui/Button'

const INFO_LINKS = [
  { label: '배송 안내', href: `${BASE}/shipping-returns#shipping` },
  { label: '교환·반품', href: `${BASE}/shipping-returns#returns` },
  { label: '에디션 현황', href: `${BASE}/shop` },
  { label: '관리 방법', href: `${BASE}/story` },
]

const STUDIO_LINKS = [
  { label: 'FORMA 소개', href: `${BASE}/story` },
  { label: '참여 아티스트', href: `${BASE}/story#artists` },
  { label: '제작 과정', href: `${BASE}/story#process` },
  { label: '문의하기', href: `${BASE}/story#visit` },
]

export function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-[var(--color-on-dark)]">
      <div className="mx-auto max-w-[1440px] px-4 py-16 lg:px-6 lg:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="meta-label text-[var(--color-on-dark-muted)]">이용 안내</h2>
            <ul className="mt-4 flex flex-col gap-2">
              {INFO_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="ui-label text-[var(--color-on-dark)] transition-colors duration-150 hover:text-[var(--color-accent)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="meta-label text-[var(--color-on-dark-muted)]">제품 라인</h2>
            <ul className="mt-4 flex flex-col gap-2">
              {LINES.map((line) => (
                <li key={line.id}>
                  <Link
                    href={`${BASE}/shop?line=${line.id}`}
                    className="ui-label text-[var(--color-on-dark)] transition-colors duration-150 hover:text-[var(--color-accent)]"
                  >
                    {line.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="meta-label text-[var(--color-on-dark-muted)]">스튜디오</h2>
            <ul className="mt-4 flex flex-col gap-2">
              {STUDIO_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="ui-label text-[var(--color-on-dark)] transition-colors duration-150 hover:text-[var(--color-accent)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xl font-semibold leading-snug">
              새 에디션의 제작 수량과 판매 시작 시간을 미리 안내합니다.</p>
            <div className="mt-6">
              <Button variant="outline-inverse" href={`${BASE}/story#visit`}>
                신규 발매 알림 받기</Button>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-[var(--color-border-dark)] pt-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-[0.2em]">FORMA</p>
            <p className="meta-label mt-2 max-w-[360px] text-[var(--color-on-dark-muted)]">
              FORMA는 원형 제작부터 손도색과 에디션 번호 각인까지 직접 진행하는 소량 생산 피규어 스튜디오입니다.</p>
          </div>
          <p className="meta-label text-[var(--color-on-dark-muted)]">© 2026 OHMT.</p>
        </div>
      </div>
    </footer>
  )
}
