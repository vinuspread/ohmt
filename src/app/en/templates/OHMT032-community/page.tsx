import type { Metadata } from 'next'
import { TemplateWrapper } from './_components/TemplateWrapper'
import { HomeClient } from './_components/pages/HomeClient'

export const metadata: Metadata = {
  title: 'AGORA Community Home',
  description: 'A community home for questions, resources, reviews, and notices.',
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'AGORA Community',
  url: '/en/templates/OHMT032-community',
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
