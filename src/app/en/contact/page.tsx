"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Logo } from "@/components/Logo";
import { ArrowLeft, CheckCircle, LayoutTemplate, Wand2, MessageCircle } from "lucide-react";

type InquiryType = "template" | "custom" | "other" | null;

const packages = [
  { id: "starter", name: "Starter - $4,200" },
  { id: "professional", name: "Professional - $6,200" },
  { id: "premium", name: "Premium - $9,200" },
  { id: "other", name: "Not sure yet" },
];

const INQUIRY_TYPES = [
  {
    id: "template" as InquiryType,
    title: "Template-based Project",
    desc: "Start with a selected template and customize it for your brand",
    icon: LayoutTemplate,
  },
  {
    id: "custom" as InquiryType,
    title: "Custom Website",
    desc: "Fully bespoke design and development built around your vision",
    icon: Wand2,
  },
  {
    id: "other" as InquiryType,
    title: "Other Inquiry",
    desc: "Pricing, timeline, partnership, or anything else on your mind",
    icon: MessageCircle,
  },
];

const INPUT_CLASS = "bg-zinc-50 border border-zinc-200 focus:bg-white focus:border-zinc-900 outline-none text-zinc-900 placeholder:text-zinc-400 px-4 py-3 text-sm w-full transition-all rounded-lg dark:bg-zinc-800 dark:border-zinc-700 dark:focus:bg-zinc-800 dark:focus:border-zinc-500 dark:text-zinc-100 dark:placeholder:text-zinc-500";
const LABEL_CLASS = "text-[0.62rem] uppercase tracking-widest text-zinc-500 font-bold mb-2 block dark:text-zinc-400";

