'use client'

import { Header } from './layout/Header'
import { Footer } from './layout/Footer'

export function TemplateWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-transparent text-[var(--color-text)] lg:pt-6">
      <div className="mx-auto max-w-[1440px]">
        <div className="bg-white px-4 pb-6 sm:px-6 sm:pb-12 lg:px-14 lg:pb-14 lg:pt-8">
          <Header />
          <main>{children}</main>
        </div>
        <p className="text-center text-[11px] leading-relaxed text-neutral-400 px-6 py-6">이 페이지는 실제 고객사나 운영 중인 업체가 아닌 OHMT의 웹사이트 디자인 템플릿 데모입니다. 표시된 브랜드명, 인물, 후기, 연락처와 성과 수치는 예시 콘텐츠입니다.</p>
        <Footer />
      </div>
    </div>
  )
}
