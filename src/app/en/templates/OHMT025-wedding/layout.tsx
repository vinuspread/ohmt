import "./theme.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "OHMT - Documentary Wedding Photography Template",
  description: "Timeless and authentic wedding photography. Capturing your love story through a documentary lens with fine art elegance.",
  keywords: ["wedding photography", "documentary wedding", "fine art wedding", "photographer portfolio", "OHMT"],
  authors: [{ name: "OHMT", url: "https://ohmytemplate.com" }],
  openGraph: {
    title: "OHMT - Documentary Wedding Photography Template",
    description: "Timeless and authentic wedding photography. Capturing your love story through a documentary lens with fine art elegance.",
    url: "https://ohmytemplate.com/en/templates/OHMT025-wedding",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT025-wedding/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Documentary Wedding Photography Template",
    description: "Timeless and authentic wedding photography. Capturing your love story through a documentary lens with fine art elegance.",
    images: ["/templates/OHMT025-wedding/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/OHMT025-wedding",
    languages: {
      "ko": "https://ohmytemplate.com/ko/templates/OHMT025-wedding",
    },
  },
};

export default function WeddingLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Lumen Wedding",
    description: "Timeless and authentic wedding photography. Capturing your love story through a documentary lens with fine art elegance.",
    url: "https://ohmytemplate.com/en/templates/OHMT025-wedding",
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
