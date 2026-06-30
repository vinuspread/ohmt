import "./theme.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OHMT - 프리미엄 피트니스 스튜디오",
  description: "프리미엄 웰니스 스튜디오 템플릿 — B2B 위탁 운영 및 B2C 부티크 피트니스.",
  openGraph: {
    title: "OHMT - 프리미엄 피트니스 스튜디오",
    description: "프리미엄 웰니스 스튜디오 템플릿 — B2B 위탁 운영 및 B2C 부티크 피트니스.",
    url: "https://ohmytemplate.com/ko/templates/OHMT029-fitness",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT029-fitness/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT029-fitness",
    languages: {
      "en": "https://ohmytemplate.com/en/templates/OHMT029-fitness",
      "ko": "https://ohmytemplate.com/ko/templates/OHMT029-fitness",
    },
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
      `}</style>
      {children}
    </>
  );
}
