"use client";
import { useState } from "react";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/sections/Footer";
import { TrimSelector, type TrimId } from "../_components/order/TrimSelector";
import { OptionsSelector } from "../_components/order/OptionsSelector";
import { OrderSummary } from "../_components/order/OrderSummary";
import { ReserveForm } from "../_components/order/ReserveForm";

export default function OrderPage() {
  const [selectedTrim, setSelectedTrim] = useState<TrimId>("longrange");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  return (
    <div className="bg-[var(--bg)] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[55vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/templates/OHMT028-ev/order-header.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/40 to-transparent" />
        <div className="absolute inset-0 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex items-end pb-12 md:pb-16">
          <div>
            <p className="font-inter text-[11px] tracking-[0.15em] text-[var(--accent)] uppercase mb-3">
              사전 예약
            </p>
            <h1 className="font-michroma text-[clamp(32px,4.5vw,60px)] text-[var(--text)] leading-[0.95] tracking-[-0.03em]">
              NUBI 예약하기
            </h1>
          </div>
        </div>
      </section>

      {/* Form */}
      <div className="w-full max-w-[720px] mx-auto px-6 md:px-12 py-16 md:py-24 space-y-14">
        <TrimSelector selected={selectedTrim} onChange={setSelectedTrim} />
        <OptionsSelector selected={selectedOptions} onChange={setSelectedOptions} />
        <ReserveForm />
        <OrderSummary selectedTrim={selectedTrim} selectedOptions={selectedOptions} />
      </div>

      <Footer />
    </div>
  );
}
