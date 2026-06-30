import "./theme.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OHMT - Spa Wellness",
  description: "Premium spa and wellness shop template with a calming dark-green and cream palette, large lifestyle imagery, and a booking-first layout.",
  keywords: ["spa template", "wellness website", "spa booking", "Next.js template", "OHMT"],
  authors: [{ name: "OHMT", url: "https://ohmytemplate.com" }],
  openGraph: {
    title: "OHMT - Spa Wellness",
    description: "Premium spa and wellness shop template with a calming dark-green and cream palette, large lifestyle imagery, and a booking-first layout.",
    url: "https://ohmytemplate.com/en/templates/OHMT026-spa",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT026-spa/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Spa Wellness",
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
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
      `}</style>
      {children}
    </>
  );
}
