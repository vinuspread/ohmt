"use client";

import Link from "next/link";
import { motion } from "motion/react";
import GameCard from "./ui/GameCard";
import { games } from "@/app/ko/templates/game/data/data";
import { ArrowRight } from "lucide-react";

export default function FeaturedGames() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="mb-14 flex items-end justify-between"
        >
          <div>
            <span className="text-sm font-medium tracking-[0.2em] text-[var(--color-primary)] uppercase">
              Our Portfolio
            </span>
            <h2 className="mt-2 font-[var(--font-heading)] text-4xl font-bold md:text-5xl">
              대표 게임
            </h2>
          </div>
          <Link
            href="/ko/templates/game/games"
            className="group hidden items-center gap-2 text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)] md:flex"
          >
            모든 게임 보기
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.slice(0, 3).map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="/ko/templates/game/games"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)]"
          >
            모든 게임 보기
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
