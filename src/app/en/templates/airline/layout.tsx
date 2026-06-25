import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Airline - Oh My Template",
  description: "Premium aviation experience",
  openGraph: {
    title: "Airline - Oh My Template",
    description: "Premium aviation experience",
    url: "https://ohmytemplate.com/en/templates/airline",
    siteName: "Oh My Template",
    images: [{ url: "/templates/airline/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airline - Oh My Template",
    description: "Premium aviation experience",
    images: ["/templates/airline/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/airline",
    languages: { "ko": "https://ohmytemplate.com/ko/templates/airline" },
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600&display=swap');
      `}</style>
      {children}
    </>
  );
}
