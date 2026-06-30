import Link from "next/link";

const base = "/en/templates/OHMT030-resort";

const villas = [
  { name: "Villa Solaya", desc: "A space for six souls seeking joy, two pools, lush greenery, and endless days under the sun." },
  { name: "Villa Miraia", desc: "A space for six souls seeking joy, two pools, lush greenery, and endless days under the sun." },
  { name: "Villa Azari", desc: "A place where time stands still. Among herbs and the wind's whisper, find peace hidden from the world." },
  { name: "Villa Veluna", desc: "Made for lovers and dreamers, where the moon winks through the palms, and the night breathes lavender." },
];

export function Villas() {
  return (
    <section className="bg-[var(--bg-dark)] py-16 md:py-[130px]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
          
          {/* Left: Text Area (Vertical layout) */}
          <div className="flex flex-col items-start max-w-[580px]">
            <h2 className="text-[clamp(40px,5.5vw,80px)] font-semibold text-white leading-[1.1] tracking-[-0.04em] mb-6 md:mb-10">
              Life Along<br />The Coast
            </h2>
            <p className="text-base text-white/60 leading-relaxed mb-8 md:mb-10">
              Each villa is a private world carved into the coastal landscape.
              Designed for rest, connection, and the quiet rhythm of the sea.
            </p>
            <Link href={`${base}/#contact`}
              className="inline-block rounded-full border border-white/50 px-6 py-3 text-white text-[15px] hover:bg-white/10 transition-all">
              Contact Us
            </Link>
          </div>

          {/* Right: List Area (Width 1/2 of container) */}
          <div className="flex flex-col w-full">
            {villas.map((v, i) => (
              <div key={v.name}
                className="py-7 border-t border-white/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex-1 min-w-0 pr-4">
                  <h3 className="text-xl font-medium text-white mb-2">{v.name}</h3>
                  <p className="text-base text-white/60 leading-relaxed">{v.desc}</p>
                </div>
                <div className="flex-shrink-0">
                  <Link href={`${base}/#`}
                    className="inline-flex items-center text-[var(--accent)] text-base hover:opacity-70 transition-opacity">
                    See More &rarr;
                  </Link>
                </div>
              </div>
            ))}
            <div className="border-b border-white/20" />
          </div>

        </div>
      </div>
    </section>
  );
}
