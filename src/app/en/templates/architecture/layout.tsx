// src/app/en/templates/OHMT027-architecture/layout.tsx
import type { Metadata } from "next";
import "./theme.css";

export const metadata: Metadata = {
  title: "OHMT - Architecture Portfolio",
  description: "A sophisticated architecture portfolio template with editorial typography and immersive visual storytelling.",
  keywords: ["architecture", "minimalism", "portfolio", "interior design", "OHMT"],
  authors: [{ name: "OHMT", url: "https://ohmytemplate.com" }],
  openGraph: {
    title: "OHMT - Architecture Portfolio",
    description: "A sophisticated architecture portfolio template with editorial typography and immersive visual storytelling.",
    url: "https://ohmytemplate.com/en/templates/OHMT027-architecture",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT027-architecture/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Architecture Portfolio",
    description: "A sophisticated architecture portfolio template with editorial typography and immersive visual storytelling.",
    images: ["/templates/OHMT027-architecture/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/OHMT027-architecture",
    languages: {
      "ko": "https://ohmytemplate.com/ko/templates/OHMT027-architecture",
    },
  },
};

export default function ArchitectureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>
      {children}
    </>
  );
}
