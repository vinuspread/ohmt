import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "OHMT - Game Studio",
  description: "Premium game studio & development showcase",
  openGraph: {
    title: "OHMT - Game Studio",
    description: "Premium game studio & development showcase",
    url: "https://ohmytemplate.com/en/templates/game",
    siteName: "OHMT",
    images: [{ url: "/templates/game/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - Game Studio",
    description: "Premium game studio & development showcase",
    images: ["/templates/game/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/en/templates/game",
    languages: { "ko": "https://ohmytemplate.com/ko/templates/game" },
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
