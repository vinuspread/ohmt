import type { Metadata } from 'next'
import { TemplateWrapper } from './_components/TemplateWrapper'
import './theme.css'

export const metadata: Metadata = {
  title: '앰버 그로브 | 제철 과일 산지 직송',
  description:
    '3대째 이어온 유기농 과수원 앰버 그로브가 제철 과일을 수확해 선별·포장하고, 수확 기록 카드와 함께 산지에서 바로 보냅니다.',
  openGraph: {
    title: '앰버 그로브 | 제철 과일 산지 직송',
    description:
      '3대째 이어온 유기농 과수원에서 제철 복숭아와 자두, 베리류, 사과를 수확해 산지에서 바로 보냅니다.',
    images: [{ url: '/templates/OHMT036-amber-grove/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ko_KR',
    siteName: 'OHMT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '앰버 그로브 | 제철 과일 산지 직송',
    description: '3대째 이어온 유기농 과수원의 제철 과일 산지 직송 상자.',
    images: ['/templates/OHMT036-amber-grove/og-image.jpg'],
  },
  alternates: {
    canonical: '/ko/templates/OHMT036-amber-grove',
    languages: {
      en: '/en/templates/OHMT036-amber-grove',
      ko: '/ko/templates/OHMT036-amber-grove',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AmberGroveKoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500;600;700&display=swap');
      `}</style>
      <TemplateWrapper>
          <div lang="ko" className="ohmt036-amber-grove">{children}</div>
        </TemplateWrapper>
    </>
  )
}
