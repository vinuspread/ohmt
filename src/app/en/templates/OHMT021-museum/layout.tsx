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
  title: "CURA - Museum Exhibition Website",
  description: "Experience the epitome of elegance and durability.",
  openGraph: {
    title: "CURA - Museum Exhibition Website",
    description: "Experience the epitome of elegance and durability.",
    url: "https://ohmt.site/en/templates/OHMT021-museum",
    siteName: "CURA",
    images: [{ url: "/templates/OHMT021-museum/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CURA - Museum Exhibition Website",
    description: "Experience the epitome of elegance and durability.",
    images: ["/templates/OHMT021-museum/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/OHMT021-museum",
    languages: { "ko": "https://ohmt.site/ko/templates/OHMT021-museum" },
  },
};

export default function ExhibitionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Museum",
    name: "CURA Museum",
    description: "Experience the epitome of elegance and durability.",
    url: "https://ohmt.site/en/templates/OHMT021-museum",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={`${playfair.variable} ${inter.variable} font-sans bg-[var(--color-primary)] text-[var(--color-accent)] selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)]`}>
      {children}
    </div>
    </>
  );
}
