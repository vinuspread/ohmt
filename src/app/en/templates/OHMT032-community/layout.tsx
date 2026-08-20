import type { Metadata } from 'next'
import './theme.css'

export const metadata: Metadata = {
  title: {
    default: 'AGORA Community',
    template: '%s | AGORA Community',
  },
  description: 'An English community template for questions, resources, reviews, and announcements.',
  openGraph: {
    title: 'AGORA - Member Discussion Hub Template',
    description: 'A community template with a three-column feed, boards, comments, and membership inquiry UI.',
    images: [{ url: '/templates/OHMT032-community/og-image.jpg', width: 2400, height: 1260 }],
    locale: 'en_US',
    siteName: 'AGORA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AGORA - Member Discussion Hub Template',
    description: 'A polished community feed and board template.',
    images: ['/templates/OHMT032-community/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: '/en/templates/OHMT032-community' },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AGORA Community",
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
