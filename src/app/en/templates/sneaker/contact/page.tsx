"use client";
import React, { useState, Suspense } from "react";
import { Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { TemplateWrapper } from "../_components/TemplateWrapper";
import theme from "../theme.json";
import { Header } from "../_components/layout/Header";
import { Footer } from "../_components/layout/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <TemplateWrapper theme={theme}>
      <div className="bg-white text-black font-sans">
        <Header />

        {/* Header */}
        <section className="pt-16 md:pt-32 pb-16 border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-6">
            <span className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-black/40 block mb-4">Get in Touch</span>
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-[-0.03em] uppercase leading-[1.1]">Contact Us</h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-10 md:py-20">
          <div className="max-w-[1440px] mx-auto px-6 grid md:grid-cols-2 gap-20">

            {/* Info */}
            <div>
              <p className="text-[0.95rem] text-black/60 leading-[1.4] mb-12 max-w-[420px]">
                Questions about sizing, returns, or wholesale? We typically reply within one business day. You can also visit us at our Lisbon flagship store.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <span className="mt-1 text-black/30"><Mail size={20} /></span>
                  <div>
                    <p className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-black/40 mb-1">Email</p>
                    <p className="text-[0.9rem] font-bold">hello@vinus.co</p>
                    <p className="text-[0.82rem] text-black/50">Returns & Exchanges: returns@vinus.co</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <span className="mt-1 text-black/30"><MapPin size={20} /></span>
                  <div>
                    <p className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-black/40 mb-1">Flagship Store</p>
                    <p className="text-[0.9rem] font-bold">Rua do Ouro 142</p>
                    <p className="text-[0.82rem] text-black/50">1150-062 Lisbon, Portugal</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <span className="mt-1 text-black/30"><Clock size={20} /></span>
                  <div>
                    <p className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-black/40 mb-1">Store Hours</p>
                    <p className="text-[0.9rem] font-bold">Mon – Sat: 10:00 – 20:00</p>
                    <p className="text-[0.82rem] text-black/50">Sunday: 12:00 – 18:00</p>
                  </div>
                </div>
              </div>

              {/* FAQ quick links */}
              <div className="mt-14 pt-10 border-t border-black/10">
                <p className="text-[0.78rem] font-bold uppercase tracking-[0.1em] text-black/40 mb-5">Quick Help</p>
                <div className="space-y-3">
                  {["Sizing Guide", "Shipping & Delivery", "Returns Policy", "Care Instructions"].map(item => (
                    <div key={item} className="flex items-center justify-between py-3 border-b border-black/5 group cursor-pointer">
                      <span className="text-[0.88rem] font-bold group-hover:opacity-60 transition-opacity">{item}</span>
                      <ArrowRight size={14} className="text-black/30 group-hover:translate-x-1 transition-transform" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10 md:py-20">
                  <div className="w-16 h-16 bg-black flex items-center justify-center mb-6">
                    <ArrowRight size={24} className="text-white" />
                  </div>
                  <h2 className="text-[1.5rem] font-black uppercase mb-3">Message Sent</h2>
                  <p className="text-[0.9rem] text-black/60">We'll get back to you within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[0.72rem] font-bold uppercase tracking-[0.1em] text-black/50 mb-2">First Name</label>
                      <input required type="text" className="w-full border border-black/20 px-4 py-3 text-[0.88rem] focus:outline-none focus:border-black transition-colors bg-white" placeholder="Marco" />
                    </div>
                    <div>
                      <label className="block text-[0.72rem] font-bold uppercase tracking-[0.1em] text-black/50 mb-2">Last Name</label>
                      <input required type="text" className="w-full border border-black/20 px-4 py-3 text-[0.88rem] focus:outline-none focus:border-black transition-colors bg-white" placeholder="Vinus" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[0.72rem] font-bold uppercase tracking-[0.1em] text-black/50 mb-2">Email</label>
                    <input required type="email" className="w-full border border-black/20 px-4 py-3 text-[0.88rem] focus:outline-none focus:border-black transition-colors bg-white" placeholder="your@email.com" />
                  </div>

                  <div>
                    <label className="block text-[0.72rem] font-bold uppercase tracking-[0.1em] text-black/50 mb-2">Subject</label>
                    <select className="w-full border border-black/20 px-4 py-3 text-[0.88rem] focus:outline-none focus:border-black transition-colors bg-white">
                      <option>Order Inquiry</option>
                      <option>Returns & Exchanges</option>
                      <option>Sizing Help</option>
                      <option>Wholesale</option>
                      <option>Press & Media</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[0.72rem] font-bold uppercase tracking-[0.1em] text-black/50 mb-2">Message</label>
                    <textarea required rows={6} className="w-full border border-black/20 px-4 py-3 text-[0.88rem] focus:outline-none focus:border-black transition-colors bg-white resize-none" placeholder="How can we help?" />
                  </div>

                  <button type="submit" className="w-full bg-black text-white text-[0.82rem] font-bold uppercase tracking-[0.08em] py-4 hover:bg-black/80 transition-colors flex items-center justify-center gap-3">
                    Send Message <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <Suspense fallback={null}><Footer /></Suspense>
      </div>
    </TemplateWrapper>
  );
}
