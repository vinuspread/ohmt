"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const trims = [
  { id: "city",  name: "City",   price: "$24,900", range: "180 km", charge: "45 min", power: "95 kW",  topSpeed: "145 km/h", isPopular: false },
  { id: "urban", name: "Urban+", price: "$28,900", range: "280 km", charge: "30 min", power: "120 kW", topSpeed: "160 km/h", isPopular: true  },
  { id: "sport", name: "Sport",  price: "$34,900", range: "260 km", charge: "28 min", power: "160 kW", topSpeed: "180 km/h", isPopular: false },
];

const rows = [
  { label: "Range",     key: "range" as const },
  { label: "Charging",  key: "charge" as const },
  { label: "Power",     key: "power" as const },
  { label: "Top Speed", key: "topSpeed" as const },
];

export function TrimCompare() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ref.current?.querySelectorAll("tbody tr") ?? [],
      { opacity: 0, y: 16 },
      {
        opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.08,
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      }
    );
  }, []);

  return (
    <section ref={ref} className="bg-[var(--bg)]">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse">
          {/* Header */}
          <thead>
            <tr className="border-b border-[var(--border)]">
              <th className="text-left pb-6 w-[200px]" />
              {trims.map((t) => (
                <th key={t.id} className="text-left pb-6 pr-4 align-bottom">
                  <div className="flex flex-col gap-1.5">
                    {t.isPopular && (
                      <span className="font-inter text-[10px] tracking-[0.08em] text-[var(--accent)] uppercase">
                        Most popular
                      </span>
                    )}
                    <span className="font-michroma text-[clamp(18px,2vw,28px)] text-[var(--text)] leading-none tracking-[-0.02em]">
                      {t.name}
                    </span>
                    <span className="font-michroma text-[clamp(20px,2.5vw,36px)] text-[var(--text)] leading-none mt-2">
                      {t.price}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          {/* Spec rows */}
          <tbody>
            {rows.map((row) => (
              <tr key={row.key} className="border-b border-[var(--border)]">
                <td className="py-5 pr-4">
                  <span className="font-inter text-[12px] tracking-[0.04em] text-[var(--text-muted)] uppercase">
                    {row.label}
                  </span>
                </td>
                {trims.map((t) => (
                  <td key={t.id} className="py-5 pr-4">
                    <span
                      className={`font-inter text-[14px] font-medium ${
                        t.isPopular ? "text-[var(--accent)]" : "text-[var(--text)]"
                      }`}
                    >
                      {t[row.key]}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>

          {/* Footer CTA row */}
          <tfoot>
            <tr>
              <td className="pt-8" />
              {trims.map((t) => (
                <td key={t.id} className="pt-8 pr-4">
                  <a href="/en/templates/OHMT028-ev/order">
                    <button
                      className={`w-full py-3 rounded-full font-inter text-[12px] font-medium tracking-[0.03em] transition-colors ${
                        t.isPopular
                          ? "bg-[var(--accent)] text-[var(--text-on-light)] hover:bg-[var(--accent-dark)]"
                          : "border border-[var(--border)] text-[var(--text)] hover:border-[var(--text-muted)]"
                      }`}
                    >
                      Reserve {t.name}
                    </button>
                  </a>
                </td>
              ))}
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  );
}
