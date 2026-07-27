import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { SubpageHero } from "../_components/SubpageHero";
import { TimelineItem } from "../_components/cards/TimelineItem";
import { IntroTextSection } from "../_components/sections/IntroTextSection";

const timeline = [
  { year: "2024", title: "Groundbreaking & Design Phase", desc: "Architectural vision begins. Local stone, sand-treated concrete, and Aegean timber selected to shape the resort along the caldera edge." },
  { year: "2025", title: "Construction & Interior Curation", desc: "Nine months of careful construction using low-impact methods. Interiors filled with custom pieces from Greek artisans and volcanic stone finishes." },
  { year: "2026", title: "Grand Opening", desc: "OHMT opens its doors to the first guests. Four suites, a Michelin-led kitchen, and an endless view of the Aegean." },
  { year: "2027", title: "Michelin Star & Beyond", desc: "The OHMT restaurant earns its first Michelin star. Plans begin for a cliffside spa and two additional residences." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <SubpageHero title={"THE\nSANCTUARY"} image="sub-hero-about.jpg" alt="OHMT Resort aerial view">
          <>
            Whitewashed walls, cobalt domes, and endless stillness.<br />
            A place carved from the cliff, shaped by light alone.
          </>
        </SubpageHero>

        <IntroTextSection>
          OHMT was not built to impress. It was built to disappear into the
          cliff, to become part of the light that changes every hour, to offer
          stillness as the only amenity that truly matters.
        </IntroTextSection>

        <section className="py-16 md:py-32" style={{ backgroundColor: "var(--bg)" }}>
          <div className="resort-container grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <div className="relative">
              <div className="relative z-0 w-[75%] aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="/templates/OHMT030-resort/gallery-1.jpg"
                  alt="OHMT architecture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-[-96px] right-0 z-10 w-[55%] aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/templates/OHMT030-resort/gallery-3.jpg"
                  alt="OHMT coastal details"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="resort-body mb-6 text-lg font-normal text-white/85">
                OHMT rises from the volcanic cliffs of Santorini, where the caldera meets the open 
                sea in a constant exchange of light and shadow. The resort was shaped by the land itself, 
                using local stone, sand-treated concrete, and timber harvested from sustainable Aegean 
                forests. Every wall follows the natural contour of the cliff. Every window frames a 
                specific moment of the day: dawn breaking over the water, the midday sun bleaching the 
                terrace, the violet dusk folding into night.
              </p>
              <p className="resort-body text-base font-normal text-white/70">
                We believe architecture should not dominate a landscape but converse with it. At OHMT, 
                the interiors are quiet on purpose, muted palettes, raw textures, soft light, so that 
                the view remains the loudest element in the room. The result is a place where you are 
                never distracted from the present moment, where stillness becomes the ultimate luxury 
                and the sea is your constant companion.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16 md:px-12 md:py-32">
          <div className="mx-auto max-w-[800px]">
            <p className="mb-16 text-left text-sm leading-[var(--leading-body)] text-neutral-500 md:text-center">The Journey</p>
            <div className="flex max-w-[326px] flex-col gap-12 md:mx-auto md:max-w-[640px]">
              {timeline.map((t) => (
                <TimelineItem
                  key={t.year}
                  year={t.year}
                  title={t.title}
                  desc={t.desc}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
