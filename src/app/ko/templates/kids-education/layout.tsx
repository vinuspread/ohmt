import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "어린이 교육 웹사이트 템플릿 | OHMT",
  description: "어린이 교육센터, 학원, 교육 플랫폼을 위한 웹사이트 템플릿입니다. 수업, 일정, 등록 안내 페이지를 포함합니다.",
  openGraph: {
    title: "어린이 교육 웹사이트 템플릿 | OHMT",
    description: "어린이 교육센터, 학원, 교육 플랫폼을 위한 웹사이트 템플릿입니다. 수업, 일정, 등록 안내 페이지를 포함합니다.",
    url: "https://ohmt.site/ko/templates/kids-education",
    siteName: "OHMT",
    images: [{ url: "/templates/kids-education/og-image.jpg", width: 1200, height: 630, alt: "어린이 교육 웹사이트 템플릿" }],
    locale: "ko_KR",
    type: "website",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "어린이 교육 웹사이트 템플릿 | OHMT",
    description: "어린이 교육센터, 학원, 교육 플랫폼을 위한 웹사이트 템플릿입니다. 수업, 일정, 등록 안내 페이지를 포함합니다.",
    images: ["/templates/kids-education/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/kids-education",
    languages: { "en": "https://ohmt.site/en/templates/kids-education" },
  },
};

import "./theme.css";



export default function KidsEducationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="kids-education-ko">
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
