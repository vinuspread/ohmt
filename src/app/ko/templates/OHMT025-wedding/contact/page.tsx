import type { Metadata } from "next";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import themeData from "../theme.json";
import ContactFull from "./ContactFull";

export const metadata: Metadata = {
  title: "촬영 문의 | OHMT 웨딩 포토그래피",
  description: "예식 날짜와 장소를 알려주세요. 일정 확인 후 촬영 방식과 패키지를 안내해드립니다.",
  keywords: ["웨딩 촬영 문의", "웨딩 촬영 예약", "웨딩 촬영 상담"],
  authors: [{ name: "OHMT", url: "https://ohmytemplate.com" }],
  openGraph: {
    title: "촬영 문의 | OHMT 웨딩 포토그래피",
    description: "예식 날짜와 장소를 알려주세요. 일정 확인 후 촬영 방식과 패키지를 안내해드립니다.",
    url: "https://ohmytemplate.com/ko/templates/OHMT025-wedding/contact",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT025-wedding/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "촬영 문의 | OHMT 웨딩 포토그래피",
    description: "예식 날짜와 장소를 남겨주시면 일정을 확인해드립니다.",
    images: ["/templates/OHMT025-wedding/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT025-wedding/contact",
    languages: {
      "en": "https://ohmytemplate.com/en/templates/OHMT025-wedding/contact",
      "ko": "https://ohmytemplate.com/ko/templates/OHMT025-wedding/contact",
    },
  },
};

export default function ContactPage() {
  return (
    <TemplateWrapper theme={themeData}>
      <ContactFull />
    </TemplateWrapper>
  );
}
