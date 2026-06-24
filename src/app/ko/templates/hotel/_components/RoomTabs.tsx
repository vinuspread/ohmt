"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { rooms } from "../data/data";
import { Button } from "./ui/Button";

export const RoomTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const room = rooms[activeTab];

  return (
    <section id="객실" className="py-20 md:py-32 bg-[var(--color-bg-secondary)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-[var(--font-heading)] font-bold text-[var(--color-primary)] leading-[1.2]">
            <span className="text-[12px] md:text-[13px] font-medium text-[var(--color-accent)] tracking-tight block mb-4">객실 안내</span>
            객실 & 스위트
          </h2>
        </motion.div>

        <div className="flex justify-start md:justify-center gap-1 md:gap-2 mb-10 md:mb-14 overflow-x-auto no-scrollbar max-w-full pb-2 -mx-6 px-6 md:mx-0 md:px-0">
          {rooms.map((r, i) => (
            <button
              key={r.id}
              onClick={() => setActiveTab(i)}
              className={`flex-shrink-0 px-5 md:px-8 py-3 text-[13px] md:text-[14px] font-medium transition-all duration-300 ${activeTab === i ? "bg-[var(--color-primary)] text-[var(--color-bg)]" : "bg-transparent text-[var(--color-text-muted)] border border-[var(--color-border)] hover:border-[var(--color-primary)]"}`}
            >
              {r.name}
            </button>
          ))}
          {/* Spacer to preserve right padding on mobile scroll */}
          <div className="w-6 shrink-0 md:hidden" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            <div className="overflow-hidden">
              <img src={room.image} alt={room.name} className="w-full h-[300px] md:h-[420px] object-cover hover:scale-105 transition-transform duration-700" />
            </div>

            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-[var(--font-heading)] font-bold text-[var(--color-primary)] mb-2">{room.name}</h3>
                <p className="text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed">{room.desc}</p>
              </div>

              <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-[var(--color-border)]">
                <div>
                  <span className="text-[11px] font-medium text-[var(--color-text-muted)] tracking-tight block">크기</span>
                  <span className="text-sm font-semibold text-[var(--color-text)]">{room.size}</span>
                </div>
                <div>
                  <span className="text-[11px] font-medium text-[var(--color-text-muted)] tracking-tight block">전망</span>
                  <span className="text-sm font-semibold text-[var(--color-text)]">{room.view}</span>
                </div>
                <div>
                  <span className="text-[11px] font-medium text-[var(--color-text-muted)] tracking-tight block">수용 인원</span>
                  <span className="text-sm font-semibold text-[var(--color-text)]">{room.capacity}</span>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-medium text-[var(--color-text-muted)] tracking-tight block mb-3">어메니티</span>
                <div className="grid grid-cols-2 gap-2">
                  {room.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-2 text-sm text-[var(--color-text)]">
                      <Check size={14} className="text-[var(--color-accent)] flex-shrink-0" strokeWidth={2} />
                      {a}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div>
                  <span className="text-[11px] font-medium text-[var(--color-text-muted)] tracking-tight">1박 요금</span>
                  <p className="text-2xl md:text-3xl font-bold text-[var(--color-primary)]">{room.price}</p>
                </div>
                <Button variant="primary" size="md" className="text-[12px] tracking-tight">예약하기</Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
