import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "OHMT - 에디토리얼 패션 룩북 템플릿",
  description: "좋은 소재와 편안한 실루엣을 바탕으로 오래 입을 수 있는 옷을 선보이는 패션 브랜드입니다.",
  openGraph: {
    title: "OHMT - 에디토리얼 패션 룩북 템플릿",
    description: "좋은 소재와 편안한 실루엣을 바탕으로 오래 입을 수 있는 옷을 선보이는 패션 브랜드입니다.",
    url: "https://ohmt.site/ko/templates/OHMT001-fashion",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT001-fashion/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - 에디토리얼 패션 룩북 템플릿",
    description: "좋은 소재와 편안한 실루엣을 바탕으로 오래 입을 수 있는 옷을 선보이는 패션 브랜드입니다.",
    images: ["/templates/OHMT001-fashion/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/OHMT001-fashion",
    languages: { "en": "https://ohmt.site/en/templates/OHMT001-fashion" },
  },
};

export default function FashionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        @import url('https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital,wght@0,400;0,700;1,400&display=swap');

        @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');
      `}</style>
      <div lang="ko" className="ohmt001-fashion">{children}</div>
    </>
  );
}
