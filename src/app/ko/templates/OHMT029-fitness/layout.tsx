import "./theme.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OHMT - ???? ?? ??? ???",
  description: "프리미엄 웰니스 스튜디오 템플릿 — B2B 위탁 운영 및 B2C 부티크 피트니스.",
  twitter: {
    card: "summary_large_image",
    title: "OHMT - ???? ?? ??? ???",
    description: "프리미엄 웰니스 스튜디오 템플릿 — B2B 위탁 운영 및 B2C 부티크 피트니스.",
    images: ["/templates/OHMT029-fitness/og-image.jpg"],
  },
  openGraph: {
    title: "OHMT - ???? ?? ??? ???",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "OHMT - 프리미엄 피트니스 스튜디오",
  description: "프리미엄 웰니스 스튜디오 템플릿 — B2B 위탁 운영 및 B2C 부티크 피트니스.",
  url: "https://ohmytemplate.com/ko/templates/OHMT029-fitness",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" crossOrigin="anonymous" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');
      `}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div lang="ko" className="ohmt029-fitness">{children}</div>
    </>
  );
}
