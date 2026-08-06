import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "OHMT - Independent Publishing Layout Template",
  description: "Editorial culture and lifestyle",
  openGraph: {
    title: "OHMT - Independent Publishing Layout Template",
    description: "Editorial culture and lifestyle",
    url: "https://ohmt.site/en/templates/OHMT012-magazine",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT012-magazine/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Independent Publishing Layout Template",
    description: "Editorial culture and lifestyle",
    images: ["/templates/OHMT012-magazine/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/OHMT012-magazine",
    languages: { "ko": "https://ohmt.site/ko/templates/OHMT012-magazine" },
  },
};

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MagazineSeries",
            name: "OHMT Magazine",
            url: "https://ohmt.site/en/templates/OHMT012-magazine",
            description: "Editorial culture and lifestyle — A quarterly record of how design, culture, and sustainability actually intersect.",
            about: {
              "@type": "Thing",
              name: "Design, Culture, Sustainability",
            },
          }),
        }}
      />
      {children}
    </>
  );
}
