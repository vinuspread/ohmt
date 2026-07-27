import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./theme.css";
import { TemplateWrapper } from "./_components/TemplateWrapper";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument-sans",
});

export const metadata: Metadata = {
  title: "OHMT | 산토리니 해안 리조트",
  description: "에게해의 절벽과 바다 사이에 자리한 스위트, 다이닝, 웰니스 중심의 해안 리조트입니다.",
  twitter: {
    card: "summary_large_image",
    title: "OHMT | 산토리니 해안 리조트",
    description: "에게해의 절벽과 바다 사이에 자리한 스위트, 다이닝, 웰니스 중심의 해안 리조트입니다.",
    images: ["/templates/OHMT030-resort/og-image.jpg"],
  },
  openGraph: {
    title: "OHMT | 산토리니 해안 리조트",
    siteName: "OHMT",
    images: ["/templates/OHMT030-resort/og-image.jpg"],
  },
};

export default function ResortLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" crossOrigin="anonymous" />
      <div
      className={`resort-template ${instrumentSans.variable}`}
      style={{ fontFamily: "var(--font-body)", backgroundColor: "var(--bg)" }}
    >
      <TemplateWrapper>
          <div lang="ko" className="ohmt030-resort">{children}</div>
        </TemplateWrapper>
    </div>
    </>
  );
}
