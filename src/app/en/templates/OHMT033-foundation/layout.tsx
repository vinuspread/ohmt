import type { Metadata } from 'next'
import { Instrument_Sans } from 'next/font/google'
import { TemplateWrapper } from './_components/TemplateWrapper'
import './theme.css'

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--ohmt033-sans',
})

export const metadata: Metadata = {
  title: {
    default: 'VERITAS Foundation - People, Proof, Progress',
    template: '%s | VERITAS Foundation',
  },
  description:
    'VERITAS Foundation proves social impact through people-first stories and verified program data across four community initiatives.',
  openGraph: {
    title: 'VERITAS - Nonprofit Proof Report Template',
    description:
      'A CSR and foundation template that pairs real stories with verified impact data across four community initiatives.',
    images: [{ url: '/templates/OHMT033-foundation/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    siteName: 'VERITAS',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VERITAS - Nonprofit Proof Report Template',
    description: 'A CSR and foundation template built on real stories and verified impact data.',
    images: ['/templates/OHMT033-foundation/og-image.jpg'],
  },
  alternates: {
    canonical: '/en/templates/OHMT033-foundation',
    languages: {
      en: '/en/templates/OHMT033-foundation',
      ko: '/ko/templates/OHMT033-foundation',
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
  name: "VERITAS Foundation - People, Proof, Progress",
  description:
    'VERITAS Foundation proves social impact through people-first stories and verified program data across four community initiatives.',
  url: "https://ohmytemplate.com/en/templates/OHMT033-foundation",
}

export default function FoundationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="en" className={`ohmt033-foundation ${instrumentSans.variable}`}>
      <TemplateWrapper>{children}</TemplateWrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
