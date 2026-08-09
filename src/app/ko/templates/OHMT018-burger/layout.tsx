import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "OHMT - 패스트 캐주얼 레스토랑 주문 템플릿",
  description: "프리미엄 버거 레스토랑 경험",
  openGraph: {
    title: "OHMT - 패스트 캐주얼 레스토랑 주문 템플릿",
    description: "프리미엄 버거 레스토랑 경험",
    url: "https://ohmt.site/ko/templates/OHMT018-burger",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT018-burger/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - 패스트 캐주얼 레스토랑 주문 템플릿",
    description: "프리미엄 버거 레스토랑 경험",
    images: ["/templates/OHMT018-burger/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/OHMT018-burger",
    languages: { "en": "https://ohmt.site/en/templates/OHMT018-burger" },
  },
};

export default function BurgerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" crossOrigin="anonymous" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
      `}</style>
      <div className="ko-burger">
        <div lang="ko" className="ohmt018-burger">{children}</div>
      </div>
    </>
  );
}
