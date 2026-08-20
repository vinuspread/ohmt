import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "IONARA - Automotive Concept Showcase",
  description: "Premium automotive concept showcase",
  openGraph: {
    title: "IONARA - Automotive Concept Showcase",
    description: "Premium automotive concept showcase",
    url: "https://ohmt.site/en/templates/OHMT009-car",
    siteName: "IONARA",
    images: [{ url: "/templates/OHMT009-car/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IONARA - Automotive Concept Showcase",
    description: "Premium automotive concept showcase",
    images: ["/templates/OHMT009-car/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/OHMT009-car",
    languages: { "ko": "https://ohmt.site/ko/templates/OHMT009-car" },
  },
};

export default function CarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;700;800;900&display=swap');
      `}</style>
      {children}
    </>
  );
}
