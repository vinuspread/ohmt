import { AdminShell } from "@/app/admin/_components/layout/AdminShell";
import { AssetManager } from "@/app/admin/_components/assets/AssetManager";

export default function AssetsPage() {
  return (
    <AdminShell title="미디어">
      <AssetManager />
    </AdminShell>
  );
}
