import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "크리에이티브 포트폴리오 웹사이트 템플릿 | OHMT",
  description: "디자이너, 사진작가, 개발자, 크리에이티브 전문가를 위한 미니멀 포트폴리오 웹사이트 템플릿입니다.",
  openGraph: {
    title: "크리에이티브 포트폴리오 웹사이트 템플릿 | OHMT",
    description: "디자이너, 사진작가, 개발자, 크리에이티브 전문가를 위한 미니멀 포트폴리오 웹사이트 템플릿입니다.",
    url: "https://ohmt.site/ko/templates/portfolio",
    siteName: "OHMT",
    images: [{ url: "/templates/portfolio/og-image.jpg", width: 1200, height: 630, alt: "크리에이티브 포트폴리오 웹사이트 템플릿" }],
    locale: "ko_KR",
    type: "website",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "크리에이티브 포트폴리오 웹사이트 템플릿 | OHMT",
    description: "디자이너, 사진작가, 개발자, 크리에이티브 전문가를 위한 미니멀 포트폴리오 웹사이트 템플릿입니다.",
    images: ["/templates/portfolio/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/portfolio",
    languages: { "en": "https://ohmt.site/en/templates/portfolio" },
  },
};

import './theme.css';



export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap');
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');
      `}</style>
      {children}
    </>
  );
}
