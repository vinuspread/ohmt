import type { Metadata } from 'next'
import { TemplateWrapper } from './_components/TemplateWrapper'
import './theme.css'

export const metadata: Metadata = {
  title: 'NOVA - 정밀 듀얼 보일러 에스프레소 머신',
  description:
    'NOVA는 ±0.5°C PID 온도 제어, 58mm 상업용 그룹 헤드, 프로그래머블 프리인퓨전, 교체 가능한 부품 구조를 갖춘 듀얼 보일러 에스프레소 머신입니다.',
  openGraph: {
    title: 'NOVA - 정밀 듀얼 보일러 에스프레소 머신',
    description:
      '±0.5°C PID 온도 제어, 58mm 상업용 그룹 헤드, 프로그래머블 프리인퓨전을 갖춘 NOVA 듀얼 보일러 에스프레소 머신.',
    images: [{ url: '/templates/OHMT034-nova-coffee/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ko_KR',
    siteName: 'OHMT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NOVA - 정밀 듀얼 보일러 에스프레소 머신',
    description: '±0.5°C PID 온도 제어를 적용한 NOVA 듀얼 보일러 에스프레소 머신.',
    images: ['/templates/OHMT034-nova-coffee/og-image.jpg'],
  },
  alternates: {
    canonical: '/ko/templates/OHMT034-nova-coffee',
    languages: {
      en: '/en/templates/OHMT034-nova-coffee',
      ko: '/ko/templates/OHMT034-nova-coffee',
    },
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function NovaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
      `}</style>
      <TemplateWrapper>
          <div lang="ko" className="ohmt034-nova-coffee">{children}</div>
        </TemplateWrapper>
    </>
  )
}
