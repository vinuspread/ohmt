import type { Metadata } from "next";
import './theme.css';
export const metadata: Metadata = {
  title: "OHMT - Boutique Hotel Booking Template",
  description: "Premium luxury hotel & resort experience",
  openGraph: {
    title: "OHMT - Boutique Hotel Booking Template",
    description: "Premium luxury hotel & resort experience",
    url: "https://ohmytemplate.com/en/templates/OHMT020-hotel",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT020-hotel/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Boutique Hotel Booking Template",
    description: "Premium luxury hotel & resort experience",
    images: ["/templates/OHMT020-hotel/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/OHMT020-hotel",
    languages: { "ko": "https://ohmytemplate.com/ko/templates/OHMT020-hotel" },
  },
};

export default function HotelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Luxe Haven Hotel",
    description: "Premium luxury hotel & resort experience",
    url: "https://ohmytemplate.com/en/templates/OHMT020-hotel",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style>{`
      `}</style>
      {children}
    </>
  );
}
