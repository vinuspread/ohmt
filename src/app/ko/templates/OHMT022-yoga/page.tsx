import { Suspense } from "react";
import { TemplateWrapper } from "./_components/TemplateWrapper";
import theme from "./theme.json";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
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
