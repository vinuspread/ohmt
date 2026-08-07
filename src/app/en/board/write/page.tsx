"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, CheckCircle } from "lucide-react";

const INPUT_CLASS = "inquiry-board-input w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-[#F1B100] focus:bg-white focus-visible:ring-1 focus-visible:ring-[#F1B100]/40 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-[#F1B100] dark:focus:bg-zinc-800";
const LABEL_CLASS = "mb-2 block text-[0.62rem] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400";

export default function WritePage() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    const form = new FormData(event.currentTarget);
    const res = await fetch("/api/board", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lang: "en",
        title: form.get("title"),
        authorName: form.get("name"),
        contact: form.get("contact"),
        content: form.get("content"),
        password: form.get("password"),
        isSecret: form.get("isSecret") === "on",
        website: form.get("website"),
      }),
    });

    setSubmitting(false);

    if (res.ok) {
      setSubmitted(true);
      window.setTimeout(() => router.push("/en/board"), 1600);
    } else {
      const body = await res.json().catch(() => ({}));
      setError(body.error ?? "Failed to submit. Please try again in a moment.");
    }
  }

  return (
    <section className="px-5 py-12 sm:px-6 md:px-12 md:py-20 lg:px-20">
      <div className="mx-auto max-w-[1200px]">
        <Link href="/en/board" className="mb-8 inline-flex items-center gap-2 text-xs font-bold text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"><ArrowLeft size={14} />Back to list</Link>
        {submitted ? (
          <div role="status" className="rounded-xl border border-zinc-200/60 bg-white px-6 py-24 text-center dark:border-zinc-800 dark:bg-zinc-900">
            <CheckCircle className="mx-auto text-[#F1B100]" size={40} strokeWidth={1.5} />
            <h1 className="mt-6 text-xl font-bold">Your inquiry has been submitted</h1>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Redirecting to the inquiry board shortly.</p>
          </div>
        ) : (
          <>
            <div className="mb-10"><p className="mb-3 text-[0.62rem] font-extrabold uppercase tracking-[0.2em] text-[#B88400] dark:text-[#F1B100]">New inquiry</p><h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Write an Inquiry</h1><p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">Leave your contact info and message. The password is used to reopen the post later.</p></div>
            <form onSubmit={handleSubmit} className="space-y-10">
              <label><span className={LABEL_CLASS}>Title</span><input name="title" required maxLength={80} className={INPUT_CLASS} placeholder="Enter a title for your inquiry" /></label>
              <label><span className={LABEL_CLASS}>Message</span><textarea name="content" required rows={8} maxLength={4000} className={`${INPUT_CLASS} resize-y`} placeholder="Describe your inquiry in detail" /></label>
              <div className="grid gap-10 sm:grid-cols-2">
                <label><span className={LABEL_CLASS}>Name</span><input name="name" required autoComplete="name" maxLength={60} className={INPUT_CLASS} placeholder="Name" /></label>
                <label><span className={LABEL_CLASS}>Contact</span><input name="contact" required maxLength={120} className={INPUT_CLASS} placeholder="Email or phone number" /></label>
              </div>
              <label><span className={LABEL_CLASS}>Password</span><input name="password" required type="password" minLength={4} autoComplete="new-password" className={INPUT_CLASS} placeholder="At least 4 characters" /><span className="mt-2 block text-xs leading-relaxed text-zinc-400">You&apos;ll need this to reopen the post later. Please remember it.</span></label>
              <label className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                <input name="isSecret" type="checkbox" className="h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900" />
                Make this a private post (only you and OHMT can view it)
              </label>
              <div className="hidden" aria-hidden="true">
                <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
              </div>
              {error && <p role="alert" className="text-sm font-medium text-red-600">{error}</p>}
              <div className="flex justify-end gap-3 border-t border-zinc-100 pt-8 dark:border-zinc-800"><Link href="/en/board" className="rounded-lg border border-zinc-200 px-5 py-3 text-xs font-bold text-zinc-500 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:hover:text-zinc-100">Cancel</Link><button type="submit" disabled={submitting} className="rounded-lg bg-[#222] px-6 py-3 text-xs font-bold text-[#F1B100] transition-colors hover:bg-[#2B2B2B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F1B100] active:translate-y-px disabled:opacity-50">{submitting ? "Submitting..." : "Submit Inquiry"}</button></div>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
