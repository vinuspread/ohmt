import type { Metadata } from "next";
import './theme.css';
export const metadata: Metadata = {
  title: "SILO - Editorial Fashion Lookbook",
  description: "Premium fashion brand & editorial showcase",
  openGraph: {
    title: "SILO - Editorial Fashion Lookbook",
    description: "Premium fashion brand & editorial showcase",
    url: "https://ohmytemplate.com/en/templates/OHMT001-fashion",
    siteName: "SILO",
    images: [{ url: "/templates/OHMT001-fashion/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SILO - Editorial Fashion Lookbook",
    description: "Premium fashion brand & editorial showcase",
    images: ["/templates/OHMT001-fashion/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/OHMT001-fashion",
    languages: { "ko": "https://ohmytemplate.com/ko/templates/OHMT001-fashion" },
  },
};

export default function FashionLayout({
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
