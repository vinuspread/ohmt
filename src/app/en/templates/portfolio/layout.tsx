import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Portfolio - Oh My Template",
  description: "Personal branding and creative portfolio",
  openGraph: {
    title: "Portfolio - Oh My Template",
    description: "Personal branding and creative portfolio",
    url: "https://ohmytemplate.com/en/templates/OHMT013-portfolio-en",
    siteName: "Oh My Template",
    images: [{ url: "/templates/OHMT007-portfolio/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Oh My Template",
    description: "Personal branding and creative portfolio",
    images: ["/templates/OHMT007-portfolio/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/OHMT013-portfolio-en",
    languages: { "ko": "https://ohmytemplate.com/ko/templates/OHMT014-portfolio-kr" },
  },
};

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
