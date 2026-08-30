import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './theme.css'
const geist = Geist({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const geistBody = Geist({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'OHMT - Analytics Command Center Interface Template',
  description: 'OHMT admin dashboard template',
  openGraph: {
    title: 'OHMT - Analytics Command Center Interface Template',
    description: 'OHMT admin dashboard template',
    url: 'https://ohmytemplate.com/en/templates/OHMT015-dashboard',
    siteName: 'OHMT',
    images: [{ url: '/templates/OHMT015-dashboard/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OHMT - Analytics Command Center Interface Template',
    description: 'OHMT admin dashboard template',
    images: ['/templates/OHMT015-dashboard/og-image.jpg'],
  },
}

export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className={`${geist.variable} ${geistBody.variable} ${geistMono.variable}`} data-theme="dark">
      {children}
    </section>
  )
}
