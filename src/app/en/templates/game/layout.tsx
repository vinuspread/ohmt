import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "Game Studio - Oh My Template",
  description: "Premium game studio & development showcase",
  openGraph: {
    title: "Game Studio - Oh My Template",
    description: "Premium game studio & development showcase",
    url: "https://ohmytemplate.com/en/templates/OHMT023-game-EN",
    siteName: "Oh My Template",
    images: [{ url: "/templates/game/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Game Studio - Oh My Template",
    description: "Premium game studio & development showcase",
    images: ["/templates/game/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/OHMT023-game-EN",
    languages: { "ko": "https://ohmytemplate.com/ko/templates/OHMT023-game-KO" },
  },
};

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
      `}</style>
      {children}
    </>
  );
}
