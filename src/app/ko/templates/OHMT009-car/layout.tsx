import type { Metadata } from "next";
import './theme.css';
export const metadata: Metadata = {
  title: "OHMT - 프리미엄 자동차 컨셉 쇼케이스",
  description: "프리미엄 자동차 컨셉 쇼케이스",
  openGraph: {
    title: "OHMT - 프리미엄 자동차 컨셉 쇼케이스",
    description: "프리미엄 자동차 컨셉 쇼케이스",
    url: "https://ohmytemplate.com/ko/templates/OHMT009-car",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT009-car/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - 프리미엄 자동차 컨셉 쇼케이스",
    description: "프리미엄 자동차 컨셉 쇼케이스",
    images: ["/templates/OHMT009-car/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT009-car",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT009-car" },
  },
};

export default function CarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
      `}</style>
      <div lang="ko" className="ohmt009-car">{children}</div>
    </>
  );
}
