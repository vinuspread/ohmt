import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sneaker & Streetwear Brand Website Template | OHMT",
  description: "A bold sneaker and streetwear brand website template with product launches, drop schedules, and urban lifestyle layouts.",
  openGraph: {
    title: "Sneaker & Streetwear Brand Website Template | OHMT",
    description: "A bold sneaker and streetwear brand website template with product launches, drop schedules, and urban lifestyle layouts.",
    url: "https://ohmt.site/en/templates/sneaker",
    siteName: "OHMT",
    images: [{ url: "/templates/sneaker/og-image.jpg", width: 1200, height: 630, alt: "Sneaker & Streetwear Brand Website Template" }],
    locale: "en_US",
    type: "website",
    alternateLocale: ["ko_KR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sneaker & Streetwear Brand Website Template | OHMT",
    description: "A bold sneaker and streetwear brand website template with product launches, drop schedules, and urban lifestyle layouts.",
    images: ["/templates/sneaker/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/sneaker",
    languages: { "ko": "https://ohmt.site/ko/templates/sneaker" },
  },
};

import './theme.css';



export default function SneakerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&display=swap');
      `}</style>
      {children}
    </>
  );
}
