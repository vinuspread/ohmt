"use client";
import React from "react";
import Link from "next/link";
import { teamMembers } from "../data/data";

export const TeamSection = () => {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">팀 소개</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member) => (
            <div key={member.id} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-[var(--color-bg-secondary)]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-5">
                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)] mt-1">{member.role}</p>
                <div className="flex gap-4 mt-3 text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                  <Link href={member.instagram} className="hover:text-[var(--color-text)] transition-colors">인스타그램</Link>
                  <Link href={member.linkedin} className="hover:text-[var(--color-text)] transition-colors">링크드인</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

