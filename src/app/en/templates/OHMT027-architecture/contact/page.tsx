import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Project Inquiry | OHMT Architecture Studio",
  description: "Tell us the location, purpose, scale, budget, and timeline of the space you're planning.",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://ohmt.site/en/templates/OHMT027-architecture/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
