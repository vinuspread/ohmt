import type { Metadata } from "next";
import "./theme.css";

export const metadata: Metadata = {
  title: "OHMT - ?? ?? ?????? ???",
  description: "팀을 위한 깔끔한 노션 스타일 문서 워크스페이스입니다.",
  openGraph: {
    title: "OHMT - ?? ?? ?????? ???",
    description: "팀을 위한 깔끔한 노션 스타일 문서 워크스페이스입니다.",
    url: "https://ohmt.site/ko/templates/OHMT014-docs",
    siteName: "OHMT",
    images: [{ url: "/templates/OHMT014-docs/og-image.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    alternateLocale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OHMT - ?? ?? ?????? ???",
    description: "팀을 위한 깔끔한 노션 스타일 문서 워크스페이스입니다.",
    images: ["/templates/OHMT014-docs/og-image.jpg"],
  },
};

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="-ko">
      <style>{`@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css');`}</style>
      {children}
    </div>
  );
}
