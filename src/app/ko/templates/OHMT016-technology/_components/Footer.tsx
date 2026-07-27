"use client"

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg)] py-16 border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Logo and About */}
          <div className="md:col-span-5">
            <Link href="/ko/templates/OHMT016-technology" className="flex items-center gap-2 mb-4">
              <svg className="w-6 h-6 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="6" height="6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <rect x="15" y="3" width="6" height="6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <rect x="3" y="15" width="6" height="6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <rect x="15" y="15" width="6" height="6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
              </svg>
              <span className="text-xl font-bold tracking-tight text-[var(--color-text)] font-heading">
                Robotflow
              </span>
            </Link>
            <p className="text-sm text-[var(--color-text-muted)] leading-[var(--leading-heading)] max-w-sm">
              다양한 작업 환경에 적용할 수 있는 모듈형 자율 로봇 시스템을 개발합니다.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-text)] mb-4">
              제품 정보
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                  주요 기능
                </Link>
              </li>
              <li>
                <Link href="#specs" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                  사양
                </Link>
              </li>
              <li>
                <Link href="#models" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                  모델 보기
                </Link>
              </li>
            </ul>
          </div>

          {/* Licensing and contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-text)] mb-4">
              법률
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#models" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                  라이선스 안내
                </Link>
              </li>
              <li>
                <Link href="#news" className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                  이용약관
                </Link>
              </li>
              <li>
                <span className="text-sm text-[var(--color-text-muted)]">
                  문의: info@robotflow.net
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--color-text-muted)]">
            © 2026 Robotflow.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent)] cursor-pointer transition-colors">
              개인정보처리방침
            </span>
            <span className="text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent)] cursor-pointer transition-colors">
              업데이트
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
