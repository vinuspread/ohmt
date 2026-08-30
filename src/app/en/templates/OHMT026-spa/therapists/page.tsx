import type { Metadata } from "next";
import TherapistsFull from "./TherapistsFull";

export const metadata: Metadata = { title: "Therapists - SERENITY" };

export default function TherapistsPage() {
  return <TherapistsFull />;
}
