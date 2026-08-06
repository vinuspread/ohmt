import type { Metadata } from 'next'
import { TemplateWrapper } from './_components/TemplateWrapper'
import './theme.css'

export const metadata: Metadata = {
  title: 'OHMT - Warm Minimal Furniture Store Template',
  description:
    'Atelier House is a warm-minimal furniture and home goods studio. Solid-wood seating, tables, lighting, and textiles built for rooms that get used every day.',
  openGraph: {
    title: 'OHMT - Warm Minimal Furniture Store Template',
    description:
      'Warm-minimal furniture and home goods: solid-wood seating, tables, lighting, and textiles built for rooms that get used every day.',
    images: [{ url: '/templates/OHMT035-atelier-house/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    siteName: 'OHMT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OHMT - Warm Minimal Furniture Store Template',
    description: 'Warm-minimal furniture and home goods, built for rooms that get used every day.',
    images: ['/templates/OHMT035-atelier-house/og-image.jpg'],
  },
  alternates: {
    canonical: '/en/templates/OHMT035-atelier-house',
    languages: {
      en: '/en/templates/OHMT035-atelier-house',
      ko: '/ko/templates/OHMT035-atelier-house',
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
  name: "OHMT - Atelier House",
  description:
    'Atelier House is a warm-minimal furniture and home goods studio. Solid-wood seating, tables, lighting, and textiles built for rooms that get used every day.',
  url: "https://ohmt.site/en/templates/OHMT035-atelier-house",
}

export default function AtelierHouseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      `}</style>
      <TemplateWrapper>{children}</TemplateWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
