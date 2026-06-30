"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const usps = [
  { label: "280 km City Range",    sub: "Designed for daily urban driving",      image: "usp-range.jpg"        },
  { label: "Smart Parking Assist", sub: "Auto-park in tight city spots",          image: "usp-acceleration.jpg" },
  { label: "30-min Fast Charge",   sub: "80% in 30 minutes anywhere",             image: "usp-charging.jpg"     },
  { label: "7 Vivid Colors",       sub: "Express your personality on every street", image: "usp-power.jpg"      },
  { label: "OTA Updates",          sub: "New features, while you sleep",           image: "usp-software.jpg"    },
  { label: "Panoramic Roof",       sub: "Flood the cabin with natural light",      image: "usp-suspension.jpg"  },
];

export function Usp() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const total = usps.length;
    usps.forEach((_, i) => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: `${(i / total) * 100}% top`,
        end: `${((i + 1) / total) * 100}% top`,
        onEnter: () => setActive(i),
        onEnterBack: () => setActive(i),
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ height: `${usps.length * 100}vh` }}
      className="relative w-full bg-[var(--light-bg)]"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Split background */}
        <div className="absolute inset-0 flex flex-col md:flex-row pointer-events-none z-0">
          <div className="w-full md:w-1/2 bg-[var(--light-bg)]" />
          <div className="w-full md:w-1/2 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('/templates/OHMT028-ev/${usps[active].image}')` }}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 h-full grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center py-20">
            <div className="max-w-[540px] w-full">
              {usps.map((usp, i) => (
                <div
                  key={usp.label}
                  onClick={() => setActive(i)}
                  className={`py-6 border-b border-[var(--border-light)] cursor-pointer transition-all duration-400 ${
                    active === i ? "opacity-100" : "opacity-20 hover:opacity-50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`mt-[6px] w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300 ${
                      active === i ? "bg-[var(--accent)]" : "bg-transparent"
                    }`} />
                    <div>
                      <p className="font-michroma text-[clamp(17px,2vw,24px)] text-[var(--text-on-light)] leading-tight">
                        {usp.label}
                      </p>
                      <p className={`font-inter text-[13px] text-[var(--text-muted-light)] mt-1.5 transition-all duration-300 ${
                        active === i ? "opacity-100 max-h-10" : "opacity-0 max-h-0 overflow-hidden"
                      }`}>
                        {usp.sub}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block" />
        </div>

        {/* 진행 인디케이터 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
          {usps.map((_, i) => (
            <div
              key={i}
              className={`h-[2px] transition-all duration-300 rounded-full ${
                i === active ? "w-6 bg-[var(--accent)]" : "w-2 bg-[var(--border-light)]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
