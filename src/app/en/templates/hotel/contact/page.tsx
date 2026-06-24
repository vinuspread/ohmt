"use client";

import React, { useState } from "react";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { Button } from "../_components/ui/Button";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from "lucide-react";
import theme from "../theme.json";
import { TemplateWrapper } from "../_components/TemplateWrapper";

function ContactPageContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <TemplateWrapper theme={theme}>
      <main className="antialiased min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        <Navbar />

        {/* Hero Section */}
        <section className="relative h-[40vh] md:h-[50vh] flex items-center bg-[var(--color-primary)] overflow-hidden">
          <div className="absolute inset-0">
            <img src="/templates/hotel/story-03.jpg" alt="Contact" className="w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/40 to-transparent" />
          </div>
          <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-20">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="text-[11px] font-medium text-[var(--color-accent)] uppercase tracking-[0.25em] block mb-3">Connect With Us</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-[var(--font-heading)] font-bold text-[var(--color-bg)]">Contact & Location</h1>
            </motion.div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              {/* Left Column: Contact details & Map */}
              <div className="lg:col-span-5 flex flex-col gap-10">
                <div>
                  <span className="text-[11px] font-semibold text-[var(--color-accent)] uppercase tracking-[0.2em] block mb-3">Reach Out</span>
                  <h2 className="text-3xl font-[var(--font-heading)] font-bold text-[var(--color-primary)] mb-6">Our Resort Location</h2>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    Set on a secluded hillside dropping into a private bay, Oh My Template is situated on Koh Samui’s pristine north-eastern coast.
                  </p>
                </div>

                <div className="flex flex-col gap-6 text-sm">
                  <div className="flex gap-4 items-start">
                    <MapPin className="text-[var(--color-accent)] flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="font-semibold text-[var(--color-primary)] mb-1">Resort Address</h4>
                      <p className="text-[var(--color-text-muted)]">123 Serenity Bay, Koh Samui, Thailand</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Phone className="text-[var(--color-accent)] flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="font-semibold text-[var(--color-primary)] mb-1">Inquiries & Booking</h4>
                      <p className="text-[var(--color-text-muted)]">+66 2 123 4567</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Mail className="text-[var(--color-accent)] flex-shrink-0 mt-1" size={18} />
                    <div>
                      <h4 className="font-semibold text-[var(--color-primary)] mb-1">General Inquiries</h4>
                      <p className="text-[var(--color-text-muted)]">contact@ohmytemplate.com</p>
                    </div>
                  </div>
                </div>

                {/* OpenStreetMap embed - Koh Samui, Thailand */}
                <div className="aspect-[16/10] border border-[var(--color-border)] overflow-hidden">
                  <iframe
                    title="Oh My Template Location"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=99.9%2C9.45%2C100.15%2C9.6&layer=mapnik&marker=9.527%2C100.063"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7 bg-white border border-[var(--color-border)] p-8 md:p-12">
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16 flex flex-col items-center gap-6">
                    <div className="w-16 h-16 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center text-[var(--color-accent)]">
                      <MessageSquare size={32} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-[var(--font-heading)] font-bold text-[var(--color-primary)] mb-2">Message Sent Successfully</h2>
                      <p className="text-sm text-[var(--color-text-muted)] max-w-md mx-auto">
                        Your message has been delivered to our guest relations desk. We will review your inquiry and get back to you shortly.
                      </p>
                    </div>
                    <Button variant="primary" size="md" onClick={() => setSubmitted(false)} className="text-[11px] tracking-[0.2em] uppercase rounded-sm mt-4">Send Another Message</Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSend} className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-2xl font-[var(--font-heading)] font-bold text-[var(--color-primary)] mb-2">Send Us A Message</h3>
                      <p className="text-sm text-[var(--color-text-muted)]">Have a custom request or need general assistance? Drop us a line below.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div>
                        <label className="text-[10px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider block mb-2">Full Name *</label>
                        <input required type="text" placeholder="John Doe" className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-sm" />
                      </div>
                      <div>
                        <label className="text-[10px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider block mb-2">Email Address *</label>
                        <input required type="email" placeholder="john.doe@example.com" className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-sm" />
                      </div>
                      <div>
                        <label className="text-[10px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider block mb-2">Subject</label>
                        <input type="text" placeholder="Spa booking, Group events, Airport shuttle etc." className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors rounded-sm" />
                      </div>
                      <div>
                        <label className="text-[10px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider block mb-2">Your Message *</label>
                        <textarea required rows={5} placeholder="Write your message here..." className="w-full border border-[var(--color-border)] bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none rounded-sm" />
                      </div>
                    </div>

                    <div>
                      <Button variant="primary" size="lg" className="w-full text-[11px] tracking-[0.2em] uppercase rounded-sm flex items-center justify-center gap-2">
                        <Send size={14} /> Send Message
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TemplateWrapper>
  );
}

export default function ContactPage() {
  return (
    <React.Suspense fallback={null}>
      <ContactPageContent />
    </React.Suspense>
  );
}
