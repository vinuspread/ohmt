import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "OHMT - Exhibition",
  description: "Premium exhibition & event experience",
  openGraph: {
    title: "OHMT - Exhibition",
    description: "Premium exhibition & event experience",
    url: "https://ohmytemplate.com/en/templates/OHMT003-exhibition",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT003-exhibition/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Exhibition",
    description: "Premium exhibition & event experience",
    images: ["/templates/OHMT003-exhibition/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/OHMT003-exhibition",
    languages: { "ko": "https://ohmytemplate.com/ko/templates/OHMT003-exhibition" },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="exhibition-en">{children}</div>;
}
