import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coffee Shop & Roastery Website Template | OHMT",
  description: "A warm and elegant website template for coffee shops, cafes, and specialty roasteries. Includes menu, brand story, and shop sections.",
  openGraph: {
    title: "Coffee Shop & Roastery Website Template | OHMT",
    description: "A warm and elegant website template for coffee shops, cafes, and specialty roasteries. Includes menu, brand story, and shop sections.",
    url: "https://ohmt.site/en/templates/coffee",
    siteName: "OHMT",
    images: [{ url: "/templates/coffee/og-image.jpg", width: 1200, height: 630, alt: "Coffee Shop & Roastery Website Template" }],
    locale: "en_US",
    type: "website",
    alternateLocale: ["ko_KR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coffee Shop & Roastery Website Template | OHMT",
    description: "A warm and elegant website template for coffee shops, cafes, and specialty roasteries. Includes menu, brand story, and shop sections.",
    images: ["/templates/coffee/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/coffee",
    languages: { "ko": "https://ohmt.site/ko/templates/coffee" },
  },
};

import './theme.css';



export default function CoffeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
      `}</style>
      {children}
    </>
  );
}
