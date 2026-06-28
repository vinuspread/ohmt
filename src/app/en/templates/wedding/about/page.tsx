import type { Metadata } from "next";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import themeData from "../theme.json";
import AboutFull from "./AboutFull";

export const metadata: Metadata = {
  title: "About - Lumen Wedding Photography",
  description: "Meet Clara, founder and lead photographer at Oh My Template. Capturing timeless wedding stories across the world with fine art documentary style.",
  keywords: ["wedding photographer", "fine art wedding photography", "documentary wedding photos"],
  authors: [{ name: "Oh My Template", url: "https://ohmt.site" }],
  openGraph: {
    title: "About - Lumen Wedding Photography",
    description: "Meet Clara, founder and lead photographer. Capturing timeless wedding stories with fine art documentary style.",
    url: "https://ohmt.site/en/templates/wedding/about",
    siteName: "Oh My Template",
    images: [{ url: "/templates/wedding/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About - Lumen Wedding Photography",
    description: "Meet Clara, founder and lead photographer. Capturing timeless wedding stories with fine art documentary style.",
    images: ["/templates/wedding/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/wedding/about",
    languages: {
      "en": "https://ohmt.site/en/templates/wedding/about",
      "ko": "https://ohmt.site/ko/templates/wedding/about",
    },
  },
};

export default function AboutPage() {
  return (
    <TemplateWrapper theme={themeData}>
      <AboutFull />
    </TemplateWrapper>
  );
}
