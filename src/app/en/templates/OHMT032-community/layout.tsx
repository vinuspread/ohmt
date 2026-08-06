import type { Metadata } from 'next'
import './theme.css'

export const metadata: Metadata = {
  title: {
    default: 'OHMT Community',
    template: '%s | OHMT Community',
  },
  description: 'An English community template for questions, resources, reviews, and announcements.',
  openGraph: {
    title: 'OHMT - Member Discussion Hub Template',
    description: 'A community template with a three-column feed, boards, comments, and membership inquiry UI.',
    images: [{ url: '/templates/OHMT032-community/og-image.jpg', width: 2400, height: 1260 }],
    locale: 'en_US',
    siteName: 'OHMT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OHMT - Member Discussion Hub Template',
    description: 'A polished community feed and board template.',
    images: ['/templates/OHMT032-community/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "OHMT Community",
  description: "An English community template for questions, resources, reviews, and announcements.",
  url: "https://ohmt.site/en/templates/OHMT032-community",
}

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="en" className="ohmt032-community">
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
