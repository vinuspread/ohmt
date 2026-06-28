import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Museum & Cultural Institution Website Template | OHMT",
  description: "A premium museum and cultural institution website template with exhibition highlights, visitor information, and collection showcase sections.",
  openGraph: {
    title: "Museum & Cultural Institution Website Template | OHMT",
    description: "A premium museum and cultural institution website template with exhibition highlights, visitor information, and collection showcase sections.",
    url: "https://ohmt.site/en/templates/museum",
    siteName: "OHMT",
    images: [{ url: "/templates/museum/og-image.jpg", width: 1200, height: 630, alt: "Museum & Cultural Institution Website Template" }],
    locale: "en_US",
    type: "website",
    alternateLocale: ["ko_KR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Museum & Cultural Institution Website Template | OHMT",
    description: "A premium museum and cultural institution website template with exhibition highlights, visitor information, and collection showcase sections.",
    images: ["/templates/museum/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/museum",
    languages: { "ko": "https://ohmt.site/ko/templates/museum" },
  },
};

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
