// src/app/en/templates/OHMT027-architecture/layout.tsx
import type { Metadata } from "next";
import "./theme.css";
export const metadata: Metadata = {
  title: "ARCHE - Architecture Portfolio Template",
  description: "A sophisticated architecture portfolio template with editorial typography and immersive visual storytelling.",
  keywords: ["architecture", "minimalism", "portfolio", "interior design", "ARCHE"],
  authors: [{ name: "ARCHE", url: "https://ohmytemplate.com" }],
  openGraph: {
    title: "ARCHE - Architecture Portfolio Template",
    description: "A sophisticated architecture portfolio template with editorial typography and immersive visual storytelling.",
    url: "https://ohmytemplate.com/en/templates/OHMT027-architecture",
    siteName: "ARCHE",
    images: [{ url: "/templates/OHMT027-architecture/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARCHE - Architecture Portfolio Template",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "OHMT Architecture Portfolio",
    description: "A sophisticated architecture portfolio template with editorial typography and immersive visual storytelling.",
    url: "https://ohmytemplate.com/en/templates/OHMT027-architecture",
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{`
      `}</style>
      {children}
    </>
  );
}
