import type { Metadata } from "next"
import './theme.css'
import { Inter, Inter_Tight } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Robotflow | 자율 로보틱스 시스템',
  description: '자율 로봇 제품과 핵심 기술, 도입 상담 정보를 제공하는 로보틱스 기업 웹사이트입니다.',
  openGraph: {
    title: 'Robotflow | 자율 로보틱스 시스템',
    description: '자율 로봇 제품과 핵심 기술, 도입 상담 정보를 제공하는 로보틱스 기업 웹사이트입니다.',
    url: 'https://ohmytemplate.com/ko/templates/OHMT016-technology',
    siteName: 'Robotflow',
    images: [{ url: '/templates/OHMT016-technology/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robotflow | 자율 로보틱스 시스템',
    description: '자율 로봇 제품과 핵심 기술, 도입 상담 정보를 제공하는 로보틱스 기업 웹사이트입니다.',
    images: ['/templates/OHMT016-technology/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://ohmytemplate.com/ko/templates/OHMT016-technology',
    languages: { 'en': 'https://ohmytemplate.com/en/templates/OHMT016-technology' },
  },
}

export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" crossOrigin="anonymous" />
      <div className={`${inter.variable} ${interTight.variable} min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] selection:bg-[var(--color-accent)] selection:text-[var(--color-bg)] antialiased`}>
      <div className="-ko">
        <div lang="ko" className="ohmt016-technology">{children}</div>
      </div>
    </div>
    </>
  )
}
