import type { Metadata } from 'next'
import { TemplateWrapper } from '../_components/TemplateWrapper'
import { AboutClient } from '../_components/pages/AboutClient'
import { faqs } from '../data/faqs-data'

export const metadata: Metadata = {
  title: '커뮤니티 소개',
  description: 'OHMT 커뮤니티 템플릿의 운영 방식, 규칙, FAQ를 확인합니다.',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

export default function AboutPage() {
  return (
    <TemplateWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <AboutClient />
    </TemplateWrapper>
  )
}
