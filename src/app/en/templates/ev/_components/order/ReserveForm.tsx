"use client";
import { useState } from "react";

export function ReserveForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const isValid = name.trim().length > 0 && email.includes("@") && phone.trim().length > 5;

  return (
    <section>
      <h2 className="font-michroma text-[clamp(18px,2vw,28px)] text-[var(--text)] leading-[1.0] tracking-[-0.02em] mb-6">
        Your details
      </h2>
      <div className="space-y-4">
        <div>
          <label className="font-inter text-[11px] tracking-[0.08em] text-[var(--text-muted)] uppercase block mb-2">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Smith"
            className="w-full bg-[var(--bg-alt)] border border-[var(--border)] rounded-lg px-5 py-3.5 font-inter text-[14px] text-[var(--text)] placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--accent)] transition-colors"
          />
        </div>
        <div>
          <label className="font-inter text-[11px] tracking-[0.08em] text-[var(--text-muted)] uppercase block mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@example.com"
            className="w-full bg-[var(--bg-alt)] border border-[var(--border)] rounded-lg px-5 py-3.5 font-inter text-[14px] text-[var(--text)] placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--accent)] transition-colors"
          />
        </div>
        <div>
          <label className="font-inter text-[11px] tracking-[0.08em] text-[var(--text-muted)] uppercase block mb-2">
            Phone
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 (555) 000-0000"
            className="w-full bg-[var(--bg-alt)] border border-[var(--border)] rounded-lg px-5 py-3.5 font-inter text-[14px] text-[var(--text)] placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--accent)] transition-colors"
          />
        </div>
        <div className="pt-2">
          <button
            disabled={!isValid}
            className={`w-full py-4 rounded-full font-inter font-medium text-[13px] tracking-[0.03em] transition-all duration-200 ${
              isValid
                ? "bg-[var(--accent)] text-[var(--text-on-light)] hover:bg-[var(--accent-dark)]"
                : "bg-[var(--border)] text-[var(--text-muted)] cursor-not-allowed"
            }`}
          >
            Reserve for $300 →
          </button>
          <p className="font-inter text-[14px] text-[var(--text-muted)] text-center mt-3">
            Fully refundable. No commitment required.
          </p>
        </div>
      </div>
    </section>
  );
}
