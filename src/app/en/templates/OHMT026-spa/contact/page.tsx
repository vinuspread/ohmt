import type { Metadata } from "next";
import ContactFull from "./ContactFull";

export const metadata: Metadata = { title: "Contact - SERENITY" };

export default function ContactPage() {
  return <ContactFull />;
}
