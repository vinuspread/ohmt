"use client";

import { Suspense } from "react";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

const teamMembers = [
  { name: "Sarah Chen", title: "Vice President, Investor Relations", phone: "+1 (212) 555-0198", email: "schen@ohmytemplate.com", image: "/templates/OHMT011-ir/member-st.png" },
  { name: "James Rodriguez", title: "Director, Investor Relations", phone: "+1 (212) 555-0423", email: "jrodriguez@ohmytemplate.com", image: "/templates/OHMT011-ir/member-rc.png" },
  { name: "Emily Park", title: "Manager, Shareholder Services", phone: "+1 (212) 555-0771", email: "epark@ohmytemplate.com", image: "/templates/OHMT011-ir/member-ca.png" },
  { name: "David Kim", title: "Analyst, Financial Communications", phone: "+1 (212) 555-0635", email: "dkim@ohmytemplate.com", image: "/templates/OHMT011-ir/member-dp.png" },
];

function IRContactContent() {
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
              src="/templates/OHMT011-ir/news-event.png"
              alt="Contact IR"
              fill
              priority
              quality={95}
              className="object-cover opacity-30"
              sizes="100vw"
              style={{ objectPosition: 'center 35%' }}
            />
          </div>
          <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 w-full py-14">
            <div className="max-w-[640px]">
              <div className="flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[var(--color-accent)] mb-8">
                <div className="w-6 h-[1px] bg-[var(--color-accent)]" />
                Investor Relations
              </div>
              <h1 className="text-[clamp(2.2rem,4vw,3.8rem)] font-bold tracking-tight leading-[1.1] mb-6">
                Get in Touch
              </h1>
              <p className="text-[0.9rem] text-white/55 leading-[1.4] max-w-[520px] font-normal">
                Our investor relations team is dedicated to providing timely and transparent communication. We welcome your inquiries.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Contact Team */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="py-14 bg-white"
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <div className="mb-16 max-w-[640px]">
              <span className="block text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-5">
                Our Team
              </span>
              <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-bold tracking-tight text-[var(--color-dark-bg)] leading-[1.1] mb-6">
                Meet the IR Team
              </h2>
              <p className="text-[0.88rem] text-[#6B6B6B] leading-[1.82] font-normal">
                Our dedicated investor relations professionals are here to assist you with financial inquiries, shareholder services, and corporate access.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="pb-12 border-b border-[var(--color-border)]"
                >
                  <div className="flex items-center gap-6 mb-4">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-dark-bg)] flex items-center justify-center text-white font-bold text-lg overflow-hidden relative shrink-0">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      ) : (
                        member.name.split(" ").map(n => n[0]).join("")
                      )}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[var(--color-dark-bg)]">{member.name}</h3>
                      <p className="text-[0.75rem] text-[#6B6B6B]">{member.title}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-x-8 gap-y-1 text-[0.82rem] text-[#6B6B6B]">
                    <span className="flex items-center gap-2">
                      <span className="text-[var(--color-accent)] text-[0.65rem]">●</span> {member.phone}
                    </span>
                    <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-[var(--color-dark-bg)] hover:text-[var(--color-accent)] transition-colors">
                      <span className="text-[var(--color-accent)] text-[0.65rem]">●</span> {member.email}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Contact Form / Inquiry */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="py-14 bg-[#F9F9F8] border-y border-[var(--color-border)]"
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <div className="grid md:grid-cols-2 gap-20">
              <div>
                <span className="block text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#6B6B6B] mb-5">
                  Send a Message
                </span>
                <h2 className="text-[clamp(1.5rem,2.5vw,2.2rem)] font-bold tracking-tight text-[var(--color-dark-bg)] leading-[1.1] mb-6">
                  Submit an Inquiry
                </h2>
                <p className="text-[0.88rem] text-[#6B6B6B] leading-[1.82] font-normal mb-8">
                  For investor-related inquiries, please fill out the form and our team will respond within one business day.
                </p>

                <div className="flex flex-col gap-2 text-[0.82rem] text-[#6B6B6B]">
                  <div className="flex items-center gap-3">
                    <span className="w-20 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--color-dark-bg)]">Address</span>
                    <span>200 Liberty Street, 45th Floor, New York, NY 10281</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-20 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--color-dark-bg)]">Phone</span>
                    <span>+1 (212) 555-0100</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-20 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--color-dark-bg)]">Email</span>
                    <a href="mailto:ir@ohmytemplate.com" className="text-[var(--color-dark-bg)] hover:text-[var(--color-accent)] transition-colors">ir@ohmytemplate.com</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-20 text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--color-dark-bg)]">Transfer Agent</span>
                    <span>Computershare Trust Company, N.A.</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-10 border border-[var(--color-border)]">
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--color-dark-bg)] mb-2">First Name</label>
                    <input type="text" className="w-full border border-[var(--color-border)] px-4 py-2.5 text-[0.82rem] text-[var(--color-text)] outline-none focus:border-[var(--color-accent)] transition-colors" placeholder="John" />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--color-dark-bg)] mb-2">Last Name</label>
                    <input type="text" className="w-full border border-[var(--color-border)] px-4 py-2.5 text-[0.82rem] text-[var(--color-text)] outline-none focus:border-[var(--color-accent)] transition-colors" placeholder="Doe" />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--color-dark-bg)] mb-2">Email</label>
                    <input type="email" className="w-full border border-[var(--color-border)] px-4 py-2.5 text-[0.82rem] text-[var(--color-text)] outline-none focus:border-[var(--color-accent)] transition-colors" placeholder="john.doe@example.com" />
                  </div>
                  <div className="col-span-2">
                    <label className="block text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--color-dark-bg)] mb-2">Subject</label>
                    <select className="w-full border border-[var(--color-border)] px-4 py-2.5 text-[0.82rem] text-[#6B6B6B] outline-none focus:border-[var(--color-accent)] transition-colors bg-white">
                      <option>General Inquiry</option>
                      <option>Shareholder Services</option>
                      <option>Financial Information</option>
                      <option>Media / Press</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-[0.62rem] font-bold uppercase tracking-[0.12em] text-[var(--color-dark-bg)] mb-2">Message</label>
                    <textarea rows={4} className="w-full border border-[var(--color-border)] px-4 py-2.5 text-[0.82rem] text-[var(--color-text)] outline-none focus:border-[var(--color-accent)] transition-colors resize-none" placeholder="Your message..." />
                  </div>
                  <div className="col-span-2 pt-2">
                    <button className="text-[0.72rem] font-bold uppercase tracking-[0.14em] px-8 py-3.5 bg-[var(--color-dark-bg)] text-white hover:bg-[var(--color-accent)] transition-all duration-300">
                      Submit Inquiry
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}


export default function IRContact(props: any) {
  return (
    <React.Suspense fallback={null}>
      <IRContactContent {...props} />
    </React.Suspense>
  );
}
