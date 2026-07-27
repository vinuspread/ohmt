'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, List, X } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'motion/react'

const base = '/ko/templates/OHMT034-nova-coffee'

const navLinks = [
  { label: '제품', href: base, desc: '머신, 액세서리, 예약 안내' },
  { label: '기술', href: `${base}/technology`, desc: '보일러 제어, 압력 제어, 추출 시스템' },
  { label: '지원', href: `${base}/support`, desc: '관리 가이드, 보증, 설치 안내' },
  { label: '브랜드', href: `${base}/company`, desc: '브랜드 소개와 설계 원칙' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-white/95 px-5 py-4 backdrop-blur md:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex h-10 items-center justify-between">
          <Link href={base} className="group leading-none">
            <span className="font-display text-lg font-bold tracking-tight text-[var(--color-text)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
              NOVA · OHMT
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex lg:gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="relative text-xs font-medium text-[var(--color-text-muted)] transition-colors duration-300 hover:text-[var(--color-text)] focus-visible:outline-[var(--focus-outline)] focus-visible:outline-offset-[var(--focus-outline-offset)]"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <motion.button
            onClick={() => setOpen((v) => !v)}
            whileTap={{ scale: 0.92 }}
            className="flex h-10 w-10 items-center justify-center border border-[var(--color-border)] text-[var(--color-text)] transition-colors duration-300 hover:border-[var(--color-text)] md:hidden"
            aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={open}
          >
            {open ? <X size={21} weight="light" /> : <List size={21} weight="light" />}
          </motion.button>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-4 top-20 z-50 md:hidden"
            >
              <div className="overflow-hidden rounded-[18px] border border-white/10 bg-[#17181A] text-white shadow-[0_24px_80px_rgba(23,24,26,0.34)]">
                <div className="border-b border-white/10 px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/42">
                    NOVA 메뉴
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-white/62">
                    가정과 소규모 스튜디오를 위한 컴팩트 듀얼 보일러 에스프레소 머신.</p>
                </div>

                <nav className="divide-y divide-white/10">
                  {navLinks.map((l, index) => (
                    <Link
                      key={l.label}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-3 px-5 py-4 transition-colors duration-300 active:bg-white/8"
                    >
                      <span className="w-9 shrink-0 text-xs font-semibold text-white/34">{String(index + 1).padStart(2, '0')}</span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-2xl font-semibold leading-none tracking-tight text-white">
                          {l.label}
                        </span>
                        <span className="mt-1.5 block text-xs leading-snug text-white/46">{l.desc}</span>
                      </span>
                      <ArrowRight size={18} weight="light" className="shrink-0 text-white/42 transition-transform duration-300 group-active:translate-x-0.5" />
                    </Link>
                  ))}
                </nav>

                <div className="flex items-center justify-between gap-4 bg-white/[0.04] px-5 py-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-accent-soft)]">
                      N-01 사전 예약</p>
                    <p className="mt-1 text-xs text-white/45">보정 키트와 함께 배송됩니다.</p>
                  </div>
                  <Link
                    href={base}
                    onClick={() => setOpen(false)}
                    className="inline-flex min-h-10 items-center justify-center rounded-full bg-white px-4 text-xs font-semibold text-[#17181A] active:scale-[0.98]"
                  >
                    제품 보기</Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
