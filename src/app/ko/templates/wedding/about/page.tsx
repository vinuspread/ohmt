import type { Metadata } from "next";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import themeData from "../theme.json";
import AboutFull from "./AboutFull";

export const metadata: Metadata = {
  title: "소개 - Lumen 웨딩 사진",
  description: "클라라, Oh My Template 대표 포토그래퍼를 소개합니다. 파인아트 다큐멘터리 스타일로 전 세계의 웨딩 스토리를 기록합니다.",
  keywords: ["웨딩 포토그래퍼", "파인아트 웨딩 사진", "다큐멘터리 웨딩"],
  authors: [{ name: "Oh My Template", url: "https://ohmytemplate.com" }],
  openGraph: {
    title: "소개 - Lumen 웨딩 사진",
    description: "클라라, 대표 포토그래퍼를 소개합니다. 파인아트 다큐멘터리 스타일로 기록하는 웨딩 스토리.",
    url: "https://ohmytemplate.com/ko/templates/OHMT025-wedding-KO/about",
    siteName: "Oh My Template",
    images: [{ url: "/templates/OHMT025-wedding/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "소개 - Lumen 웨딩 사진",
    description: "클라라, 대표 포토그래퍼를 소개합니다.",
    images: ["/templates/OHMT025-wedding/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT025-wedding-KO/about",
    languages: {
      "en": "https://ohmytemplate.com/en/templates/OHMT025-wedding-EN/about",
      "ko": "https://ohmytemplate.com/ko/templates/OHMT025-wedding-KO/about",
    },
  },
};

export default function AboutPage() {
  return (
    <TemplateWrapper theme={themeData}>
      <AboutFull />
    </TemplateWrapper>
  );
}
