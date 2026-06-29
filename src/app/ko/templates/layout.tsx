import { PreviewBar } from "@/app/_components/PreviewBar";

export default function KoTemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PreviewBar>{children}</PreviewBar>;
}
