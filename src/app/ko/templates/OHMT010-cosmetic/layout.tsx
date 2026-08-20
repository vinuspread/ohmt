import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "VELURE - 웰니스 코스메틱 브랜드",
  description: "프리미엄 뷰티 & 코스메틱 브랜드 쇼케이스",
  openGraph: {
    title: "VELURE - 웰니스 코스메틱 브랜드",
    description: "프리미엄 뷰티 & 코스메틱 브랜드 쇼케이스",
    url: "https://ohmt.site/ko/templates/OHMT010-cosmetic",
    siteName: "VELURE",
    images: [{ url: "/templates/OHMT010-cosmetic/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VELURE - 웰니스 코스메틱 브랜드",
    description: "프리미엄 뷰티 & 코스메틱 브랜드 쇼케이스",
    images: ["/templates/OHMT010-cosmetic/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/OHMT010-cosmetic",
    languages: { "en": "https://ohmt.site/en/templates/OHMT010-cosmetic" },
  },
};

export default function CosmeticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
      `}</style>
      <div lang="ko" className="ohmt010-cosmetic">{children}</div>
    </>
  );
}
