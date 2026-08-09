import type { Metadata } from 'next'
import { TemplateWrapper } from './_components/TemplateWrapper'
import './theme.css'

export const metadata: Metadata = {
  title: {
    default: 'OHMT 파운데이션 | 사람과 기록으로 만드는 변화',
    template: '%s | OHMT 파운데이션',
  },
  description:
    'OHMT 파운데이션은 참여자의 이야기와 확인 가능한 프로그램 성과를 함께 공개합니다.',
  openGraph: {
    title: 'OHMT | 파운데이션·사회공헌',
    description:
      '참여자의 실제 이야기와 확인 가능한 성과 데이터를 담은 재단·사회공헌 웹사이트입니다.',
    images: [{ url: '/templates/OHMT033-foundation/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ko_KR',
    siteName: 'OHMT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OHMT | 파운데이션·사회공헌',
    description: '참여자의 실제 이야기와 확인 가능한 성과 데이터를 담은 재단·사회공헌 웹사이트입니다.',
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
    index: false,
    follow: false,
  },
}

export default function FoundationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="ko" className="ohmt033-foundation">
      <TemplateWrapper>{children}</TemplateWrapper>
    </div>
  )
}
