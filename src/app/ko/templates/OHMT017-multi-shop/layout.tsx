import type { Metadata } from "next";
import './theme.css';
import { SmoothScroll } from "./_components/SmoothScroll";
export const metadata: Metadata = {
  title: "OHMT - 멀티브랜드 쇼핑 템플릿",
  description: "큐레이션된 컬렉션을 제공하는 멀티브랜드 쇼핑 경험",
  openGraph: {
    title: "OHMT - 멀티브랜드 쇼핑 템플릿",
    description: "큐레이션된 컬렉션을 제공하는 멀티브랜드 쇼핑 경험",
    url: "https://ohmytemplate.com/ko/templates/OHMT017-multi-shop",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT017-multi-shop/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - 멀티브랜드 쇼핑 템플릿",
    description: "큐레이션된 컬렉션을 제공하는 멀티브랜드 쇼핑 경험",
    images: ["/templates/OHMT017-multi-shop/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT017-multi-shop",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT017-multi-shop" },
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
