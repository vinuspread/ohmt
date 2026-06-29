"use client";

import { CaretDown } from "@phosphor-icons/react";

export function Booking() {
  return (
    <section className="py-16">
      <div className="text-center max-w-[760px] mx-auto mb-10 px-10">
        <h2 className="text-[clamp(32px,3.5vw,52px)] font-semibold text-white leading-[1.1] tracking-[-0.02em]">
          Come As You Are And<br />We Will Take Care Of The Rest
        </h2>
      </div>

      <div className="max-w-[1440px] mx-auto px-10">
        <div className="border-t border-b border-white/30 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { label: "Check In", value: "30 Apr" },
              { label: "Check Out", value: "04 May" },
              { label: "Adults", value: "1 Adult" },
              { label: "Children", value: "1 Child" },
            ].map((field, i) => (
              <div key={field.label}
                className={`px-8 py-2 ${i > 0 ? "border-l border-white/30" : ""}`}>
                <label className="text-[13px] font-medium text-white/50 uppercase tracking-widest mb-2 block">
                  {field.label}
                </label>
                <div className="flex items-center justify-between text-lg text-white font-medium">
                  <span>{field.value}</span>
                  <CaretDown size={16} className="text-white/60" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <a href="#"
            className="inline-block rounded-full border border-white bg-white px-8 py-3 text-[#7D99A9] text-[15px] font-medium hover:opacity-80 transition-opacity">
            Check Availability
          </a>
        </div>
      </div>
    </section>
  );
}
