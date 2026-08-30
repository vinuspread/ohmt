import type { Metadata } from "next";
import './theme.css';
export const metadata: Metadata = {
  title: "OHMT - Modern Furniture Store Template",
  description: "Premium furniture & interior design showcase",
  openGraph: {
    title: "OHMT - Modern Furniture Store Template",
    description: "Premium furniture & interior design showcase",
    url: "https://ohmytemplate.com/en/templates/OHMT004-furniture",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT004-furniture/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Modern Furniture Store Template",
    description: "Premium furniture & interior design showcase",
    images: ["/templates/OHMT004-furniture/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/OHMT004-furniture",
    languages: { "ko": "https://ohmytemplate.com/ko/templates/OHMT004-furniture" },
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
      `}</style>
      {children}
    </>
  );
}
