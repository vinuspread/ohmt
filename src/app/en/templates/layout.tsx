import { PreviewBar } from "@/app/_components/PreviewBar";

export default function EnTemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PreviewBar>{children}</PreviewBar>;
}
