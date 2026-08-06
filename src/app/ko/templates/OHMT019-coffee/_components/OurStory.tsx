"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ease = [0.23, 1, 0.32, 1] as const;

const testimonials = [
  {
    quote: "3년째 점심 모임 장소로 여기만 찾고 있습니다. 실망한 적이 한 번도 없어요. 커피는 언제나 신선하고 정확하게 내려집니다.",
    name: "박지훈",
    source: "구글 리뷰",
  },
  {
    quote: "이곳의 콜드브루는 서울 어디에서도 맛볼 수 없는 맛입니다. 매 배치마다 정성이 느껴져요. 천천히 호흡하게 되는 그런 곳입니다.",
    name: "김민정",
    source: "네이버 리뷰",
  },
];

export const OurStory = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="overflow-hidden bg-[var(--color-bg-secondary)]">
      <div className="grid grid-cols-1 md:grid-cols-2 md:h-[520px]">

        {/* Left: image */}
        <motion.div
          className="relative overflow-hidden h-[260px] md:h-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease }}
        >
          <motion.img
            src="/templates/OHMT019-coffee/story-interior.jpg"
            alt="카페 인테리어"
            className="w-full h-full object-cover"
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease }}
          />
        </motion.div>

        {/* Right: testimonial */}
        <motion.div
          className="bg-[var(--color-accent)] text-white flex flex-col justify-between px-10 py-10 md:px-14 md:py-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease }}
        >
          <div>

            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                className="text-base md:text-lg leading-loose text-white/85 max-w-[38ch]"
                style={{ textWrap: "pretty" } as React.CSSProperties}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                {testimonials[index].quote}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="mt-8">
            <div className="w-10 h-px bg-white/25 mb-5" />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-white/90">{testimonials[index].name}</p>
                <p className="text-sm text-white/45 mt-1">{testimonials[index].source}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
                className="w-9 h-9 border border-white/25 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="이전"
              >
                <ArrowLeft size={14} />
              </button>
              <button
                onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
                className="w-9 h-9 border border-white/25 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="다음"
              >
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
