import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "OHMT - ????? ???? ????? ???",
  description: "Architecture and spatial design studio",
  openGraph: {
    title: "OHMT - ????? ???? ????? ???",
    description: "Architecture and spatial design studio",
    url: "https://ohmt.site/ko/templates/OHMT006-studio",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT006-studio/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - ????? ???? ????? ???",
    description: "Architecture and spatial design studio",
    images: ["/templates/OHMT006-studio/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/OHMT006-studio",
    languages: { "en": "https://ohmt.site/en/templates/OHMT006-studio" },
  },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" crossOrigin="anonymous" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');

        :root {
          --font-outfit: 'Outfit', sans-serif;
          --font-inter: 'Inter', sans-serif;
        }
      `}</style>
      <div lang="ko" className="ohmt006-studio">{children}</div>
    </>
  );
}
