import type { Metadata } from "next";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import themeData from "../theme.json";
import PricingFull from "./PricingFull";

export const metadata: Metadata = {
  title: "가격 - Lumen 웨딩 사진",
  description: "웨딩 촬영 패키지를 확인해보세요. 에센스, 엘레강스, 에버 애프터 컬렉션으로 모든 사랑 이야기에 맞는 구성을 제공합니다.",
  keywords: ["웨딩 촬영 가격", "웨딩 패키지", "파인아트 웨딩 컬렉션"],
  authors: [{ name: "Oh My Template", url: "https://ohmytemplate.com" }],
  openGraph: {
    title: "가격 - Lumen 웨딩 사진",
    description: "웨딩 촬영 패키지를 확인해보세요. 에센스, 엘레강스, 에버 애프터 컬렉션.",
    url: "https://ohmytemplate.com/ko/templates/wedding/pricing",
    siteName: "Oh My Template",
    images: [{ url: "/templates/wedding/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "가격 - Lumen 웨딩 사진",
    description: "웨딩 촬영 패키지를 확인해보세요.",
    images: ["/templates/wedding/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/wedding/pricing",
    languages: {
      "en": "https://ohmytemplate.com/en/templates/wedding/pricing",
      "ko": "https://ohmytemplate.com/ko/templates/wedding/pricing",
    },
  },
};

export default function PricingPage() {
  return (
    <TemplateWrapper theme={themeData}>
      <PricingFull />
    </TemplateWrapper>
  );
}
