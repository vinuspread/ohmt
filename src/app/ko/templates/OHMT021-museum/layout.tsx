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
  title: "OHMT - 미술관 전시 템플릿",
  description: "우아함과 내구성의 정수를 경험하세요.",
  openGraph: {
    title: "OHMT - 미술관 전시 템플릿",
    description: "우아함과 내구성의 정수를 경험하세요.",
    url: "https://ohmytemplate.com/ko/templates/OHMT021-museum",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT021-museum/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - 미술관 전시 템플릿",
    description: "우아함과 내구성의 정수를 경험하세요.",
    images: ["/templates/OHMT021-museum/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT021-museum",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT021-museum" },
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
    name: "OHMT Exhibition Website",
    description: "우아함과 내구성의 정수를 경험하세요.",
    url: "https://ohmytemplate.com/ko/templates/OHMT021-museum",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style>{`
      `}</style>
      <div className={`${playfair.variable} ${inter.variable} font-sans bg-[var(--color-primary)] text-[var(--color-accent)] selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)]`}>
        <div lang="ko" className="ohmt021-museum">{children}</div>
      </div>
    </>
  );
}
