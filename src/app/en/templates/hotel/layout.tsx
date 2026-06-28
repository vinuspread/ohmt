import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Hotel - Oh My Template",
  description: "Premium luxury hotel & resort experience",
  openGraph: {
    title: "Hotel - Oh My Template",
    description: "Premium luxury hotel & resort experience",
    url: "https://ohmt.site/en/templates/hotel",
    siteName: "Oh My Template",
    images: [{ url: "/templates/hotel/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel - Oh My Template",
    description: "Premium luxury hotel & resort experience",
    images: ["/templates/hotel/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/hotel",
    languages: { "ko": "https://ohmt.site/ko/templates/hotel" },
  },
};

export default function HotelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Inter:wght@400;500;600&display=swap');
      `}</style>
      {children}
    </>
  );
}
