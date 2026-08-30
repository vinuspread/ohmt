"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Home, Ticket, ShoppingBag, Menu, ChevronUp } from "lucide-react";
import { motion } from "motion/react";

interface MobileBottomTabBarProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  onTicketClick: () => void;
}

const navItems = [
  {
    name: "Home",
    href: "/en/templates/OHMT021-museum",
    icon: Home,
    activeIcon: Home,
  },
  {
    name: "Collections",
    href: "/en/templates/OHMT021-museum/collections",
    icon: ChevronUp,
    activeIcon: ChevronUp,
  },
  {
    name: "Tickets",
    href: "#",
    icon: Ticket,
    activeIcon: Ticket,
    isAction: true,
  },
  {
    name: "Shop",
    href: "/en/templates/OHMT021-museum/shop",
    icon: ShoppingBag,
    activeIcon: ShoppingBag,
  },
];

export default function MobileBottomTabBar({ isMenuOpen, onMenuToggle, onTicketClick }: MobileBottomTabBarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/en/templates/OHMT021-museum" || href === "#") {
      return pathname === "/en/templates/OHMT021-museum";
    }
    return pathname.startsWith(href);
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed inset-x-0 bottom-0 z-[80] w-full max-w-full overflow-x-clip border-t border-[var(--color-accent)]/10 bg-[var(--color-primary)] pb-[env(safe-area-inset-bottom)]"
    >
      <nav className="grid w-full max-w-full grid-cols-4 items-center gap-1 px-2 py-3">
        {navItems.map((item) => {
          const isActiveItem = isActive(item.href);
          const Icon = isActiveItem ? item.activeIcon : item.icon;
          const content = (
            <>
              <Icon size={18} className="mb-1.5 shrink-0" />
              <span className="block max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-xs font-medium uppercase leading-none tracking-[0.06em]">
                {item.name}
              </span>
            </>
          );

          const className = `mx-auto flex h-14 w-full min-w-0 max-w-[76px] flex-col items-center justify-center rounded-xl px-1 transition-all duration-300 ${
            isActiveItem
              ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
              : "text-[var(--color-accent)]/50 hover:bg-[var(--color-accent)]/5 hover:text-[var(--color-accent)]"
          }`;

          return item.isAction ? (
            <button
              key={item.name}
              type="button"
              onClick={onTicketClick}
              className={className}
            >
              {content}
            </button>
          ) : (
            <a key={item.name} href={item.href} className={className}>
              {content}
            </a>
          );
        })}

        {/* Menu Button */}
        <button
          onClick={onMenuToggle}
          className={`mx-auto flex h-14 w-full min-w-0 max-w-[76px] flex-col items-center justify-center rounded-xl px-1 transition-all duration-300 ${
            isMenuOpen
              ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
              : "text-[var(--color-accent)]/50 hover:bg-[var(--color-accent)]/5 hover:text-[var(--color-accent)]"
          }`}
        >
          <Menu size={18} className="mb-1.5 shrink-0" />
          <span className="block max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-xs font-medium uppercase leading-none tracking-[0.06em]">
            Menu
          </span>
        </button>
      </nav>
    </motion.div>
  );
}
