import type { Metadata } from "next";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import themeData from "../theme.json";
import ContactFull from "./ContactFull";

export const metadata: Metadata = {
  title: "문의 - Lumen 웨딩 사진",
  description: "웨딩 촬영 일정을 문의하세요. 여러분의 특별한 날을 아름답게 기록해드립니다.",
  keywords: ["웨딩 촬영 문의", "웨딩 포토그래퍼 예약", "웨딩 사진 문의"],
  authors: [{ name: "Oh My Template", url: "https://ohmytemplate.com" }],
  openGraph: {
    title: "문의 - Lumen 웨딩 사진",
    description: "웨딩 촬영 일정을 문의하세요. 여러분의 특별한 날을 아름답게 기록해드립니다.",
    url: "https://ohmytemplate.com/ko/templates/OHMT050-wedding-kr/contact",
    siteName: "Oh My Template",
    images: [{ url: "/templates/OHMT025-wedding/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "문의 - Lumen 웨딩 사진",
    description: "웨딩 촬영 일정을 문의하세요.",
    images: ["/templates/OHMT025-wedding/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT050-wedding-kr/contact",
    languages: {
      "en": "https://ohmytemplate.com/en/templates/OHMT049-wedding-en/contact",
      "ko": "https://ohmytemplate.com/ko/templates/OHMT050-wedding-kr/contact",
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
