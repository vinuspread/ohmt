import type { Metadata } from 'next'
import { Hero } from './_components/sections/Hero'
import { PrecisionEngineering } from './_components/sections/PrecisionEngineering'
import { MachineAnatomy } from './_components/sections/MachineAnatomy'
import { ProductSpotlight } from './_components/sections/ProductSpotlight'
import { BuyerQuestions } from './_components/sections/BuyerQuestions'
import { BrandStory } from './_components/sections/BrandStory'
import { ClosingCTABand } from './_components/sections/ClosingCTABand'

export const metadata: Metadata = {
  title: 'NOVA - 정밀 에스프레소 엔지니어링',
  description:
    'NOVA는 ±0.5°C 온도 안정성, 상업용 그룹헤드, 프로그래머블 프리인퓨전을 갖춘 프리미엄 듀얼보일러 에스프레소 머신입니다.',
}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'NOVA 듀얼보일러 에스프레소 머신',
  description:
    'PID 온도 제어, 상업용 그룹헤드, 프로그래머블 프리인퓨전을 갖춘 프리미엄 듀얼보일러 에스프레소 머신. ±0.5°C 열 안정성을 기준으로 설계했습니다.',
  brand: {
    '@type': 'Brand',
    name: 'NOVA',
  },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'USD',
    price: '3499.00',
  },
}

export default function NovaHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <Hero />
      <PrecisionEngineering />
      <MachineAnatomy />
      <ProductSpotlight />
      <BuyerQuestions />
      <BrandStory />
      <ClosingCTABand />
    </>
  )
}

