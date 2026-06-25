import type { Metadata } from "next"
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

export const metadata: Metadata = {
  title: 'Technology - Oh My Template',
  description: '머신러닝 및 로보틱스 스타트업을 위한 전문적이고 역동적인 플랫폼.',
  openGraph: {
    title: 'Technology - Oh My Template',
    description: '머신러닝 및 로보틱스 스타트업을 위한 전문적이고 역동적인 플랫폼.',
    url: 'https://ohmytemplate.com/ko/templates/OHMT016-technology',
    siteName: 'Oh My Template',
    images: [{ url: '/templates/OHMT016-technology/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology - Oh My Template',
    description: '머신러닝 및 로보틱스 스타트업을 위한 전문적이고 역동적인 플랫폼.',
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
    <div className={`${inter.variable} ${interTight.variable} ${notoSansKr.variable} min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] selection:bg-[var(--color-accent)] selection:text-[var(--color-bg)] antialiased`}>
      <div className="-ko">
        {children}
      </div>
    </div>
  )
}
