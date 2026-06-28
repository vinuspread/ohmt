import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "전시·갤러리 웹사이트 템플릿 | OHMT",
  description: "전시회, 아트 갤러리, 문화 이벤트를 위한 프리미엄 웹사이트 템플릿입니다. 몰입감 있는 레이아웃과 이벤트 정보 섹션을 포함합니다.",
  openGraph: {
    title: "전시·갤러리 웹사이트 템플릿 | OHMT",
    description: "전시회, 아트 갤러리, 문화 이벤트를 위한 프리미엄 웹사이트 템플릿입니다. 몰입감 있는 레이아웃과 이벤트 정보 섹션을 포함합니다.",
    url: "https://ohmt.site/ko/templates/exhibition",
    siteName: "OHMT",
    images: [{ url: "/templates/exhibition/og-image.jpg", width: 1200, height: 630, alt: "전시·갤러리 웹사이트 템플릿" }],
    locale: "ko_KR",
    type: "website",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "전시·갤러리 웹사이트 템플릿 | OHMT",
    description: "전시회, 아트 갤러리, 문화 이벤트를 위한 프리미엄 웹사이트 템플릿입니다. 몰입감 있는 레이아웃과 이벤트 정보 섹션을 포함합니다.",
    images: ["/templates/exhibition/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/exhibition",
    languages: { "en": "https://ohmt.site/en/templates/exhibition" },
  },
};

import './theme.css';



export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="exhibition-ko">{children}</div>;
}
