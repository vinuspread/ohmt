// src/app/templates/airline/-components/SearchWidget.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowRightLeft, Search, ChevronDown, Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";

const TRIP_TYPES = [
  { label: "왕복", value: "roundtrip" },
  { label: "편도", value: "oneway" },
];

export const SearchWidget = () => {
  const [tripType, setTripType] = useState("roundtrip");
  const [paxOpen, setPaxOpen] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [cabin, setCabin] = useState("Economy");
  const paxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (paxRef.current && !paxRef.current.contains(e.target as Node)) {
        setPaxOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const totalPax = adults + children;
  const paxLabel = `승객 ${totalPax}명`;

  const Counter = ({
    label,
    sub,
    value,
    min,
    onChange,
  }: {
    label: string;
    sub: string;
    value: number;
    min: number;
    onChange: (v: number) => void;
  }) => (
    <div className="flex items-center justify-between py-3 border-b border-[#eee] last:border-0">
      <div>
        <p className="text-[0.82rem] font-semibold text-[var(--color-primary)]">{label}</p>
        <p className="text-[0.68rem] text-[var(--color-text-muted)]">{sub}</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="w-7 h-7 rounded-none border border-[#d0d5dd] flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <Minus size={12} />
        </button>
        <span className="text-[0.95rem] font-bold text-[var(--color-primary)] w-4 text-center">{value}</span>
        <button
          onClick={() => onChange(value + 1)}
          className="w-7 h-7 rounded-none border border-[#d0d5dd] flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-colors"
        >
          <Plus size={12} />
        </button>
      </div>
    </div>
  );

  return (
    <section className="relative z-[200] mt-[-20px] md:mt-[-60px] px-4 md:px-10">
      <div className="max-w-[1320px] mx-auto bg-white border border-[var(--color-border)] border-t-[3px] border-t-[var(--color-accent)]">

        {/* Trip type tabs */}
        <div className="flex gap-0 px-6 pt-5 pb-0 border-b border-[#eee]">
          {TRIP_TYPES.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setTripType(value)}
              className={`px-4 md:px-6 py-2.5 text-[0.72rem] font-bold tracking-[0.1em] uppercase relative transition-colors duration-300 -mb-px ${
                tripType === value
                  ? "text-[var(--color-primary)]"
                  : "text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
              }`}
            >
              <span className="relative z-10">{label}</span>
              {tripType === value && (
                <motion.div
                  layoutId="activeTabBorder"
                  className="absolute bottom-0 left-4 md:left-6 right-4 md:right-6 h-[2px] bg-[var(--color-accent)] z-20"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile: 2x2 grid / Desktop: single row */}
        {/* Mobile Layout */}
        <div className="md:hidden grid grid-cols-[1fr_auto_1fr] gap-0 border-b border-[#eee]">
          {/* FROM */}
          <div className="group px-4 py-4 hover:bg-[#fafafa] cursor-pointer transition-colors border-r border-[#eee]">
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-[var(--color-accent)] block mb-1">출발지</span>
            <div className="text-[1.4rem] font-black text-[var(--color-primary)] leading-none tracking-tighter mb-0.5">ICN</div>
            <span className="text-[0.7rem] text-[var(--color-text-muted)]">서울 / 인천</span>
          </div>

          {/* Swap */}
          <div className="flex items-center justify-center px-2 bg-white border-r border-[#eee]">
            <button className="w-8 h-8 border border-[#eee] bg-white flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all duration-300">
              <ArrowRightLeft size={13} />
            </button>
          </div>

          {/* TO */}
          <div className="group px-4 py-4 hover:bg-[#fafafa] cursor-pointer transition-colors">
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-[var(--color-accent)] block mb-1">도착지</span>
            <div className="text-[1.4rem] font-black text-[var(--color-primary)]/30 leading-none tracking-tighter mb-0.5">LHR</div>
            <span className="text-[0.7rem] text-[var(--color-text-muted)]">런던 / 히드로</span>
          </div>
        </div>

        {/* Mobile bottom row */}
        <div className="md:hidden grid grid-cols-2 gap-0 border-b border-[#eee]">
          {/* DATES */}
          <div className="group px-4 py-4 hover:bg-[#fafafa] cursor-pointer transition-colors border-r border-[#eee]">
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-[var(--color-accent)] block mb-1">출발일</span>
            <div className="text-[0.9rem] font-bold text-[var(--color-primary)] mb-0.5">2025년 5월 24일</div>
            <span className="text-[0.7rem] text-[var(--color-text-muted)]">
              {tripType === "roundtrip" ? "복귀: 6월 2일" : "편도"}
            </span>
          </div>

          {/* TRAVELERS */}
          <div className="relative flex flex-col" ref={paxRef}>
            <button
              onClick={() => setPaxOpen((v) => !v)}
              className={`w-full text-left px-4 py-4 hover:bg-[#fafafa] cursor-pointer transition-colors flex flex-col justify-center ${paxOpen ? "bg-[#fafafa]" : ""}`}
            >
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-[var(--color-accent)] block mb-1">탑승객</span>
              <div className="flex items-center gap-2">
                <span className="text-[0.9rem] font-bold text-[var(--color-primary)]">{paxLabel}</span>
                <ChevronDown size={13} className={`text-[var(--color-text-muted)] transition-transform duration-200 ${paxOpen ? "rotate-180" : ""}`} />
              </div>
              <span className="text-[0.7rem] text-[var(--color-text-muted)] mt-0.5">{cabin === "Economy" ? "이코노미" : cabin === "Business" ? "비즈니스" : "퍼스트"}</span>
            </button>

            {paxOpen && (
              <div className="absolute top-full right-0 w-[280px] bg-white border border-[#eee] border-t-[3px] border-t-[var(--color-accent)] shadow-[0_16px_48px_rgba(5,21,46,0.14)] z-[600] p-6">
                <Counter label="성인" sub="12세 이상" value={adults} min={1} onChange={setAdults} />
                <Counter label="아동" sub="2–11세" value={children} min={0} onChange={setChildren} />
                <div className="mt-4 mb-2">
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-[var(--color-accent)] mb-3">좌석 등급</p>
                  <div className="grid grid-cols-3 gap-2">
                    {["Economy", "Business", "First"].map((c) => (
                      <button key={c} onClick={() => setCabin(c)}
                        className={`py-2 text-[0.68rem] font-bold uppercase tracking-[0.08em] transition-colors border ${cabin === c ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]" : "bg-white text-[var(--color-text-muted)] border-[#eee] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"}`}>
                        {c === "Economy" ? "이코노미" : c === "Business" ? "비즈니스" : "퍼스트"}
                      </button>
                    ))}
                  </div>
                </div>
                <Button variant="outline" onClick={() => setPaxOpen(false)}
                  className="w-full mt-4 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] hover:opacity-85 transition-opacity">
                  완료
                </Button>
              </div>
            )}
          </div>

          {/* SEARCH Mobile */}
          <Button variant="primary" className="w-full flex flex-row items-center justify-center gap-3 py-4 px-8 hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors duration-300 group">
            <Search size={18} className="transition-transform duration-300 group-hover:scale-110" />
            <span className="text-[0.72rem] font-bold uppercase tracking-[0.2em]">항공편 검색</span>
          </Button>
        </div>

        {/* DESKTOP LAYOUT - One Row */}
        <div className="hidden md:flex md:flex-row md:divide-x divide-[#eee]">
          {/* FROM */}
          <div className="flex-[2.5] group px-6 py-6 hover:bg-[#fafafa] cursor-pointer transition-colors flex flex-col justify-center border-r border-[#eee]">
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-[var(--color-accent)] block mb-2">출발지</span>
            <div className="text-[2rem] font-black text-[var(--color-primary)] leading-none tracking-tighter mb-1">ICN</div>
            <span className="text-[0.75rem] text-[var(--color-text-muted)]">서울 / 인천</span>
          </div>

          {/* SWAP */}
          <div className="flex items-center justify-center px-3 bg-white flex-shrink-0 border-r border-[#eee]">
            <button className="w-9 h-9 border border-[#eee] bg-white flex items-center justify-center text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-colors duration-300">
              <ArrowRightLeft size={13} />
            </button>
          </div>

          {/* TO */}
          <div className="flex-[2.5] group px-6 py-6 hover:bg-[#fafafa] cursor-pointer transition-colors flex flex-col justify-center border-r border-[#eee]">
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-[var(--color-accent)] block mb-2">도착지</span>
            <div className="text-[2rem] font-black text-[var(--color-primary)]/30 leading-none tracking-tighter mb-1">LHR</div>
            <span className="text-[0.75rem] text-[var(--color-text-muted)]">런던 / 히드로</span>
          </div>

          {/* DATES */}
          <div className="flex-[1.5] group px-6 py-6 hover:bg-[#fafafa] cursor-pointer transition-colors flex flex-col justify-center border-r border-[#eee]">
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-[var(--color-accent)] block mb-2">출발일</span>
            <div className="text-[1rem] font-bold text-[var(--color-primary)] mb-1">2025년 5월 24일</div>
            <span className="text-[0.75rem] text-[var(--color-text-muted)]">
              {tripType === "roundtrip" ? "복귀: 6월 2일" : "편도"}
            </span>
          </div>

          {/* TRAVELERS */}
          <div className="flex-[1.6] relative flex flex-col justify-center border-r border-[#eee]" ref={paxRef}>
            <button
              onClick={() => setPaxOpen((v) => !v)}
              className={`text-left px-6 py-6 hover:bg-[#fafafa] cursor-pointer transition-colors ${paxOpen ? "bg-[#fafafa]" : ""}`}
            >
              <span className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-[var(--color-accent)] block mb-2">탑승객</span>
              <div className="flex items-center gap-2">
                <span className="text-[1rem] font-bold text-[var(--color-primary)]">{paxLabel}</span>
                <ChevronDown size={13} className={`text-[var(--color-text-muted)] transition-transform duration-200 ${paxOpen ? "rotate-180" : ""}`} />
              </div>
              <span className="text-[0.75rem] text-[var(--color-text-muted)] mt-1">{cabin === "Economy" ? "이코노미" : cabin === "Business" ? "비즈니스" : "퍼스트"}</span>
            </button>

            {paxOpen && (
              <div className="absolute top-full right-0 w-[300px] bg-white border border-[#eee] border-t-[3px] border-t-[var(--color-accent)] shadow-[0_16px_48px_rgba(5,21,46,0.14)] z-[600] p-6">
                <Counter label="성인" sub="12세 이상" value={adults} min={1} onChange={setAdults} />
                <Counter label="아동" sub="2–11세" value={children} min={0} onChange={setChildren} />
                <div className="mt-4 mb-2">
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.25em] text-[var(--color-accent)] mb-3">좌석 등급</p>
                  <div className="grid grid-cols-3 gap-2">
                    {["Economy", "Business", "First"].map((c) => (
                      <button key={c} onClick={() => setCabin(c)}
                        className={`py-2 text-[0.68rem] font-bold uppercase tracking-[0.08em] transition-colors border ${cabin === c ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]" : "bg-white text-[var(--color-text-muted)] border-[#eee] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"}`}>
                        {c === "Economy" ? "이코노미" : c === "Business" ? "비즈니스" : "퍼스트"}
                      </button>
                    ))}
                  </div>
                </div>
                <Button variant="outline" onClick={() => setPaxOpen(false)}
                  className="w-full mt-4 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] hover:opacity-85 transition-opacity">
                  완료
                </Button>
              </div>
            )}
          </div>

          {/* SEARCH */}
          <Button variant="primary" className="w-[200px] flex-shrink-0 flex flex-col items-center justify-center gap-2 hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-colors duration-300 min-h-[100px] group">
            <Search size={18} className="transition-transform duration-300 group-hover:scale-110" />
            <span className="text-[0.72rem] font-bold uppercase tracking-[0.2em]">항공편 검색</span>
          </Button>
        </div>
      </div>
    </section>
  );
};
