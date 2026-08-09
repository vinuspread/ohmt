import type { Metadata } from 'next'
import { TemplateWrapper } from './_components/TemplateWrapper'
import './theme.css'

export const metadata: Metadata = {
  title: 'OHMT - Organic Orchard Brand Template',
  description:
    'Amber Grove is a third-generation organic orchard growing stone fruit, berries, and citrus, sold direct from the farm.',
  openGraph: {
    title: 'OHMT - Organic Orchard Brand Template',
    description:
      'Third-generation organic orchard growing stone fruit, berries, and citrus, sold direct from the farm.',
    images: [{ url: '/templates/OHMT036-amber-grove/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    siteName: 'OHMT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OHMT - Organic Orchard Brand Template',
    description: 'Third-generation organic orchard growing stone fruit, berries, and citrus.',
    images: ['/templates/OHMT036-amber-grove/og-image.jpg'],
  },
  alternates: {
    canonical: '/en/templates/OHMT036-amber-grove',
    languages: {
      en: '/en/templates/OHMT036-amber-grove',
      ko: '/ko/templates/OHMT036-amber-grove',
    },
  },
  robots: {
    index: false,
    follow: false,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "OHMT - Amber Grove",
  description:
    'Amber Grove is a third-generation organic orchard growing stone fruit, berries, and citrus, sold direct from the farm.',
  url: "https://ohmt.site/en/templates/OHMT036-amber-grove",
}

export default function AmberGroveLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&family=Work+Sans:wght@400;500;600;700&display=swap');
      `}</style>
      <TemplateWrapper>{children}</TemplateWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
