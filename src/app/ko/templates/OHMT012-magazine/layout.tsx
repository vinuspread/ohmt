import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "OHMT 매거진 | 디자인과 라이프스타일",
  description: "디자인과 문화, 지속가능성을 다루는 라이프스타일 매거진입니다.",
  openGraph: {
    title: "OHMT 매거진 | 디자인과 라이프스타일",
    description: "디자인과 문화, 지속가능성을 다루는 라이프스타일 매거진입니다.",
    url: "https://ohmt.site/ko/templates/OHMT012-magazine",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT012-magazine/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT 매거진 | 디자인과 라이프스타일",
    description: "디자인과 문화, 지속가능성을 다루는 라이프스타일 매거진입니다.",
    images: ["/templates/OHMT012-magazine/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/OHMT012-magazine",
    languages: { "en": "https://ohmt.site/en/templates/OHMT012-magazine" },
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
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400&family=Inter:wght@300;400;500;600&family=Noto+Serif+KR:wght@400;700&family=Noto+Sans+KR:wght@400;500&display=swap');
      `}</style>
      <div lang="ko" className="ohmt012-magazine">{children}</div>
    </>
  );
}
