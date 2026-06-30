import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "OHMT - Burger",
  description: "Premium burger restaurant experience",
  openGraph: {
    title: "OHMT - Burger",
    description: "Premium burger restaurant experience",
    url: "https://ohmytemplate.com/en/templates/OHMT018-burger",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT018-burger/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Burger",
    description: "Premium burger restaurant experience",
    images: ["/templates/OHMT018-burger/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/OHMT018-burger",
    languages: { "ko": "https://ohmytemplate.com/ko/templates/OHMT018-burger" },
  },
};

export default function BurgerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
      `}</style>
      {children}
    </>
  );
}
