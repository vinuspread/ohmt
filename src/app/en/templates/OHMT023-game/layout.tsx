import type { Metadata } from "next";
import './theme.css';
export const metadata: Metadata = {
  title: "OHMT - Interactive Game Launch Website Template",
  description: "Premium game studio & development showcase",
  openGraph: {
    title: "OHMT - Interactive Game Launch Website Template",
    description: "Premium game studio & development showcase",
    url: "https://ohmytemplate.com/en/templates/OHMT023-game",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT023-game/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Interactive Game Launch Website Template",
    description: "Premium game studio & development showcase",
    images: ["/templates/OHMT023-game/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/OHMT023-game",
    languages: { "ko": "https://ohmytemplate.com/ko/templates/OHMT023-game" },
  },
};

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGameSeries",
    name: "OHMT Game Studio",
    description: "Premium game studio & development showcase",
    url: "https://ohmytemplate.com/en/templates/OHMT023-game",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <style>{`
      `}</style>
      {children}
    </>
  );
}
