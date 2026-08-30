"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";

const featuresWithRealPhotos = [
  {
    title: "창가 자연광 피부톤",
    label: "인물 광학 프로세싱",
    desc: "피부 결을 과도하게 보정하지 않고 부드러운 빛의 음영을 있는 그대로 캡처합니다.",
    image: "/templates/OHMT031-luma-camera/sample-portrait.png?v=20260703a",
  },
  {
    title: "블루아워 원경 분리",
    label: "다이내믹 레인지 분리",
    desc: "해 질 녘 하늘의 푸른 층과 도심 조명의 계라를 과도한 HDR 없이 정밀 분리합니다.",
    image: "/templates/OHMT031-luma-camera/blue-hour.jpg?v=20260703a",
  },
  {
    title: "실내 저조도 온도 유지",
    label: "저조도 노이즈 제어",
    desc: "어두운 실내에서도 그림자를 검게 뭉개지 않고 방 고유의 따뜻한 조명 온도를 남깁니다.",
    image: "/templates/OHMT031-luma-camera/quiet-dinner.jpg?v=20260702e",
  },
  {
    title: "오브젝트 정물 재질감",
    label: "컬러 밸런싱 센서",
    desc: "세라믹, 천, 과일 등 일상적 재료의 본래 색상을 과장 없이 정밀하게 표현합니다.",
    image: "/templates/OHMT031-luma-camera/sample-color.jpg?v=20260702e",
  },
  {
    title: "미세 질감 초점 표현",
    label: "디테일 렌즈 마이크로 코팅",
    desc: "종이, 금속, 직물의 섬세한 표면 질감을 인공적인 샤프닝 없이 또렷하게 기록합니다.",
    image: "/templates/OHMT031-luma-camera/engine-texture-close.jpg?v=20260702f",
  },
  {
    title: "아침 도심 거리 스냅",
    label: "광역 역광 제어 알고리즘",
    desc: "아침 햇살이 스며드는 도심 거리를 과노출 없이 선명하고 입체감 있게 기록합니다.",
    image: "/templates/OHMT031-luma-camera/morning-street.jpg?v=20260702f",
  },
  {
    title: "자연스러운 색 팔레트",
    label: "뉴트럴 컬러 알고리즘",
    desc: "후보정이 거의 필요 없는 균형 잡힌 뉴트럴 톤의 이미지 파일을 생성합니다.",
    image: "/templates/OHMT031-luma-camera/engine-color-grid.jpg?v=20260702f",
  },
  {
    title: "컴팩트 마그네슘 바디",
    label: "정밀 하드웨어 설계",
    desc: "손끝에 착 감기는 마그네슘 합금 바디와 광학 오퍼레이션 다이얼 하드웨어.",
    image: "/templates/OHMT031-luma-camera/body-detail.jpg?v=20260702e",
  },
];

export function CircuitFeatures() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#050608] py-20 md:py-28 border-t border-white/10 w-full overflow-hidden">
      {/* Absolute Uniform Baseline Container */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="mb-10 flex items-end justify-between w-full">
          <div>
            <div className="dot-title mb-4">
              <span className="square-dot" />
              <span className="badge-text">OPTICAL REAL SAMPLES</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
              실사 촬영 사례 및 활용 예시
            </h2>
          </div>

          {/* Dynamic Interactive Carousel Control Arrows */}
          <div className="flex items-center gap-3">
            <motion.button
              type="button"
              onClick={scrollLeft}
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.9 }}
              className="px-4 py-2.5 bg-[#07090c] border border-white/20 text-white font-mono text-xs font-bold hover:bg-white hover:text-black transition-colors"
              aria-label="이전 샘플 보기"
            >
              ← PREV
            </motion.button>
            <motion.button
              type="button"
              onClick={scrollRight}
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.9 }}
              className="px-4 py-2.5 bg-[#07090c] border border-white/20 text-white font-mono text-xs font-bold hover:bg-white hover:text-black transition-colors"
              aria-label="다음 샘플 보기"
            >
              NEXT →
            </motion.button>
          </div>
        </div>

        {/* 1-Row Horizontal Slider with Bold Dynamic Scale/Tilt Hover Interactions */}
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto pb-6 pt-4 flex gap-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {featuresWithRealPhotos.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -12, zIndex: 30 }}
              className="group relative flex-none w-[300px] sm:w-[400px] md:w-[480px] lg:w-[540px] h-[320px] sm:h-[380px] md:h-[420px] flex flex-col justify-end overflow-hidden bg-[#07090c] p-6 md:p-8 transition-all snap-start border border-white/15 hover:border-white/60 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              {/* Background Image */}
              <Image
                unoptimized
                src={item.image}
                alt={item.title}
                fill
                className="object-cover opacity-70 transition-transform duration-700 ease-out group-hover:scale-115 group-hover:opacity-95"
                sizes="(min-width: 1024px) 540px, 300px"
              />

              {/* Dark Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/40 to-transparent" />

              {/* Typography */}
              <div className="relative z-10">
                <span className="mb-2 inline-block font-sans text-[11px] font-semibold uppercase tracking-wider text-white/90 bg-black/70 px-3 py-1 backdrop-blur-md border border-white/10">
                  {item.label}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 transition-colors group-hover:text-blue-400">
                  {item.title}
                </h3>
                <p className="text-xs text-[#888d99] leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
