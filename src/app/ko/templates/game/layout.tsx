import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "게임 스튜디오 - Oh My Template",
  description: "프리미엄 게임 스튜디오 & 개발 쇼케이스",
  openGraph: {
    title: "게임 스튜디오 - Oh My Template",
    description: "프리미엄 게임 스튜디오 & 개발 쇼케이스",
    url: "https://ohmytemplate.com/ko/templates/OHMT023-game",
    siteName: "Oh My Template",
    images: [{ url: "/templates/OHMT023-game/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "게임 스튜디오 - Oh My Template",
    description: "프리미엄 게임 스튜디오 & 개발 쇼케이스",
    images: ["/templates/OHMT023-game/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT023-game",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT023-game" },
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
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.min.css');
      `}</style>
      {children}
    </>
  );
}
