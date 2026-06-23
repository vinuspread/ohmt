import type { Metadata } from "next";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import themeData from "../theme.json";
import GalleryFull from "./GalleryFull";

export const metadata: Metadata = {
  title: "Portfolio - Lumen Wedding Photography",
  description: "Explore our portfolio of fine art wedding photography. Real love stories captured across the world with documentary and editorial style.",
  keywords: ["wedding portfolio", "fine art wedding gallery", "documentary wedding photos", "wedding photography examples"],
  authors: [{ name: "Oh My Template", url: "https://ohmytemplate.com" }],
  openGraph: {
    title: "Portfolio - Lumen Wedding Photography",
    description: "Explore our portfolio of fine art wedding photography. Real love stories captured across the world.",
    url: "https://ohmytemplate.com/en/templates/OHMT049-wedding-en/gallery",
    siteName: "Oh My Template",
    images: [{ url: "/templates/OHMT025-wedding/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Lumen Wedding Photography",
    description: "Explore our portfolio of fine art wedding photography.",
    images: ["/templates/OHMT025-wedding/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/OHMT049-wedding-en/gallery",
    languages: {
      "en": "https://ohmytemplate.com/en/templates/OHMT049-wedding-en/gallery",
      "ko": "https://ohmytemplate.com/ko/templates/OHMT050-wedding-kr/gallery",
    },
  },
};

export default function GalleryPage() {
  return (
    <TemplateWrapper theme={themeData}>
      <GalleryFull />
    </TemplateWrapper>
  );
}
