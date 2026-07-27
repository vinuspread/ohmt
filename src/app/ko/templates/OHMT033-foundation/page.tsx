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
  title: 'OHMT 파운데이션',
  description:
    '기술 교육, 지역 건강 지원, 숲 복원, 장학 프로그램의 참여자 이야기와 확인 가능한 성과를 소개합니다.',
}

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'OHMT 파운데이션',
  url: '/ko/templates/OHMT033-foundation',
  description: '참여자의 이야기와 확인 가능한 프로그램 성과를 함께 공개하는 재단입니다.',
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
