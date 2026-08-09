import { TemplateWrapper } from "./_components/TemplateWrapper";
import Navbar from "./_components/layout/Navbar";
import Footer from "./_components/layout/Footer";
import Hero from "./_components/sections/Hero";
import WhatWeSolve from "./_components/sections/WhatWeSolve";
import BookConsultation from "./_components/sections/BookConsultation";
import OurDifference from "./_components/sections/OurDifference";
import WhoWeAre from "./_components/sections/WhoWeAre";
import OurMission from "./_components/sections/OurMission";
import PopularServices from "./_components/sections/PopularServices";
import WhyChooseUs from "./_components/sections/WhyChooseUs";
import CareAdvantages from "./_components/sections/CareAdvantages";
import MeetOurTeam from "./_components/sections/MeetOurTeam";
import Testimonials from "./_components/sections/Testimonials";
import CaseStudy from "./_components/sections/CaseStudy";
import PricingPlan from "./_components/sections/PricingPlan";
import BookAppointmentCta from "./_components/sections/BookAppointmentCta";
import Faq from "./_components/sections/Faq";
import theme from "./theme.json";

export default function SpaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    "name": "OHMT 스파 & 웰니스",
    "description": "피부 상태와 컨디션에 맞춘 페이셜·바디 케어를 제공하는 스파 & 웰니스 공간입니다.",
    "url": "https://ohmt.site/ko/templates/OHMT026-spa",
    "logo": "/templates/OHMT026-spa/logo.png",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TemplateWrapper theme={theme}>
        <Navbar />
        <main>
          <h1 className="sr-only">OHMT 스파 & 웰니스</h1>
          <Hero />
          <WhatWeSolve />
          <BookConsultation />
          <OurDifference />
          <WhoWeAre />
          <OurMission />
          <PopularServices />
          <WhyChooseUs />
          <CareAdvantages />
          <MeetOurTeam />
          <Testimonials />
          <CaseStudy />
          <PricingPlan />
          <BookAppointmentCta />
          <Faq />
        </main>
        <Footer />
      </TemplateWrapper>
    </>
  );
}
