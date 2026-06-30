"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { projects } from "../../data/data";

export default function Featured() {
  const [hovering, setHovering] = useState(false);
  const reduce = useReducedMotion();

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springX = useSpring(cursorX, { stiffness: 200, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 200, damping: 28 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };

  return (
    <section
      className="relative bg-[var(--color-bg)] py-24 lg:py-32 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {!reduce && (
        <motion.div
          className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference"
          style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
          animate={{ scale: hovering ? 1 : 0, opacity: hovering ? 1 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-black">보기</span>
          </div>
        </motion.div>
      )}

      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="flex items-end justify-between mb-16">
          <h2
            className="font-[family-name:var(--font-heading)] font-light capitalize text-[var(--color-text)] leading-[1.05]"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            엄선된<br />기록
          </h2>
          <p className="hidden lg:block max-w-[240px] text-[0.85rem] text-[var(--color-text-muted)] leading-relaxed text-right font-[family-name:var(--font-body)]">
            저희가 기록한 사랑의 이야기들을 만나보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:grid-rows-2 lg:gap-6">
          {projects[0] && (
            <GalleryItem
              project={projects[0]}
              className="lg:row-span-2"
              aspectClass="aspect-[3/4] lg:aspect-auto lg:h-full"
            />
          )}
          {projects[1] && (
            <GalleryItem
              project={projects[1]}
              className="lg:col-span-2"
              aspectClass="aspect-[16/9]"
            />
          )}
          {projects[2] && (
            <GalleryItem
              project={projects[2]}
              className="lg:col-span-2"
              aspectClass="aspect-[16/9]"
            />
          )}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/ko/templates/OHMT025-wedding/contact"
            className="inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[var(--color-text)] border-b border-[var(--color-text)] pb-1 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-colors duration-300"
          >
            촬영 일정 문의
          </a>
        </div>
      </div>
    </section>
  );
}

function GalleryItem({ project, className = "", aspectClass = "aspect-[3/4]" }: {
  project: { id: string; title: string; location: string; year: number; image: string };
  className?: string;
  aspectClass?: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`group relative overflow-hidden cursor-none ${className}`}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.1, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <div className={`relative overflow-hidden ${aspectClass}`}>
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
        />
        <motion.div
          className="absolute inset-x-0 bottom-0 px-6 py-5 bg-gradient-to-t from-[var(--color-primary)]/90 to-transparent"
          initial={{ y: "100%" }}
          animate={{ y: hovered ? "0%" : "100%" }}
          transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <h3 className="font-[family-name:var(--font-heading)] text-2xl font-light capitalize text-white leading-none">
            {project.title}
          </h3>
          <p className="text-[0.65rem] uppercase tracking-[0.15em] text-white/60 mt-1">
            {project.location} {"\u00B7"} {project.year}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
