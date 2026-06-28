import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Car Concept - Oh My Template",
  description: "Premium automotive concept showcase",
  openGraph: {
    title: "Car Concept - Oh My Template",
    description: "Premium automotive concept showcase",
    url: "https://ohmt.site/en/templates/car",
    siteName: "Oh My Template",
    images: [{ url: "/templates/car/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Concept - Oh My Template",
    description: "Premium automotive concept showcase",
    images: ["/templates/car/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/car",
    languages: { "ko": "https://ohmt.site/ko/templates/car" },
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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>
      {children}
    </>
  );
}
