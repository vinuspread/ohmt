// src/app/ko/templates/OHMT027-architecture/layout.tsx
import type { Metadata } from "next";
import "./theme.css";
export const metadata: Metadata = {
  title: "ARCHE - 건축 포트폴리오",
  description: "에디토리얼 타이포그래피와 몰입감 있는 비주얼 스토리텔링을 갖춘 건축 포트폴리오 템플릿입니다.",
  keywords: ["건축", "건축 포트폴리오", "미니멀리즘", "인테리어 디자인", "ARCHE"],
  authors: [{ name: "ARCHE", url: "https://ohmytemplate.com" }],
  openGraph: {
    title: "ARCHE - 건축 포트폴리오",
    description: "에디토리얼 타이포그래피와 몰입감 있는 비주얼 스토리텔링을 갖춘 건축 포트폴리오 템플릿입니다.",
    url: "https://ohmytemplate.com/ko/templates/OHMT027-architecture",
    siteName: "ARCHE",
    images: [{ url: "/templates/OHMT027-architecture/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARCHE - 건축 포트폴리오",
    description: "에디토리얼 타이포그래피와 몰입감 있는 비주얼 스토리텔링을 갖춘 건축 포트폴리오 템플릿입니다.",
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
      <style>{`
      `}</style>
      <div lang="ko" className="ohmt027-architecture">{children}</div>
    </>
  );
}
