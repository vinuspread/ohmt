import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Exhibition - Oh My Template",
  description: "Premium exhibition & event experience",
  openGraph: {
    title: "Exhibition - Oh My Template",
    description: "Premium exhibition & event experience",
    url: "https://ohmt.site/en/templates/exhibition",
    siteName: "Oh My Template",
    images: [{ url: "/templates/exhibition/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exhibition - Oh My Template",
    description: "Premium exhibition & event experience",
    images: ["/templates/exhibition/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/exhibition",
    languages: { "ko": "https://ohmt.site/ko/templates/exhibition" },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="exhibition-en">{children}</div>;
}
