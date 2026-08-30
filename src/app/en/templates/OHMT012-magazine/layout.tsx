import type { Metadata } from "next";
import './theme.css';
export const metadata: Metadata = {
  title: "OHMT - Independent Publishing Layout Template",
  description: "Editorial culture and lifestyle",
  openGraph: {
    title: "OHMT - Independent Publishing Layout Template",
    description: "Editorial culture and lifestyle",
    url: "https://ohmytemplate.com/en/templates/OHMT012-magazine",
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
    canonical: "https://ohmytemplate.com/en/templates/OHMT012-magazine",
    languages: { "ko": "https://ohmytemplate.com/ko/templates/OHMT012-magazine" },
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
      `}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MagazineSeries",
            name: "FOLIO Magazine",
            url: "https://ohmytemplate.com/en/templates/OHMT012-magazine",
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
