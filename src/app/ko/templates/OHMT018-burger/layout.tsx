import type { Metadata } from "next";
import './theme.css';
export const metadata: Metadata = {
  title: "OHMT - 프리미엄 버거 레스토랑 템플릿",
  description: "프리미엄 버거 레스토랑 경험",
  openGraph: {
    title: "OHMT - 프리미엄 버거 레스토랑 템플릿",
    description: "프리미엄 버거 레스토랑 경험",
    url: "https://ohmytemplate.com/ko/templates/OHMT018-burger",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT018-burger/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - 프리미엄 버거 레스토랑 템플릿",
    description: "프리미엄 버거 레스토랑 경험",
    images: ["/templates/OHMT018-burger/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT018-burger",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT018-burger" },
  },
};

export default function BurgerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
      `}</style>
      <div className="ko-burger">
        <div lang="ko" className="ohmt018-burger">{children}</div>
      </div>
    </>
  );
}
