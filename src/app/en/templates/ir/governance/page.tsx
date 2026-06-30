"use client";

import { Suspense } from "react";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const boardMembers = [
  { name: "James A. Whitfield", role: "Chairman of the Board", initials: "JW", bio: "Former CEO of MagnaCorp International with 35 years of experience in the energy sector.", image: "/templates/OHMT011-ir/member-jw.png" },
  { name: "Elena M. Santos", role: "Lead Independent Director", initials: "ES", bio: "President of Pacific Advisors Group, serving on five public company boards.", image: "/templates/OHMT011-ir/member-es.png" },
  { name: "David K. Park", role: "Audit Committee Chair", initials: "DP", bio: "Retired Partner at Deloitte LLP, CPA with expertise in financial reporting and internal controls.", image: "/templates/OHMT011-ir/member-dp.png" },
  { name: "Sarah L. Thornton", role: "Compensation Chair", initials: "ST", bio: "Former CHRO of GlobalTech Industries, specialist in executive compensation and talent strategy.", image: "/templates/OHMT011-ir/member-st.png" },
  { name: "Robert M. Chen", role: "Director", initials: "RC", bio: "Founder and Managing Partner of Crestview Capital, a $4.2B private equity firm.", image: "/templates/OHMT011-ir/member-rc.png" },
  { name: "Maria V. Gonzalez", role: "Director", initials: "MG", bio: "CEO of Horizon Renewables, recognized leader in sustainable energy transition.", image: "/templates/OHMT011-ir/member-mg.png" },
  { name: "Thomas W. Hayes", role: "Director", initials: "TH", bio: "Former Under Secretary of the Treasury, expert in regulatory affairs and public policy.", image: "/templates/OHMT011-ir/member-th.png" },
  { name: "Catherine N. Adebayo", role: "Director", initials: "CA", bio: "COO of Sterling Bank, experienced in corporate governance and risk management.", image: "/templates/OHMT011-ir/member-ca.png" },
];

const committees = [
  {
    name: "Audit Committee",
    members: "D. Park (Chair), R. Chen, T. Hayes",
    charter: "Oversees financial reporting, internal controls, audit processes, and compliance with legal and regulatory requirements.",
  },
  {
    name: "Compensation Committee",
    members: "S. Thornton (Chair), M. Gonzalez, C. Adebayo",
    charter: "Reviews and approves executive compensation programs, equity plans, and benefit structures.",
  },
  {
    name: "Governance & Nominating",
    members: "E. Santos (Chair), R. Chen, T. Hayes",
    charter: "Identifies qualified board candidates, evaluates board performance, and oversees corporate governance guidelines.",
  },
  {
    name: "Sustainability Committee",
    members: "M. Gonzalez (Chair), C. Adebayo, S. Thornton",
    charter: "Monitors environmental, social, and governance (ESG) initiatives and sustainability reporting.",
  },
];

const documents = [
  { title: "Corporate Governance Guidelines", type: "PDF", size: "234 KB" },
  { title: "Board Committee Charters (All)", type: "PDF", size: "1.2 MB" },
  { title: "Code of Business Conduct & Ethics", type: "PDF", size: "412 KB" },
  { title: "Insider Trading Policy", type: "PDF", size: "189 KB" },
  { title: "Shareholder Communications Policy", type: "PDF", size: "156 KB" },
  { title: "Conflict of Interest Policy", type: "PDF", size: "278 KB" },
];

function IRGovernanceContent() {
  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased bg-white text-[var(--color-text)] selection:bg-[var(--color-accent)] selection:text-white">
        <Header />

        {/* Hero */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="bg-[var(--color-dark-bg)] min-h-[260px] flex items-center relative overflow-hidden text-white"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/templates/OHMT011-ir/ir-2.jpg"
              alt="Governance"
              fill
              priority
              quality={95}
              className="object-cover opacity-30"
              sizes="100vw"
              style={{ objectPosition: 'center 20%' }}
            />
          </div>
          <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 w-full py-14">
            <div className="max-w-[640px]">
              <div className="flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] mb-8">
                <div className="w-6 h-[1px] bg-[var(--color-accent)]" />
                Corporate Governance
              </div>
              <h1 className="text-[clamp(2.2rem,4vw,3.8rem)] font-bold tracking-tight leading-[1.1] mb-6">
                Governance
              </h1>
              <p className="text-[0.9rem] text-white/55 leading-[1.4] max-w-[520px] font-normal">
                Our commitment to transparent, accountable, and responsible corporate governance guides every decision we make.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Board of Directors */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="py-14 bg-white"
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <div className="mb-14 max-w-[640px]">
              <span className="block text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-5">
                Leadership
              </span>
              <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-tight text-[var(--color-dark-bg)] leading-[1.1] mb-6">
                Board of Directors
              </h2>
              <p className="text-[0.88rem] text-[#6B6B6B] leading-[1.82] font-normal">
                Our board comprises distinguished leaders with deep expertise across energy, finance, technology, and public policy.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {boardMembers.map((member) => (
                <motion.div
                  key={member.name}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <div className="w-full aspect-[4/5] bg-[#F9F9F8] relative overflow-hidden mb-4 border border-[var(--color-border)] group-hover:border-[var(--color-accent)] transition-colors">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-[2.4rem] font-bold text-[var(--color-dark-bg)]/20">{member.initials}</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-[0.82rem] font-bold text-[var(--color-dark-bg)] mb-0.5">{member.name}</h3>
                  <p className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[var(--color-accent)] mb-2.5">{member.role}</p>
                  <p className="text-[0.75rem] text-[#6B6B6B] leading-[1.4] font-normal">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Committees */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="py-14 bg-[#F9F9F8]"
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <div className="mb-14 max-w-[640px]">
              <span className="block text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-5">
                Board Oversight
              </span>
              <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-tight text-[var(--color-dark-bg)] leading-[1.1] mb-6">
                Committees
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {committees.map((c) => (
                <motion.div
                  key={c.name}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-8 border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all"
                >
                  <h3 className="text-[0.82rem] font-bold text-[var(--color-dark-bg)] mb-2">{c.name}</h3>
                  <p className="text-[0.65rem] font-medium uppercase tracking-[0.08em] text-[var(--color-accent)] mb-3.5">{c.members}</p>
                  <p className="text-[0.78rem] text-[#6B6B6B] leading-[1.82] font-normal">{c.charter}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Governance Documents */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="py-14 bg-white"
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <div className="mb-14 max-w-[640px]">
              <span className="block text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-5">
                Resources
              </span>
              <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-tight text-[var(--color-dark-bg)] leading-[1.1] mb-6">
                Governance Documents
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-border)]">
              {documents.map((doc) => (
                <div key={doc.title} className="bg-white p-6 flex items-center justify-between group hover:bg-[#F9F9F8] transition-colors">
                  <div>
                    <h3 className="text-[0.82rem] font-bold text-[var(--color-dark-bg)] mb-0.5">{doc.title}</h3>
                    <p className="text-[0.62rem] font-medium uppercase tracking-[0.08em] text-[#6B6B6B]">{doc.type} - {doc.size}</p>
                  </div>
                  <a href="#" className="text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--color-accent)] hover:text-[var(--color-dark-bg)] transition-colors whitespace-nowrap ml-4">
                    Download →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function IRGovernance(props: any) {
  return (
    <React.Suspense fallback={null}>
      <IRGovernanceContent {...props} />
    </React.Suspense>
  );
}
