import Link from 'next/link'
import { BASE, LINES } from '../../data/figures'
import { Button } from '../ui/Button'

const INFO_LINKS = [
  { label: '배송', href: `${BASE}/shipping-returns#shipping` },
  { label: '반품', href: `${BASE}/shipping-returns#returns` },
  { label: '에디션 원장', href: `${BASE}/shop` },
  { label: '관리 가이드', href: `${BASE}/story` },
]

const STUDIO_LINKS = [
  { label: 'FORMA 소개', href: `${BASE}/story` },
  { label: '아티스트', href: `${BASE}/story#artists` },
  { label: '제작 과정', href: `${BASE}/story#process` },
  { label: '문의', href: `${BASE}/story#visit` },
]

export function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-[var(--color-on-dark)]">
      <div className="mx-auto max-w-[1440px] px-4 py-16 lg:px-6 lg:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="meta-label text-[var(--color-on-dark-muted)]">정보</h2>
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
            <h2 className="meta-label text-[var(--color-on-dark-muted)]">라인</h2>
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
              다음 드롭 전에 수량과 오픈 시간을 먼저 보냅니다.
            </p>
            <div className="mt-6">
              <Button variant="outline-inverse" href={`${BASE}/story#visit`}>
                드롭 알림 받기
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-[var(--color-border-dark)] pt-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-[0.2em]">FORMA</p>
            <p className="meta-label mt-2 max-w-[360px] text-[var(--color-on-dark-muted)]">
              소량 생산 컬렉터블 피규어. 조형부터 손마감, 넘버링까지 한 스튜디오에서 진행합니다.
            </p>
          </div>
          <p className="meta-label text-[var(--color-on-dark-muted)]">© 2026 OHMT.</p>
        </div>
      </div>
    </footer>
  )
}
