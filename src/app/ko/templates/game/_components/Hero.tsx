"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Button from "./ui/Button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/templates/game/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-bg)]/30 to-[var(--color-bg)]" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="mb-4 text-sm font-medium tracking-[0.2em] text-[var(--color-text-muted)] uppercase"
        >
          Oh My Template
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.15 }}
          className="bg-gradient-to-r from-white via-[var(--color-accent)] to-[var(--color-primary)] bg-clip-text text-transparent"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: 1.05 }}
        >
          상상을 넘어,
          <br />
          현실을 조각하다.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-[var(--color-text-muted)]"
        >
          우리는 인터랙티브 엔터테인먼트의 경계를 넓히는 몰입형 게임 경험을 만듭니다.
          장대한 RPG부터 짜릿한 슈팅 게임까지, 우리는 세상에 생명을 불어넣습니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.45 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <Link href="/ko/templates/game/games">
            <Button variant="primary" className="text-base px-8 py-4">
              게임 둘러보기
            </Button>
          </Link>
          <Link href="/ko/templates/game/careers">
            <Button variant="outline" className="text-base px-8 py-4">
              팀 합류하기
            </Button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-6 w-6 text-[var(--color-text-muted)] animate-bounce" />
      </motion.div>
    </section>
  );
}
