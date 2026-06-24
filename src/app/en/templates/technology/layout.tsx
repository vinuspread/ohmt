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

export const metadata: Metadata = {
  title: 'Technology - Oh My Template',
  description: 'Empower machine learning and robotics startups with a professional, dynamic platform.',
  openGraph: {
    title: 'Technology - Oh My Template',
    description: 'Empower machine learning and robotics startups with a professional, dynamic platform.',
    url: 'https://ohmytemplate.com/en/templates/OHMT016-technology-EN',
    siteName: 'Oh My Template',
    images: [{ url: '/templates/technology/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology - Oh My Template',
    description: 'Empower machine learning and robotics startups with a professional, dynamic platform.',
    images: ['/templates/technology/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://ohmytemplate.com/en/templates/OHMT016-technology-EN',
    languages: { 'ko': 'https://ohmytemplate.com/ko/templates/OHMT016-technology-KO' },
  },
}

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
