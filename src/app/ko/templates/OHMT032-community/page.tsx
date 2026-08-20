import type { Metadata } from 'next'
import { TemplateWrapper } from './_components/TemplateWrapper'
import { HomeClient } from './_components/pages/HomeClient'

export const metadata: Metadata = {
  title: 'AGORA 커뮤니티 홈',
  description: '질문, 정보, 후기, 공지를 한 곳에서 나누는 커뮤니티 홈입니다.',
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'AGORA 커뮤니티',
  url: '/ko/templates/OHMT032-community',
  publisher: {
    '@type': 'Organization',
    name: 'AGORA',
  },
}

export default function CommunityHomePage() {
  return (
    <TemplateWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <HomeClient />
    </TemplateWrapper>
  )
}
