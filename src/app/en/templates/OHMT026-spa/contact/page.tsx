import type { Metadata } from "next";
import ContactFull from "./ContactFull";

export const metadata: Metadata = { title: "Contact - OHMT Spa" };

export default function ContactPage() {
  return <ContactFull />;
}
