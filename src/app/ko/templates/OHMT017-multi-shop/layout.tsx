import type { Metadata } from "next";
import './theme.css';
import { SmoothScroll } from "./_components/SmoothScroll";

export const metadata: Metadata = {
  title: "OHMT | 미니멀 패션 스토어",
  description: "의류와 신발, 액세서리를 한곳에서 살펴볼 수 있는 미니멀 패션 스토어입니다.",
  openGraph: {
    title: "OHMT | 미니멀 패션 스토어",
    description: "의류와 신발, 액세서리를 한곳에서 살펴볼 수 있는 미니멀 패션 스토어입니다.",
    url: "https://ohmt.site/ko/templates/OHMT017-multi-shop",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT017-multi-shop/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT | 미니멀 패션 스토어",
    description: "의류와 신발, 액세서리를 한곳에서 살펴볼 수 있는 미니멀 패션 스토어입니다.",
    images: ["/templates/OHMT017-multi-shop/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/OHMT017-multi-shop",
    languages: { "en": "https://ohmt.site/en/templates/OHMT017-multi-shop" },
  },
};

export default function MultiShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" crossOrigin="anonymous" />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
      `}</style>
      <SmoothScroll />
      <div className="min-h-screen relative">
          {/* Fixed Frame Borders to prevent scroll bleed-through */}
          <div className="fixed top-0 left-0 right-0 z-[100] bg-[var(--color-frame)] h-[20px] md:h-[48px]" />
          <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[var(--color-frame)] h-[20px] md:h-[48px]" />
          <div className="fixed top-0 bottom-0 left-0 z-[100] bg-[var(--color-frame)] w-[20px] md:w-[48px]" />
          <div className="fixed top-0 bottom-0 right-0 z-[100] bg-[var(--color-frame)] w-[20px] md:w-[48px]" />
          <div className="ko-multi-shop p-5 md:p-12" style={{ backgroundColor: "var(--color-frame)" }}>
            <div lang="ko" className="ohmt017-multi-shop">{children}</div>
          </div>
        </div>
    </>
  );
}
