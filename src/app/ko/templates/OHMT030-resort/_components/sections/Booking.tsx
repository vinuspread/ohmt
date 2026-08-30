"use client";

import { Fragment } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { SectionHeading } from "../ui/Typography";

export function Booking() {
  return (
    <section className="py-16">
      <div className="text-center max-w-[760px] mx-auto mb-12 px-12">
        <SectionHeading size="compact" className="break-keep">
          가벼운 마음으로 오세요<br />머무시는 동안은 저희가 준비할게요
        </SectionHeading>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="border-t border-b border-white/30 py-3 md:py-12">
          <div className="flex flex-col md:grid md:grid-cols-4">
            {[
              { label: "체크인", value: "4월 30일" },
              { label: "체크아웃", value: "5월 4일" },
              { label: "성인", value: "1명" },
              { label: "어린이", value: "1명" },
            ].map((field, i, arr) => (
              <Fragment key={field.label}>
                <div
                  className={`flex items-center justify-between px-4 py-2 md:block md:px-9 ${i > 0 ? "md:border-l md:border-white/30" : ""}`}>
                  <label className="text-sm font-medium text-white/50 uppercase tracking-widest md:mb-2 md:block">
                    {field.label}
                  </label>
                  <div className="flex items-center gap-2 text-lg text-white font-medium md:gap-0 md:justify-between">
                    <span>{field.value}</span>
                    <CaretDown size={16} className="text-white/60" />
                  </div>
                </div>
                {i < arr.length - 1 && <div className="my-3 h-px bg-white/20 md:hidden" />}
              </Fragment>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="#"
            className="inline-block rounded-full border border-white bg-white px-9 py-3 text-[var(--bg)] text-base font-medium hover:opacity-80 transition-opacity">
            예약 가능 여부 확인
          </a>
        </div>
      </div>
    </section>
  );
}