function ContactForm() {
  const searchParams = useSearchParams();
  const templateParam = searchParams.get("template") || "";
  const packageParam = searchParams.get("package") || "";
  const imageParam = searchParams.get("image") || "";
  const categoryParam = searchParams.get("category") || "";

  const hasTemplate = Boolean(templateParam && imageParam);
  const [type, setType] = useState<InquiryType>(hasTemplate ? "template" : null);
  const [submitted, setSubmitted] = useState(false);
  const [heroError, setHeroError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value || "";
    const pkg = (form.elements.namedItem("package") as HTMLSelectElement)?.value || "";
    const template = (form.elements.namedItem("template") as HTMLInputElement)?.value || "";
    const company = (form.elements.namedItem("company") as HTMLInputElement)?.value || "";
    const role = (form.elements.namedItem("role") as HTMLInputElement)?.value || "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const typeLabel = type === "template" ? "Template Project" : type === "custom" ? "Custom Website" : "General Inquiry";
    const subject = `[${typeLabel}] ${template || "Website Inquiry"}`;
    const body = `Type: ${typeLabel}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}${company ? `\nCompany: ${company}` : ""}${role ? `\nRole: ${role}` : ""}${pkg ? `\nPackage: ${pkg}` : ""}${template ? `\nTemplate: ${template}` : ""}\n\nMessage:\n${message}`;
    window.location.href = `mailto:contact@ohmytemplate.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-24 text-center">
        <CheckCircle size={40} className="text-[#F1B100]" strokeWidth={1.5} />
        <div className="space-y-2">
          <p className="text-zinc-900 text-base font-bold dark:text-zinc-100">Your email app has been opened</p>
          <p className="text-sm text-zinc-400 font-normal dark:text-zinc-500">We'll review your request and get back to you within 24 hours.</p>
        </div>
        <Link href="/en" className="mt-4 text-xs uppercase tracking-widest font-bold text-zinc-400 hover:text-zinc-900 transition-colors dark:text-zinc-500 dark:hover:text-zinc-100">
          Back to templates
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {!heroError && (
        <div className="relative w-full aspect-[21/7] rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <img
            src="/contact-hero.jpg"
            alt="Oh My Template studio"
            className="w-full h-full object-cover"
            onError={() => setHeroError(true)}
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {INQUIRY_TYPES.map((t) => {
          const isSelected = type === t.id;
          const isDisabled = hasTemplate && t.id !== "template";
          const Icon = t.icon;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => !isDisabled && setType(t.id)}
              className={`relative flex flex-col gap-4 p-6 rounded-2xl border transition-all duration-200 text-left ${
                isSelected
                  ? "border-zinc-900 bg-zinc-900 shadow-sm dark:border-zinc-100 dark:bg-zinc-100"
                  : isDisabled
                  ? "border-zinc-100 bg-zinc-50 opacity-30 cursor-default dark:border-zinc-800 dark:bg-zinc-900/50"
                  : "border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-md cursor-pointer dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
              }`}
            >
              {isSelected && <span className="absolute top-3.5 right-3.5 w-2 h-2 rounded-full bg-[#F1B100]" />}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${isSelected ? "bg-white/10 dark:bg-zinc-900/20" : "bg-zinc-100 dark:bg-zinc-800"}`}>
                <Icon size={22} className={isSelected ? "text-white dark:text-zinc-900" : "text-zinc-500 dark:text-zinc-400"} strokeWidth={1.5} />
              </div>
              <div className="space-y-1.5 flex-1">
                <p className={`text-base font-bold leading-snug ${isSelected ? "text-white dark:text-zinc-900" : "text-zinc-900 dark:text-zinc-100"}`}>
                  {t.title}
                </p>
                <p className={`text-sm leading-relaxed ${isSelected ? "text-white/50 dark:text-zinc-900/50" : "text-zinc-400 dark:text-zinc-500"}`}>
                  {t.desc}
                </p>
              </div>
              <div className={`w-full py-2 rounded-lg text-xs font-bold uppercase tracking-widest text-center transition-all ${
                isSelected ? "bg-white/10 text-white dark:bg-zinc-900/20 dark:text-zinc-900" : "bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400"
              }`}>
                {isSelected ? "Selected ✓" : "Select"}
              </div>
            </button>
          );
        })}
      </div>

      {type && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          <div className="col-span-1 sticky top-24 space-y-3">
            {type === "template" && templateParam && imageParam ? (
              <>
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
                  <img src={imageParam} alt={templateParam} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <p className="text-[0.58rem] uppercase tracking-widest text-white/50 font-bold mb-0.5">Selected Template</p>
                    <p className="text-lg font-bold text-white tracking-tight leading-tight">{templateParam}</p>
                    {categoryParam && <p className="text-xs text-white/40 mt-1">{categoryParam}</p>}
                  </div>
                </div>
                <div className="space-y-1.5 px-1">
                  {["Premium template included", "Design customization", "24h response guarantee"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500">
                      <span className="w-1 h-1 rounded-full bg-[#F1B100] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="pt-2 space-y-5">
                <div className="space-y-2">
                  <p className="text-[0.58rem] uppercase tracking-widest text-zinc-400 font-bold dark:text-zinc-500">
                    {type === "custom" ? "Custom Website" : "General Inquiry"}
                  </p>
                  <p className="text-base font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                    {type === "custom" ? "Let's build something unique together." : "Got a question? We're here to help."}
                  </p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 leading-relaxed">
                    {type === "custom"
                      ? "From concept to launch, we handle every detail."
                      : "Reach out about anything - no obligation."}
                  </p>
                </div>
                <div className="space-y-1.5">
                  {(type === "custom"
                    ? ["Strategy & UX planning", "Custom design system", "Full-stack development", "Launch & support"]
                    : ["Fast response within 24h", "No obligation", "Speak directly with our team"]
                  ).map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500">
                      <span className="w-1 h-1 rounded-full bg-[#F1B100] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="col-span-2 space-y-5 bg-white border border-zinc-200 rounded-2xl p-8 dark:bg-zinc-900 dark:border-zinc-800">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className={LABEL_CLASS}>Name</label>
                <input type="text" name="name" required className={INPUT_CLASS} placeholder="Your name" />
              </div>
              <div>
                <label className={LABEL_CLASS}>Email</label>
                <input type="email" name="email" required className={INPUT_CLASS} placeholder="your@email.com" />
              </div>
            </div>

            {type === "other" && (
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className={LABEL_CLASS}>Company</label>
                  <input type="text" name="company" className={INPUT_CLASS} placeholder="Company or organization" />
                </div>
                <div>
                  <label className={LABEL_CLASS}>Role</label>
                  <input type="text" name="role" className={INPUT_CLASS} placeholder="e.g. Marketing Manager" />
                </div>
              </div>
            )}

            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className={LABEL_CLASS}>Phone</label>
                <input type="tel" name="phone" className={INPUT_CLASS} placeholder="+1-000-000-0000" />
              </div>
              {type !== "other" && (
                <div>
                  <label className={LABEL_CLASS}>Package</label>
                  <select name="package" defaultValue={packageParam} className={INPUT_CLASS}>
                    <option value="">Select a package</option>
                    {packages.map((p) => <option key={p.id} value={p.name}>{p.name}</option>)}
                  </select>
                </div>
              )}
            </div>

            {type === "template" && (
              <div>
                <label className={LABEL_CLASS}>Template</label>
                <input type="text" name="template" defaultValue={templateParam} className={INPUT_CLASS} placeholder="e.g. Spa Wellness, Fashion, Hotel..." />
              </div>
            )}

            <div>
              <label className={LABEL_CLASS}>{type === "other" ? "Message" : "Project Goals"}</label>
              <textarea
                name="message" rows={6} className={`${INPUT_CLASS} resize-none`}
                placeholder={
                  type === "template" ? "Tell us about your project goals and any customization needs..."
                  : type === "custom" ? "Describe your brand, audience, and what you need built..."
                  : "What can we help you with?"
                }
              />
            </div>

            <button type="submit" className="w-full bg-[#F1B100] hover:bg-[#D9A000] text-zinc-900 font-bold uppercase tracking-widest text-xs py-4 transition-all rounded-lg">
              Submit Inquiry
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FCFCFD] text-zinc-900 font-sans antialiased dark:bg-zinc-950 dark:text-zinc-100">
      <header className="bg-white border-b border-zinc-200/60 sticky top-0 z-40 dark:bg-zinc-900 dark:border-zinc-800">
        <div className="px-6 md:px-12 lg:px-20 py-4 max-w-[1440px] mx-auto flex justify-between items-center">
          <Link href="/en" className="flex items-center gap-3 h-6">
            <Logo className="h-6 w-auto block" />
          </Link>
          <Link href="/ko/contact" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors font-bold dark:text-zinc-500 dark:hover:text-zinc-100">
            KR
          </Link>
        </div>
      </header>

      <section className="px-6 md:px-12 lg:px-20 py-20 max-w-[1440px] mx-auto">
        <Link href="/en" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-zinc-400 hover:text-zinc-900 transition-colors mb-12 dark:text-zinc-500 dark:hover:text-zinc-100">
          <ArrowLeft size={14} />
          Back
        </Link>

        <div className="space-y-3 mb-10">
          <span className="text-[0.65rem] font-extrabold uppercase tracking-widest text-[#F1B100]">Get in Touch</span>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Your brand deserves<br />a website that works.</h1>
          <p className="text-base text-zinc-500 leading-relaxed font-normal dark:text-zinc-400">
            Tell us what you need. We'll handle everything - design, development, and launch - so you can focus on your business.
          </p>
        </div>

        <Suspense>
          <ContactForm />
        </Suspense>
      </section>

      <footer className="border-t border-zinc-200/60 bg-[#FCFCFD] dark:border-zinc-800 dark:bg-zinc-950">
        <div className="px-6 md:px-12 lg:px-20 py-12 max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <Link href="/en" className="flex items-center gap-3 h-6">
              <Logo className="h-6 w-auto block" />
            </Link>
            <div className="flex gap-8 text-xs font-bold text-zinc-400 uppercase tracking-widest dark:text-zinc-500">
              <Link href="/ko/contact" className="hover:text-zinc-950 transition-colors dark:hover:text-zinc-100">Korean</Link>
              <Link href="/en" className="hover:text-zinc-950 transition-colors dark:hover:text-zinc-100">Templates</Link>
            </div>
          </div>
          <div className="text-[0.62rem] font-bold text-zinc-400 uppercase tracking-widest mt-8 border-t border-zinc-100 pt-6 dark:text-zinc-500 dark:border-zinc-800">
            &copy; 2026 Oh My Template. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
