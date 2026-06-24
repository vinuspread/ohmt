import type { Metadata } from "next";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import themeData from "../theme.json";
import PricingFull from "./PricingFull";

export const metadata: Metadata = {
  title: "Pricing - Lumen Wedding Photography",
  description: "Explore our wedding photography collections. Essence, Elegance, and Ever After packages designed for every love story.",
  keywords: ["wedding photography pricing", "wedding packages", "fine art wedding collection"],
  authors: [{ name: "Oh My Template", url: "https://ohmytemplate.com" }],
  openGraph: {
    title: "Pricing - Lumen Wedding Photography",
    description: "Explore our wedding photography collections. Essence, Elegance, and Ever After packages.",
    url: "https://ohmytemplate.com/en/templates/OHMT025-wedding-EN/pricing",
    siteName: "Oh My Template",
    images: [{ url: "/templates/OHMT025-wedding/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing - Lumen Wedding Photography",
    description: "Explore our wedding photography collections.",
    images: ["/templates/OHMT025-wedding/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/OHMT025-wedding-EN/pricing",
    languages: {
      "en": "https://ohmytemplate.com/en/templates/OHMT025-wedding-EN/pricing",
      "ko": "https://ohmytemplate.com/ko/templates/OHMT025-wedding-KO/pricing",
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
