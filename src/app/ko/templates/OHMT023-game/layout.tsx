import type { Metadata } from "next";
import './theme.css';
export const metadata: Metadata = {
  title: "OHMT - 프리미엄 게임 스튜디오 & 개발 쇼케이스",
  description: "프리미엄 게임 스튜디오 & 개발 쇼케이스",
  openGraph: {
    title: "OHMT - 프리미엄 게임 스튜디오 & 개발 쇼케이스",
    description: "프리미엄 게임 스튜디오 & 개발 쇼케이스",
    url: "https://ohmytemplate.com/ko/templates/OHMT023-game",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT023-game/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - 프리미엄 게임 스튜디오 & 개발 쇼케이스",
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
      `}</style>
      <div lang="ko" className="ohmt023-game">{children}</div>
    </>
  );
}
