import type { Metadata } from 'next'
import { TemplateWrapper } from './_components/TemplateWrapper'
import './theme.css'

export const metadata: Metadata = {
  title: 'FORMA 피규어',
  description:
    'FORMA는 원형 제작부터 손도색과 에디션 번호 각인까지 직접 진행하는 소량 생산 피규어 스튜디오입니다.',
  openGraph: {
    title: 'FORMA 피규어',
    description: '소량 생산 피규어와 한정 에디션, 손도색 아트 토이를 선보이는 FORMA 스튜디오.',
    images: [{ url: '/templates/OHMT037-figure-shop/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ko_KR',
    siteName: 'OHMT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FORMA 피규어',
    description: 'FORMA의 소량 생산 피규어와 한정 에디션을 만나보세요.',
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
  name: 'FORMA 피규어',
  description:
    'FORMA는 소량 생산 피규어와 한정 에디션, 손도색 아트 토이를 선보이는 스튜디오입니다.',
  url: 'https://ohmytemplate.com/ko/templates/OHMT037-figure-shop',
}

export default function FigureShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
      `}</style>
      <TemplateWrapper>
          <div lang="ko" className="ohmt037-figure-shop">{children}</div>
        </TemplateWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
