import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "기업 IR 웹사이트 템플릿 | OHMT",
  description: "상장사, 스타트업을 위한 투자자 관계(IR) 웹사이트 템플릿입니다. 재무 정보, 경영진 소개, 주주 정보 섹션을 포함합니다.",
  openGraph: {
    title: "기업 IR 웹사이트 템플릿 | OHMT",
    description: "상장사, 스타트업을 위한 투자자 관계(IR) 웹사이트 템플릿입니다. 재무 정보, 경영진 소개, 주주 정보 섹션을 포함합니다.",
    url: "https://ohmt.site/ko/templates/ir",
    siteName: "OHMT",
    images: [{ url: "/templates/ir/og-image.jpg", width: 1200, height: 630, alt: "기업 IR 웹사이트 템플릿" }],
    locale: "ko_KR",
    type: "website",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "기업 IR 웹사이트 템플릿 | OHMT",
    description: "상장사, 스타트업을 위한 투자자 관계(IR) 웹사이트 템플릿입니다. 재무 정보, 경영진 소개, 주주 정보 섹션을 포함합니다.",
    images: ["/templates/ir/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/ir",
    languages: { "en": "https://ohmt.site/en/templates/ir" },
  },
};

import './theme.css';



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
