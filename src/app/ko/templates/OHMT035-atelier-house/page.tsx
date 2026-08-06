import type { Metadata } from 'next'
import { Hero } from './_components/sections/Hero'
import { CategoryGrid } from './_components/sections/CategoryGrid'
import { ProductShowcase } from './_components/sections/ProductShowcase'
import { BrandSplit } from './_components/sections/BrandSplit'
import { ServiceBand } from './_components/sections/ServiceBand'
import { SecondaryProductRow } from './_components/sections/SecondaryProductRow'
import { FeatureSpotlight } from './_components/sections/FeatureSpotlight'
import { JournalGrid } from './_components/sections/JournalGrid'

export const metadata: Metadata = {
  title: '아틀리에 하우스 | 원목 가구와 조명',
  description:
    '아틀리에 하우스는 참나무와 자작나무로 식탁과 의자, 조명을 제작하는 소규모 가구 스튜디오입니다. 원목 구조와 수리 가능한 짜맞춤 방식을 중요하게 생각합니다.',
  alternates: {
    canonical: '/ko/templates/OHMT035-atelier-house',
    languages: {
      en: '/en/templates/OHMT035-atelier-house',
      ko: '/ko/templates/OHMT035-atelier-house',
    },
  },
}

const storeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'OnlineStore',
  name: '아틀리에 하우스',
  description: '원목 식탁과 의자, 조명을 직접 설계하고 제작하는 소규모 가구 스튜디오',
  url: 'https://ohmt.site/ko/templates/OHMT035-atelier-house',
}

export default function AtelierHouseKoHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(storeJsonLd) }} />
      <h1 className="sr-only">아틀리에 하우스 | 원목 가구와 조명 스튜디오</h1>
      <Hero />
      <CategoryGrid />
      <ProductShowcase />
      <BrandSplit />
      <ServiceBand />
      <SecondaryProductRow />
      <FeatureSpotlight />
      <JournalGrid />
    </>
  )
}
