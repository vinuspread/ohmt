import type { Metadata } from "next";
import './theme.css';
import { SmoothScroll } from "./_components/SmoothScroll";

export const metadata: Metadata = {
  title: "멀티샵 - Oh My Template",
  description: "큐레이션된 컬렉션을 제공하는 멀티브랜드 쇼핑 경험",
  openGraph: {
    title: "멀티샵 - Oh My Template",
    description: "큐레이션된 컬렉션을 제공하는 멀티브랜드 쇼핑 경험",
    url: "https://ohmt.site/ko/templates/multi-shop",
    siteName: "Oh My Template",
    images: [{ url: "/templates/multi-shop/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "멀티샵 - Oh My Template",
    description: "큐레이션된 컬렉션을 제공하는 멀티브랜드 쇼핑 경험",
    images: ["/templates/multi-shop/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/multi-shop",
    languages: { "en": "https://ohmt.site/en/templates/multi-shop" },
  },
};

export default function MultiShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&family=Inter:wght@400;500;600&family=Noto+Sans+KR:wght@400;500;600;700&display=swap');
      `}</style>
      <SmoothScroll />
      {/* Fixed Frame Borders to prevent scroll bleed-through */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-[var(--color-frame)] h-[20px] md:h-[48px]" />
      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[var(--color-frame)] h-[20px] md:h-[48px]" />
      <div className="fixed top-0 bottom-0 left-0 z-[100] bg-[var(--color-frame)] w-[20px] md:w-[48px]" />
      <div className="fixed top-0 bottom-0 right-0 z-[100] bg-[var(--color-frame)] w-[20px] md:w-[48px]" />
      <div className="ko-multi-shop p-[20px] md:p-[48px]" style={{ backgroundColor: "var(--color-frame)" }}>
        {children}
      </div>
    </>
  );
}

