import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Furniture KO - Oh My Template",
  description: "프리미엄 가구 & 인테리어 디자인 쇼케이스",
  openGraph: {
    title: "Furniture KO - Oh My Template",
    description: "프리미엄 가구 & 인테리어 디자인 쇼케이스",
    url: "https://ohmytemplate.com/ko/templates/OHMT004-furniture",
    siteName: "Oh My Template",
    images: [{ url: "/templates/OHMT004-furniture/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Furniture KO - Oh My Template",
    description: "프리미엄 가구 & 인테리어 디자인 쇼케이스",
    images: ["/templates/OHMT004-furniture/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT004-furniture",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT004-furniture" },
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
