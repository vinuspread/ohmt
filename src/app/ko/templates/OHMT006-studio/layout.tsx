import type { Metadata } from "next";
import './theme.css';
export const metadata: Metadata = {
  title: "OHMT - 건축 스튜디오 포트폴리오 템플릿",
  description: "Architecture and spatial design studio",
  openGraph: {
    title: "OHMT - 건축 스튜디오 포트폴리오 템플릿",
    description: "Architecture and spatial design studio",
    url: "https://ohmytemplate.com/ko/templates/OHMT006-studio",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT006-studio/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - 건축 스튜디오 포트폴리오 템플릿",
    description: "Architecture and spatial design studio",
    images: ["/templates/OHMT006-studio/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT006-studio",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT006-studio" },
  },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`

        :root {
          --font-outfit: 'Outfit', sans-serif;
          --font-inter: 'Inter', sans-serif;
        }
      `}</style>
      <div lang="ko" className="ohmt006-studio">{children}</div>
    </>
  );
}
