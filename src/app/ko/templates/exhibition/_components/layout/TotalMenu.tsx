"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

interface TotalMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { name: "Home", href: "/ko/templates/exhibition", desc: "Experience the Sanctuary" },
  { name: "Museum Info", href: "/ko/templates/exhibition/our-story", desc: "Our 500-Year Legacy" },
  { name: "Collections", href: "/ko/templates/exhibition/collections", desc: "Explore the Archive" },
  { name: "Exhibitions", href: "/ko/templates/exhibition/exhibitions", desc: "Current & Special Showings" },
  { name: "Souvenir Shop", href: "/ko/templates/exhibition/souvenir", desc: "Echos of History" },
  { name: "Curator Note", href: "/ko/templates/exhibition/curator-note", desc: "Theological Insights" },
];

export default function TotalMenu({ isOpen, onClose }: TotalMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[var(--color-primary)] text-[var(--color-accent)] flex flex-col pt-16 md:pt-32 pb-12 px-6 md:px-20 selection:bg-[var(--color-accent)] selection:text-[var(--color-primary)]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 md:top-12 md:right-12 hover:rotate-90 transition-transform duration-500"
          >
            <X size={32} />
          </button>

          {/* Menu Grid */}
          <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 flex-grow content-center">
            {menuItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group flex flex-col gap-2"
                >
                  <h2 className="text-4xl md:text-7xl font-serif tracking-tighter group-hover:opacity-50 transition-opacity duration-500">
                    {item.name}
                  </h2>
                  <p className="text-[13px] md:text-sm uppercase tracking-[0.4em] font-normal text-[var(--color-accent)]/40 group-hover:text-[var(--color-accent)] transition-colors">
                    {item.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Footer Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="max-w-[1440px] mx-auto w-full border-t border-[var(--color-accent)]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <div className="text-[13px] uppercase font-bold tracking-widest text-[var(--color-accent)]/30">
              © 2026 VINUSPREAD ARCHIVE. ALL RIGHTS RESERVED.
            </div>
            <div className="flex gap-8 text-[13px] uppercase font-bold tracking-widest">
              <a href="#" className="hover:opacity-50">Instagram</a>
              <a href="#" className="hover:opacity-50">Twitter</a>
              <a href="#" className="hover:opacity-50">Vatican City, Rome</a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
