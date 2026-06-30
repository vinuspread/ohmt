import Link from "next/link";
import { Navbar } from "../../_components/Navbar";
import { Footer } from "../../_components/Footer";

const base = "/en/templates/OHMT030-resort";

const rooms: Record<string, {
  name: string; price: string; img: string;
  desc: string; spec: { label: string; value: string }[];
  gallery: string[];
}> = {
  celestial: {
    name: "Celestial Suite",
    price: "$480",
    img: "villa-bedroom-arch.jpg",
    desc: "The Celestial Suite occupies the highest elevation of the resort, a perch carved into the caldera rim where the sky feels close enough to touch. Floor-to-ceiling glass wraps the bedroom and living area, capturing the full arc of the Aegean horizon from first light to the last constellation. A private plunge pool extends into a terrace that seems to float above the sea.",
    spec: [
      { label: "Occupancy", value: "2 Guests" },
      { label: "Size", value: "85 sqm" },
      { label: "View", value: "Aegean Sea & Caldera" },
      { label: "Bed", value: "King-size Organic Cotton" },
      { label: "Amenities", value: "Private Plunge Pool, Outdoor Shower" },
    ],
    gallery: ["pool-bluehour.jpg", "villa-pool-caldera.jpg", "terrace-dining-caldera.jpg"],
  },
  bellemont: {
    name: "Bellemont Suite",
    price: "$360",
    img: "villa-bedroom-seaview.jpg",
    desc: "Wrapped by wild gardens and dry-stone walls, the Bellemont Suite sits at ground level among bougainvillea, lavender, and olive trees. The indoor-outdoor layout opens onto a private patio with a sunken lounging area, where the scent of jasmine mixes with the salt air. A suite designed for slow mornings and long afternoons spent between the pages of a book.",
    spec: [
      { label: "Occupancy", value: "2 Guests" },
      { label: "Size", value: "70 sqm" },
      { label: "View", value: "Garden & Partial Sea" },
      { label: "Bed", value: "King-size Organic Cotton" },
      { label: "Amenities", value: "Private Garden, Outdoor Lounging" },
    ],
    gallery: ["alley-bougainvillea.jpg", "villa-exterior-golden.jpg", "overwater-cabana-sunset.jpg"],
  },
  tofutalia: {
    name: "Tofutalia Suite",
    price: "$320",
    img: "villa-bedroom-porthole.jpg",
    desc: "Carved directly into the cliff face, the Tofutalia Suite is an intimate cave-like retreat that brings you as close to the water as possible. The bedroom steps down to a sheltered terrace with a cold plunge bath carved from local stone, where the sound of waves echoes off the volcanic rock. Raw textures and soft linen define the interior.",
    spec: [
      { label: "Occupancy", value: "2 Guests" },
      { label: "Size", value: "55 sqm" },
      { label: "View", value: "Sea-Level Cliffside" },
      { label: "Bed", value: "Queen-size Organic Cotton" },
      { label: "Amenities", value: "Cold Plunge Bath, Stone Terrace" },
    ],
    gallery: ["sailing-cove.jpg", "villa-pool-caldera.jpg", "blue-dome-church.jpg"],
  },
  zephyr: {
    name: "Zephyr Loft",
    price: "$290",
    img: "room-zephyr.jpg",
    desc: "An open-plan loft perched above the main villa complex, the Zephyr Loft is defined by its volume of light. The double-height ceiling and window wall create a sense of airiness that mirrors the coastal wind it is named after. A mezzanine sleeping area overlooks the living space below, with a compact kitchenette for private dining.",
    spec: [
      { label: "Occupancy", value: "2 Guests" },
      { label: "Size", value: "60 sqm" },
      { label: "View", value: "Panoramic Coastline" },
      { label: "Bed", value: "Queen-size Organic Cotton" },
      { label: "Amenities", value: "Mezzanine Layout, Kitchenette" },
    ],
    gallery: ["aerial-caldera-golden.jpg", "villa-bedroom-arched-window.jpg", "bar-rooftop-sunset.jpg"],
  },
};

export default async function RoomPage({ params }: { params: Promise<{ room: string }> }) {
  const { room } = await params;
  const data = rooms[room];
  if (!data) return <div>Room not found</div>;

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-end pb-14 overflow-hidden">
          <img
            src={`/templates/OHMT030-resort/${data.img}`}
            alt={data.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
          <div className="relative z-10 max-w-[1440px] mx-auto w-full px-10">
            <p className="text-white/50 text-[12px] uppercase tracking-[0.18em] mb-3">
              OHMT Resort — The Villas
            </p>
            <h1 className="text-white font-[300] tracking-[-0.02em] leading-none mb-3"
                style={{ fontSize: "clamp(42px, 6vw, 80px)" }}>
              {data.name}
            </h1>
            <p className="text-white/60 text-[15px]">From {data.price} / night</p>
          </div>
        </section>

        {/* Description + Specs */}
        <section className="py-20" style={{ backgroundColor: "var(--bg)" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1440px] mx-auto px-10">
            <div>
              <p className="text-white/90 text-[17px] leading-[1.85] font-[300]">
                {data.desc}
              </p>
            </div>
            <div className="border-t border-white/10">
              {data.spec.map((s, i) => (
                <div key={s.label} className={`flex justify-between py-4 ${i < data.spec.length - 1 ? "border-b border-white/10" : ""}`}>
                  <span className="text-white/45 text-[13px] font-[300] uppercase tracking-[0.08em]">{s.label}</span>
                  <span className="text-white text-[14px] font-[300]">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="pb-20" style={{ backgroundColor: "var(--bg)" }}>
          <div className="max-w-[1440px] mx-auto px-10">
            <p className="text-white/30 text-[11px] uppercase tracking-[0.2em] mb-6">Gallery</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {data.gallery.map((img, i) => (
                <div
                  key={i}
                  className={`overflow-hidden rounded-xl ${i === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}
                >
                  <img
                    src={`/templates/OHMT030-resort/${img}`}
                    alt=""
                    className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section className="py-20 text-center" style={{ backgroundColor: "var(--bg-dark)" }}>
          <h2 className="text-4xl text-white font-[300] mb-3 tracking-[-0.02em]">Request Your Stay.</h2>
          <p className="text-white/40 text-[14px] mb-10">Availability confirmed within 24 hours.</p>
          <div className="max-w-[600px] mx-auto px-10">
            <div className="flex flex-col md:flex-row gap-4">
              <input type="email" placeholder="Your email"
                className="flex-1 px-5 py-3 rounded-full border border-white/20 bg-transparent text-white text-[15px] placeholder-white/40 outline-none focus:border-white/60 transition-all" />
              <input type="date" lang="en" placeholder="Check in"
                className="flex-1 px-5 py-3 rounded-full border border-white/20 bg-transparent text-white text-[15px] outline-none focus:border-white/60 transition-all" />
            </div>
            <button className="mt-6 rounded-full bg-[var(--accent)] px-8 py-3 text-[var(--text-dark)] text-[15px] font-medium hover:bg-[#ffb37a] transition-all">
              Submit Request
            </button>
          </div>
          <Link href={`${base}/stay`} className="inline-block mt-12 text-white/40 text-[13px] hover:text-white/70 transition-all">
            &larr; Back to Villas
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
