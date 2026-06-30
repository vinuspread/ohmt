"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const colors = [
  { id: "black",  name: "미드나이트 블랙", hex: "#1C1C1E", image: "color-black.jpg" },
  { id: "white",  name: "펄 화이트",      hex: "#F0EFEA", image: "color-white.jpg" },
  { id: "grey",   name: "어반 그레이",    hex: "#6B7280", image: "color-grey.jpg"  },
  { id: "green",  name: "세이지 그린",    hex: "#7A9E7E", image: "color-green.jpg" },
  { id: "red",    name: "코랄 레드",      hex: "#E05252", image: "color-red.jpg"   },
  { id: "yellow", name: "써니 옐로우",    hex: "#FFD94A", image: "usp-power.jpg"   },
  { id: "blue",   name: "스카이 블루",    hex: "#5B9BD5", image: "usp-software.jpg"},
];

export function ColorLineup() {
  const [active, setActive] = useState(0);

  return (
    <section id="colors" className="bg-[var(--bg)]">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32">
        <h2 className="font-michroma text-[clamp(28px,3vw,48px)] text-[var(--text)] leading-[0.93] tracking-[-0.03em] mb-16">
          7가지 나만의 컬러
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex flex-wrap gap-4">
              {colors.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => setActive(i)}
                  className="flex items-center gap-3 group"
                >
                  <div
                    className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                      active === i ? "border-white scale-110" : "border-transparent"
                    }`}
                    style={{ backgroundColor: c.hex }}
                  />
                  <span className={`font-inter text-[13px] transition-colors duration-300 ${
                    active === i ? "text-[var(--text)]" : "text-[var(--text-muted)]"
                  }`}>
                    {c.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('/templates/OHMT028-ev/${colors[active].image}')` }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
