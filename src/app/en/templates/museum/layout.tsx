import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import './theme.css';

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Museum - Oh My Template",
  description: "Experience the epitome of elegance and durability.",
  openGraph: {
    title: "Museum - Oh My Template",
    description: "Experience the epitome of elegance and durability.",
    url: "https://ohmytemplate.com/en/templates/OHMT021-museum",
    siteName: "Oh My Template",
    images: [{ url: "/templates/OHMT021-museum/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Museum - Oh My Template",
    description: "Experience the epitome of elegance and durability.",
    images: ["/templates/OHMT021-museum/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/OHMT021-museum",
    languages: { "ko": "https://ohmytemplate.com/ko/templates/OHMT021-museum" },
  },
};

export default function ExhibitionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${playfair.variable} ${inter.variable} font-sans bg-[var(--color-primary)] text-[var(--color-accent)] selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)]`}>
      {children}
    </div>
  );
}
