"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "../../data/data";

export default function GalleryGrid() {
  const reduce = useReducedMotion();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, idx) => (
        <GalleryCard key={project.id} project={project} index={idx} reduce={!!reduce} />
      ))}
    </div>
  );
}

function GalleryCard({ project, index, reduce }: {
  project: { id: string; title: string; location: string; year: number; image: string };
  index: number;
  reduce: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="group relative overflow-hidden"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.8, delay: reduce ? 0 : index * 0.08, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <div className="relative overflow-hidden aspect-[4/5]">
        <motion.img
          src={project.image}
          alt={`${project.title} wedding photography`}
          className="h-full w-full object-cover"
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
        />
        <motion.div
          className="absolute inset-x-0 bottom-0 px-6 py-5 bg-gradient-to-t from-[#1A1816]/90 to-transparent"
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
