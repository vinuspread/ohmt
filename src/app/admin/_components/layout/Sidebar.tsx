"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Inbox, LayoutTemplate, LogOut, ShoppingBag, Upload } from "lucide-react";
import { clsx } from "clsx";
import { createClient } from "@/lib/supabase/client";

const navItems = [
  { href: "/admin/templates", label: "Templates", icon: LayoutTemplate },
  { href: "/admin/uploads", label: "업로드 목록", icon: Inbox },
  { href: "/admin/templates/upload", label: "zip 업로드", icon: Upload },
  { href: "/admin/orders", label: "Orders", icon: ShoppingBag },
];

function isNavItemActive(pathname: string, href: string) {
  if (href === "/admin/templates") {
    return pathname === href || (pathname.startsWith(`${href}/`) && !pathname.startsWith("/admin/templates/upload"));
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  return (
    <aside className="w-60 min-h-screen bg-zinc-900 flex flex-col">
      <div className="px-6 py-5 border-b border-zinc-800">
        <span className="text-white font-semibold text-sm">Oh My Template</span>
        <span className="block text-zinc-500 text-xs mt-0.5">Admin</span>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1" aria-label="Admin navigation">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isNavItemActive(pathname, item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={clsx(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900",
                active ? "bg-zinc-800 text-white" : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
              )}
            >
              <Icon aria-hidden="true" className="w-4 h-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-4 border-t border-zinc-800">
        <button
          type="button"
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
        >
          <LogOut aria-hidden="true" className="w-4 h-4" />
          로그아웃
        </button>
      </div>
    </aside>
  );
}
