"use client";

import { services } from "../../data/data";

export default function PopularServices() {
  const duplicated = [...services, ...services];

  return (
    <section className="relative overflow-hidden bg-[var(--color-bg-secondary)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Popular services
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-bold tracking-tight text-[var(--color-text)] leading-[1.05]">
            Treatments our clients love
          </h2>
        </div>
      </div>

      <div className="overflow-hidden">
        <div className="animate-marquee-right flex gap-6 w-max" style={{ animationDuration: "25s" }}>
          {duplicated.map((service, i) => (
            <a
              key={`${service.id}-${i}`}
              href={`/en/templates/OHMT026-spa/service#${service.id}`}
              className="group w-[280px] shrink-0 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] overflow-hidden hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-tight text-[var(--color-text)]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {service.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-marquee-right {
          animation: marquee-right linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-right {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
