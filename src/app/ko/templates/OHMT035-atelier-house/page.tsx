import type { Metadata } from 'next'
import { TemplateWrapper } from './_components/TemplateWrapper'
import { Hero } from './_components/sections/Hero'
import { CategoryGrid } from './_components/sections/CategoryGrid'
import { ProductShowcase } from './_components/sections/ProductShowcase'
import { BrandSplit } from './_components/sections/BrandSplit'
import { ServiceBand } from './_components/sections/ServiceBand'
import { SecondaryProductRow } from './_components/sections/SecondaryProductRow'
import { FeatureSpotlight } from './_components/sections/FeatureSpotlight'
import { JournalGrid } from './_components/sections/JournalGrid'

export const metadata: Metadata = {
  title: 'Atelier House - 따뜻한 미니멀리즘 원목 가구',
  description:
    '아틀리에 하우스는 일상 공간을 위해 견고하게 지은 원목 가구와 조명을 선보이는 소규모 스튜디오입니다. 참나무와 자작나무 식탁, 의자, 패브릭 조합을 제안합니다.',
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
  name: '아틀리에 하우스 (Atelier House)',
  description: '일상 공간을 위해 견고하게 지은 원목 가구와 조명을 선보이는 소규모 스튜디오',
  url: 'https://ohmytemplate.com/ko/templates/OHMT035-atelier-house',
}

export default function AtelierHouseKoHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(storeJsonLd) }} />
      <h1 className="sr-only">아틀리에 하우스 - 따뜻한 미니멀 원목 가구 및 소품 스튜디오</h1>
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
