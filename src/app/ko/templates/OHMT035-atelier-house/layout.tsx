import type { Metadata } from 'next'
import { TemplateWrapper } from './_components/TemplateWrapper'
import './theme.css'

export const metadata: Metadata = {
  title: 'ATELIER - 웜 미니멀 가구 스토어 템플릿',
  description: '아틀리에 하우스는 매일 쓰는 공간을 위해 원목 의자, 테이블, 조명, 패브릭을 만드는 따뜻한 미니멀리즘 가구 스튜디오입니다.',
  openGraph: {
    title: 'ATELIER - 웜 미니멀 가구 스토어 템플릿',
    description: '아틀리에 하우스는 매일 쓰는 공간을 위해 원목 의자, 테이블, 조명, 패브릭을 만드는 따뜻한 미니멀리즘 가구 스튜디오입니다.',
    url: 'https://ohmytemplate.com/ko/templates/OHMT035-atelier-house',
    siteName: 'ATELIER',
    images: [{ url: '/templates/OHMT035-atelier-house/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ko_KR',
    alternateLocale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ATELIER - 웜 미니멀 가구 스토어 템플릿',
    description: '아틀리에 하우스는 매일 쓰는 공간을 위해 원목 의자, 테이블, 조명, 패브릭을 만드는 따뜻한 미니멀리즘 가구 스튜디오입니다.',
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
  name: "Atelier House - 따뜻한 미니멀리즘 원목 가구",
  description: '아틀리에 하우스는 매일 쓰는 공간을 위해 원목 의자, 테이블, 조명, 패브릭을 만드는 따뜻한 미니멀리즘 가구 스튜디오입니다.',
  url: "https://ohmytemplate.com/ko/templates/OHMT035-atelier-house",
}

export default function AtelierHouseKoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div lang="ko" className="ohmt035-atelier-house"><TemplateWrapper>{children}</TemplateWrapper></div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
