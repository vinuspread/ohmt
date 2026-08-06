import "./theme.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OHMT | 웨딩 포토그래피",
  description: "자연스러운 순간과 섬세한 구도로 결혼식의 하루를 오래 남을 사진으로 기록합니다.",
  openGraph: {
    title: "OHMT | 웨딩 포토그래피",
    description: "자연스러운 순간과 섬세한 구도로 결혼식의 하루를 오래 남을 사진으로 기록합니다.",
    url: "https://ohmt.site/ko/templates/OHMT025-wedding",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT025-wedding/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT | 웨딩 포토그래피",
    description: "자연스러운 순간과 섬세한 구도로 결혼식의 하루를 오래 남을 사진으로 기록합니다.",
    images: ["/templates/OHMT025-wedding/og-image.jpg"],
  },
};

export default function TemplateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css');`}</style>
      <div lang="ko" className="ohmt025-wedding">{children}</div>
    </>
  );
}
