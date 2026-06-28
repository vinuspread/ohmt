import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "스니커·스트리트웨어 브랜드 웹사이트 템플릿 | OHMT",
  description: "스니커, 스트리트웨어 브랜드를 위한 웹사이트 템플릿입니다. 신제품 런칭, 드롭 일정, 어반 라이프스타일 레이아웃을 포함합니다.",
  openGraph: {
    title: "스니커·스트리트웨어 브랜드 웹사이트 템플릿 | OHMT",
    description: "스니커, 스트리트웨어 브랜드를 위한 웹사이트 템플릿입니다. 신제품 런칭, 드롭 일정, 어반 라이프스타일 레이아웃을 포함합니다.",
    url: "https://ohmt.site/ko/templates/sneaker",
    siteName: "OHMT",
    images: [{ url: "/templates/sneaker/og-image.jpg", width: 1200, height: 630, alt: "스니커·스트리트웨어 브랜드 웹사이트 템플릿" }],
    locale: "ko_KR",
    type: "website",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "스니커·스트리트웨어 브랜드 웹사이트 템플릿 | OHMT",
    description: "스니커, 스트리트웨어 브랜드를 위한 웹사이트 템플릿입니다. 신제품 런칭, 드롭 일정, 어반 라이프스타일 레이아웃을 포함합니다.",
    images: ["/templates/sneaker/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/sneaker",
    languages: { "en": "https://ohmt.site/en/templates/sneaker" },
  },
};

import './theme.css';



export default function SneakerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap');
      `}</style>
      {children}
    </>
  );
}
