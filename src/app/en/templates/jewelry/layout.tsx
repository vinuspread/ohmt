import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jewelry & Luxury Brand Website Template | OHMT",
  description: "An elegant jewelry and luxury brand website template with curated product collections, brand heritage story, and boutique-style layouts.",
  openGraph: {
    title: "Jewelry & Luxury Brand Website Template | OHMT",
    description: "An elegant jewelry and luxury brand website template with curated product collections, brand heritage story, and boutique-style layouts.",
    url: "https://ohmt.site/en/templates/jewelry",
    siteName: "OHMT",
    images: [{ url: "/templates/jewelry/og-image.jpg", width: 1200, height: 630, alt: "Jewelry & Luxury Brand Website Template" }],
    locale: "en_US",
    type: "website",
    alternateLocale: ["ko_KR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jewelry & Luxury Brand Website Template | OHMT",
    description: "An elegant jewelry and luxury brand website template with curated product collections, brand heritage story, and boutique-style layouts.",
    images: ["/templates/jewelry/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/jewelry",
    languages: { "ko": "https://ohmt.site/ko/templates/jewelry" },
  },
};

import './theme.css';



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
