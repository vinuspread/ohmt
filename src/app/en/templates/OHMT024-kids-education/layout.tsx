import "./theme.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OHMT - Kids Academy",
  description: "Where learning meets play. Discover 50+ fun and creative classes for kids, from coding to art and science experiments.",
  keywords: ["kids education", "children classes", "creative academy", "learning platform", "OHMT"],
  authors: [{ name: "OHMT", url: "https://ohmytemplate.com" }],
  openGraph: {
    title: "OHMT - Kids Academy",
    description: "Where learning meets play. Discover 50+ fun and creative classes for kids, from coding to art and science experiments.",
    url: "https://ohmytemplate.com/en/templates/OHMT024-kids-education",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT024-kids-education/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Kids Academy",
    description: "Where learning meets play. Discover 50+ fun and creative classes for kids, from coding to art and science experiments.",
    images: ["/templates/OHMT024-kids-education/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/OHMT024-kids-education",
    languages: {
      "ko": "https://ohmytemplate.com/ko/templates/OHMT024-kids-education",
    },
  },
};

export default function KidsEducationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
