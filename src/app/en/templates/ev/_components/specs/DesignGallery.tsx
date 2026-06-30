"use client";
import { useState } from "react";

const gallery = {
  exterior: [
    { image: "hero-static.jpg",      title: "Urban Profile",    desc: "Compact dimensions, maximum street presence. Every angle drawn with purpose." },
    { image: "detail-headlight.jpg", title: "Signature Lights", desc: "Full LED front signature with a glow that's unmistakably NUBI — day or night." },
    { image: "detail-side.jpg",      title: "Side Lines",       desc: "Flowing bodywork with a low drag coefficient tuned for city air and long range." },
  ],
  interior: [
    { image: "detail-interior.jpg",  title: "Driver's Space",   desc: "Minimal controls, maximum clarity. Everything you need within reach, nothing else." },
    { image: "detail-roof.jpg",      title: "Panoramic Roof",   desc: "Full-length glass overhead. The city skyline becomes part of every drive." },
    { image: "detail-charge.jpg",    title: "Smart Display",    desc: "10.4\" touch interface with NUBI OS, live navigation, and wireless updates." },
  ],
} as const;

type Tab = keyof typeof gallery;

export function DesignGallery() {
  const [tab, setTab] = useState<Tab>("exterior");
  const [active, setActive] = useState(0);

  const items = gallery[tab];
  const featured = items[active];

  const handleTab = (t: Tab) => { setTab(t); setActive(0); };

  return (
    <section className="bg-[var(--bg)]">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-michroma text-[clamp(24px,2.5vw,40px)] text-[var(--text)] leading-[1.0] tracking-[-0.02em]">
            Design in detail
          </h2>
          <div className="flex gap-1 border border-[var(--border)] rounded-full p-1">
            {(["exterior", "interior"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => handleTab(t)}
                className={`px-5 py-2 rounded-full font-inter text-[12px] tracking-[0.04em] transition-all duration-200 capitalize ${
                  tab === t
                    ? "bg-[var(--text)] text-[var(--bg)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Featured image — full width */}
        <div className="aspect-[16/7] rounded-xl overflow-hidden bg-[var(--bg-alt)] mb-6">
          <div
            key={`${tab}-${active}`}
            className="w-full h-full bg-cover bg-center transition-all duration-500"
            style={{ backgroundImage: `url('/templates/ev/${featured.image}')` }}
          />
        </div>

        {/* Meta + thumbnails */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Left: label + title + desc */}
          <div className="max-w-[480px]">
            <p className="font-inter text-[11px] tracking-[0.12em] text-[var(--accent)] uppercase mb-2 capitalize">
              {tab}
            </p>
            <h3 className="font-michroma text-[clamp(20px,2vw,30px)] text-[var(--text)] leading-[1.05] tracking-[-0.02em] mb-3">
              {featured.title}
            </h3>
            <p className="font-inter text-[14px] text-[var(--text-muted)] leading-relaxed">
              {featured.desc}
            </p>
          </div>

          {/* Right: thumbnails */}
          <div className="flex gap-3 flex-shrink-0">
            {items.map((item, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-[120px] md:w-[140px] aspect-[4/3] rounded-lg overflow-hidden transition-all duration-200 flex-shrink-0 ${
                  active === i
                    ? "ring-2 ring-[var(--accent)] opacity-100"
                    : "opacity-40 hover:opacity-70"
                }`}
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url('/templates/ev/${item.image}')` }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
