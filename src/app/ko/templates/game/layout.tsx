import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "게임 스튜디오 웹사이트 템플릿 | OHMT",
  description: "인디 게임 스튜디오, 게임 개발사, e스포츠 브랜드를 위한 웹사이트 템플릿입니다. 게임 쇼케이스, 팀, 채용 섹션을 포함합니다.",
  openGraph: {
    title: "게임 스튜디오 웹사이트 템플릿 | OHMT",
    description: "인디 게임 스튜디오, 게임 개발사, e스포츠 브랜드를 위한 웹사이트 템플릿입니다. 게임 쇼케이스, 팀, 채용 섹션을 포함합니다.",
    url: "https://ohmt.site/ko/templates/game",
    siteName: "OHMT",
    images: [{ url: "/templates/game/og-image.jpg", width: 1200, height: 630, alt: "게임 스튜디오 웹사이트 템플릿" }],
    locale: "ko_KR",
    type: "website",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "게임 스튜디오 웹사이트 템플릿 | OHMT",
    description: "인디 게임 스튜디오, 게임 개발사, e스포츠 브랜드를 위한 웹사이트 템플릿입니다. 게임 쇼케이스, 팀, 채용 섹션을 포함합니다.",
    images: ["/templates/game/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/game",
    languages: { "en": "https://ohmt.site/en/templates/game" },
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
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.min.css');
      `}</style>
      {children}
    </>
  );
}
