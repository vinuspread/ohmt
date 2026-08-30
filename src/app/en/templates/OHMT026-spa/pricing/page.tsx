import type { Metadata } from "next";
import PricingFull from "./PricingFull";

export const metadata: Metadata = { title: "Pricing - SERENITY" };

export default function PricingPage() {
  return <PricingFull />;
}
