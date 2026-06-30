"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Game } from "@/app/ko/templates/OHMT023-game/data/data";

const statusColors: Record<string, string> = {
  released: "bg-emerald-500",
  upcoming: "bg-amber-500",
  "early-access": "bg-sky-500",
};

const statusLabels: Record<string, string> = {
  released: "출시",
  upcoming: "출시 예정",
  "early-access": "얼리 액세스",
};

export default function GameCard({ game }: { game: Game }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    >
      <Link
        href={`/ko/templates/OHMT023-game/games/${game.id}`}
        className="group block overflow-hidden rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border)] transition-all duration-500 hover:border-[var(--color-primary)] hover:shadow-[0_0_30px_rgba(124,58,237,0.25)]"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={game.cover}
            alt={game.title}
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/80 via-transparent to-transparent" />
          <span
            className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-semibold text-white ${statusColors[game.status]}`}
          >
            {statusLabels[game.status]}
          </span>
        </div>
        <div className="p-5">
          <div className="mb-2 flex flex-wrap gap-2">
            {game.genre.map((g) => (
              <span
                key={g}
                className="rounded-full border border-[var(--color-border)] px-2.5 py-0.5 text-xs text-[var(--color-text-muted)]"
              >
                {g}
              </span>
            ))}
          </div>
          <h3 className="font-[var(--font-heading)] text-lg font-bold text-[var(--color-text)]">
            {game.title}
          </h3>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-sm text-[var(--color-text-muted)]">{game.releaseYear}년</span>
            {game.rating > 0 && (
              <span className="text-sm font-semibold text-[var(--color-accent)]">
                {game.rating}/10
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
