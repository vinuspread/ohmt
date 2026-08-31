import type { Metadata } from "next";
import './theme.css';
export const metadata: Metadata = {
  title: "CASSIA - Boutique Hotel Booking Template",
  description: "Premium luxury hotel & resort experience",
  openGraph: {
    title: "CASSIA - Boutique Hotel Booking Template",
    description: "Premium luxury hotel & resort experience",
    url: "https://ohmytemplate.com/en/templates/OHMT020-hotel",
    siteName: "CASSIA",
    images: [{ url: "/templates/OHMT020-hotel/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CASSIA - Boutique Hotel Booking Template",
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
    name: "CASSIA",
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
