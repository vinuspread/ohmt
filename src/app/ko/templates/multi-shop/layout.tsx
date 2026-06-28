import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "멀티 브랜드 쇼핑몰 웹사이트 템플릿 | OHMT",
  description: "다양한 브랜드와 상품을 위한 멀티 쇼핑몰 웹사이트 템플릿입니다. 카테고리 탐색, 상품 목록, 큐레이션 컬렉션 구성이 가능합니다.",
  openGraph: {
    title: "멀티 브랜드 쇼핑몰 웹사이트 템플릿 | OHMT",
    description: "다양한 브랜드와 상품을 위한 멀티 쇼핑몰 웹사이트 템플릿입니다. 카테고리 탐색, 상품 목록, 큐레이션 컬렉션 구성이 가능합니다.",
    url: "https://ohmt.site/ko/templates/multi-shop",
    siteName: "OHMT",
    images: [{ url: "/templates/multi-shop/og-image.jpg", width: 1200, height: 630, alt: "멀티 브랜드 쇼핑몰 웹사이트 템플릿" }],
    locale: "ko_KR",
    type: "website",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "멀티 브랜드 쇼핑몰 웹사이트 템플릿 | OHMT",
    description: "다양한 브랜드와 상품을 위한 멀티 쇼핑몰 웹사이트 템플릿입니다. 카테고리 탐색, 상품 목록, 큐레이션 컬렉션 구성이 가능합니다.",
    images: ["/templates/multi-shop/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/multi-shop",
    languages: { "en": "https://ohmt.site/en/templates/multi-shop" },
  },
};

import './theme.css';
import { SmoothScroll } from "./_components/SmoothScroll";



export default function MultiShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Noto+Sans+KR:wght@400;500;600;700&display=swap');
      `}</style>
      <SmoothScroll />
      {/* Fixed Frame Borders to prevent scroll bleed-through */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-[var(--color-frame)] h-[20px] md:h-[48px]" />
      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[var(--color-frame)] h-[20px] md:h-[48px]" />
      <div className="fixed top-0 bottom-0 left-0 z-[100] bg-[var(--color-frame)] w-[20px] md:w-[48px]" />
      <div className="fixed top-0 bottom-0 right-0 z-[100] bg-[var(--color-frame)] w-[20px] md:w-[48px]" />
      <div className="ko-multi-shop p-[20px] md:p-[48px]" style={{ backgroundColor: "var(--color-frame)" }}>
        {children}
      </div>
    </>
  );
}

