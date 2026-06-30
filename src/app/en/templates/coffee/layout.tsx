import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "OHMT - Coffee",
  description: "Premium coffee shop & roastery experience",
  openGraph: {
    title: "OHMT - Coffee",
    description: "Premium coffee shop & roastery experience",
    url: "https://ohmytemplate.com/en/templates/OHMT019-coffee",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT019-coffee/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Coffee",
    description: "Premium coffee shop & roastery experience",
    images: ["/templates/OHMT019-coffee/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/OHMT019-coffee",
    languages: { "ko": "https://ohmytemplate.com/ko/templates/OHMT019-coffee" },
  },
};

export default function CoffeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
      `}</style>
      {children}
    </>
  );
}
