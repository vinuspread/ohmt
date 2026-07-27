import type { Metadata } from 'next'
import { TemplateWrapper } from './_components/TemplateWrapper'
import './theme.css'

export const metadata: Metadata = {
  title: '아틀리에 하우스 | 원목 가구와 조명',
  description: '원목 식탁과 의자, 조명, 패브릭 제품을 소개하는 아틀리에 하우스 온라인 스토어입니다.',
  openGraph: {
    title: '아틀리에 하우스 | 원목 가구와 조명',
    description: '원목 식탁과 의자, 조명, 패브릭 제품을 소개하는 아틀리에 하우스 온라인 스토어입니다.',
    url: 'https://ohmytemplate.com/ko/templates/OHMT035-atelier-house',
    siteName: 'OHMT',
    images: [{ url: '/templates/OHMT035-atelier-house/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ko_KR',
    alternateLocale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '아틀리에 하우스 | 원목 가구와 조명',
    description: '원목 식탁과 의자, 조명, 패브릭 제품을 소개하는 아틀리에 하우스 온라인 스토어입니다.',
    images: ['/templates/OHMT035-atelier-house/og-image.jpg'],
  },
  alternates: {
    canonical: '/ko/templates/OHMT035-atelier-house',
    languages: {
      en: '/en/templates/OHMT035-atelier-house',
      ko: '/ko/templates/OHMT035-atelier-house',
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "아틀리에 하우스 | 원목 가구와 조명",
  description: '원목 식탁과 의자, 조명, 패브릭 제품을 소개하는 온라인 스토어',
  url: "https://ohmytemplate.com/ko/templates/OHMT035-atelier-house",
}

export default function AtelierHouseKoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div lang="ko" className="ohmt035-atelier-house">
        <TemplateWrapper>{children}</TemplateWrapper>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
