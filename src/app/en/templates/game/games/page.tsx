"use client";

import { useState } from "react";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import GameCard from "../_components/ui/GameCard";
import { games } from "@/app/en/templates/OHMT023-game-EN/data/data";

import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";

const allGenres = Array.from(new Set(games.flatMap((g) => g.genre)));
const allPlatforms = Array.from(new Set(games.flatMap((g) => g.platform)));
const allStatuses = ["released", "upcoming", "early-access"] as const;

export default function GamesPage() {
  const [selectedGenre, setSelectedGenre] = useState<string>("All");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("All");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");

  const filtered = games.filter((g) => {
    if (selectedGenre !== "All" && !g.genre.includes(selectedGenre)) return false;
    if (selectedPlatform !== "All" && !g.platform.includes(selectedPlatform)) return false;
    if (selectedStatus !== "All" && g.status !== selectedStatus) return false;
    return true;
  });

  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <h1 className="font-[var(--font-heading)] text-5xl font-bold">All Games</h1>
            <p className="mt-3 text-[var(--color-text-muted)]">
              Explore our complete portfolio of {games.length} titles
            </p>
          </div>

          <div className="mb-10 flex flex-wrap gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-2 text-sm font-medium text-[var(--color-text-muted)]">Genre:</span>
              {["All", ...allGenres].map((g) => (
                <button
                  key={g}
                  onClick={() => setSelectedGenre(g)}
                  className={`rounded-full px-4 py-1.5 text-sm transition-all ${
                    selectedGenre === g
                      ? "bg-[var(--color-primary)] text-white"
                      : "border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-border-bright)] hover:text-[var(--color-text)]"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-2 text-sm font-medium text-[var(--color-text-muted)]">Platform:</span>
              {["All", ...allPlatforms].map((p) => (
                <button
                  key={p}
                  onClick={() => setSelectedPlatform(p)}
                  className={`rounded-full px-4 py-1.5 text-sm transition-all ${
                    selectedPlatform === p
                      ? "bg-[var(--color-primary)] text-white"
                      : "border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-border-bright)] hover:text-[var(--color-text)]"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-2 text-sm font-medium text-[var(--color-text-muted)]">Status:</span>
              {["All", ...allStatuses].map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedStatus(s)}
                  className={`rounded-full px-4 py-1.5 text-sm capitalize transition-all ${
                    selectedStatus === s
                      ? "bg-[var(--color-primary)] text-white"
                      : "border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-border-bright)] hover:text-[var(--color-text)]"
                  }`}
                >
                  {s === "early-access" ? "Early Access" : s}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-20 text-center text-[var(--color-text-muted)]">
              No games match your filters.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </TemplateWrapper>
  );
}
