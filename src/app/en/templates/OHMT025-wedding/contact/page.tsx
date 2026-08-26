import type { Metadata } from "next";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import themeData from "../theme.json";
import ContactFull from "./ContactFull";

export const metadata: Metadata = {
  title: "Contact - Lumen Wedding Photography",
  description: "Book your wedding photography date with Lumen Wedding. Reach out to check availability for your celebration.",
  keywords: ["wedding photography booking", "contact wedding photographer", "book wedding photos"],
  authors: [{ name: "OHMT", url: "https://ohmt.site" }],
  openGraph: {
    title: "Contact - Lumen Wedding Photography",
    description: "Book your wedding photography date. Reach out to check availability for your celebration.",
    url: "https://ohmt.site/en/templates/OHMT025-wedding/contact",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT025-wedding/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Lumen Wedding Photography",
    description: "Book your wedding photography date.",
    images: ["/templates/OHMT025-wedding/og-image.jpg"],
  },
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/OHMT025-wedding/contact",
    languages: {
      "en": "https://ohmt.site/en/templates/OHMT025-wedding/contact",
      "ko": "https://ohmt.site/ko/templates/OHMT025-wedding/contact",
    },
  },
};

export default function ContactPage() {
  return (
    <TemplateWrapper theme={themeData}>
      <ContactFull />
    </TemplateWrapper>
  );
}
