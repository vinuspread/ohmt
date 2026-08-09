import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "OHMT - Specialty Cafe Product Template",
  description: "Premium coffee shop & roastery experience",
  openGraph: {
    title: "OHMT - Specialty Cafe Product Template",
    description: "Premium coffee shop & roastery experience",
    url: "https://ohmt.site/en/templates/OHMT019-coffee",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT019-coffee/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Specialty Cafe Product Template",
    description: "Premium coffee shop & roastery experience",
    images: ["/templates/OHMT019-coffee/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/OHMT019-coffee",
    languages: { "ko": "https://ohmt.site/ko/templates/OHMT019-coffee" },
  },
};

export default function CoffeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "OHMT Coffee",
    description: "Premium coffee shop & roastery experience",
    url: "https://ohmt.site/en/templates/OHMT019-coffee",
    servesCuisine: "Coffee",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
      `}</style>
      {children}
    </>
  );
}
