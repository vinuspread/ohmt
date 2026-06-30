import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "문서화 사이트 웹사이트 템플릿 | OHMT",
  description: "팀, 제품, 개발자 도구를 위한 Notion 스타일 문서화 웹사이트 템플릿입니다. 사이드바 네비게이션과 깔끔한 레이아웃이 특징입니다.",
  openGraph: {
    title: "문서화 사이트 웹사이트 템플릿 | OHMT",
    description: "팀, 제품, 개발자 도구를 위한 Notion 스타일 문서화 웹사이트 템플릿입니다. 사이드바 네비게이션과 깔끔한 레이아웃이 특징입니다.",
    url: "https://ohmt.site/ko/templates/docs",
    siteName: "OHMT",
    images: [{ url: "/templates/docs/og-image.jpg", width: 1200, height: 630, alt: "문서화 사이트 웹사이트 템플릿" }],
    locale: "ko_KR",
    type: "website",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "문서화 사이트 웹사이트 템플릿 | OHMT",
    description: "팀, 제품, 개발자 도구를 위한 Notion 스타일 문서화 웹사이트 템플릿입니다. 사이드바 네비게이션과 깔끔한 레이아웃이 특징입니다.",
    images: ["/templates/docs/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/docs",
    languages: { "en": "https://ohmt.site/en/templates/docs" },
  },
};

import "./theme.css";



export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="-ko">
      <style>{`@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css');`}</style>
      {children}
    </div>
  );
}
