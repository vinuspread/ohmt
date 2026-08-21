import type { Metadata } from "next";
import { PartnerRecruitment } from "./_components/PartnerRecruitment";

export const metadata: Metadata = {
  title: "비즈니스 파트너 프로그램",
  description:
    "기업의 웹 프로젝트를 함께 발굴하고 수행하는 OHMT 비즈니스 파트너 프로그램을 안내합니다.",
  alternates: {
    canonical: "https://ohmt.site/ko/partners",
  },
  openGraph: {
    title: "OHMT 비즈니스 파트너 프로그램",
    description: "기업 고객의 사업 과제를 OHMT의 기획·디자인·개발 역량과 연결하는 공식 파트너 프로그램입니다.",
    url: "https://ohmt.site/ko/partners",
    siteName: "오마이템플릿",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "https://ohmt.site/business-partner-hero.webp",
        width: 1200,
        height: 1500,
        alt: "OHMT 비즈니스 파트너 프로그램",
      },
    ],
  },
};

export default function PartnersPage() {
  return <PartnerRecruitment />;
}
