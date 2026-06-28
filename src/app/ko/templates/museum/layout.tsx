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

// Noto Serif KR is loaded via @import for Korean character fallback

export const metadata: Metadata = {
  title: "Exhibition Website | Oh My Template",
  description: "Experience the epitome of elegance and durability.",
  openGraph: {
    title: "Exhibition Website | Oh My Template",
    description: "Experience the epitome of elegance and durability.",
    url: "https://ohmt.site/ko/templates/museum",
    siteName: "Oh My Template",
    images: [{ url: "/templates/museum/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exhibition Website | Oh My Template",
    description: "Experience the epitome of elegance and durability.",
    images: ["/templates/museum/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/museum",
    languages: { "en": "https://ohmt.site/en/templates/museum" },
  },
};

export default function ExhibitionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');
      `}</style>
      <div className={`${playfair.variable} ${inter.variable} font-sans bg-[var(--color-primary)] text-[var(--color-accent)] selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)]`}>
        {children}
      </div>
    </>
  );
}
