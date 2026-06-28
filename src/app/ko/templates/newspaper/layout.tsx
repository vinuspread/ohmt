import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "뉴스·신문 웹사이트 템플릿 | OHMT",
  description: "뉴스 미디어, 온라인 신문을 위한 반응형 웹사이트 템플릿입니다. 기사 레이아웃, 카테고리 섹션, 에디토리얼 타이포그래피를 포함합니다.",
  openGraph: {
    title: "뉴스·신문 웹사이트 템플릿 | OHMT",
    description: "뉴스 미디어, 온라인 신문을 위한 반응형 웹사이트 템플릿입니다. 기사 레이아웃, 카테고리 섹션, 에디토리얼 타이포그래피를 포함합니다.",
    url: "https://ohmt.site/ko/templates/newspaper",
    siteName: "OHMT",
    images: [{ url: "/templates/newspaper/og-image.jpg", width: 1200, height: 630, alt: "뉴스·신문 웹사이트 템플릿" }],
    locale: "ko_KR",
    type: "website",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "뉴스·신문 웹사이트 템플릿 | OHMT",
    description: "뉴스 미디어, 온라인 신문을 위한 반응형 웹사이트 템플릿입니다. 기사 레이아웃, 카테고리 섹션, 에디토리얼 타이포그래피를 포함합니다.",
    images: ["/templates/newspaper/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/newspaper",
    languages: { "en": "https://ohmt.site/en/templates/newspaper" },
  },
};

import './theme.css';



export default function NewspaperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Noto+Serif+KR:wght@400;700&display=swap');
      `}</style>
      {children}
    </>
  );
}
