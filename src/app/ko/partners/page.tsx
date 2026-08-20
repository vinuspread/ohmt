import type { Metadata } from "next";
import { PartnerRecruitment } from "./_components/PartnerRecruitment";

export const metadata: Metadata = {
  title: "영업 파트너 모집",
  description:
    "OHMT와 함께 웹사이트가 필요한 고객을 연결하고 결제 금액의 10%를 받는 세일즈 파트너에 지원하세요.",
  alternates: {
    canonical: "https://ohmt.site/ko/partners",
  },
  openGraph: {
    title: "OHMT 영업 파트너 모집",
    description: "출퇴근 없이 자유롭게 활동하는 성과형 세일즈 파트너를 모집합니다.",
    url: "https://ohmt.site/ko/partners",
    siteName: "오마이템플릿",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "https://ohmt.site/sales-partner-hero.webp",
        width: 1130,
        height: 1434,
        alt: "OHMT 영업 파트너 모집",
      },
    ],
  },
};

export default function PartnersPage() {
  return <PartnerRecruitment />;
}
