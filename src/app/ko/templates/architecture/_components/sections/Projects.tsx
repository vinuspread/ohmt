// src/app/en/templates/OHMT027-architecture-KO/_components/sections/Projects.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data/projects";
import { ScrollReveal } from "../ui/ScrollReveal";

export function Projects() {
  const [filter, setFilter] = useState("All");
  const baseRoute = "/en/templates/OHMT027-architecture-KO";

  const categories = ["All", "Residential", "Commercial", "Public", "Interior"];

  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    return project.category === filter;
  });

  const getGridClass = (index: number) => {
    switch (index) {
      case 0:
        return "col-span-12 aspect-[16/7] md:aspect-[21/9]";
      case 1:
      case 2:
        return "col-span-12 md:col-span-6 aspect-[4/3]";
      case 3:
        return "col-span-12 md:col-span-8 aspect-[4/3] md:aspect-[16/10]";
      case 4:
        return "col-span-12 md:col-span-4 aspect-[4/3] md:aspect-[3/4]";
      case 5:
        return "col-span-12 aspect-[16/7] md:aspect-[21/9]";
      default:
        return "col-span-12 md:col-span-6 aspect-[4/3]";
    }
  };

  return (
    <section className="bg-white py-24 lg:py-32 border-t border-[#E0E0E0]">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row justify-between items-baseline gap-4 border-b border-[#E0E0E0] pb-8 mb-12">
            <h2 className="font-heading font-normal text-[40px] md:text-[48px] text-[#1A1A1A]">
              Selected Projects.
            </h2>
            <span className="font-sans text-[13px] text-[#888888] tracking-wider uppercase">
              {projects.length} Projects
            </span>
          </div>
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-3 mb-16">
            {categories.map((cat) => {
              const active = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`font-sans text-[13px] tracking-[0.05em] py-1.5 px-4 transition-all duration-300 ${
                    active
                      ? "bg-[#1A1A1A] text-white"
                      : "text-[#888888] hover:text-[#1A1A1A]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Magazine Grid */}
        <div className="grid grid-cols-12 gap-y-16 gap-x-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const gridClass = getGridClass(idx);

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  key={project.slug}
                  className={`${gridClass} flex flex-col group`}
                >
                  <Link
                    href={`${baseRoute}/projects/${project.slug}`}
                    className="relative w-full flex-1 overflow-hidden bg-zinc-100"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex flex-col justify-end p-8 z-10">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
                        <span className="font-sans text-[11px] font-medium tracking-[0.15em] text-[#B07D4F] uppercase block">
                          {project.category}
                        </span>
                        <h3 className="font-heading font-normal text-[24px] text-white leading-none">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </Link>

                  {/* Caption */}
                  <div className="mt-4 flex justify-between items-baseline">
                    <span className="font-sans text-[14px] font-medium text-[#1A1A1A]">
                      {project.title}
                    </span>
                    <span className="font-sans text-[12px] text-[#888888]">
                      {project.location}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
