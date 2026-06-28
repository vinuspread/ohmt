import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation Website Template | OHMT",
  description: "A Notion-style documentation website template for teams, products, and developer tools. Clean layout with sidebar navigation.",
  openGraph: {
    title: "Documentation Website Template | OHMT",
    description: "A Notion-style documentation website template for teams, products, and developer tools. Clean layout with sidebar navigation.",
    url: "https://ohmt.site/en/templates/docs",
    siteName: "OHMT",
    images: [{ url: "/templates/docs/og-image.jpg", width: 1200, height: 630, alt: "Documentation Website Template" }],
    locale: "en_US",
    type: "website",
    alternateLocale: ["ko_KR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Documentation Website Template | OHMT",
    description: "A Notion-style documentation website template for teams, products, and developer tools. Clean layout with sidebar navigation.",
    images: ["/templates/docs/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/docs",
    languages: { "ko": "https://ohmt.site/ko/templates/docs" },
  },
};

import "./theme.css";



export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
