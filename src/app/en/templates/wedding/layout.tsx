import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding Photography Website Template | OHMT",
  description: "An elegant wedding photography and event website template with gallery layouts, pricing packages, and storytelling sections.",
  openGraph: {
    title: "Wedding Photography Website Template | OHMT",
    description: "An elegant wedding photography and event website template with gallery layouts, pricing packages, and storytelling sections.",
    url: "https://ohmt.site/en/templates/wedding",
    siteName: "OHMT",
    images: [{ url: "/templates/wedding/og-image.jpg", width: 1200, height: 630, alt: "Wedding Photography Website Template" }],
    locale: "en_US",
    type: "website",
    alternateLocale: ["ko_KR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Photography Website Template | OHMT",
    description: "An elegant wedding photography and event website template with gallery layouts, pricing packages, and storytelling sections.",
    images: ["/templates/wedding/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/wedding",
    languages: { "ko": "https://ohmt.site/ko/templates/wedding" },
  },
};

import "./theme.css";



export default function WeddingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Elms+Sans:wght@100..900&family=Inter+Tight:ital,wght@0,100..900;1,100..900&display=swap');
      `}</style>
      {children}
    </>
  );
}
