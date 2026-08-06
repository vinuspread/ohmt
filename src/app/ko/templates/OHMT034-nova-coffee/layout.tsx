import type { Metadata } from 'next'
import { TemplateWrapper } from './_components/TemplateWrapper'
import './theme.css'

export const metadata: Metadata = {
  title: 'OHMT - ?? ????? ?? ???? ???',
  description:
    'NOVA는 열 안정성, 반복 추출, 오래 쓰는 구조를 기준으로 설계한 프리미엄 듀얼보일러 에스프레소 머신입니다. ±0.5°C 온도 제어, 상업용 그룹헤드, 프로그래머블 프리인퓨전을 갖췄습니다.',
  openGraph: {
    title: 'OHMT - ?? ????? ?? ???? ???',
    description:
      '±0.5°C 기준으로 설계한 프리미엄 듀얼보일러 에스프레소 머신. 상업용 그룹헤드, 프로그래머블 프리인퓨전, 손으로 마감한 소재.',
    images: [{ url: '/templates/OHMT034-nova-coffee/og-image.jpg', width: 1200, height: 630 }],
    locale: 'ko_KR',
    siteName: 'OHMT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OHMT - ?? ????? ?? ???? ???',
    description: '±0.5°C 기준으로 설계한 프리미엄 듀얼보일러 에스프레소 머신.',
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
