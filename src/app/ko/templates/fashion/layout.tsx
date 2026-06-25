import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Fashion KO - Oh My Template",
  description: "프리미엄 패션 브랜드 & 에디토리얼 쇼케이스",
  openGraph: {
    title: "Fashion KO - Oh My Template",
    description: "프리미엄 패션 브랜드 & 에디토리얼 쇼케이스",
    url: "https://ohmytemplate.com/ko/templates/OHMT001-fashion",
    siteName: "Oh My Template",
    images: [{ url: "/templates/OHMT001-fashion/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fashion KO - Oh My Template",
    description: "프리미엄 패션 브랜드 & 에디토리얼 쇼케이스",
    images: ["/templates/OHMT001-fashion/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT001-fashion",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT001-fashion" },
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
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,700;1,6..96,400&display=swap');

        @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');
      `}</style>
      {children}
    </>
  );
}
