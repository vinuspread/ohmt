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
  title: 'OHMT 파운데이션 홈',
  description:
    '유스 인 테크, 헬스 코어, 그린 퓨처스, 퍼스트젠 스칼러스의 사람 중심 스토리와 검증 가능한 임팩트 데이터.',
}

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'OHMT 파운데이션',
  url: '/ko/templates/OHMT033-foundation',
  description: '사람 중심 스토리와 검증 가능한 프로그램 데이터로 사회적 임팩트를 보여주는 재단.',
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
