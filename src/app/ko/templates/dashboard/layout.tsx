import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "관리자 대시보드 웹사이트 템플릿 | OHMT",
  description: "SaaS 제품, 내부 관리 도구를 위한 대시보드 웹사이트 템플릿입니다. 차트, 통계, 테이블 위젯을 포함합니다.",
  openGraph: {
    title: "관리자 대시보드 웹사이트 템플릿 | OHMT",
    description: "SaaS 제품, 내부 관리 도구를 위한 대시보드 웹사이트 템플릿입니다. 차트, 통계, 테이블 위젯을 포함합니다.",
    url: "https://ohmt.site/ko/templates/dashboard",
    siteName: "OHMT",
    images: [{ url: "/templates/dashboard/og-image.jpg", width: 1200, height: 630, alt: "관리자 대시보드 웹사이트 템플릿" }],
    locale: "ko_KR",
    type: "website",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "관리자 대시보드 웹사이트 템플릿 | OHMT",
    description: "SaaS 제품, 내부 관리 도구를 위한 대시보드 웹사이트 템플릿입니다. 차트, 통계, 테이블 위젯을 포함합니다.",
    images: ["/templates/dashboard/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/dashboard",
    languages: { "en": "https://ohmt.site/en/templates/dashboard" },
  },
};


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
