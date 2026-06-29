import { Michroma, Inter } from "next/font/google";
import "./theme.css";

const michroma = Michroma({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-michroma",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${michroma.variable} ${inter.variable}`}>
      {children}
    </div>
  );
}
