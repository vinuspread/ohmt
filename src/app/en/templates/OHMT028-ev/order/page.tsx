"use client";
import { useState } from "react";
import { TrimSelector, type TrimId } from "../_components/order/TrimSelector";
import { OptionsSelector } from "../_components/order/OptionsSelector";
import { OrderSummary } from "../_components/order/OrderSummary";
import { ReserveForm } from "../_components/order/ReserveForm";

export default function OrderPage() {
  const [selectedTrim, setSelectedTrim] = useState<TrimId>("longrange");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  return (
    <div className="bg-[var(--bg)] min-h-screen">
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[320px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/templates/OHMT028-ev/order-header.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pb-12 md:pb-16">
            <p className="font-inter font-medium text-[11px] tracking-[0.15em] text-[var(--accent)] uppercase mb-3">
              Early Access
            </p>
            <h1 className="font-michroma text-[clamp(36px,4.5vw,64px)] text-[var(--text)] leading-[0.95] tracking-[-0.03em]">
              Configure your NUBI
            </h1>
          </div>
        </div>
      </div>

      {/* Configurator */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="max-w-[720px] space-y-16">
          <TrimSelector selected={selectedTrim} onChange={setSelectedTrim} />
          <OptionsSelector selected={selectedOptions} onChange={setSelectedOptions} />
          <ReserveForm />
          <OrderSummary selectedTrim={selectedTrim} selectedOptions={selectedOptions} />
        </div>
      </div>
    </div>
  );
}
