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
  title: 'OHMT - 비즈니스 분석 대시보드',
  description: 'OHMT 비즈니스 분석 대시보드 템플릿',
  openGraph: {
    title: 'OHMT - 비즈니스 분석 대시보드',
    description: 'OHMT 비즈니스 분석 대시보드 템플릿',
    url: 'https://ohmytemplate.com/ko/templates/OHMT015-dashboard',
    siteName: 'OHMT',
    images: [{ url: '/templates/OHMT015-dashboard/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ko_KR',
    alternateLocale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OHMT - 비즈니스 분석 대시보드',
    description: 'OHMT 비즈니스 분석 대시보드 템플릿',
    images: ['/templates/OHMT015-dashboard/og-image.jpg'],
  },
}

export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className={`${geist.variable} ${geistBody.variable} ${geistMono.variable}`} data-theme="dark">
      <div className="-ko">
        <div lang="ko" className="ohmt015-dashboard">{children}</div>
      </div>
    </section>
  )
}
