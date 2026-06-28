import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Portfolio Website Template | OHMT",
  description: "A minimal and elegant personal portfolio website template for designers, photographers, developers, and creative professionals.",
  openGraph: {
    title: "Creative Portfolio Website Template | OHMT",
    description: "A minimal and elegant personal portfolio website template for designers, photographers, developers, and creative professionals.",
    url: "https://ohmt.site/en/templates/portfolio",
    siteName: "OHMT",
    images: [{ url: "/templates/portfolio/og-image.jpg", width: 1200, height: 630, alt: "Creative Portfolio Website Template" }],
    locale: "en_US",
    type: "website",
    alternateLocale: ["ko_KR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Portfolio Website Template | OHMT",
    description: "A minimal and elegant personal portfolio website template for designers, photographers, developers, and creative professionals.",
    images: ["/templates/portfolio/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/portfolio",
    languages: { "ko": "https://ohmt.site/ko/templates/portfolio" },
  },
};

import './theme.css';



export default function PortfolioLayout({
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
