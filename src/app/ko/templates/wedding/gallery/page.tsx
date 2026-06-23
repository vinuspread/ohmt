import type { Metadata } from "next";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import themeData from "../theme.json";
import GalleryFull from "./GalleryFull";

export const metadata: Metadata = {
  title: "포트폴리오 - Lumen 웨딩 사진",
  description: "파인아트 웨딩 사진 포트폴리오를 둘러보세요. 전 세계에서 기록한 진정한 사랑의 이야기들을 만나보세요.",
  keywords: ["웨딩 포트폴리오", "파인아트 웨딩 갤러리", "다큐멘터리 웨딩 사진"],
  authors: [{ name: "Oh My Template", url: "https://ohmytemplate.com" }],
  openGraph: {
    title: "포트폴리오 - Lumen 웨딩 사진",
    description: "파인아트 웨딩 사진 포트폴리오. 전 세계에서 기록한 사랑의 이야기들.",
    url: "https://ohmytemplate.com/ko/templates/OHMT050-wedding-kr/gallery",
    siteName: "Oh My Template",
    images: [{ url: "/templates/OHMT025-wedding/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "포트폴리오 - Lumen 웨딩 사진",
    description: "파인아트 웨딩 사진 포트폴리오.",
    images: ["/templates/OHMT025-wedding/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmytemplate.com/ko/templates/OHMT050-wedding-kr/gallery",
    languages: {
      "en": "https://ohmytemplate.com/en/templates/OHMT049-wedding-en/gallery",
      "ko": "https://ohmytemplate.com/ko/templates/OHMT050-wedding-kr/gallery",
    },
  },
};

export default function GalleryPage() {
  return (
    <TemplateWrapper theme={themeData}>
      <GalleryFull />
    </TemplateWrapper>
  );
}
