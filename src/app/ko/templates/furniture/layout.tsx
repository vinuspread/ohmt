import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Furniture KO - Oh My Template",
  description: "프리미엄 가구 & 인테리어 디자인 쇼케이스",
  openGraph: {
    title: "Furniture KO - Oh My Template",
    description: "프리미엄 가구 & 인테리어 디자인 쇼케이스",
    url: "https://ohmt.site/ko/templates/furniture",
    siteName: "Oh My Template",
    images: [{ url: "/templates/furniture/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Furniture KO - Oh My Template",
    description: "프리미엄 가구 & 인테리어 디자인 쇼케이스",
    images: ["/templates/furniture/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/furniture",
    languages: { "en": "https://ohmt.site/en/templates/furniture" },
  },
};

export default function FurnitureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&family=Inter:wght@400;500;600&family=Noto+Sans+KR:wght@400;600;700;900&display=swap&subset=korean');
      `}</style>
      {children}
    </>
  );
}
