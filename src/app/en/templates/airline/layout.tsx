import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airline Brand Website Template | OHMT",
  description: "A premium airline and aviation brand website template. Professional design for airlines, charter services, and aviation companies.",
  openGraph: {
    title: "Airline Brand Website Template | OHMT",
    description: "A premium airline and aviation brand website template. Professional design for airlines, charter services, and aviation companies.",
    url: "https://ohmt.site/en/templates/airline",
    siteName: "OHMT",
    images: [{ url: "/templates/airline/og-image.jpg", width: 1200, height: 630, alt: "Airline Brand Website Template" }],
    locale: "en_US",
    type: "website",
    alternateLocale: ["ko_KR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Airline Brand Website Template | OHMT",
    description: "A premium airline and aviation brand website template. Professional design for airlines, charter services, and aviation companies.",
    images: ["/templates/airline/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/airline",
    languages: { "ko": "https://ohmt.site/ko/templates/airline" },
  },
};

import './theme.css';



export default function AirlineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600&display=swap');
      `}</style>
      {children}
    </>
  );
}
