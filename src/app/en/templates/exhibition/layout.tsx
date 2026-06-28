import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exhibition & Art Gallery Website Template | OHMT",
  description: "A premium website template for exhibitions, art galleries, and cultural events. Features immersive layouts and event information sections.",
  openGraph: {
    title: "Exhibition & Art Gallery Website Template | OHMT",
    description: "A premium website template for exhibitions, art galleries, and cultural events. Features immersive layouts and event information sections.",
    url: "https://ohmt.site/en/templates/exhibition",
    siteName: "OHMT",
    images: [{ url: "/templates/exhibition/og-image.jpg", width: 1200, height: 630, alt: "Exhibition & Art Gallery Website Template" }],
    locale: "en_US",
    type: "website",
    alternateLocale: ["ko_KR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exhibition & Art Gallery Website Template | OHMT",
    description: "A premium website template for exhibitions, art galleries, and cultural events. Features immersive layouts and event information sections.",
    images: ["/templates/exhibition/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/exhibition",
    languages: { "ko": "https://ohmt.site/ko/templates/exhibition" },
  },
};

import './theme.css';



export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="exhibition-en">{children}</div>;
}
