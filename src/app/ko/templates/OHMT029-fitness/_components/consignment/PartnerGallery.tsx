const partners = [
  { name: "Grand Hyatt Seoul · 용산", image: "/templates/OHMT029-fitness/cta-bg.jpg" },
  { name: "Conrad Seoul · 여의도", image: "/templates/OHMT029-fitness/about-hero.jpg" },
  { name: "Josun Palace · 강남", image: "/templates/OHMT029-fitness/program-hero.jpg" },
  { name: "Lotte Hotel · 중구", image: "/templates/OHMT029-fitness/hero.jpg" },
  { name: "Park Hyatt · 강남", image: "/templates/OHMT029-fitness/program-strength.jpg" },
  { name: "Signiel Seoul · 송파", image: "/templates/OHMT029-fitness/program-recovery.jpg" },
];

export function PartnerGallery() {
  return (
    <section className="bg-[var(--bg-alt)] py-24 md:py-32">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12">
        <h2 className="font-['Montserrat'] font-bold text-[clamp(28px,4vw,48px)] text-[var(--text)] leading-[1.15] tracking-tight mb-16">
          파트너 위치
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${p.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-['Montserrat'] font-semibold text-[16px]">{p.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
