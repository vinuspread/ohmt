import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT·AI 스타트업 웹사이트 템플릿 | OHMT",
  description: "기술 스타트업, AI 기업을 위한 웹사이트 템플릿입니다. 제품 소개, 팀, 현대적인 디지털 레이아웃을 포함합니다.",
  openGraph: {
    title: "IT·AI 스타트업 웹사이트 템플릿 | OHMT",
    description: "기술 스타트업, AI 기업을 위한 웹사이트 템플릿입니다. 제품 소개, 팀, 현대적인 디지털 레이아웃을 포함합니다.",
    url: "https://ohmt.site/ko/templates/technology",
    siteName: "OHMT",
    images: [{ url: "/templates/technology/og-image.jpg", width: 1200, height: 630, alt: "IT·AI 스타트업 웹사이트 템플릿" }],
    locale: "ko_KR",
    type: "website",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT·AI 스타트업 웹사이트 템플릿 | OHMT",
    description: "기술 스타트업, AI 기업을 위한 웹사이트 템플릿입니다. 제품 소개, 팀, 현대적인 디지털 레이아웃을 포함합니다.",
    images: ["/templates/technology/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/technology",
    languages: { "en": "https://ohmt.site/en/templates/technology" },
  },
};


import './theme.css'
import { Inter, Inter_Tight, Noto_Sans_KR } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'],
  variable: '--font-ko',
  display: 'swap',
})



export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${inter.variable} ${interTight.variable} ${notoSansKr.variable} min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] selection:bg-[var(--color-accent)] selection:text-[var(--color-bg)] antialiased`}>
      <div className="-ko">
        {children}
      </div>
    </div>
  )
}
