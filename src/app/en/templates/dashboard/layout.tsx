import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard Website Template | OHMT",
  description: "A clean and functional admin dashboard template with data charts, tables, and analytics widgets. Ideal for SaaS products and internal tools.",
  openGraph: {
    title: "Admin Dashboard Website Template | OHMT",
    description: "A clean and functional admin dashboard template with data charts, tables, and analytics widgets. Ideal for SaaS products and internal tools.",
    url: "https://ohmt.site/en/templates/dashboard",
    siteName: "OHMT",
    images: [{ url: "/templates/dashboard/og-image.jpg", width: 1200, height: 630, alt: "Admin Dashboard Website Template" }],
    locale: "en_US",
    type: "website",
    alternateLocale: ["ko_KR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Admin Dashboard Website Template | OHMT",
    description: "A clean and functional admin dashboard template with data charts, tables, and analytics widgets. Ideal for SaaS products and internal tools.",
    images: ["/templates/dashboard/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/dashboard",
    languages: { "ko": "https://ohmt.site/ko/templates/dashboard" },
  },
};


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
