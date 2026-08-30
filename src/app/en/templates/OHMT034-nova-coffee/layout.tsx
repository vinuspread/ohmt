import type { Metadata } from 'next'
import { TemplateWrapper } from './_components/TemplateWrapper'
import './theme.css'

export const metadata: Metadata = {
  title: 'NOVA - Precision Espresso Product Template',
  description:
    'NOVA is a premium dual-boiler espresso machine engineered for thermal stability, mechanical repeatability, and a lifespan measured in decades. ±0.5°C temperature control, commercial-grade group head, programmable pre-infusion.',
  openGraph: {
    title: 'NOVA - Precision Espresso Product Template',
    description:
      'Premium dual-boiler espresso machine engineered to ±0.5°C. Commercial-grade group head, programmable pre-infusion, hand-finished materials.',
    images: [{ url: '/templates/OHMT034-nova-coffee/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    siteName: 'NOVA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NOVA - Precision Espresso Product Template',
    description: 'Premium dual-boiler espresso machine engineered to ±0.5°C.',
    images: ['/templates/OHMT034-nova-coffee/og-image.jpg'],
  },
  alternates: {
    canonical: '/en/templates/OHMT034-nova-coffee',
    languages: {
      en: '/en/templates/OHMT034-nova-coffee',
      ko: '/ko/templates/OHMT034-nova-coffee',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "NOVA - NOVA Coffee",
  description:
    'NOVA is a premium dual-boiler espresso machine engineered for thermal stability, mechanical repeatability, and a lifespan measured in decades.',
  url: "https://ohmytemplate.com/en/templates/OHMT034-nova-coffee",
}

export default function NovaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
      `}</style>
      <TemplateWrapper>{children}</TemplateWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
