import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automotive & Car Brand Website Template | OHMT",
  description: "A sleek automotive website template for car brands, dealerships, and vehicle showcases. Features dynamic layouts and vehicle highlight sections.",
  openGraph: {
    title: "Automotive & Car Brand Website Template | OHMT",
    description: "A sleek automotive website template for car brands, dealerships, and vehicle showcases. Features dynamic layouts and vehicle highlight sections.",
    url: "https://ohmt.site/en/templates/car",
    siteName: "OHMT",
    images: [{ url: "/templates/car/og-image.jpg", width: 1200, height: 630, alt: "Automotive & Car Brand Website Template" }],
    locale: "en_US",
    type: "website",
    alternateLocale: ["ko_KR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automotive & Car Brand Website Template | OHMT",
    description: "A sleek automotive website template for car brands, dealerships, and vehicle showcases. Features dynamic layouts and vehicle highlight sections.",
    images: ["/templates/car/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/car",
    languages: { "ko": "https://ohmt.site/ko/templates/car" },
  },
};

import './theme.css';



export default function CarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
      {children}
    </>
  );
}
