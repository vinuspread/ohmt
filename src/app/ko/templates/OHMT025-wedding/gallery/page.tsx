import type { Metadata } from "next";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import themeData from "../theme.json";
import GalleryFull from "./GalleryFull";

export const metadata: Metadata = {
  title: "포트폴리오 | OHMT 웨딩 포토그래피",
  description: "다양한 장소와 분위기에서 촬영한 OHMT의 웨딩 포트폴리오를 살펴보세요.",
  keywords: ["웨딩 포트폴리오", "웨딩 사진 갤러리", "자연스러운 웨딩 사진"],
  authors: [{ name: "OHMT", url: "https://ohmt.site" }],
  openGraph: {
    title: "포트폴리오 | OHMT 웨딩 포토그래피",
    description: "자연스러운 순간과 섬세한 구도로 완성한 웨딩 포트폴리오.",
    url: "https://ohmt.site/ko/templates/OHMT025-wedding/gallery",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT025-wedding/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "포트폴리오 | OHMT 웨딩 포토그래피",
    description: "OHMT의 웨딩 사진 포트폴리오.",
    images: ["/templates/OHMT025-wedding/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://ohmt.site/ko/templates/OHMT025-wedding/gallery",
    languages: {
      "en": "https://ohmt.site/en/templates/OHMT025-wedding/gallery",
      "ko": "https://ohmt.site/ko/templates/OHMT025-wedding/gallery",
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
