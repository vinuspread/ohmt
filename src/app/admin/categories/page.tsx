import { AdminShell } from "@/app/admin/_components/layout/AdminShell";
import { CategoryManager } from "@/app/admin/_components/categories/CategoryManager";
import { createClient } from "@/lib/supabase/server";
import type { Category } from "@/types/template";

export default async function CategoriesPage() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("categories").select("*").order("sort_order", { ascending: true });
  const categories: Category[] = error ? [] : data ?? [];

  return (
    <AdminShell title="카테고리">
      <CategoryManager data={categories} />
    </AdminShell>
  );
}
