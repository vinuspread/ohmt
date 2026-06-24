"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "../../_components/Navbar";
import Footer from "../../_components/Footer";
import Button from "../../_components/ui/Button";
import { games } from "@/app/ko/templates/game/data/data";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { TemplateWrapper } from "../../_components/TemplateWrapper";
import theme from "../../theme.json";

const platformColors: Record<string, string> = {
  PC: "text-blue-400",
  PS5: "text-indigo-400",
  Xbox: "text-green-400",
};

const statusLabels: Record<string, string> = {
  released: "출시",
  upcoming: "출시 예정",
  "early-access": "얼리 액세스",
};

export default function GameDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const game = games.find((g) => g.id === slug);

  if (!game) {
    return (
      <TemplateWrapper theme={theme}>
        <Navbar />
        <main className="flex min-h-screen flex-col items-center justify-center pt-24 pb-24">
          <p className="text-xl text-[var(--color-text-muted)]">게임을 찾을 수 없습니다</p>
          <Link href="/ko/templates/game/games" className="mt-4 text-[var(--color-primary)] hover:underline">
            게임 목록으로
          </Link>
        </main>
        <Footer />
      </TemplateWrapper>
    );
  }

  const statusClass = game.status === "released" ? "bg-emerald-500" : game.status === "upcoming" ? "bg-amber-500" : "bg-sky-500";

  return (
    <TemplateWrapper theme={theme}>
      <Navbar />
      <main className="min-h-screen pt-24 pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <Link
            href="/ko/templates/game/games"
            className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
          >
            <ArrowLeft size={16} />
            게임 목록으로
          </Link>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src={game.cover}
                alt={game.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold text-white ${statusClass}`}>
                {statusLabels[game.status]}
              </span>

              <h1 className="mt-4 font-[var(--font-heading)] text-5xl font-bold md:text-6xl">
                {game.title}
              </h1>

              <div className="mt-4 flex flex-wrap gap-2">
                {game.genre.map((g) => (
                  <span
                    key={g}
                    className="rounded-full border border-[var(--color-border)] px-3 py-1 text-sm text-[var(--color-text-muted)]"
                  >
                    {g}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-base leading-relaxed text-[var(--color-text-muted)]">
                {game.desc}
              </p>

              <div className="mt-8 space-y-4 border-t border-[var(--color-border)] pt-8">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--color-text-muted)]">플랫폼</span>
                  <div className="flex gap-3">
                    {game.platform.map((p) => (
                      <span key={p} className={`text-sm font-semibold ${platformColors[p] || ""}`}>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--color-text-muted)]">출시 연도</span>
                  <span className="text-sm font-semibold">{game.releaseYear}년</span>
                </div>
                {game.rating > 0 && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--color-text-muted)]">평점</span>
                    <span className="text-sm font-semibold text-[var(--color-accent)]">
                      {game.rating}/10
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-8 flex gap-4">
                <Button>
                  구매하기
                  <ExternalLink size={16} />
                </Button>
                <Button variant="outline">위시리스트</Button>
              </div>
            </div>
          </div>

          {game.screenshots.length > 0 && (
            <section className="mt-24">
              <h2 className="mb-8 font-[var(--font-heading)] text-3xl font-bold">스크린샷</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {game.screenshots.map((src, i) => (
                  <div key={i} className="relative aspect-video overflow-hidden rounded-2xl">
                    <img
                      src={src}
                      alt={`${game.title} 스크린샷 ${i + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </TemplateWrapper>
  );
}
