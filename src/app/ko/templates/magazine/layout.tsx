import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "매거진·에디토리얼 웹사이트 템플릿 | OHMT",
  description: "문화, 라이프스타일, 디지털 미디어 브랜드를 위한 매거진 스타일 웹사이트 템플릿입니다. 아티클 레이아웃과 카테고리 네비게이션을 포함합니다.",
  openGraph: {
    title: "매거진·에디토리얼 웹사이트 템플릿 | OHMT",
    description: "문화, 라이프스타일, 디지털 미디어 브랜드를 위한 매거진 스타일 웹사이트 템플릿입니다. 아티클 레이아웃과 카테고리 네비게이션을 포함합니다.",
    url: "https://ohmt.site/ko/templates/magazine",
    siteName: "OHMT",
    images: [{ url: "/templates/magazine/og-image.jpg", width: 1200, height: 630, alt: "매거진·에디토리얼 웹사이트 템플릿" }],
    locale: "ko_KR",
    type: "website",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "매거진·에디토리얼 웹사이트 템플릿 | OHMT",
    description: "문화, 라이프스타일, 디지털 미디어 브랜드를 위한 매거진 스타일 웹사이트 템플릿입니다. 아티클 레이아웃과 카테고리 네비게이션을 포함합니다.",
    images: ["/templates/magazine/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/magazine",
    languages: { "en": "https://ohmt.site/en/templates/magazine" },
  },
};

import './theme.css';



export default function MagazineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400&family=Inter:wght@300;400;500;600&family=Noto+Serif+KR:wght@400;700&family=Noto+Sans+KR:wght@400;500&display=swap');
      `}</style>
      {children}
    </>
  );
}
