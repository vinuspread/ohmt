import { CrateLedgerBand } from './_components/sections/CrateLedgerBand'
import { FaqAccordion } from './_components/sections/FaqAccordion'
import { FeatureBand } from './_components/sections/FeatureBand'
import { Hero } from './_components/sections/Hero'
import { ShowcaseAccordion } from './_components/sections/ShowcaseAccordion'
import { Testimonials } from './_components/sections/Testimonials'

export default function AmberGrovePage() {
  return (
    <>
      <Hero />
      <FeatureBand />
      <ShowcaseAccordion />
      <CrateLedgerBand />
      <Testimonials />
      <FaqAccordion />
    </>
  )
}
