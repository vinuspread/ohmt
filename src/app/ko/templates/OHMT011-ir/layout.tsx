import type { Metadata } from "next";
import './theme.css';
export const metadata: Metadata = {
  title: "OHMT - 기업 전략 및 재무 성과",
  description: "기업 전략 및 재무 성과",
  openGraph: {
    title: "OHMT - 기업 전략 및 재무 성과",
    description: "기업 전략 및 재무 성과",
    url: "https://ohmytemplate.com/ko/templates/OHMT011-ir",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT011-ir/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - 기업 전략 및 재무 성과",
    description: "기업 전략 및 재무 성과",
    images: ["/templates/OHMT011-ir/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT011-ir",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT011-ir" },
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
      `}</style>
      <div lang="ko" className="ohmt011-ir">{children}</div>
    </>
  );
}
