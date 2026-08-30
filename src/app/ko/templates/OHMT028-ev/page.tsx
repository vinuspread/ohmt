import { Navbar } from "./_components/Navbar";
import { Hero } from "./_components/sections/Hero";
import { Usp } from "./_components/sections/Usp";
import { Performance } from "./_components/sections/Performance";
import { Story } from "./_components/sections/Story";
import { DesignDetail } from "./_components/sections/DesignDetail";
import { Cta } from "./_components/sections/Cta";
import { Footer } from "./_components/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Usp />
      <Performance />
      <Story />
      <DesignDetail />
      <Cta />
      <Footer />
    </>
  );
}
