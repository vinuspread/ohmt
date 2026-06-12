import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import './theme.css';

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Exhibition Website | Oh My Template",
  description: "Experience the epitome of elegance and durability.",
};

export default function ExhibitionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${playfair.variable} ${inter.variable} font-sans bg-[var(--color-primary)] text-[var(--color-accent)] selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)]`}>
      {children}
    </div>
  );
}
