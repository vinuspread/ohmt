import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "항공사 브랜드 웹사이트 템플릿 | OHMT",
  description: "항공사, 전세기, 항공 브랜드를 위한 프리미엄 웹사이트 템플릿입니다. 브랜드 목적에 맞게 디자인과 기능을 커스터마이징할 수 있습니다.",
  openGraph: {
    title: "항공사 브랜드 웹사이트 템플릿 | OHMT",
    description: "항공사, 전세기, 항공 브랜드를 위한 프리미엄 웹사이트 템플릿입니다. 브랜드 목적에 맞게 디자인과 기능을 커스터마이징할 수 있습니다.",
    url: "https://ohmt.site/ko/templates/airline",
    siteName: "OHMT",
    images: [{ url: "/templates/airline/og-image.jpg", width: 1200, height: 630, alt: "항공사 브랜드 웹사이트 템플릿" }],
    locale: "ko_KR",
    type: "website",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "항공사 브랜드 웹사이트 템플릿 | OHMT",
    description: "항공사, 전세기, 항공 브랜드를 위한 프리미엄 웹사이트 템플릿입니다. 브랜드 목적에 맞게 디자인과 기능을 커스터마이징할 수 있습니다.",
    images: ["/templates/airline/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/airline",
    languages: { "en": "https://ohmt.site/en/templates/airline" },
  },
};

import './theme.css';



export default function AirlineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600&display=swap');
      `}</style>
      {children}
    </>
  );
}
