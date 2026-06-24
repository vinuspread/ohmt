import "./theme.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "스파 웰니스 - Oh My Template",
  description: "다크 그린과 크림 톤의 차분한 팔레트, 대형 라이프스타일 이미지, 예약 중심 구성을 갖춘 프리미엄 스파 웰니스 샵 템플릿.",
  keywords: ["스파 템플릿", "웰니스 웹사이트", "스파 예약", "Next.js 템플릿", "Oh My Template"],
  authors: [{ name: "Oh My Template", url: "https://ohmytemplate.com" }],
  openGraph: {
    title: "스파 웰니스 - Oh My Template",
    description: "다크 그린과 크림 톤의 차분한 팔레트, 대형 라이프스타일 이미지, 예약 중심 구성을 갖춘 프리미엄 스파 웰니스 샵 템플릿.",
    url: "https://ohmytemplate.com/ko/templates/OHMT026-spa-KO",
    siteName: "Oh My Template",
    images: [{ url: "/templates/spa/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "스파 웰니스 - Oh My Template",
    description: "다크 그린과 크림 톤의 차분한 팔레트, 대형 라이프스타일 이미지, 예약 중심 구성을 갖춘 프리미엄 스파 웰니스 샵 템플릿.",
    images: ["/templates/spa/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT026-spa-KO",
    languages: {
      "en": "https://ohmytemplate.com/en/templates/OHMT026-spa-EN",
      "ko": "https://ohmytemplate.com/ko/templates/OHMT026-spa-KO",
    },
  },
};

export default function SpaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=Noto+Sans+KR:wght@400;500;700&display=swap');
      `}</style>
      {children}
    </>
  );
}
