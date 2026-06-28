import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "뷰티·코스메틱 브랜드 웹사이트 템플릿 | OHMT",
  description: "프리미엄 뷰티·화장품 브랜드를 위한 웹사이트 템플릿입니다. 제품 소개, 브랜드 스토리, 쇼핑몰 구성을 포함합니다.",
  openGraph: {
    title: "뷰티·코스메틱 브랜드 웹사이트 템플릿 | OHMT",
    description: "프리미엄 뷰티·화장품 브랜드를 위한 웹사이트 템플릿입니다. 제품 소개, 브랜드 스토리, 쇼핑몰 구성을 포함합니다.",
    url: "https://ohmt.site/ko/templates/cosmetic",
    siteName: "OHMT",
    images: [{ url: "/templates/cosmetic/og-image.jpg", width: 1200, height: 630, alt: "뷰티·코스메틱 브랜드 웹사이트 템플릿" }],
    locale: "ko_KR",
    type: "website",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "뷰티·코스메틱 브랜드 웹사이트 템플릿 | OHMT",
    description: "프리미엄 뷰티·화장품 브랜드를 위한 웹사이트 템플릿입니다. 제품 소개, 브랜드 스토리, 쇼핑몰 구성을 포함합니다.",
    images: ["/templates/cosmetic/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/cosmetic",
    languages: { "en": "https://ohmt.site/en/templates/cosmetic" },
  },
};

import './theme.css';



export default function CosmeticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
      `}</style>
      {children}
    </>
  );
}
