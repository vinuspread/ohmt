import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Magazine - Oh My Template",
  description: "Editorial culture and lifestyle",
  openGraph: {
    title: "Magazine - Oh My Template",
    description: "Editorial culture and lifestyle",
    url: "https://ohmt.site/ko/templates/magazine",
    siteName: "Oh My Template",
    images: [{ url: "/templates/magazine/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Magazine - Oh My Template",
    description: "Editorial culture and lifestyle",
    images: ["/templates/magazine/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/magazine",
    languages: { "en": "https://ohmt.site/en/templates/magazine" },
  },
};

export default function MagazineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400&family=Inter:wght@300;400;500;600&family=Noto+Serif+KR:wght@400;700&family=Noto+Sans+KR:wght@400;500&display=swap');
      `}</style>
      {children}
    </>
  );
}
