import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./theme.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument-sans",
});

export const metadata: Metadata = {
  title: "OHMT - Coastal Luxury Resort",
  description: "A seaside sanctuary of minimalist luxury.",
  openGraph: {
    title: "OHMT - Coastal Luxury Resort",
    siteName: "OHMT",
    images: ["/templates/resort/og-image.jpg"],
  },
};

export default function ResortLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`resort-template ${instrumentSans.variable}`}
      style={{ fontFamily: "var(--font-instrument-sans), sans-serif", backgroundColor: "var(--bg)" }}
    >
      {children}
    </div>
  );
}
