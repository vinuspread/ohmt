import { TemplateWrapper } from "./_components/TemplateWrapper";
import theme from "./theme.json";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import FeaturedGames from "./_components/FeaturedGames";
import AboutStudio from "./_components/AboutStudio";
import GenreGrid from "./_components/GenreGrid";
import PressAwards from "./_components/PressAwards";
import LatestNews from "./_components/LatestNews";
import CareersBanner from "./_components/CareersBanner";
import Footer from "./_components/Footer";

export default function GamePage() {
  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <Hero />
      <FeaturedGames />
      <AboutStudio />
      <GenreGrid />
      <PressAwards />
      <LatestNews />
      <CareersBanner />
      <p className="text-center text-[11px] leading-relaxed text-neutral-400 px-6 py-6">This page is a website design template demo by OHMT, not an actual client or operating business. The brand names, people, testimonials, contact details, and performance figures shown are example content.</p>
      <Footer />
    </TemplateWrapper>
  );
}
