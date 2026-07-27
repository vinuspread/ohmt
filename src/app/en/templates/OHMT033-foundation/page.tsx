import type { Metadata } from 'next'
import { Hero } from './_components/sections/Hero'
import { VisionStatement } from './_components/sections/VisionStatement'
import { FoundationIntro } from './_components/sections/FoundationIntro'
import { ProgramHighlight } from './_components/sections/ProgramHighlight'
import { ImpactStats } from './_components/sections/ImpactStats'
import { StorySpotlight } from './_components/sections/StorySpotlight'
import { NewsroomPreview } from './_components/sections/NewsroomPreview'
import { CTABanner } from './_components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'OHMT Foundation Home',
  description:
    'People-first stories and verified impact data from OHMT Foundation across Youth in Tech, Neighborhood Health Corps, Green Futures, and First Gen Scholars.',
}

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'OHMT Foundation',
  url: '/en/templates/OHMT033-foundation',
  description: 'A foundation proving social impact through people-first stories and verified program data.',
  logo: '/templates/OHMT033-foundation/og-image.jpg',
}

export default function FoundationHomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <Hero />
      <VisionStatement />
      <FoundationIntro />
      <ProgramHighlight />
      <ImpactStats />
      <StorySpotlight />
      <NewsroomPreview />
      <CTABanner />
    </>
  )
}
