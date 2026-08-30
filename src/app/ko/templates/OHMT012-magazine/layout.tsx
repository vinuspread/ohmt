import type { Metadata } from "next";
import './theme.css';
export const metadata: Metadata = {
  title: "OHMT - 문화와 라이프스타일 매거진",
  description: "Editorial culture and lifestyle",
  openGraph: {
    title: "OHMT - 문화와 라이프스타일 매거진",
    description: "Editorial culture and lifestyle",
    url: "https://ohmytemplate.com/ko/templates/OHMT012-magazine",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT012-magazine/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - 문화와 라이프스타일 매거진",
    description: "Editorial culture and lifestyle",
    images: ["/templates/OHMT012-magazine/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT012-magazine",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT012-magazine" },
  },
};

export default function MagazineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
      `}</style>
      <div lang="ko" className="ohmt012-magazine">{children}</div>
    </>
  );
}
