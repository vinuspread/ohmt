import type { Metadata } from "next";
import './theme.css';
import { SmoothScroll } from "./_components/SmoothScroll";

export const metadata: Metadata = {
  title: "OHMT - Multi-Brand Shopfront Template",
  description: "Multi-brand shopping experience with curated collections",
  openGraph: {
    title: "OHMT - Multi-Brand Shopfront Template",
    description: "Multi-brand shopping experience with curated collections",
    url: "https://ohmt.site/en/templates/OHMT017-multi-shop",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT017-multi-shop/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Multi-Brand Shopfront Template",
    description: "Multi-brand shopping experience with curated collections",
    images: ["/templates/OHMT017-multi-shop/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/OHMT017-multi-shop",
    languages: { "ko": "https://ohmt.site/ko/templates/OHMT017-multi-shop" },
  },
};

export default function MultiShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;600&family=Inter:wght@400;600&display=swap');
      `}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Store",
            name: "OHMT Multi-Shop",
            url: "https://ohmt.site/en/templates/OHMT017-multi-shop",
            description: "Multi-brand shopping experience with curated collections.",
          }),
        }}
      />
      <SmoothScroll />
      <div className="min-h-screen relative">
          {/* Fixed Frame Borders to prevent scroll bleed-through */}
          <div className="fixed top-0 left-0 right-0 z-[100] bg-[var(--color-frame)] h-[20px] md:h-[48px]" />
          <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[var(--color-frame)] h-[20px] md:h-[48px]" />
          <div className="fixed top-0 bottom-0 left-0 z-[100] bg-[var(--color-frame)] w-[20px] md:w-[48px]" />
          <div className="fixed top-0 bottom-0 right-0 z-[100] bg-[var(--color-frame)] w-[20px] md:w-[48px]" />
          <div className="p-5 md:p-12" style={{ backgroundColor: "var(--color-frame)" }}>
            {children}
          </div>
        </div>
    </>
  );
}
