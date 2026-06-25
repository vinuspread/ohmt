// src/app/templates/car/src/components/sections/AppSection.tsx
"use client";

import React from "react";

const features = [
  { t: "Remote Monitoring", d: "Battery, range, and charging status at a glance." },
  { t: "Climate Pre-conditioning", d: "Set the perfect cabin temperature before you arrive." },
  { t: "OTA Updates", d: "Your car gets better overnight, while you sleep." },
];

export const AppSection = () => {
  return (
    <section className="bg-[var(--color-primary)] overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-[600px]">
        {/* Left: image */}
        <div className="relative overflow-hidden min-h-[360px]">
          <img
            src="/templates/car/car-4.jpg"
            alt="VINUS Interior"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--color-primary)]" />
        </div>

        {/* Right: content */}
        <div className="flex flex-col justify-center px-6 md:pr-[max(60px,calc((100vw-1440px)/2+60px))] md:pl-16 py-14 md:py-20">
          <span className="block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[var(--theme-text-muted)] mb-5">
            VINUS Connected
          </span>
          <h2 className="text-[clamp(2rem,3vw,2.8rem)] font-extrabold tracking-tight leading-[1.1] mb-5 text-white">
            Seamless dual<br />motor driving<br />experience.
          </h2>
          <p className="text-[0.88rem] text-[var(--theme-text-muted)] leading-[1.4] font-normal mb-10 max-w-[380px]">
            Monitor charging, pre-condition the cabin, unlock remotely, and track your range in real time - all from the VINUS app.
          </p>

           <div className="flex flex-col gap-6 mb-10">
             {features.map((f) => (
               <div key={f.t} className="flex gap-4 items-start">
                 <div className="w-px self-stretch bg-[var(--theme-accent)] opacity-40 mt-1 shrink-0" />
                 <div>
                   <strong className="text-white text-[0.82rem] block mb-0.5">{f.t}</strong>
                   <p className="text-[0.78rem] text-[var(--theme-text-muted)] leading-[1.4]">{f.d}</p>
                 </div>
               </div>
             ))}
           </div>

          <button className="inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white hover:translate-x-1.5 transition-all duration-300 w-fit">
            Download App <span className="text-[1.2em]">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
