import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "OHMT | 크리에이티브 스튜디오 포트폴리오",
  description: "브랜드 디자인과 웹사이트, 캠페인 프로젝트를 소개하는 크리에이티브 스튜디오 포트폴리오 템플릿입니다.",
  openGraph: {
    title: "OHMT | 크리에이티브 스튜디오 포트폴리오",
    description: "브랜드 디자인과 웹사이트, 캠페인 프로젝트를 소개하는 크리에이티브 스튜디오 포트폴리오 템플릿입니다.",
    url: "https://ohmt.site/ko/templates/OHMT007-portfolio",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT007-portfolio/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT | 크리에이티브 스튜디오 포트폴리오",
    description: "브랜드 디자인과 웹사이트, 캠페인 프로젝트를 소개하는 크리에이티브 스튜디오 포트폴리오 템플릿입니다.",
    images: ["/templates/OHMT007-portfolio/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/OHMT007-portfolio",
    languages: { "en": "https://ohmt.site/en/templates/OHMT007-portfolio" },
  },
};

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
      <div className="portfolio-template">
        <div lang="ko" className="ohmt007-portfolio">{children}</div>
      </div>
    </>
  );
}
