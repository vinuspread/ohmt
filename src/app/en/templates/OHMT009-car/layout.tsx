import type { Metadata } from "next";
import './theme.css';
export const metadata: Metadata = {
  title: "OHMT - Automotive Concept Showcase Template",
  description: "Premium automotive concept showcase",
  openGraph: {
    title: "OHMT - Automotive Concept Showcase Template",
    description: "Premium automotive concept showcase",
    url: "https://ohmytemplate.com/en/templates/OHMT009-car",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT009-car/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Automotive Concept Showcase Template",
    description: "Premium automotive concept showcase",
    images: ["/templates/OHMT009-car/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/OHMT009-car",
    languages: { "ko": "https://ohmytemplate.com/ko/templates/OHMT009-car" },
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
      `}</style>
      {children}
    </>
  );
}
