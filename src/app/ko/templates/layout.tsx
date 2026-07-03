import DevicePreviewShell from "@/components/DevicePreviewShell";

export default function KoTemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DevicePreviewShell>{children}</DevicePreviewShell>;
}
