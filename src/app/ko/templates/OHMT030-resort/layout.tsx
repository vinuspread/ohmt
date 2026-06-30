import type { Metadata } from "next";
import { Noto_Sans_KR, Instrument_Sans } from "next/font/google";
import "./theme.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-noto-sans-kr",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument-sans",
});

export const metadata: Metadata = {
  title: "OHMT - 시그니처 코스탈 리조트",
  description: "미니멀리즘 럭셔리가 깃든 해변의 은신처.",
  openGraph: {
    title: "OHMT - 시그니처 코스탈 리조트",
    siteName: "OHMT",
    images: ["/templates/OHMT030-resort/og-image.jpg"],
  },
};

export default function ResortLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`resort-template ${notoSansKr.variable} ${instrumentSans.variable}`}
      style={{ fontFamily: "var(--font-noto-sans-kr), var(--font-instrument-sans), sans-serif", backgroundColor: "var(--bg)" }}
    >
      {children}
    </div>
  );
}
