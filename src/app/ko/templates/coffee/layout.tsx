import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "카페·로스터리 웹사이트 템플릿 | OHMT",
  description: "카페, 커피숍, 스페셜티 로스터리를 위한 웹사이트 템플릿입니다. 메뉴, 브랜드 스토리, 온라인 숍 구성이 가능합니다.",
  openGraph: {
    title: "카페·로스터리 웹사이트 템플릿 | OHMT",
    description: "카페, 커피숍, 스페셜티 로스터리를 위한 웹사이트 템플릿입니다. 메뉴, 브랜드 스토리, 온라인 숍 구성이 가능합니다.",
    url: "https://ohmt.site/ko/templates/coffee",
    siteName: "OHMT",
    images: [{ url: "/templates/coffee/og-image.jpg", width: 1200, height: 630, alt: "카페·로스터리 웹사이트 템플릿" }],
    locale: "ko_KR",
    type: "website",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "카페·로스터리 웹사이트 템플릿 | OHMT",
    description: "카페, 커피숍, 스페셜티 로스터리를 위한 웹사이트 템플릿입니다. 메뉴, 브랜드 스토리, 온라인 숍 구성이 가능합니다.",
    images: ["/templates/coffee/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/coffee",
    languages: { "en": "https://ohmt.site/en/templates/coffee" },
  },
};

import './theme.css';



export default function CoffeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.min.css');
      `}</style>
      <div className="ko-coffee">{children}</div>
    </>
  );
}
