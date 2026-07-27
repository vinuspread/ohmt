import "./theme.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OHMT | 스파 & 웰니스",
  description: "피부와 몸의 컨디션에 맞춘 페이셜·바디 케어를 제공하는 차분한 스파 & 웰니스 공간입니다.",
  keywords: ["스파 템플릿", "웰니스 웹사이트", "스파 예약", "Next.js 템플릿", "OHMT"],
  authors: [{ name: "OHMT", url: "https://ohmytemplate.com" }],
  openGraph: {
    title: "OHMT | 스파 & 웰니스",
    description: "피부와 몸의 컨디션에 맞춘 페이셜·바디 케어를 제공하는 차분한 스파 & 웰니스 공간입니다.",
    url: "https://ohmytemplate.com/ko/templates/OHMT026-spa",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT026-spa/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT | 스파 & 웰니스",
    description: "피부와 몸의 컨디션에 맞춘 페이셜·바디 케어를 제공하는 차분한 스파 & 웰니스 공간입니다.",
    images: ["/templates/OHMT026-spa/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT026-spa",
    languages: {
      "en": "https://ohmytemplate.com/en/templates/OHMT026-spa",
      "ko": "https://ohmytemplate.com/ko/templates/OHMT026-spa",
    },
  },
};

export default function SpaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" crossOrigin="anonymous" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
      `}</style>
      <div lang="ko" className="ohmt026-spa">{children}</div>
    </>
  );
}
