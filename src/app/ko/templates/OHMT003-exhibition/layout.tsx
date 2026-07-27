import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "OHMT | 현대미술 갤러리",
  description: "동시대 작가의 전시와 토크, 워크숍을 소개하는 현대미술 갤러리입니다.",
  openGraph: {
    title: "OHMT | 현대미술 갤러리",
    description: "동시대 작가의 전시와 토크, 워크숍을 소개하는 현대미술 갤러리입니다.",
    url: "https://ohmytemplate.com/ko/templates/OHMT003-exhibition",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT003-exhibition/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT | 현대미술 갤러리",
    description: "동시대 작가의 전시와 토크, 워크숍을 소개하는 현대미술 갤러리입니다.",
    images: ["/templates/OHMT003-exhibition/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT003-exhibition",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT003-exhibition" },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" crossOrigin="anonymous" />
      <div className="exhibition-ko">
        <div lang="ko" className="ohmt003-exhibition">{children}</div>
      </div>
    </>
  );
}
