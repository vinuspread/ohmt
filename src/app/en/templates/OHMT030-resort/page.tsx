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
      <Footer />
    </>
  );
}
