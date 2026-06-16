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

export const metadata = {
  title: 'Technology - Oh My Template',
  description: '머신러닝 및 로보틱스 스타트업을 위한 전문적이고 역동적인 플랫폼.',
}

export default function TechnologyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${inter.variable} ${interTight.variable} min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] selection:bg-[var(--color-accent)] selection:text-[var(--color-bg)] antialiased`}>
      <div className="-ko">
        {children}
      </div>
    </div>
  )
}
