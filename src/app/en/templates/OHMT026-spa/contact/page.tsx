import type { Metadata } from "next";
import ContactFull from "./ContactFull";

export const metadata: Metadata = { title: "Contact - SERENITY Spa" };

export default function ContactPage() {
  return <ContactFull />;
}
