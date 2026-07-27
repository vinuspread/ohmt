import type { Metadata } from "next";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import themeData from "../theme.json";
import PricingFull from "./PricingFull";

export const metadata: Metadata = {
  title: "촬영 패키지 | OHMT 웨딩 포토그래피",
  description: "촬영 시간과 인원, 제공 항목에 따라 구성한 세 가지 웨딩 촬영 패키지를 확인해보세요.",
  keywords: ["웨딩 촬영 패키지", "웨딩 패키지", "웨딩 사진 컬렉션"],
  authors: [{ name: "OHMT", url: "https://ohmytemplate.com" }],
  openGraph: {
    title: "촬영 패키지 | OHMT 웨딩 포토그래피",
    description: "예식 규모와 촬영 범위에 맞는 세 가지 패키지를 확인해보세요.",
    url: "https://ohmytemplate.com/ko/templates/OHMT025-wedding/pricing",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT025-wedding/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "촬영 패키지 | OHMT 웨딩 포토그래피",
    description: "웨딩 촬영 패키지를 확인해보세요.",
    images: ["/templates/OHMT025-wedding/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT025-wedding/pricing",
    languages: {
      "en": "https://ohmytemplate.com/en/templates/OHMT025-wedding/pricing",
      "ko": "https://ohmytemplate.com/ko/templates/OHMT025-wedding/pricing",
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
