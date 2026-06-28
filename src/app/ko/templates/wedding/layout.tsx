import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "웨딩 사진·이벤트 웹사이트 템플릿 | OHMT",
  description: "웨딩 사진작가, 이벤트 업체를 위한 우아한 웹사이트 템플릿입니다. 갤러리, 패키지 요금, 스토리텔링 레이아웃을 포함합니다.",
  openGraph: {
    title: "웨딩 사진·이벤트 웹사이트 템플릿 | OHMT",
    description: "웨딩 사진작가, 이벤트 업체를 위한 우아한 웹사이트 템플릿입니다. 갤러리, 패키지 요금, 스토리텔링 레이아웃을 포함합니다.",
    url: "https://ohmt.site/ko/templates/wedding",
    siteName: "OHMT",
    images: [{ url: "/templates/wedding/og-image.jpg", width: 1200, height: 630, alt: "웨딩 사진·이벤트 웹사이트 템플릿" }],
    locale: "ko_KR",
    type: "website",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "웨딩 사진·이벤트 웹사이트 템플릿 | OHMT",
    description: "웨딩 사진작가, 이벤트 업체를 위한 우아한 웹사이트 템플릿입니다. 갤러리, 패키지 요금, 스토리텔링 레이아웃을 포함합니다.",
    images: ["/templates/wedding/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/wedding",
    languages: { "en": "https://ohmt.site/en/templates/wedding" },
  },
};

import "./theme.css";



export default function TemplateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css');`}</style>
      {children}
    </>
  );
}
