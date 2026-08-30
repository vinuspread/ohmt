import type { Metadata } from "next";
import './theme.css';
export const metadata: Metadata = {
  title: "HALF LIGHT - Brutalist Creative Portfolio Template",
  description: "Personal branding and creative portfolio",
  openGraph: {
    title: "HALF LIGHT - Brutalist Creative Portfolio Template",
    description: "Personal branding and creative portfolio",
    url: "https://ohmytemplate.com/en/templates/OHMT007-portfolio",
    siteName: "HALF LIGHT",
    images: [{ url: "/templates/OHMT007-portfolio/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HALF LIGHT - Brutalist Creative Portfolio Template",
    description: "Personal branding and creative portfolio",
    images: ["/templates/OHMT007-portfolio/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/OHMT007-portfolio",
    languages: { "ko": "https://ohmytemplate.com/ko/templates/OHMT007-portfolio" },
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
      `}</style>
      <div className="portfolio-template">{children}</div>
    </>
  );
}
