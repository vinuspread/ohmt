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
  title: 'Oh My Template Dashboard',
  description: 'Oh My Template admin dashboard template',
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
