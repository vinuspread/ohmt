import type { Metadata } from "next";
import './theme.css';
export const metadata: Metadata = {
  title: "OHMT - Airline Booking Experience Template",
  description: "Premium aviation experience",
  openGraph: {
    title: "OHMT - Airline Booking Experience Template",
    description: "Premium aviation experience",
    url: "https://ohmytemplate.com/en/templates/OHMT008-airline",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT008-airline/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Airline Booking Experience Template",
    description: "Premium aviation experience",
    images: ["/templates/OHMT008-airline/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/OHMT008-airline",
    languages: { "ko": "https://ohmytemplate.com/ko/templates/OHMT008-airline" },
  },
};

export default function AirlineLayout({
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
