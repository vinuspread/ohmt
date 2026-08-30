import type { Metadata } from "next";
import './theme.css';
export const metadata: Metadata = {
  title: "OHMT - 프리미엄 가구 스토어 템플릿",
  description: "프리미엄 가구 & 인테리어 디자인 쇼케이스",
  openGraph: {
    title: "OHMT - 프리미엄 가구 스토어 템플릿",
    description: "프리미엄 가구 & 인테리어 디자인 쇼케이스",
    url: "https://ohmytemplate.com/ko/templates/OHMT004-furniture",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT004-furniture/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - 프리미엄 가구 스토어 템플릿",
    description: "프리미엄 가구 & 인테리어 디자인 쇼케이스",
    images: ["/templates/OHMT004-furniture/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT004-furniture",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT004-furniture" },
  },
};

export default function FurnitureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
      `}</style>
      <div lang="ko" className="ohmt004-furniture">{children}</div>
    </>
  );
}
