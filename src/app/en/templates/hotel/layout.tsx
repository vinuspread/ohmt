import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Hotel & Resort Website Template | OHMT",
  description: "A premium hotel and resort website template with room listings, amenities showcase, and booking call-to-action sections.",
  openGraph: {
    title: "Luxury Hotel & Resort Website Template | OHMT",
    description: "A premium hotel and resort website template with room listings, amenities showcase, and booking call-to-action sections.",
    url: "https://ohmt.site/en/templates/hotel",
    siteName: "OHMT",
    images: [{ url: "/templates/hotel/og-image.jpg", width: 1200, height: 630, alt: "Luxury Hotel & Resort Website Template" }],
    locale: "en_US",
    type: "website",
    alternateLocale: ["ko_KR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Hotel & Resort Website Template | OHMT",
    description: "A premium hotel and resort website template with room listings, amenities showcase, and booking call-to-action sections.",
    images: ["/templates/hotel/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/hotel",
    languages: { "ko": "https://ohmt.site/ko/templates/hotel" },
  },
};

import './theme.css';



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
