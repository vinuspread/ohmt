import { TemplateWrapper } from "./_components/TemplateWrapper";
import Navbar from "./_components/layout/Navbar";
import Footer from "./_components/layout/Footer";
import Hero from "./_components/sections/Hero";
import WhatWeSolve from "./_components/sections/WhatWeSolve";
import OurDifference from "./_components/sections/OurDifference";
import WhoWeAre from "./_components/sections/WhoWeAre";
import PopularServices from "./_components/sections/PopularServices";
import CareAdvantages from "./_components/sections/CareAdvantages";
import MeetOurTeam from "./_components/sections/MeetOurTeam";
import BookAppointmentCta from "./_components/sections/BookAppointmentCta";
import Faq from "./_components/sections/Faq";
import theme from "./theme.json";

export default function SpaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthClub",
    "name": "Serenity Wellness Spa",
    "description": "Premium spa and wellness shop offering personalized skin and body treatments by certified therapists.",
    "url": "https://ohmytemplate.com/ko/templates/OHMT026-spa",
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
          <h1 className="sr-only">스파 웰니스 - 프리미엄 스파 웰니스 샵</h1>
          <Hero />
          <WhatWeSolve />
          <OurDifference />
          <WhoWeAre />
          <PopularServices />
          <CareAdvantages />
          <MeetOurTeam />
          <BookAppointmentCta />
          <Faq />
        </main>
        <Footer />
      </TemplateWrapper>
    </>
  );
}
