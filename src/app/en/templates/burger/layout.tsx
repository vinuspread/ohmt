import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Burger - Oh My Template",
  description: "Premium burger restaurant experience",
  openGraph: {
    title: "Burger - Oh My Template",
    description: "Premium burger restaurant experience",
    url: "https://ohmt.site/en/templates/burger",
    siteName: "Oh My Template",
    images: [{ url: "/templates/burger/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burger - Oh My Template",
    description: "Premium burger restaurant experience",
    images: ["/templates/burger/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/burger",
    languages: { "ko": "https://ohmt.site/ko/templates/burger" },
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
