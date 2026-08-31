import type { Metadata } from "next";
import './theme.css';
export const metadata: Metadata = {
  title: "CASSIA | 코사무이 럭셔리 리조트",
  description: "코사무이의 객실과 풀 빌라, 스파와 다이닝, 예약 정보를 소개하는 럭셔리 리조트 웹사이트입니다.",
  openGraph: {
    title: "CASSIA | 코사무이 럭셔리 리조트",
    description: "코사무이의 객실과 풀 빌라, 스파와 다이닝, 예약 정보를 소개하는 럭셔리 리조트 웹사이트입니다.",
    url: "https://ohmytemplate.com/ko/templates/OHMT020-hotel",
    siteName: "CASSIA",
    images: [{ url: "/templates/OHMT020-hotel/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CASSIA | 코사무이 럭셔리 리조트",
    description: "코사무이의 객실과 풀 빌라, 스파와 다이닝, 예약 정보를 소개하는 럭셔리 리조트 웹사이트입니다.",
    images: ["/templates/OHMT020-hotel/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT020-hotel",
    languages: { "en": "https://ohmytemplate.com/en/templates/OHMT020-hotel" },
  },
};

export default function HotelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="hotel-ko">
      <style>{`
      `}</style>
      <div lang="ko" className="ohmt020-hotel">{children}</div>
    </div>
  );
}
