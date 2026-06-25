import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Jewelry Mall - Oh My Template",
  description: "Experience the timeless elegance and curated luxury.",
  openGraph: {
    title: "Jewelry Mall - Oh My Template",
    description: "Experience the timeless elegance and curated luxury.",
    url: "https://ohmytemplate.com/en/templates/OHMT002-jewelry",
    siteName: "Oh My Template",
    images: [{ url: "/templates/OHMT002-jewelry/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jewelry Mall - Oh My Template",
    description: "Experience the timeless elegance and curated luxury.",
    images: ["/templates/OHMT002-jewelry/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/OHMT002-jewelry",
    languages: { "ko": "https://ohmytemplate.com/ko/templates/OHMT002-jewelry" },
  },
};

export default function JewelryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <link rel="stylesheet" as="style" crossOrigin="anonymous" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
      {children}
    </>
  );
}
