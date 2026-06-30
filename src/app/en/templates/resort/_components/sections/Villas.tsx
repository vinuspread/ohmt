import Link from "next/link";

const base = "/en/templates/resort";

const villas = [
  { name: "Villa Solaya", desc: "A space for six souls seeking joy, two pools, lush greenery, and endless days under the sun." },
  { name: "Villa Miraia", desc: "A space for six souls seeking joy, two pools, lush greenery, and endless days under the sun." },
  { name: "Villa Azari", desc: "A place where time stands still. Among herbs and the wind's whisper, find peace hidden from the world." },
  { name: "Villa Veluna", desc: "Made for lovers and dreamers, where the moon winks through the palms, and the night breathes lavender." },
];

export function Villas() {
  return (
    <section className="bg-[var(--bg-dark)] py-[130px]">
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="grid grid-cols-3 gap-8 mb-16">
          <h2 className="col-span-2 text-[clamp(48px,5.5vw,80px)] font-semibold text-white leading-[0.95]">
            Life Along<br />The Coast
          </h2>
          <div>
            <p className="text-base text-white/60 leading-relaxed mb-6">
              Each villa is a private world carved into the coastal landscape.
              Designed for rest, connection, and the quiet rhythm of the sea.
            </p>
            <Link href={`${base}/#contact`}
              className="inline-block rounded-full border border-white/50 px-6 py-3 text-white text-[15px] hover:bg-white/10 transition-all">
              Contact Us
            </Link>
          </div>
        </div>

        <div>
          {villas.map((v, i) => (
            <div key={v.name}
              className="grid grid-cols-3 py-7 items-center border-t border-white/20">
              <h3 className="text-xl font-medium text-white">{v.name}</h3>
              <p className="text-base text-white/60 leading-relaxed">{v.desc}</p>
              <div className="text-right">
                <Link href={`${base}/#`}
                  className="text-[var(--accent)] text-base hover:opacity-70 transition-opacity">
                  See More &rarr;
                </Link>
              </div>
            </div>
          ))}
          <div className="border-b border-white/20" />
        </div>
      </div>
    </section>
  );
}
