import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "건축·공간디자인 스튜디오 웹사이트 템플릿 | OHMT",
  description: "건축, 공간디자인 스튜디오를 위한 웹사이트 템플릿입니다. 포트폴리오 프로젝트, 팀 소개, 문의 섹션을 포함합니다.",
  openGraph: {
    title: "건축·공간디자인 스튜디오 웹사이트 템플릿 | OHMT",
    description: "건축, 공간디자인 스튜디오를 위한 웹사이트 템플릿입니다. 포트폴리오 프로젝트, 팀 소개, 문의 섹션을 포함합니다.",
    url: "https://ohmt.site/ko/templates/studio",
    siteName: "OHMT",
    images: [{ url: "/templates/studio/og-image.jpg", width: 1200, height: 630, alt: "건축·공간디자인 스튜디오 웹사이트 템플릿" }],
    locale: "ko_KR",
    type: "website",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "건축·공간디자인 스튜디오 웹사이트 템플릿 | OHMT",
    description: "건축, 공간디자인 스튜디오를 위한 웹사이트 템플릿입니다. 포트폴리오 프로젝트, 팀 소개, 문의 섹션을 포함합니다.",
    images: ["/templates/studio/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/studio",
    languages: { "en": "https://ohmt.site/en/templates/studio" },
  },
};

import './theme.css';



export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&family=Inter:wght@300;400;500;600&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

        :root {
          --font-outfit: 'Outfit', sans-serif;
          --font-inter: 'Inter', sans-serif;
        }
      `}</style>
      {children}
    </>
  );
}
