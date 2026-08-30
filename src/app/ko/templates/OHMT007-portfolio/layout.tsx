import type { Metadata } from "next";
import './theme.css';
export const metadata: Metadata = {
  title: "HALF LIGHT - 크리에이티브 포트폴리오 템플릿",
  description: "개인 브랜딩 및 크리에이티브 포트폴리오",
  openGraph: {
    title: "HALF LIGHT - 크리에이티브 포트폴리오 템플릿",
    description: "개인 브랜딩 및 크리에이티브 포트폴리오",
    url: "https://ohmytemplate.com/ko/templates/OHMT007-portfolio",
    siteName: "HALF LIGHT",
    images: [{ url: "/templates/OHMT007-portfolio/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HALF LIGHT - 크리에이티브 포트폴리오 템플릿",
    description: "개인 브랜딩 및 크리에이티브 포트폴리오",
    images: ["/templates/OHMT007-portfolio/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT007-portfolio",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT007-portfolio" },
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
      `}</style>
      <div className="portfolio-template">
        <div lang="ko" className="ohmt007-portfolio">{children}</div>
      </div>
    </>
  );
}
