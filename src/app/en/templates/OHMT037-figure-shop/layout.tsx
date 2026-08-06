import type { Metadata } from 'next'
import { TemplateWrapper } from './_components/TemplateWrapper'
import './theme.css'

export const metadata: Metadata = {
  title: 'OHMT - Collectible Figure Shop Template',
  description:
    'FORMA is a small-batch collectible figure studio: seasonal drops, numbered editions, and hand-finished sculpts across five lines.',
  openGraph: {
    title: 'OHMT - Collectible Figure Shop Template',
    description:
      'Small-batch collectible figure studio: seasonal drops, numbered editions, and hand-finished sculpts.',
    images: [{ url: '/templates/OHMT037-figure-shop/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    siteName: 'OHMT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OHMT - Collectible Figure Shop Template',
    description: 'Small-batch collectible figure studio: seasonal drops and numbered editions.',
    images: ['/templates/OHMT037-figure-shop/og-image.jpg'],
  },
  alternates: {
    canonical: '/en/templates/OHMT037-figure-shop',
    languages: {
      en: '/en/templates/OHMT037-figure-shop',
      ko: '/ko/templates/OHMT037-figure-shop',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'OHMT - Forma Figures',
  description:
    'FORMA is a small-batch collectible figure studio: seasonal drops, numbered editions, and hand-finished sculpts across five lines.',
  url: 'https://ohmt.site/en/templates/OHMT037-figure-shop',
}

export default function FigureShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;600&display=swap');
      `}</style>
      <TemplateWrapper>{children}</TemplateWrapper>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}
