import Link from "next/link";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";

const base = "/en/templates/resort";

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
      <main className="min-h-screen pb-24" style={{ backgroundColor: "var(--bg)" }}>
        <section className="relative h-[65vh] overflow-hidden flex items-end pb-14 mb-16">
          <img
            src="/templates/resort/sub-hero-stay.jpg"
            alt="The Villas"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
          <div className="relative z-10 max-w-[1440px] mx-auto w-full px-10">
            <h1 className="text-white font-semibold tracking-[-0.02em] leading-[0.85] mb-4 uppercase"
                style={{ fontSize: "clamp(60px, 10vw, 160px)" }}>
              THE<br />VILLAS
            </h1>
            <p className="text-white/70 text-[22px] max-w-[700px] font-[300] leading-relaxed">
              Four luxury suites designed around Aegean views, offering complete stillness and coastal warmth.
            </p>
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-10 pb-16 border-b border-white/10 mb-16">
          <p className="text-white/60 text-[15px] md:text-[17px] font-[300] leading-[1.85] max-w-[720px]">
            Four suites, each shaped by its position on the cliff. Some open to the full arc of the caldera. Others face the sea in quiet solitude. All are designed around one principle: you should never feel enclosed.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 max-w-[1440px] mx-auto px-10">
          {suites.map((s) => (
            <Link key={s.slug} href={`${base}/stay/${s.slug}`} className="group block">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src={`/templates/resort/${s.img}`}
                  alt={s.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <h2 className="text-xl text-white mt-4 font-[400]">{s.name}</h2>
              <p className="text-[14px] text-white/60 mt-1">From {s.price} / night</p>
              <div className="inline-block rounded-full border border-white/40 px-4 py-2 text-[13px] text-white hover:bg-white/10 transition-all mt-3">
                Explore Suite &rarr;
              </div>
            </Link>
          ))}
        </section>

      </main>
      <Footer />
    </>
  );
}
