import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newspaper & News Website Template | OHMT",
  description: "A responsive newspaper and online news website template with article layouts, category sections, and editorial typography.",
  openGraph: {
    title: "Newspaper & News Website Template | OHMT",
    description: "A responsive newspaper and online news website template with article layouts, category sections, and editorial typography.",
    url: "https://ohmt.site/en/templates/newspaper",
    siteName: "OHMT",
    images: [{ url: "/templates/newspaper/og-image.jpg", width: 1200, height: 630, alt: "Newspaper & News Website Template" }],
    locale: "en_US",
    type: "website",
    alternateLocale: ["ko_KR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Newspaper & News Website Template | OHMT",
    description: "A responsive newspaper and online news website template with article layouts, category sections, and editorial typography.",
    images: ["/templates/newspaper/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/newspaper",
    languages: { "ko": "https://ohmt.site/ko/templates/newspaper" },
  },
};

import './theme.css';



export default function NewspaperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Georgia&display=swap');
      `}</style>
      {children}
    </>
  );
}
