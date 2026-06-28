import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Burger Restaurant Website Template | OHMT",
  description: "A bold website template for burger restaurants, fast food chains, and food brands. Includes menu, promotions, and location pages.",
  openGraph: {
    title: "Burger Restaurant Website Template | OHMT",
    description: "A bold website template for burger restaurants, fast food chains, and food brands. Includes menu, promotions, and location pages.",
    url: "https://ohmt.site/en/templates/burger",
    siteName: "OHMT",
    images: [{ url: "/templates/burger/og-image.jpg", width: 1200, height: 630, alt: "Burger Restaurant Website Template" }],
    locale: "en_US",
    type: "website",
    alternateLocale: ["ko_KR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Burger Restaurant Website Template | OHMT",
    description: "A bold website template for burger restaurants, fast food chains, and food brands. Includes menu, promotions, and location pages.",
    images: ["/templates/burger/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/burger",
    languages: { "ko": "https://ohmt.site/ko/templates/burger" },
  },
};

import './theme.css';



export default function BurgerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
      `}</style>
      {children}
    </>
  );
}
