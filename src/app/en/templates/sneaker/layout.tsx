import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Sneaker - Oh My Template",
  description: "Urban streetwear and sneaker releases",
  openGraph: {
    title: "Sneaker - Oh My Template",
    description: "Urban streetwear and sneaker releases",
    url: "https://ohmt.site/en/templates/sneaker",
    siteName: "Oh My Template",
    images: [{ url: "/templates/sneaker/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sneaker - Oh My Template",
    description: "Urban streetwear and sneaker releases",
    images: ["/templates/sneaker/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/sneaker",
    languages: { "ko": "https://ohmt.site/ko/templates/sneaker" },
  },
};

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
