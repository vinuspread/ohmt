"use client";

import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Users, Headphones, ArrowRight } from "lucide-react";
import React, { useState } from "react";

interface ReservationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationDrawer({ isOpen, onClose }: ReservationDrawerProps) {
  const [dateInputType, setDateInputType] = useState<"text" | "date">("text");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [audioGuide, setAudioGuide] = useState(false);
  const ticketPrice = 30000;
  const audioGuidePrice = 12000;
  const total = guests * ticketPrice + (audioGuide ? guests * audioGuidePrice : 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-[var(--color-accent)] z-[101] flex flex-col text-[var(--color-primary)]"
          >
            <div className="flex items-center justify-between p-8 border-b border-black/10">
              <div>
                <span className="text-xs uppercase font-bold tracking-[0.3em] text-black/40 block mb-1">OHMT 미술관</span>
                <h2 className="text-2xl font-serif">관람 예약</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors">
                <X size={24} className="text-black/60" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-10">
              <div>
                <h3 className="text-sm uppercase font-bold tracking-[0.2em] mb-4 flex items-center gap-2">
                  <Calendar size={16} /> 관람 날짜</h3>
                <input
                  type={dateInputType}
                  lang="ko"
                  placeholder="연도-월-일"
                  value={date}
                  onFocus={() => setDateInputType("date")}
                  onBlur={() => {
                    if (!date) setDateInputType("text");
                  }}
                  onChange={(event) => setDate(event.target.value)}
                  className="w-full p-4 bg-transparent border border-black/20 focus:border-black outline-none transition-colors font-sans"
                />
              </div>

              <div>
                <h3 className="text-sm uppercase font-bold tracking-[0.2em] mb-4 flex items-center gap-2">
                  <Users size={16} /> 관람 인원
                </h3>
                <div className="flex items-center border border-black/20 w-fit">
                  <button onClick={() => setGuests(Math.max(1, guests - 1))} className="px-4 py-3 hover:bg-black/5">-</button>
                  <span className="px-6 py-3 border-x border-black/20 font-medium">{guests}</span>
                  <button onClick={() => setGuests(guests + 1)} className="px-4 py-3 hover:bg-black/5">+</button>
                </div>
              </div>

              <div>
                <h3 className="text-sm uppercase font-bold tracking-[0.2em] mb-4 flex items-center gap-2">
                  <Headphones size={16} /> 추가 옵션
                </h3>
                <label className="flex items-center gap-4 p-4 border border-black/20 cursor-pointer hover:bg-black/5 transition-colors">
                  <input
                    type="checkbox"
                    checked={audioGuide}
                    onChange={(event) => setAudioGuide(event.target.checked)}
                    className="w-5 h-5 accent-black"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium">오디오 가이드</span>
                    <span className="text-xs text-black/60">1인당 12,000원 추가</span>
                  </div>
                </label>
              </div>

              <div className="mt-auto pt-8 border-t border-black/10">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs uppercase tracking-widest text-black/60">예상 금액</span>
                  <span className="text-2xl font-serif">{total.toLocaleString("ko-KR")}원</span>
                </div>
                <button className="w-full py-6 bg-[var(--color-primary)] text-[var(--color-accent)] text-xs uppercase font-bold tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-black/80 transition-colors">
                  예약 내용 확인<ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
