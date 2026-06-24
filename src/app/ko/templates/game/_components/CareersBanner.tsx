"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { careers } from "@/app/ko/templates/game/data/data";
import Button from "./ui/Button";
import { ArrowRight } from "lucide-react";

export default function CareersBanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[var(--color-bg)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        >
          <span className="text-sm font-medium tracking-[0.2em] text-[var(--color-primary)] uppercase">
            Join Us
          </span>
          <h2 className="mt-2 font-[var(--font-heading)] text-4xl font-bold md:text-5xl">
            게임의 미래를 함께 만드세요
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-[var(--color-text-muted)]">
            열정적인 크리에이터를 기다립니다. 현재{" "}
            <span className="font-bold text-[var(--color-text)]">{careers.length}개 포지션</span>이
            엔지니어링, 디자인, 아트, 프로덕션 분야에서 열려 있습니다.
          </p>
          <div className="mt-10">
            <Link href="/ko/templates/game/careers">
              <Button className="text-base px-8 py-4">
                포지션 보기
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
