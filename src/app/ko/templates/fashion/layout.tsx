import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "패션 브랜드 웹사이트 템플릿 | OHMT",
  description: "에디토리얼 패션 브랜드를 위한 웹사이트 템플릿입니다. 룩북, 시즌 컬렉션, 브랜드 스토리 레이아웃을 포함합니다.",
  openGraph: {
    title: "패션 브랜드 웹사이트 템플릿 | OHMT",
    description: "에디토리얼 패션 브랜드를 위한 웹사이트 템플릿입니다. 룩북, 시즌 컬렉션, 브랜드 스토리 레이아웃을 포함합니다.",
    url: "https://ohmt.site/ko/templates/fashion",
    siteName: "OHMT",
    images: [{ url: "/templates/fashion/og-image.jpg", width: 1200, height: 630, alt: "패션 브랜드 웹사이트 템플릿" }],
    locale: "ko_KR",
    type: "website",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "패션 브랜드 웹사이트 템플릿 | OHMT",
    description: "에디토리얼 패션 브랜드를 위한 웹사이트 템플릿입니다. 룩북, 시즌 컬렉션, 브랜드 스토리 레이아웃을 포함합니다.",
    images: ["/templates/fashion/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/fashion",
    languages: { "en": "https://ohmt.site/en/templates/fashion" },
  },
};

import './theme.css';



export default function FashionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,700;1,6..96,400&display=swap');

        @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');
      `}</style>
      {children}
    </>
  );
}
