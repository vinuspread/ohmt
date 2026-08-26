import { Navbar } from "./_components/Navbar";
import { Hero } from "./_components/sections/Hero";
import { Concept } from "./_components/sections/Concept";
import { Experience } from "./_components/sections/Experience";
import { Villas } from "./_components/sections/Villas";
import { Booking } from "./_components/sections/Booking";
import { Testimonials } from "./_components/sections/Testimonials";
import { Dining } from "./_components/sections/Dining";
import { Footer } from "./_components/Footer";

export default function ResortPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <Experience />
        <Villas />
        <Booking />
        <Testimonials />
        <Dining />
      </main>
      <p className="text-center text-[11px] leading-relaxed text-neutral-400 px-6 py-6">This page is a website design template demo by OHMT, not an actual client or operating business. The brand names, people, testimonials, contact details, and performance figures shown are example content.</p>
      <Footer />
    </>
  );
}
