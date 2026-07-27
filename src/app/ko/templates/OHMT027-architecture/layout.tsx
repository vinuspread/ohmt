// src/app/ko/templates/OHMT027-architecture/layout.tsx
import type { Metadata } from "next";
import "./theme.css";

export const metadata: Metadata = {
  title: "OHMT | 건축 스튜디오",
  description: "주거, 상업, 공공, 인테리어 프로젝트를 설계하는 서울 기반 건축 스튜디오입니다.",
  keywords: ["건축", "건축 포트폴리오", "미니멀리즘", "인테리어 디자인", "OHMT"],
  authors: [{ name: "OHMT", url: "https://ohmytemplate.com" }],
  openGraph: {
    title: "OHMT | 건축 스튜디오",
    description: "주거, 상업, 공공, 인테리어 프로젝트를 설계하는 서울 기반 건축 스튜디오입니다.",
    url: "https://ohmytemplate.com/ko/templates/OHMT027-architecture",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT027-architecture/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT | 건축 스튜디오",
    description: "주거, 상업, 공공, 인테리어 프로젝트를 설계하는 서울 기반 건축 스튜디오입니다.",
    images: ["/templates/OHMT027-architecture/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT027-architecture",
    languages: {
      "en": "https://ohmytemplate.com/en/templates/OHMT027-architecture",
      "ko": "https://ohmytemplate.com/ko/templates/OHMT027-architecture",
    },
  },
};

export default function ArchitectureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" crossOrigin="anonymous" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>
      <div lang="ko" className="ohmt027-architecture">{children}</div>
    </>
  );
}
