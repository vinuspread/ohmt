import { TemplateWrapper } from "../_components/TemplateWrapper";
import { Navbar } from "../_components/Navbar";
import { ProgramList } from "../_components/programs/ProgramList";
import { Footer } from "../_components/sections/Footer";

export default function ProgramsPage() {
  return (
    <TemplateWrapper>
      <Navbar />
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/templates/OHMT029-fitness/program-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-['Montserrat'] font-bold text-[clamp(36px,5vw,64px)] text-white leading-[1.1] tracking-tight">
            모든 목표를 위한 프로그램.
          </h1>
          <p className="text-[15px] text-white/70 max-w-[480px] mx-auto mt-4 leading-relaxed">
            모든 피트니스 레벨과 라이프스타일에 맞춘 맞춤형 세션.
          </p>
        </div>
      </section>
      <ProgramList />
      <Footer />
    </TemplateWrapper>
  );
}
