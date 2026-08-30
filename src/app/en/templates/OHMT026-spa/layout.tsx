import "./theme.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "SOMA - Retreat Booking Experience Template",
  description: "Premium spa and wellness shop template with a calming dark-green and cream palette, large lifestyle imagery, and a booking-first layout.",
  keywords: ["spa template", "wellness website", "spa booking", "Next.js template", "SOMA"],
  authors: [{ name: "SOMA", url: "https://ohmytemplate.com" }],
  openGraph: {
    title: "SOMA - Retreat Booking Experience Template",
    description: "Premium spa and wellness shop template with a calming dark-green and cream palette, large lifestyle imagery, and a booking-first layout.",
    url: "https://ohmytemplate.com/en/templates/OHMT026-spa",
    siteName: "SOMA",
    images: [{ url: "/templates/OHMT026-spa/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOMA - Retreat Booking Experience Template",
    description: "Premium spa and wellness shop template with a calming dark-green and cream palette, large lifestyle imagery, and a booking-first layout.",
    images: ["/templates/OHMT026-spa/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/OHMT026-spa",
    languages: {
      "en": "https://ohmytemplate.com/en/templates/OHMT026-spa",
      "ko": "https://ohmytemplate.com/ko/templates/OHMT026-spa",
    },
  },
};

export default function SpaLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "Serenity Wellness Spa",
    description: "Premium spa and wellness shop template with a calming dark-green and cream palette, large lifestyle imagery, and a booking-first layout.",
    url: "https://ohmytemplate.com/en/templates/OHMT026-spa",
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{`
      `}</style>
      {children}
    </>
  );
}
