import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "버거 레스토랑 웹사이트 템플릿 | OHMT",
  description: "버거 레스토랑, 패스트푸드 브랜드를 위한 웹사이트 템플릿입니다. 메뉴, 프로모션, 매장 안내 페이지를 포함합니다.",
  openGraph: {
    title: "버거 레스토랑 웹사이트 템플릿 | OHMT",
    description: "버거 레스토랑, 패스트푸드 브랜드를 위한 웹사이트 템플릿입니다. 메뉴, 프로모션, 매장 안내 페이지를 포함합니다.",
    url: "https://ohmt.site/ko/templates/burger",
    siteName: "OHMT",
    images: [{ url: "/templates/burger/og-image.jpg", width: 1200, height: 630, alt: "버거 레스토랑 웹사이트 템플릿" }],
    locale: "ko_KR",
    type: "website",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "버거 레스토랑 웹사이트 템플릿 | OHMT",
    description: "버거 레스토랑, 패스트푸드 브랜드를 위한 웹사이트 템플릿입니다. 메뉴, 프로모션, 매장 안내 페이지를 포함합니다.",
    images: ["/templates/burger/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/burger",
    languages: { "en": "https://ohmt.site/en/templates/burger" },
  },
};

import './theme.css';



export default function BurgerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&family=Inter:wght@400;500;600&family=Noto+Sans+KR:wght@400;500;600;700&display=swap');
      `}</style>
      <div className="ko-burger">{children}</div>
    </>
  );
}
