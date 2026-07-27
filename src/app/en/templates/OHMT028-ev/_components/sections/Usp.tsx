"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "motion/react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const usps = [
  {
    label: "280 km City Range",
    sub: "Designed for daily urban driving",
    detail: "A compact battery profile keeps NUBI light, agile, and ready for a full week of city movement.",
    image: "usp-range.jpg",
  },
  {
    label: "Smart Parking Assist",
    sub: "Auto-park in tight city spots",
    detail: "Ultrasonic sensors and low-speed steering support help you slip into narrow curbside spaces with less effort.",
    image: "usp-acceleration.jpg",
  },
  {
    label: "30-min Fast Charge",
    sub: "80% in 30 minutes anywhere",
    detail: "Grab coffee, answer a few messages, and come back to enough charge for the rest of the day.",
    image: "usp-charging.jpg",
  },
  {
    label: "7 Vivid Colors",
    sub: "Express your personality on every street",
    detail: "From Sunny Yellow to Sky Blue, each finish is tuned to make the small silhouette feel unmistakably yours.",
    image: "usp-power.jpg",
  },
  {
    label: "OTA Updates",
    sub: "New features, while you sleep",
    detail: "Software updates add interface refinements, driving assists, and battery improvements without a service visit.",
    image: "usp-software.jpg",
  },
  {
    label: "Panoramic Roof",
    sub: "Flood the cabin with natural light",
    detail: "A full glass canopy opens up the compact cabin so every commute feels brighter and less boxed in.",
    image: "usp-suspension.jpg",
  },
];

export function Usp() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
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
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[var(--light-bg)] lg:h-[600vh]">
      <div className="relative lg:sticky lg:top-0 lg:h-screen lg:overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-0 hidden lg:flex">
          <div className="w-1/2 bg-[var(--light-bg)]" />
          <div className="relative w-1/2 overflow-hidden">
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

        <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-[1440px] grid-cols-1 px-5 py-16 sm:px-8 md:px-10 lg:h-full lg:grid-cols-2 lg:px-20 lg:py-0">
          <div className="flex w-full flex-col justify-center">
            <div className="w-full max-w-[580px]">
              {usps.map((usp, i) => {
                const isActive = active === i;

                return (
                  <div
                    key={usp.label}
                    className={`border-b border-[var(--border-light)] transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-55 lg:opacity-25 lg:hover:opacity-60"
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isActive}
                      aria-controls={`usp-panel-${i}`}
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      className="group flex w-full items-start gap-4 py-5 text-left md:py-6 lg:py-6"
                    >
                      <span
                        className={`mt-[0.55rem] h-2 w-2 flex-shrink-0 rounded-full transition-all duration-300 ${
                          isActive ? "scale-100 bg-[var(--accent)]" : "scale-75 bg-[var(--border-light)]"
                        }`}
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block font-michroma text-[length:var(--text-lead)] leading-tight text-[var(--text-on-light)] md:text-[length:var(--text-lead)]">
                          {usp.label}
                        </span>
                        <span className="mt-2 block font-inter text-sm leading-relaxed text-[var(--text-muted-light)] md:text-sm">
                          {usp.sub}
                        </span>
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          id={`usp-panel-${i}`}
                          key="panel"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 pl-6 md:pl-7 lg:pb-7">
                            <p className="max-w-[440px] font-inter text-sm leading-7 text-[var(--text-on-light)]/72">
                              {usp.detail}
                            </p>
                            <div
                              className="mt-5 aspect-[16/10] w-full overflow-hidden bg-cover bg-center lg:hidden"
                              style={{ backgroundImage: `url('/templates/OHMT028-ev/${usp.image}')` }}
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>

        <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 gap-1.5 lg:flex">
          {usps.map((_, i) => (
            <div
              key={i}
              className={`h-[2px] rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-[var(--accent)]" : "w-2 bg-[var(--border-light)]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

