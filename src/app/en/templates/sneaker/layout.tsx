import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "OHMT - Sneaker",
  description: "Urban streetwear and sneaker releases",
  openGraph: {
    title: "OHMT - Sneaker",
    description: "Urban streetwear and sneaker releases",
    url: "https://ohmytemplate.com/en/templates/sneaker",
    siteName: "OHMT",
    images: [{ url: "/templates/sneaker/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Sneaker",
    description: "Urban streetwear and sneaker releases",
    images: ["/templates/sneaker/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/sneaker",
    languages: { "ko": "https://ohmytemplate.com/ko/templates/sneaker" },
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
