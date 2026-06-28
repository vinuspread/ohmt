import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "요가·웰니스 스튜디오 웹사이트 템플릿 | OHMT",
  description: "요가, 웰니스 스튜디오를 위한 웹사이트 템플릿입니다. 클래스 일정, 멤버십, 강사 소개 페이지를 포함합니다.",
  openGraph: {
    title: "요가·웰니스 스튜디오 웹사이트 템플릿 | OHMT",
    description: "요가, 웰니스 스튜디오를 위한 웹사이트 템플릿입니다. 클래스 일정, 멤버십, 강사 소개 페이지를 포함합니다.",
    url: "https://ohmt.site/ko/templates/yoga",
    siteName: "OHMT",
    images: [{ url: "/templates/yoga/og-image.jpg", width: 1200, height: 630, alt: "요가·웰니스 스튜디오 웹사이트 템플릿" }],
    locale: "ko_KR",
    type: "website",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "요가·웰니스 스튜디오 웹사이트 템플릿 | OHMT",
    description: "요가, 웰니스 스튜디오를 위한 웹사이트 템플릿입니다. 클래스 일정, 멤버십, 강사 소개 페이지를 포함합니다.",
    images: ["/templates/yoga/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/yoga",
    languages: { "en": "https://ohmt.site/en/templates/yoga" },
  },
};

import "./theme.css";



export default function YogaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="yoga-ko">
      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');

        :root {
          --font-pretendard: 'Pretendard', sans-serif;
        }
      `}</style>
      {children}
    </div>
  );
}
