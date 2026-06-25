import type { Metadata } from "next";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import themeData from "../theme.json";
import ContactFull from "./ContactFull";

export const metadata: Metadata = {
  title: "Contact - Lumen Wedding Photography",
  description: "Book your wedding photography date with Lumen Wedding. Reach out to check availability for your celebration.",
  keywords: ["wedding photography booking", "contact wedding photographer", "book wedding photos"],
  authors: [{ name: "Oh My Template", url: "https://ohmytemplate.com" }],
  openGraph: {
    title: "Contact - Lumen Wedding Photography",
    description: "Book your wedding photography date. Reach out to check availability for your celebration.",
    url: "https://ohmytemplate.com/en/templates/wedding/contact",
    siteName: "Oh My Template",
    images: [{ url: "/templates/wedding/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Lumen Wedding Photography",
    description: "Book your wedding photography date.",
    images: ["/templates/wedding/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/wedding/contact",
    languages: {
      "en": "https://ohmytemplate.com/en/templates/wedding/contact",
      "ko": "https://ohmytemplate.com/ko/templates/wedding/contact",
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
