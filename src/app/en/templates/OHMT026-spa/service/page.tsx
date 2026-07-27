import type { Metadata } from "next";
import ServiceFull from "./ServiceFull";

export const metadata: Metadata = { title: "Services - OHMT Spa" };

export default function ServicePage() {
  return <ServiceFull />;
}
