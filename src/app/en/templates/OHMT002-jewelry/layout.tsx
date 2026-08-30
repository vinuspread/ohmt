import type { Metadata } from "next";
import './theme.css';
export const metadata: Metadata = {
  title: "OHMT - Luxury Jewelry Ecommerce Template",
  description: "Experience the timeless elegance and curated luxury.",
  openGraph: {
    title: "OHMT - Luxury Jewelry Ecommerce Template",
    description: "Experience the timeless elegance and curated luxury.",
    url: "https://ohmytemplate.com/en/templates/OHMT002-jewelry",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT002-jewelry/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Luxury Jewelry Ecommerce Template",
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
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {children}
    </>
  );
}
