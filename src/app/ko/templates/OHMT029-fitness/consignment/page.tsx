import { TemplateWrapper } from "../_components/TemplateWrapper";
import { Navbar } from "../_components/Navbar";
import { ProcessSteps } from "../_components/consignment/ProcessSteps";
import { PartnerGallery } from "../_components/consignment/PartnerGallery";
import { Consulting } from "../_components/sections/Consulting";
import { Footer } from "../_components/sections/Footer";

export default function ConsignmentPage() {
  return (
    <TemplateWrapper>
      <Navbar />
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/templates/OHMT029-fitness/consignment-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-['Montserrat'] font-bold text-[clamp(36px,5vw,64px)] text-white leading-[1.1] tracking-tight mb-4">
            웰니스 공간을 믿고 맡기세요.
          </h1>
          <p className="text-[15px] text-white/70 max-w-[450px] mx-auto leading-relaxed">
            호텔, 리조트, 프리미엄 시설을 위한 엔드투엔드 위탁 운영.
          </p>
        </div>
      </section>
      <ProcessSteps />
      <PartnerGallery />
      <Consulting />
      <Footer />
    </TemplateWrapper>
  );
}
