import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Investor Relations - Oh My Template",
  description: "Corporate strategy and financial performance",
  openGraph: {
    title: "Investor Relations - Oh My Template",
    description: "Corporate strategy and financial performance",
    url: "https://ohmytemplate.com/en/templates/OHMT011-ir-EN",
    siteName: "Oh My Template",
    images: [{ url: "/templates/ir/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Investor Relations - Oh My Template",
    description: "Corporate strategy and financial performance",
    images: ["/templates/ir/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/OHMT011-ir-EN",
    languages: { "ko": "https://ohmytemplate.com/ko/templates/OHMT011-ir-KO" },
  },
};

export default function IRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>
      {children}
    </>
  );
}
