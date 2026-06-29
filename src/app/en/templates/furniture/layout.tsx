import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "OHMT - Furniture",
  description: "Premium furniture & interior design showcase",
  openGraph: {
    title: "OHMT - Furniture",
    description: "Premium furniture & interior design showcase",
    url: "https://ohmytemplate.com/en/templates/furniture",
    siteName: "OHMT",
    images: [{ url: "/templates/furniture/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Furniture",
    description: "Premium furniture & interior design showcase",
    images: ["/templates/furniture/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/furniture",
    languages: { "ko": "https://ohmytemplate.com/ko/templates/furniture" },
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
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&family=Inter:wght@400;500;600&display=swap');
      `}</style>
      {children}
    </>
  );
}
