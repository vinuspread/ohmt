import type { Metadata } from 'next'
import './theme.css'

export const metadata: Metadata = {
  title: {
    default: 'OHMT 커뮤니티',
    template: '%s | OHMT 커뮤니티',
  },
  description: '질문, 정보, 후기, 공지를 한 곳에서 나누는 한국어 커뮤니티 템플릿입니다.',
  openGraph: {
    title: 'OHMT - 회원 디스커션 허브 템플릿',
    description: '3단 피드와 게시판, 댓글, 가입 안내 UI를 갖춘 커뮤니티 템플릿입니다.',
    images: [{ url: '/templates/OHMT032-community/og-image.jpg', width: 2400, height: 1260 }],
    locale: 'ko_KR',
    siteName: 'OHMT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OHMT - 회원 디스커션 허브 템플릿',
    description: '정돈된 커뮤니티 피드와 게시판 템플릿입니다.',
    images: ['/templates/OHMT032-community/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: '/ko/templates/OHMT032-community' },
}

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="ko" className="ohmt032-community">
      <style>{`@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css');`}</style>
      {children}
    </div>
  )
}
