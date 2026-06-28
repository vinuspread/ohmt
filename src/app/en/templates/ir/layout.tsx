import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Relations Website Template | OHMT",
  description: "A professional investor relations website template for public companies. Includes financial highlights, leadership, and shareholder information.",
  openGraph: {
    title: "Investor Relations Website Template | OHMT",
    description: "A professional investor relations website template for public companies. Includes financial highlights, leadership, and shareholder information.",
    url: "https://ohmt.site/en/templates/ir",
    siteName: "OHMT",
    images: [{ url: "/templates/ir/og-image.jpg", width: 1200, height: 630, alt: "Investor Relations Website Template" }],
    locale: "en_US",
    type: "website",
    alternateLocale: ["ko_KR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Investor Relations Website Template | OHMT",
    description: "A professional investor relations website template for public companies. Includes financial highlights, leadership, and shareholder information.",
    images: ["/templates/ir/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/ir",
    languages: { "ko": "https://ohmt.site/ko/templates/ir" },
  },
};

import './theme.css';



export default function IRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>
      {children}
    </>
  );
}
