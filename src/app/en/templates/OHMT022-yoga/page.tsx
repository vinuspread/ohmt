import type { Metadata } from "next";
import { Suspense } from "react";
import { TemplateWrapper } from "./_components/TemplateWrapper";
import theme from "./theme.json";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";

export const metadata: Metadata = {
  title: "OHMT Yoga - Home",
};
import IntroSection from "./_components/IntroSection";
import BenefitsSection from "./_components/BenefitsSection";
import ClassesPreview from "./_components/ClassesPreview";
import InstructorsSection from "./_components/InstructorsSection";
import TestimonialsSection from "./_components/TestimonialsSection";
import CTASection from "./_components/CTASection";
import Footer from "./_components/Footer";

function HomeContent() {
  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <Hero />
      <IntroSection />
      <BenefitsSection />
      <ClassesPreview />
      <InstructorsSection />
      <TestimonialsSection />
      <CTASection />
      <p className="text-center text-[11px] leading-relaxed text-neutral-400 px-6 py-6">This page is a website design template demo by OHMT, not an actual client or operating business. The brand names, people, testimonials, contact details, and performance figures shown are example content.</p>
      <Footer />
    </TemplateWrapper>
  );
}

export default function HomePage() {
  return (
    <Suspense>
      <HomeContent />
    </Suspense>
  );
}
