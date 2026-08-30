import type { Metadata } from 'next'
import { TemplateWrapper } from './_components/TemplateWrapper'
import './theme.css'

export const metadata: Metadata = {
  title: 'OHMT - 유기농 과수원 브랜드 템플릿',
  description:
    '3대째 이어온 유기농 과수원 앰버 그로브. 핵과와 베리, 사과를 밭에서 바로 선별해 수확한 주의 기록과 함께 보냅니다.',
  openGraph: {
    title: 'OHMT - 유기농 과수원 브랜드 템플릿',
    description:
      '3대째 이어온 유기농 과수원. 핵과와 베리, 사과를 밭에서 바로 선별해 산지 직송으로 보냅니다.',
    images: [{ url: '/templates/OHMT036-amber-grove/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ko_KR',
    siteName: 'OHMT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OHMT - 유기농 과수원 브랜드 템플릿',
    description: '3대째 이어온 유기농 과수원의 산지 직송 과일 상자.',
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
      `}</style>
      <TemplateWrapper>
          <div lang="ko" className="ohmt036-amber-grove">{children}</div>
        </TemplateWrapper>
    </>
  )
}
