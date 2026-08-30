import type { Metadata } from 'next'
import { TemplateWrapper } from './_components/TemplateWrapper'
import './theme.css'

export const metadata: Metadata = {
  title: 'OHMT - Forma Figures',
  description:
    'FORMA는 소량 생산 컬렉터블 피규어 스튜디오입니다. 드롭, 넘버드 에디션, 손마감 오브제 라인업을 통합 제공합니다.',
  openGraph: {
    title: 'OHMT - Forma Figures',
    description: '소량 생산 컬렉터블 피규어 스튜디오. 드롭, 넘버드 에디션, 손마감 오브제.',
    images: [{ url: '/templates/OHMT037-figure-shop/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ko_KR',
    siteName: 'OHMT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OHMT - Forma Figures',
    description: '소량 생산 컬렉터블 피규어 스튜디오. 드롭과 넘버드 에디션.',
    images: ['/templates/OHMT037-figure-shop/og-image.jpg'],
  },
  alternates: {
    canonical: '/ko/templates/OHMT037-figure-shop',
    languages: {
      en: '/en/templates/OHMT037-figure-shop',
      ko: '/ko/templates/OHMT037-figure-shop',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'OHMT - Forma Figures',
  description:
    'FORMA는 소량 생산 컬렉터블 피규어 스튜디오입니다. 드롭, 넘버드 에디션, 손마감 오브제를 다룹니다.',
  url: 'https://ohmytemplate.com/ko/templates/OHMT037-figure-shop',
}

export default function FigureShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
      `}</style>
      <TemplateWrapper>
          <div lang="ko" className="ohmt037-figure-shop">{children}</div>
        </TemplateWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
