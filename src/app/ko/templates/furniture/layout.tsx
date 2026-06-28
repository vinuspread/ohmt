import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "가구·인테리어 웹사이트 템플릿 | OHMT",
  description: "가구, 인테리어 브랜드를 위한 프리미엄 웹사이트 템플릿입니다. 제품 쇼케이스, 브랜드 스토리, 쇼핑몰 구성이 가능합니다.",
  openGraph: {
    title: "가구·인테리어 웹사이트 템플릿 | OHMT",
    description: "가구, 인테리어 브랜드를 위한 프리미엄 웹사이트 템플릿입니다. 제품 쇼케이스, 브랜드 스토리, 쇼핑몰 구성이 가능합니다.",
    url: "https://ohmt.site/ko/templates/furniture",
    siteName: "OHMT",
    images: [{ url: "/templates/furniture/og-image.jpg", width: 1200, height: 630, alt: "가구·인테리어 웹사이트 템플릿" }],
    locale: "ko_KR",
    type: "website",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "가구·인테리어 웹사이트 템플릿 | OHMT",
    description: "가구, 인테리어 브랜드를 위한 프리미엄 웹사이트 템플릿입니다. 제품 쇼케이스, 브랜드 스토리, 쇼핑몰 구성이 가능합니다.",
    images: ["/templates/furniture/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/furniture",
    languages: { "en": "https://ohmt.site/en/templates/furniture" },
  },
};

import './theme.css';



export default function FurnitureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&family=Inter:wght@400;500;600&family=Noto+Sans+KR:wght@400;600;700;900&display=swap&subset=korean');
      `}</style>
      {children}
    </>
  );
}
