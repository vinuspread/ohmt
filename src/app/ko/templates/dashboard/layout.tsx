import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './theme.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const geistBody = Geist({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Oh My Template 대시보드',
  description: 'Oh My Template 비즈니스 분석 대시보드 템플릿',
}

export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className={`${geist.variable} ${geistBody.variable} ${geistMono.variable}`} data-theme="dark">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');
      `}</style>
      <div className="-ko">{children}</div>
    </section>
  )
}
