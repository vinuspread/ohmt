import type { Metadata } from "next";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import themeData from "../theme.json";
import AboutFull from "./AboutFull";

export const metadata: Metadata = {
  title: "소개 | OHMT 웨딩 포토그래피",
  description: "OHMT의 대표 포토그래퍼 클라라를 소개합니다. 자연스러운 순간과 섬세한 구도로 두 사람의 결혼식을 기록합니다.",
  keywords: ["웨딩 포토그래퍼", "감성 웨딩 사진", "자연스러운 웨딩 기록"],
  authors: [{ name: "OHMT", url: "https://ohmt.site" }],
  openGraph: {
    title: "소개 | OHMT 웨딩 포토그래피",
    description: "대표 포토그래퍼 클라라와 OHMT의 촬영 방식을 소개합니다.",
    url: "https://ohmt.site/ko/templates/OHMT025-wedding/about",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT025-wedding/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "소개 | OHMT 웨딩 포토그래피",
    description: "OHMT의 대표 포토그래퍼 클라라를 소개합니다.",
    images: ["/templates/OHMT025-wedding/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/OHMT025-wedding/about",
    languages: {
      "en": "https://ohmt.site/en/templates/OHMT025-wedding/about",
      "ko": "https://ohmt.site/ko/templates/OHMT025-wedding/about",
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
