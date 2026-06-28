import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "투자자 관계 - Oh My Template",
  description: "기업 전략 및 재무 성과",
  openGraph: {
    title: "투자자 관계 - Oh My Template",
    description: "기업 전략 및 재무 성과",
    url: "https://ohmt.site/ko/templates/ir",
    siteName: "Oh My Template",
    images: [{ url: "/templates/ir/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "투자자 관계 - Oh My Template",
    description: "기업 전략 및 재무 성과",
    images: ["/templates/ir/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/ir",
    languages: { "en": "https://ohmt.site/en/templates/ir" },
  },
};

export default function IRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>
      {children}
    </>
  );
}
