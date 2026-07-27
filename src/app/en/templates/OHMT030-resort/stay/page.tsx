import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { SubpageHero } from "../_components/SubpageHero";
import { SuiteCard } from "../_components/cards/SuiteCard";
import { IntroTextSection } from "../_components/sections/IntroTextSection";

const base = "/en/templates/OHMT030-resort";

const suites = [
  { slug: "celestial", name: "Celestial Suite", price: "$480", img: "villa-bedroom-arch.jpg" },
  { slug: "bellemont", name: "Bellemont Suite", price: "$360", img: "villa-bedroom-seaview.jpg" },
  { slug: "tofutalia", name: "Tofutalia Suite", price: "$320", img: "villa-bedroom-porthole.jpg" },
  { slug: "zephyr", name: "Zephyr Loft", price: "$290", img: "room-zephyr.jpg" },
];

export default function StayPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
        <SubpageHero title={"THE\nVILLAS"} image="sub-hero-stay.jpg" alt="The Villas">
          Four luxury suites designed around Aegean views, offering complete stillness and coastal warmth.
        </SubpageHero>

        <IntroTextSection>
          Four suites, each shaped by its position on the cliff. Some open to
          the full arc of the caldera. Others face the sea in quiet solitude.
          All are designed around one principle: you should never feel enclosed.
        </IntroTextSection>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 max-w-[1440px] mx-auto px-6 pb-16 md:px-12 md:pb-32">
          {suites.map((s) => (
            <SuiteCard
              key={s.slug}
              href={`${base}/stay/${s.slug}`}
              name={s.name}
              price={s.price}
              image={s.img}
            />
          ))}
        </section>

      </main>
      <Footer />
    </>
  );
}
