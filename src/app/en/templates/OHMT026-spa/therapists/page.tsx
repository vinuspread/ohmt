import type { Metadata } from "next";
import TherapistsFull from "./TherapistsFull";

export const metadata: Metadata = { title: "Therapists - OHMT Spa" };

export default function TherapistsPage() {
  return <TherapistsFull />;
}
