import type { Metadata } from "next";
import "./theme.css";

export const metadata: Metadata = {
  title: "OHMT - Documentation Workspace Template",
  description: "A clean Notion-style documentation workspace for teams.",
  openGraph: {
    title: "OHMT - Documentation Workspace Template",
    description: "A clean Notion-style documentation workspace for teams.",
    url: "https://ohmt.site/en/templates/OHMT014-docs",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT014-docs/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Documentation Workspace Template",
    description: "A clean Notion-style documentation workspace for teams.",
    images: ["/templates/OHMT014-docs/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://ohmt.site/en/templates/OHMT014-docs" },
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "OHMT Docs",
          url: "https://ohmt.site/en/templates/OHMT014-docs",
          description: "A clean Notion-style documentation workspace for teams.",
        }),
      }}
    />
    {children}
  </>;
}
