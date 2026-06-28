import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "스파·웰니스 웹사이트 템플릿 | OHMT",
  description: "스파, 웰니스 브랜드를 위한 웹사이트 템플릿입니다. 서비스 메뉴, 예약 섹션, 고요한 비주얼 디자인이 특징입니다.",
  openGraph: {
    title: "스파·웰니스 웹사이트 템플릿 | OHMT",
    description: "스파, 웰니스 브랜드를 위한 웹사이트 템플릿입니다. 서비스 메뉴, 예약 섹션, 고요한 비주얼 디자인이 특징입니다.",
    url: "https://ohmt.site/ko/templates/spa",
    siteName: "OHMT",
    images: [{ url: "/templates/spa/og-image.jpg", width: 1200, height: 630, alt: "스파·웰니스 웹사이트 템플릿" }],
    locale: "ko_KR",
    type: "website",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "스파·웰니스 웹사이트 템플릿 | OHMT",
    description: "스파, 웰니스 브랜드를 위한 웹사이트 템플릿입니다. 서비스 메뉴, 예약 섹션, 고요한 비주얼 디자인이 특징입니다.",
    images: ["/templates/spa/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/spa",
    languages: { "en": "https://ohmt.site/en/templates/spa" },
  },
};

import "./theme.css";



export default function SpaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=Noto+Sans+KR:wght@400;500;700&display=swap');
      `}</style>
      {children}
    </>
  );
}
