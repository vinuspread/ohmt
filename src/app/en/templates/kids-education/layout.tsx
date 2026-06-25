import "./theme.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kids Academy - Oh My Template",
  description: "Where learning meets play. Discover 50+ fun and creative classes for kids, from coding to art and science experiments.",
  keywords: ["kids education", "children classes", "creative academy", "learning platform", "Oh My Template"],
  authors: [{ name: "Oh My Template", url: "https://ohmytemplate.com" }],
  openGraph: {
    title: "Kids Academy - Oh My Template",
    description: "Where learning meets play. Discover 50+ fun and creative classes for kids, from coding to art and science experiments.",
    url: "https://ohmytemplate.com/en/templates/kids-education",
    siteName: "Oh My Template",
    images: [{ url: "/templates/kids-education/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kids Academy - Oh My Template",
    description: "Where learning meets play. Discover 50+ fun and creative classes for kids, from coding to art and science experiments.",
    images: ["/templates/kids-education/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/kids-education",
    languages: {
      "ko": "https://ohmytemplate.com/ko/templates/kids-education",
    },
  },
};

export default function KidsEducationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
