import "./theme.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OHMT - Training Club Membership Template",
  description: "Premium wellness studio template for B2B consignment and B2C boutique fitness.",
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Training Club Membership Template",
    description: "Premium wellness studio template for B2B consignment and B2C boutique fitness.",
    images: ["/templates/OHMT029-fitness/og-image.jpg"],
  },
  openGraph: {
    title: "OHMT - Training Club Membership Template",
    description: "Premium wellness studio template for B2B consignment and B2C boutique fitness.",
    url: "https://ohmytemplate.com/en/templates/OHMT029-fitness",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT029-fitness/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/OHMT029-fitness",
    languages: {
      "en": "https://ohmytemplate.com/en/templates/OHMT029-fitness",
      "ko": "https://ohmytemplate.com/ko/templates/OHMT029-fitness",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "OHMT - Premium Fitness Studio",
  description: "Premium wellness studio template for B2B consignment and B2C boutique fitness.",
  url: "https://ohmytemplate.com/en/templates/OHMT029-fitness",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
      `}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
