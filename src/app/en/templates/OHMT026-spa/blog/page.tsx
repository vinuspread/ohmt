import type { Metadata } from "next";
import BlogFull from "./BlogFull";

export const metadata: Metadata = { title: "Blog - SERENITY" };

export default function BlogPage() {
  return <BlogFull />;
}
