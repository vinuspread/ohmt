import type { Metadata } from "next";
import { TemplateWrapper } from "./_components/TemplateWrapper";
import { Navbar } from "./_components/Navbar";
import { Hero } from "./_components/sections/Hero";
import { Solutions } from "./_components/sections/Solutions";
import { Expertise } from "./_components/sections/Expertise";
import { Consulting } from "./_components/sections/Consulting";
import { Cta } from "./_components/sections/Cta";
import { Footer } from "./_components/sections/Footer";

export const metadata: Metadata = {
  title: "Home - OHMT Premium Fitness Studio",
};

export default function HomePage() {
  return (
    <TemplateWrapper>
      <Navbar />
      <Hero />
      <Solutions />
      <Expertise />
      <Consulting />
      <Cta />
      <p className="text-center text-[11px] leading-relaxed text-neutral-400 px-6 py-6">This page is a website design template demo by OHMT, not an actual client or operating business. The brand names, people, testimonials, contact details, and performance figures shown are example content.</p>
      <Footer />
    </TemplateWrapper>
  );
}
