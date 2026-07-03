import DevicePreviewShell from "@/components/DevicePreviewShell";

export default function EnTemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DevicePreviewShell>{children}</DevicePreviewShell>;
}
