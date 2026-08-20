import type { Metadata } from 'next'
import { TemplateWrapper } from '../_components/TemplateWrapper'
import { AboutClient } from '../_components/pages/AboutClient'
import { faqs } from '../data/faqs-data'

export const metadata: Metadata = {
  title: 'About the Community',
  description: 'Explore the operating model, rules, and FAQ for the AGORA community template.',
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
