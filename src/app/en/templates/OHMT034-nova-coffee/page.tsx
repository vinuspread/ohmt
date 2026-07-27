import type { Metadata } from 'next'
import { Hero } from './_components/sections/Hero'
import { PrecisionEngineering } from './_components/sections/PrecisionEngineering'
import { MachineAnatomy } from './_components/sections/MachineAnatomy'
import { ProductSpotlight } from './_components/sections/ProductSpotlight'
import { BuyerQuestions } from './_components/sections/BuyerQuestions'
import { BrandStory } from './_components/sections/BrandStory'
import { ClosingCTABand } from './_components/sections/ClosingCTABand'

export const metadata: Metadata = {
  title: 'OHMT - NOVA Coffee',
  description:
    'NOVA is a premium dual-boiler espresso machine engineered to ±0.5°C. Commercial-grade group head, programmable pre-infusion, hand-finished materials.',
}

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'NOVA Dual-Boiler Espresso Machine',
  description:
    'Premium dual-boiler espresso machine with PID temperature control, commercial-grade group head, and programmable pre-infusion. Engineered to ±0.5°C thermal stability.',
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
