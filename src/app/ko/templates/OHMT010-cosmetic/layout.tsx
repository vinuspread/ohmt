import type { Metadata } from "next";
import './theme.css';
export const metadata: Metadata = {
  title: "OHMT - 프리미엄 뷰티 & 코스메틱 브랜드 쇼케이스",
  description: "프리미엄 뷰티 & 코스메틱 브랜드 쇼케이스",
  openGraph: {
    title: "OHMT - 프리미엄 뷰티 & 코스메틱 브랜드 쇼케이스",
    description: "프리미엄 뷰티 & 코스메틱 브랜드 쇼케이스",
    url: "https://ohmytemplate.com/ko/templates/OHMT010-cosmetic",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT010-cosmetic/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - 프리미엄 뷰티 & 코스메틱 브랜드 쇼케이스",
    description: "프리미엄 뷰티 & 코스메틱 브랜드 쇼케이스",
    images: ["/templates/OHMT010-cosmetic/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT010-cosmetic",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT010-cosmetic" },
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
      `}</style>
      <div lang="ko" className="ohmt010-cosmetic">{children}</div>
    </>
  );
}
