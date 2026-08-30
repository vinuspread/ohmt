import "./theme.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "SOMA - 스파 웰니스",
  description: "다크 그린과 크림 톤의 차분한 팔레트, 대형 라이프스타일 이미지, 예약 중심 구성을 갖춘 프리미엄 스파 웰니스 샵 템플릿.",
  keywords: ["스파 템플릿", "웰니스 웹사이트", "스파 예약", "Next.js 템플릿", "SOMA"],
  authors: [{ name: "SOMA", url: "https://ohmytemplate.com" }],
  openGraph: {
    title: "SOMA - 스파 웰니스",
    description: "다크 그린과 크림 톤의 차분한 팔레트, 대형 라이프스타일 이미지, 예약 중심 구성을 갖춘 프리미엄 스파 웰니스 샵 템플릿.",
    url: "https://ohmytemplate.com/ko/templates/OHMT026-spa",
    siteName: "SOMA",
    images: [{ url: "/templates/OHMT026-spa/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOMA - 스파 웰니스",
    description: "다크 그린과 크림 톤의 차분한 팔레트, 대형 라이프스타일 이미지, 예약 중심 구성을 갖춘 프리미엄 스파 웰니스 샵 템플릿.",
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
      <style>{`
      `}</style>
      <div lang="ko" className="ohmt026-spa">{children}</div>
    </>
  );
}
