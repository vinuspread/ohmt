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
  title: "SANCTUM - 해안 럭셔리 리조트",
  description: "미니멀리즘 럭셔리가 깃든 해변의 은신처.",
  twitter: {
    card: "summary_large_image",
    title: "SANCTUM - 해안 럭셔리 리조트",
    description: "미니멀리즘 럭셔리가 깃든 해변의 은신처.",
    images: ["/templates/OHMT030-resort/og-image.jpg"],
  },
  openGraph: {
    title: "SANCTUM - 해안 럭셔리 리조트",
    siteName: "SANCTUM",
    images: ["/templates/OHMT030-resort/og-image.jpg"],
  },
};

export default function ResortLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
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
