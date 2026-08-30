import type { Metadata } from 'next'
import { Hero } from './_components/sections/Hero'
import { CategoryGrid } from './_components/sections/CategoryGrid'
import { BrandSplit } from './_components/sections/BrandSplit'
import { ProductShowcase } from './_components/sections/ProductShowcase'
import { ServiceBand } from './_components/sections/ServiceBand'
import { SecondaryProductRow } from './_components/sections/SecondaryProductRow'
import { FeatureSpotlight } from './_components/sections/FeatureSpotlight'
import { JournalGrid } from './_components/sections/JournalGrid'

export const metadata: Metadata = {
  title: 'OHMT - Atelier House',
  description:
    'Atelier House is a warm-minimal furniture and home goods studio. Solid-wood seating, tables, lighting, and textiles built for rooms that get used every day.',
}

const storeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'OnlineStore',
  name: 'Atelier House',
  description: 'Warm-minimal furniture and home goods studio: solid-wood seating, tables, lighting, and textiles.',
  url: 'https://ohmytemplate.com/en/templates/OHMT035-atelier-house',
}

export default function AtelierHouseHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(storeJsonLd) }} />
      <h1 className="sr-only">Atelier House - Warm Minimal Furniture and Home Goods</h1>
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
