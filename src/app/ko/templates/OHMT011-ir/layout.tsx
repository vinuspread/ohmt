import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "OBERON - 투자자 관계 웹사이트",
  description: "기업 전략 및 재무 성과",
  openGraph: {
    title: "OBERON - 투자자 관계 웹사이트",
    description: "기업 전략 및 재무 성과",
    url: "https://ohmt.site/ko/templates/OHMT011-ir",
    siteName: "OBERON",
    images: [{ url: "/templates/OHMT011-ir/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OBERON - 투자자 관계 웹사이트",
    description: "기업 전략 및 재무 성과",
    images: ["/templates/OHMT011-ir/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/OHMT011-ir",
    languages: { "en": "https://ohmt.site/en/templates/OHMT011-ir" },
  },
};

export default function IRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" crossOrigin="anonymous" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>
      <div lang="ko" className="ohmt011-ir">{children}</div>
    </>
  );
}
