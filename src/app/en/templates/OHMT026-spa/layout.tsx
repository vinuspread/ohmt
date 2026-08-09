import "./theme.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OHMT - Retreat Booking Experience Template",
  description: "Premium spa and wellness shop template with a calming dark-green and cream palette, large lifestyle imagery, and a booking-first layout.",
  keywords: ["spa template", "wellness website", "spa booking", "Next.js template", "OHMT"],
  authors: [{ name: "OHMT", url: "https://ohmt.site" }],
  openGraph: {
    title: "OHMT - Retreat Booking Experience Template",
    description: "Premium spa and wellness shop template with a calming dark-green and cream palette, large lifestyle imagery, and a booking-first layout.",
    url: "https://ohmt.site/en/templates/OHMT026-spa",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT026-spa/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Retreat Booking Experience Template",
    description: "Premium spa and wellness shop template with a calming dark-green and cream palette, large lifestyle imagery, and a booking-first layout.",
    images: ["/templates/OHMT026-spa/og-image.jpg"],
  },
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://ohmt.site/en/templates/OHMT026-spa",
    languages: {
      "en": "https://ohmt.site/en/templates/OHMT026-spa",
      "ko": "https://ohmt.site/ko/templates/OHMT026-spa",
    },
  },
};

export default function SpaLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "OHMT Spa Wellness",
    description: "Premium spa and wellness shop template with a calming dark-green and cream palette, large lifestyle imagery, and a booking-first layout.",
    url: "https://ohmt.site/en/templates/OHMT026-spa",
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
      `}</style>
      {children}
    </>
  );
}
