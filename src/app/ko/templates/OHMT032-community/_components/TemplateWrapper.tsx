'use client'

import { useEffect, useState } from 'react'
import { Footer } from './layout/Footer'
import { Header } from './layout/Header'
import { JoinDrawer } from './layout/JoinDrawer'
import { SidebarNav } from './layout/SidebarNav'
import { TrendingSidebar } from './layout/TrendingSidebar'

export function TemplateWrapper({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [joinOpen, setJoinOpen] = useState(false)

  useEffect(() => {
    const openJoin = () => setJoinOpen(true)
    window.addEventListener('ohmt032:join', openJoin)
    return () => window.removeEventListener('ohmt032:join', openJoin)
  }, [])

  return (
    <div className="min-h-dvh">
      <Header onMenuClick={() => setMobileOpen(true)} onJoinClick={() => setJoinOpen(true)} />
      <div className="mx-auto flex max-w-[1440px] gap-5 px-4 pb-5 pt-7 lg:px-6">
        <SidebarNav mobileOpen={mobileOpen} onMobileClose={() => setMobileOpen(false)} />
        <main className="min-w-0 flex-1">{children}</main>
        <TrendingSidebar />
      </div>
      <p className="text-center text-[11px] leading-relaxed text-neutral-400 px-6 py-6">이 페이지는 실제 고객사나 운영 중인 업체가 아닌 OHMT의 웹사이트 디자인 템플릿 데모입니다. 표시된 브랜드명, 인물, 후기, 연락처와 성과 수치는 예시 콘텐츠입니다.</p>
      <Footer />
      <JoinDrawer open={joinOpen} onClose={() => setJoinOpen(false)} />
    </div>
  )
}
