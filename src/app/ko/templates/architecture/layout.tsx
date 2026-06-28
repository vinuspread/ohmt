import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "건축 포트폴리오 웹사이트 템플릿 | OHMT",
  description: "건축 포트폴리오를 위한 세련된 웹사이트 템플릿입니다. 프로젝트 갤러리, 디자인 철학, 스튜디오 서비스 페이지를 포함합니다.",
  openGraph: {
    title: "건축 포트폴리오 웹사이트 템플릿 | OHMT",
    description: "건축 포트폴리오를 위한 세련된 웹사이트 템플릿입니다. 프로젝트 갤러리, 디자인 철학, 스튜디오 서비스 페이지를 포함합니다.",
    url: "https://ohmt.site/ko/templates/architecture",
    siteName: "OHMT",
    images: [{ url: "/templates/architecture/og-image.jpg", width: 1200, height: 630, alt: "건축 포트폴리오 웹사이트 템플릿" }],
    locale: "ko_KR",
    type: "website",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "건축 포트폴리오 웹사이트 템플릿 | OHMT",
    description: "건축 포트폴리오를 위한 세련된 웹사이트 템플릿입니다. 프로젝트 갤러리, 디자인 철학, 스튜디오 서비스 페이지를 포함합니다.",
    images: ["/templates/architecture/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/architecture",
    languages: { "en": "https://ohmt.site/en/templates/architecture" },
  },
};

// src/app/en/templates/architecture/layout.tsx
import "./theme.css";



export default function ArchitectureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>
      {children}
    </>
  );
}
