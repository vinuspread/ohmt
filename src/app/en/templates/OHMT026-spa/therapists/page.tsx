import type { Metadata } from "next";
import TherapistsFull from "./TherapistsFull";

export const metadata: Metadata = { title: "Therapists - SERENITY Spa" };

export default function TherapistsPage() {
  return <TherapistsFull />;
}
