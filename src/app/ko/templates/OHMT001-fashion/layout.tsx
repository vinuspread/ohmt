import type { Metadata } from "next";
import './theme.css';
export const metadata: Metadata = {
  title: "SILO - 프리미엄 패션 룩북",
  description: "좋은 소재와 편안한 실루엣을 바탕으로 오래 입을 수 있는 옷을 선보이는 패션 브랜드입니다.",
  openGraph: {
    title: "SILO - 프리미엄 패션 룩북",
    description: "좋은 소재와 편안한 실루엣을 바탕으로 오래 입을 수 있는 옷을 선보이는 패션 브랜드입니다.",
    url: "https://ohmytemplate.com/ko/templates/OHMT001-fashion",
    siteName: "SILO",
    images: [{ url: "/templates/OHMT001-fashion/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SILO - 프리미엄 패션 룩북",
    description: "좋은 소재와 편안한 실루엣을 바탕으로 오래 입을 수 있는 옷을 선보이는 패션 브랜드입니다.",
    images: ["/templates/OHMT001-fashion/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT001-fashion",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT001-fashion" },
  },
};

export default function FashionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`

      `}</style>
      <div lang="ko" className="ohmt001-fashion">{children}</div>
    </>
  );
}
