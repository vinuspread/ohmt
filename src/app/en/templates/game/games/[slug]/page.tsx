"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import { games } from "@/app/en/templates/game/data/data";
import { TemplateWrapper } from "../../_components/TemplateWrapper";
import theme from "../../theme.json";

export default function GameDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const game = games.find((g) => g.id === slug);
  if (!game) notFound();

  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-8 overflow-hidden rounded-2xl">
            <img src={game.cover} alt={game.title} className="w-full object-cover" />
          </div>
          <h1 className="text-4xl font-bold">{game.title}</h1>
          <p className="mt-4 text-[var(--color-text-muted)]">{game.desc}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {game.genre.map((g) => (
              <span key={g} className="rounded-full border border-[var(--color-border)] px-3 py-1 text-sm">{g}</span>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </TemplateWrapper>
  );
}
