import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "OHMT - Cosmetic",
  description: "Premium beauty & cosmetic brand showcase",
  openGraph: {
    title: "OHMT - Cosmetic",
    description: "Premium beauty & cosmetic brand showcase",
    url: "https://ohmytemplate.com/en/templates/cosmetic",
    siteName: "OHMT",
    images: [{ url: "/templates/cosmetic/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Cosmetic",
    description: "Premium beauty & cosmetic brand showcase",
    images: ["/templates/cosmetic/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/cosmetic",
    languages: { "ko": "https://ohmytemplate.com/ko/templates/cosmetic" },
  },
};

export default function CosmeticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');
      `}</style>
      {children}
    </>
  );
}
