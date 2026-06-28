import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "주얼리·럭셔리 브랜드 웹사이트 템플릿 | OHMT",
  description: "주얼리, 럭셔리 브랜드를 위한 우아한 웹사이트 템플릿입니다. 컬렉션 소개, 브랜드 헤리티지, 부티크 스타일 레이아웃을 포함합니다.",
  openGraph: {
    title: "주얼리·럭셔리 브랜드 웹사이트 템플릿 | OHMT",
    description: "주얼리, 럭셔리 브랜드를 위한 우아한 웹사이트 템플릿입니다. 컬렉션 소개, 브랜드 헤리티지, 부티크 스타일 레이아웃을 포함합니다.",
    url: "https://ohmt.site/ko/templates/jewelry",
    siteName: "OHMT",
    images: [{ url: "/templates/jewelry/og-image.jpg", width: 1200, height: 630, alt: "주얼리·럭셔리 브랜드 웹사이트 템플릿" }],
    locale: "ko_KR",
    type: "website",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "주얼리·럭셔리 브랜드 웹사이트 템플릿 | OHMT",
    description: "주얼리, 럭셔리 브랜드를 위한 우아한 웹사이트 템플릿입니다. 컬렉션 소개, 브랜드 헤리티지, 부티크 스타일 레이아웃을 포함합니다.",
    images: ["/templates/jewelry/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/jewelry",
    languages: { "en": "https://ohmt.site/en/templates/jewelry" },
  },
};

import './theme.css';



export default function JewelryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Jost:wght@300;400;500;600&family=Nanum+Myeongjo:wght@400;700;800&display=swap" rel="stylesheet" />
      <link rel="stylesheet" as="style" crossOrigin="anonymous" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
      {children}
    </>
  );
}
