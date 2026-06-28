import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furniture & Interior Design Website Template | OHMT",
  description: "A premium furniture and interior design website template with product showcases, brand story, and shop-ready layouts.",
  openGraph: {
    title: "Furniture & Interior Design Website Template | OHMT",
    description: "A premium furniture and interior design website template with product showcases, brand story, and shop-ready layouts.",
    url: "https://ohmt.site/en/templates/furniture",
    siteName: "OHMT",
    images: [{ url: "/templates/furniture/og-image.jpg", width: 1200, height: 630, alt: "Furniture & Interior Design Website Template" }],
    locale: "en_US",
    type: "website",
    alternateLocale: ["ko_KR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Furniture & Interior Design Website Template | OHMT",
    description: "A premium furniture and interior design website template with product showcases, brand story, and shop-ready layouts.",
    images: ["/templates/furniture/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/furniture",
    languages: { "ko": "https://ohmt.site/ko/templates/furniture" },
  },
};

import './theme.css';



export default function FurnitureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&family=Inter:wght@400;500;600&display=swap');
      `}</style>
      {children}
    </>
  );
}
