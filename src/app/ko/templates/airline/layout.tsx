import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "항공사 - Oh My Template",
  description: "프리미엄 항공 경험",
  openGraph: {
    title: "항공사 - Oh My Template",
    description: "프리미엄 항공 경험",
    url: "https://ohmytemplate.com/ko/templates/OHMT008-airline",
    siteName: "Oh My Template",
    images: [{ url: "/templates/OHMT008-airline/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "항공사 - Oh My Template",
    description: "프리미엄 항공 경험",
    images: ["/templates/OHMT008-airline/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT008-airline",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT008-airline" },
  },
};

export default function AirlineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600&display=swap');
      `}</style>
      {children}
    </>
  );
}
