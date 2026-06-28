import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "자동차 브랜드 웹사이트 템플릿 | OHMT",
  description: "자동차 브랜드, 딜러십, 차량 쇼케이스를 위한 웹사이트 템플릿입니다. 다이나믹한 레이아웃과 차량 하이라이트 섹션이 특징입니다.",
  openGraph: {
    title: "자동차 브랜드 웹사이트 템플릿 | OHMT",
    description: "자동차 브랜드, 딜러십, 차량 쇼케이스를 위한 웹사이트 템플릿입니다. 다이나믹한 레이아웃과 차량 하이라이트 섹션이 특징입니다.",
    url: "https://ohmt.site/ko/templates/car",
    siteName: "OHMT",
    images: [{ url: "/templates/car/og-image.jpg", width: 1200, height: 630, alt: "자동차 브랜드 웹사이트 템플릿" }],
    locale: "ko_KR",
    type: "website",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "자동차 브랜드 웹사이트 템플릿 | OHMT",
    description: "자동차 브랜드, 딜러십, 차량 쇼케이스를 위한 웹사이트 템플릿입니다. 다이나믹한 레이아웃과 차량 하이라이트 섹션이 특징입니다.",
    images: ["/templates/car/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/car",
    languages: { "en": "https://ohmt.site/en/templates/car" },
  },
};

import './theme.css';



export default function CarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800;900&family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');
      `}</style>
      {children}
    </>
  );
}
