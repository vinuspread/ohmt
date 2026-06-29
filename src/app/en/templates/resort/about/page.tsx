import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";

const timeline = [
  { year: "2024", title: "Groundbreaking & Design Phase", desc: "Architectural vision begins. Local stone, sand-treated concrete, and Aegean timber selected to shape the resort's organic silhouette along the caldera edge." },
  { year: "2025", title: "Construction & Interior Curation", desc: "Nine months of careful construction using low-impact methods. Interiors filled with custom pieces from Greek artisans, raw linen, and volcanic stone finishes." },
  { year: "2026", title: "Grand Opening", desc: "OHMT opens its doors to the first guests. Four suites, a Michelin-led kitchen, and an endless view of the Aegean. The sanctuary finds its voice." },
  { year: "2027", title: "Michelin Star & Beyond", desc: "The OHMT restaurant earns its first Michelin star. Plans begin for a cliffside spa and two additional residences carved into the northern cove." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative h-[65vh] flex items-end pb-14 overflow-hidden">
          <img
            src="/templates/resort/sub-hero-about.jpg"
            alt="OHMT Resort aerial view"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
          <div className="relative z-10 max-w-[1440px] mx-auto w-full px-10">
            <h1 className="text-white font-semibold tracking-[-0.02em] leading-[0.85] mb-4 uppercase"
                style={{ fontSize: "clamp(60px, 10vw, 160px)" }}>
              THE<br />SANCTUARY
            </h1>
            <p className="text-white/70 text-[22px] max-w-[700px] font-[300] leading-relaxed">
              Whitewashed walls, cobalt domes, and endless stillness.<br />
              A place carved from the cliff, shaped by light alone.
            </p>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-10 py-16 border-b border-white/10" style={{ backgroundColor: "var(--bg)" }}>
          <p className="text-white/60 text-[15px] md:text-[17px] font-[300] leading-[1.85] max-w-[720px]">
            OHMT was not built to impress. It was built to disappear into the cliff, to become part of the light that changes every hour, to offer stillness as the only amenity that truly matters.
          </p>
        </section>

        <section className="pt-24 pb-48" style={{ backgroundColor: "var(--bg)" }}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-16 items-center max-w-[1440px] mx-auto px-10">
            <div className="relative">
              <div className="relative z-0 w-[75%] aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="/templates/resort/gallery-1.jpg"
                  alt="OHMT architecture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-[-104px] right-0 z-10 w-[55%] aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/templates/resort/gallery-3.jpg"
                  alt="OHMT coastal details"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-white/85 text-[17px] leading-[1.9] font-[300] mb-6">
                OHMT rises from the volcanic cliffs of Santorini, where the caldera meets the open 
                sea in a constant exchange of light and shadow. The resort was shaped by the land itself, 
                using local stone, sand-treated concrete, and timber harvested from sustainable Aegean 
                forests. Every wall follows the natural contour of the cliff. Every window frames a 
                specific moment of the day: dawn breaking over the water, the midday sun bleaching the 
                terrace, the violet dusk folding into night.
              </p>
              <p className="text-white/70 text-[15px] leading-[1.8] font-[300]">
                We believe architecture should not dominate a landscape but converse with it. At OHMT, 
                the interiors are quiet on purpose, muted palettes, raw textures, soft light, so that 
                the view remains the loudest element in the room. The result is a place where you are 
                never distracted from the present moment, where stillness becomes the ultimate luxury 
                and the sea is your constant companion.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-[800px] mx-auto px-6">
            <p className="text-neutral-400 text-[13px] uppercase tracking-[0.15em] mb-16 text-center">The Journey</p>
            <div className="relative border-l border-neutral-200 ml-4 md:ml-28 space-y-12">
              {timeline.map((t) => (
                <div key={t.year} className="relative pl-8 md:pl-12 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-300 group-hover:bg-[#7C9BAB] transition-all duration-300 border border-white" />
                  
                  {/* Year */}
                  <div className="md:absolute md:left-[-110px] md:top-0 md:text-right md:w-[80px] mb-2 md:mb-0">
                    <span className="text-2xl font-semibold text-neutral-800 leading-none">
                      {t.year}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-neutral-900 text-lg font-semibold mb-2 group-hover:text-[#7C9BAB] transition-colors duration-300">
                      {t.title}
                    </h3>
                    <p className="text-neutral-500 text-[14px] leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
