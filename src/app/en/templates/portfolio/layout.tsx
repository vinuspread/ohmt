import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "OHMT - Portfolio",
  description: "Personal branding and creative portfolio",
  openGraph: {
    title: "OHMT - Portfolio",
    description: "Personal branding and creative portfolio",
    url: "https://ohmytemplate.com/en/templates/portfolio",
    siteName: "OHMT",
    images: [{ url: "/templates/portfolio/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Portfolio",
    description: "Personal branding and creative portfolio",
    images: ["/templates/portfolio/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/portfolio",
    languages: { "ko": "https://ohmytemplate.com/ko/templates/portfolio" },
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
