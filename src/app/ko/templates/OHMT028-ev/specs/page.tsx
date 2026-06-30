import { Navbar } from "../_components/Navbar";
import { SpecsHero } from "../_components/specs/SpecsHero";
import { TrimCompare } from "../_components/specs/TrimCompare";
import { TechSpecs } from "../_components/specs/TechSpecs";
import { DesignGallery } from "../_components/specs/DesignGallery";
import { SpecsCta } from "../_components/specs/SpecsCta";
import { Footer } from "../_components/sections/Footer";

export default function SpecsPage() {
  return (
    <>
      <Navbar />
      <SpecsHero />
      <TrimCompare />
      <TechSpecs />
      <DesignGallery />
      <SpecsCta />
      <Footer />
    </>
  );
}
