import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "OHMT - 자동차 콘셉트 쇼케이스 템플릿",
  description: "프리미엄 자동차 컨셉 쇼케이스",
  openGraph: {
    title: "OHMT - 자동차 콘셉트 쇼케이스 템플릿",
    description: "프리미엄 자동차 컨셉 쇼케이스",
    url: "https://ohmytemplate.com/ko/templates/OHMT009-car",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT009-car/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - 자동차 콘셉트 쇼케이스 템플릿",
    description: "프리미엄 자동차 컨셉 쇼케이스",
    images: ["/templates/OHMT009-car/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT009-car",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT009-car" },
  },
};

export default function CarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" crossOrigin="anonymous" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;700;800;900&display=swap');
      `}</style>
      <div lang="ko" className="ohmt009-car">{children}</div>
    </>
  );
}
