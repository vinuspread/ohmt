'use client'

import Link from 'next/link'
import { InstagramLogo, PinterestLogo, YoutubeLogo } from '@phosphor-icons/react'

const base = '/ko/templates/OHMT035-atelier-house'

const columns = [
  {
    title: '제품',
    links: [
      { label: '전체 보기', href: `${base}/shop` },
      { label: '의자', href: `${base}/shop` },
      { label: '테이블', href: `${base}/shop` },
      { label: '조명', href: `${base}/shop` },
    ],
  },
  {
    title: '스튜디오',
    links: [
      { label: '소개', href: `${base}/about` },
      { label: '저널', href: `${base}/journal` },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-[var(--color-secondary)] px-5 md:px-8">
      <div className="mx-auto max-w-[1440px] py-16">
        <form
          onSubmit={(event) => event.preventDefault()}
          className="mb-14 grid gap-5 border-b border-white/10 pb-10 md:grid-cols-2 md:items-end"
        >
          <div>
            <p className="font-display text-[length:var(--text-lead)] font-semibold tracking-tight text-[var(--color-text-contrast)]">
              소식 구독하기
            </p>
            <p className="mt-3 max-w-[420px] text-xs leading-relaxed text-white/55 word-keep-all">
              신제품 출시 소식과 원목 가구 관리법, 공간에 맞는 실측 방법을 이메일로 보내드립니다.</p>
          </div>
          <div className="flex w-full max-w-[440px] flex-col gap-2 sm:flex-row">
            <label htmlFor="atelier-newsletter-email" className="sr-only">
              이메일 주소
            </label>
            <input
              id="atelier-newsletter-email"
              type="email"
              placeholder="이메일 주소"
              className="min-h-12 flex-1 rounded-[4px] border border-white/16 bg-white/5 px-4 text-sm text-white outline-none transition-colors placeholder:text-white/42 focus:border-white/44"
            />
            <button
              type="submit"
              className="min-h-12 rounded-[4px] bg-white px-5 text-xs font-semibold text-[#1A1A1A] transition-opacity hover:opacity-85"
            >
              구독하기
            </button>
          </div>
        </form>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-2">
            <p className="font-display text-base font-semibold tracking-tight text-[var(--color-text-contrast)]">
              ATELIER HOUSE
            </p>
            <p className="mt-3 max-w-[280px] text-xs leading-relaxed text-white/55 word-keep-all">
              원목의 구조와 사용 환경을 고려해 오래 사용하고 수리할 수 있는 가구와 조명을 만듭니다.</p>
            <div className="mt-6 flex items-center gap-4">
              <Link href={base} aria-label="Instagram" className="text-white/50 transition-colors hover:text-[var(--color-accent)]">
                <InstagramLogo size={18} />
              </Link>
              <Link href={base} aria-label="Pinterest" className="text-white/50 transition-colors hover:text-[var(--color-accent)]">
                <PinterestLogo size={18} />
              </Link>
              <Link href={base} aria-label="YouTube" className="text-white/50 transition-colors hover:text-[var(--color-accent)]">
                <YoutubeLogo size={18} />
              </Link>
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/75 transition-colors hover:text-[var(--color-accent)] focus-visible:outline-[var(--focus-outline)] focus-visible:outline-offset-[var(--focus-outline-offset)]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-xs text-white/40">
          <p>&copy; 2026 OHMT.</p>
        </div>
      </div>
    </footer>
  )
}
