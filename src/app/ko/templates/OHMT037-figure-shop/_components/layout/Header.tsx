'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search, X } from 'lucide-react'
import { clsx } from 'clsx'
import { BASE, LINES } from '../../data/figures'
import { useCart } from '../CartContext'

const NAV = [
  { label: '스토어', href: `${BASE}/shop` },
  { label: '스튜디오', href: `${BASE}/story` },
  { label: '신규 발매', href: `${BASE}/drops` },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const { count } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const supportsTransparent = pathname === BASE || pathname === `${BASE}/`
  const atTop = supportsTransparent && !scrolled && !menuOpen
  const inkClass = atTop ? 'text-white' : 'text-[var(--color-ink)]'

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-40 transition-colors duration-200',
        atTop ? 'bg-transparent' : 'border-b border-[var(--color-border)] bg-[var(--color-bg)]',
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 lg:px-6">
        <nav aria-label="주요 메뉴" className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={clsx(
                'meta-label transition-colors duration-150 hover:text-[var(--color-accent)]',
                inkClass,
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className={clsx('flex h-11 w-11 items-center justify-center lg:hidden', inkClass)}
          aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>

        <Link
          href={BASE}
          className={clsx(
            'absolute left-1/2 -translate-x-1/2 text-lg font-semibold tracking-[0.2em]',
            inkClass,
          )}
          aria-label="FORMA 홈"
        >
          FORMA
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href={`${BASE}/shop`}
            aria-label="카탈로그 검색"
            className={clsx('hidden h-11 w-11 items-center justify-center lg:flex', inkClass)}
          >
            <Search size={18} aria-hidden />
          </Link>
          <Link
            href={`${BASE}/cart`}
            aria-label={`장바구니 ${count}개`}
            className={clsx('meta-label transition-colors duration-150 hover:text-[var(--color-accent)]', inkClass)}
          >
            장바구니 {count}
          </Link>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-b border-[var(--color-border)] bg-[var(--color-bg)] px-4 pb-6 pt-2 lg:hidden">
          <nav aria-label="모바일 메뉴" className="flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="border-b border-[var(--color-border)] py-3 text-2xl font-semibold text-[var(--color-ink)]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="meta-label mt-6 text-[var(--color-ink-faint)]">라인</p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
            {LINES.map((line) => (
              <Link
                key={line.id}
                href={`${BASE}/shop?line=${line.id}`}
                className="ui-label text-[var(--color-ink-muted)]"
                onClick={() => setMenuOpen(false)}
              >
                {line.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
