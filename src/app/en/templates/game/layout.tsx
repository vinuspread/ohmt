import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Studio Website Template | OHMT",
  description: "A dynamic game studio website template for indie studios, game developers, and esports brands. Includes game showcase and careers sections.",
  openGraph: {
    title: "Game Studio Website Template | OHMT",
    description: "A dynamic game studio website template for indie studios, game developers, and esports brands. Includes game showcase and careers sections.",
    url: "https://ohmt.site/en/templates/game",
    siteName: "OHMT",
    images: [{ url: "/templates/game/og-image.jpg", width: 1200, height: 630, alt: "Game Studio Website Template" }],
    locale: "en_US",
    type: "website",
    alternateLocale: ["ko_KR"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Game Studio Website Template | OHMT",
    description: "A dynamic game studio website template for indie studios, game developers, and esports brands. Includes game showcase and careers sections.",
    images: ["/templates/game/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/game",
    languages: { "ko": "https://ohmt.site/ko/templates/game" },
  },
};

import './theme.css';



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
