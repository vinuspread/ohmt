import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multi-Brand Shop Website Template | OHMT",
  description: "A versatile multi-brand e-commerce website template with category browsing, product listings, and curated collections.",
  openGraph: {
    title: "Multi-Brand Shop Website Template | OHMT",
    description: "A versatile multi-brand e-commerce website template with category browsing, product listings, and curated collections.",
    url: "https://ohmt.site/en/templates/multi-shop",
    siteName: "OHMT",
    images: [{ url: "/templates/multi-shop/og-image.jpg", width: 1200, height: 630, alt: "Multi-Brand Shop Website Template" }],
    locale: "en_US",
    type: "website",
    alternateLocale: ["ko_KR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multi-Brand Shop Website Template | OHMT",
    description: "A versatile multi-brand e-commerce website template with category browsing, product listings, and curated collections.",
    images: ["/templates/multi-shop/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/multi-shop",
    languages: { "ko": "https://ohmt.site/ko/templates/multi-shop" },
  },
};

import './theme.css';
import { SmoothScroll } from "./_components/SmoothScroll";



export default function MultiShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
      `}</style>
      <SmoothScroll />
      {/* Fixed Frame Borders to prevent scroll bleed-through */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-[var(--color-frame)] h-[20px] md:h-[48px]" />
      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[var(--color-frame)] h-[20px] md:h-[48px]" />
      <div className="fixed top-0 bottom-0 left-0 z-[100] bg-[var(--color-frame)] w-[20px] md:w-[48px]" />
      <div className="fixed top-0 bottom-0 right-0 z-[100] bg-[var(--color-frame)] w-[20px] md:w-[48px]" />
      <div className="p-[20px] md:p-[48px]" style={{ backgroundColor: "var(--color-frame)" }}>
        {children}
      </div>
    </>
  );
}
