import type { Metadata } from "next";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import themeData from "../theme.json";
import PricingFull from "./PricingFull";

export const metadata: Metadata = {
  title: "Pricing - Lumen Wedding Photography",
  description: "Explore our wedding photography collections. Essence, Elegance, and Ever After packages designed for every love story.",
  keywords: ["wedding photography pricing", "wedding packages", "fine art wedding collection"],
  authors: [{ name: "OHMT", url: "https://ohmytemplate.com" }],
  openGraph: {
    title: "Pricing - Lumen Wedding Photography",
    description: "Explore our wedding photography collections. Essence, Elegance, and Ever After packages.",
    url: "https://ohmytemplate.com/en/templates/wedding/pricing",
    siteName: "OHMT",
    images: [{ url: "/templates/wedding/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing - Lumen Wedding Photography",
    description: "Explore our wedding photography collections.",
    images: ["/templates/wedding/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/wedding/pricing",
    languages: {
      "en": "https://ohmytemplate.com/en/templates/wedding/pricing",
      "ko": "https://ohmytemplate.com/ko/templates/wedding/pricing",
    },
  },
};

export default function PricingPage() {
  return (
    <TemplateWrapper theme={themeData}>
      <PricingFull />
    </TemplateWrapper>
  );
}
