import type { Metadata } from "next";
import './theme.css';
export const metadata: Metadata = {
  title: "OHMT - 브루탈리스트 스니커 드롭 템플릿",
  description: "Urban streetwear and sneaker releases",
  openGraph: {
    title: "OHMT - 브루탈리스트 스니커 드롭 템플릿",
    description: "Urban streetwear and sneaker releases",
    url: "https://ohmytemplate.com/ko/templates/OHMT005-sneaker",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT005-sneaker/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - 브루탈리스트 스니커 드롭 템플릿",
    description: "Urban streetwear and sneaker releases",
    images: ["/templates/OHMT005-sneaker/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT005-sneaker",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT005-sneaker" },
  },
};

export default function SneakerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
      `}</style>
      <div lang="ko" className="ohmt005-sneaker">{children}</div>
    </>
  );
}
