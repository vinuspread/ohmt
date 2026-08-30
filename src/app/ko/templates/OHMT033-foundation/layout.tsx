import type { Metadata } from 'next'
import { TemplateWrapper } from './_components/TemplateWrapper'
import './theme.css'

export const metadata: Metadata = {
  title: {
    default: 'VERITAS 재단 - 사람, 증거, 진전',
    template: '%s | VERITAS 재단',
  },
  description:
    'VERITAS 재단은 사람 중심의 스토리와 검증 가능한 프로그램 데이터로 사회적 임팩트를 보여줍니다.',
  openGraph: {
    title: 'VERITAS - 비영리 증명 보고서 템플릿',
    description:
      '실제 스토리와 검증 가능한 임팩트 데이터를 함께 보여주는 CSR·재단 템플릿입니다.',
    images: [{ url: '/templates/OHMT033-foundation/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ko_KR',
    siteName: 'VERITAS',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VERITAS - 비영리 증명 보고서 템플릿',
    description: '실제 스토리와 검증 가능한 임팩트 데이터로 구성된 CSR·재단 템플릿입니다.',
    images: ['/templates/OHMT033-foundation/og-image.jpg'],
  },
  alternates: {
    canonical: '/ko/templates/OHMT033-foundation',
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

export default function FoundationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="ko" className="ohmt033-foundation">
      <TemplateWrapper>{children}</TemplateWrapper>
    </div>
  )
}
