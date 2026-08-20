import type { Metadata } from "next";
import './theme.css';

export const metadata: Metadata = {
  title: "STRATUS - 항공 예약 경험",
  description: "항공권 예약과 취항지, 객실 서비스와 멤버십 혜택을 소개하는 프리미엄 항공사 웹사이트 템플릿입니다.",
  openGraph: {
    title: "STRATUS - 항공 예약 경험",
    description: "항공권 예약과 취항지, 객실 서비스와 멤버십 혜택을 소개하는 프리미엄 항공사 웹사이트 템플릿입니다.",
    url: "https://ohmt.site/ko/templates/OHMT008-airline",
    siteName: "STRATUS",
    images: [{ url: "/templates/OHMT008-airline/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "STRATUS - 항공 예약 경험",
    description: "항공권 예약과 취항지, 객실 서비스와 멤버십 혜택을 소개하는 프리미엄 항공사 웹사이트 템플릿입니다.",
    images: ["/templates/OHMT008-airline/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/OHMT008-airline",
    languages: { "en": "https://ohmt.site/en/templates/OHMT008-airline" },
  },
};

export default function AirlineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;500;700;900&display=swap');
      `}</style>
      <div lang="ko" className="ohmt008-airline">{children}</div>
    </>
  );
}
