import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Magazine & Editorial Website Template | OHMT",
  description: "A sophisticated magazine and editorial website template for culture, lifestyle, and digital media brands. Features article layouts and category navigation.",
  openGraph: {
    title: "Magazine & Editorial Website Template | OHMT",
    description: "A sophisticated magazine and editorial website template for culture, lifestyle, and digital media brands. Features article layouts and category navigation.",
    url: "https://ohmt.site/en/templates/magazine",
    siteName: "OHMT",
    images: [{ url: "/templates/magazine/og-image.jpg", width: 1200, height: 630, alt: "Magazine & Editorial Website Template" }],
    locale: "en_US",
    type: "website",
    alternateLocale: ["ko_KR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magazine & Editorial Website Template | OHMT",
    description: "A sophisticated magazine and editorial website template for culture, lifestyle, and digital media brands. Features article layouts and category navigation.",
    images: ["/templates/magazine/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/magazine",
    languages: { "ko": "https://ohmt.site/ko/templates/magazine" },
  },
};

import './theme.css';



export default function MagazineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400&family=Inter:wght@300;400;500;600&display=swap');
      `}</style>
      {children}
    </>
  );
}
