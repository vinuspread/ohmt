import type { Metadata } from "next";
import ServiceFull from "./ServiceFull";

export const metadata: Metadata = { title: "Services - SERENITY" };

export default function ServicePage() {
  return <ServiceFull />;
}
