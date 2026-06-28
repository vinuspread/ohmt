import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Startup & AI Company Website Template | OHMT",
  description: "A dynamic technology and AI startup website template with product showcases, team sections, and modern digital aesthetics.",
  openGraph: {
    title: "Tech Startup & AI Company Website Template | OHMT",
    description: "A dynamic technology and AI startup website template with product showcases, team sections, and modern digital aesthetics.",
    url: "https://ohmt.site/en/templates/technology",
    siteName: "OHMT",
    images: [{ url: "/templates/technology/og-image.jpg", width: 1200, height: 630, alt: "Tech Startup & AI Company Website Template" }],
    locale: "en_US",
    type: "website",
    alternateLocale: ["ko_KR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Startup & AI Company Website Template | OHMT",
    description: "A dynamic technology and AI startup website template with product showcases, team sections, and modern digital aesthetics.",
    images: ["/templates/technology/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/technology",
    languages: { "ko": "https://ohmt.site/ko/templates/technology" },
  },
};

import type { Metadata } from "next"
import './theme.css'
import { Inter, Inter_Tight } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})



export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${inter.variable} ${interTight.variable} min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] selection:bg-[var(--color-accent)] selection:text-[var(--color-bg)] antialiased`}>
      {children}
    </div>
  )
}
