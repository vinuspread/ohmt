import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Cosmetic - Oh My Template",
  description: "프리미엄 뷰티 & 코스메틱 브랜드 쇼케이스",
  openGraph: {
    title: "Cosmetic - Oh My Template",
    description: "프리미엄 뷰티 & 코스메틱 브랜드 쇼케이스",
    url: "https://ohmytemplate.com/ko/templates/OHMT010-cosmetic-KO",
    siteName: "Oh My Template",
    images: [{ url: "/templates/OHMT010-cosmetic/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cosmetic - Oh My Template",
    description: "프리미엄 뷰티 & 코스메틱 브랜드 쇼케이스",
    images: ["/templates/OHMT010-cosmetic/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT010-cosmetic-KO",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT010-cosmetic-EN" },
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
      {children}
    </>
  );
}
