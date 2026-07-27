import type { Metadata } from "next";
import AboutFull from "./AboutFull";

export const metadata: Metadata = { title: "About - OHMT Spa" };

export default function AboutPage() {
  return <AboutFull />;
}
