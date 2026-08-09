import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "OHMT | 게임 개발 스튜디오",
  description: "독창적인 세계관과 몰입도 높은 게임을 만드는 개발 스튜디오입니다.",
  openGraph: {
    title: "OHMT | 게임 개발 스튜디오",
    description: "독창적인 세계관과 몰입도 높은 게임을 만드는 개발 스튜디오입니다.",
    url: "https://ohmt.site/ko/templates/OHMT023-game",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT023-game/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT | 게임 개발 스튜디오",
    description: "독창적인 세계관과 몰입도 높은 게임을 만드는 개발 스튜디오입니다.",
    images: ["/templates/OHMT023-game/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/OHMT023-game",
    languages: { "en": "https://ohmt.site/en/templates/OHMT023-game" },
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
      <div lang="ko" className="ohmt023-game">{children}</div>
    </>
  );
}
