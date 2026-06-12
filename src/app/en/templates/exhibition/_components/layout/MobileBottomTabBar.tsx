"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Ticket, ShoppingBag, Menu, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

interface MobileBottomTabBarProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  onTicketClick: () => void;
}

const navItems = [
  {
    name: "Home",
    href: "/exhibition",
    icon: Home,
    activeIcon: Home,
  },
  {
    name: "Collections",
    href: "/templates/exhibition/collections",
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
    href: "/templates/exhibition/souvenir",
    icon: ShoppingBag,
    activeIcon: ShoppingBag,
  },
];

export default function MobileBottomTabBar({ isMenuOpen, onMenuToggle, onTicketClick }: MobileBottomTabBarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/exhibition" || href === "#") {
      return pathname === "/exhibition" || pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const handleTicketClick = () => {
    // This will be handled by the parent component
    onMenuToggle();
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed bottom-0 left-0 right-0 z-[80] bg-[var(--color-primary)] border-t border-[var(--color-accent)]/10"
    >
      <div className="flex justify-around items-center py-3 px-2">
        {navItems.map((item) => {
          const isActiveItem = isActive(item.href);
          const Icon = isActiveItem ? item.activeIcon : item.icon;
          const handleClick = item.isAction ? onTicketClick : undefined;

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={handleClick}
              className={`flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-all duration-300 ${
                isActiveItem
                  ? "text-[var(--color-accent)] bg-[var(--color-accent)]/10"
                  : "text-[var(--color-accent)]/50 hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5"
              }`}
            >
              <Icon size={18} className="mb-2" />
              <span className="text-[7px] uppercase tracking-[0.15em] font-medium leading-[1.0]">
                {item.name}
              </span>
            </Link>
          );
        })}

        {/* Menu Button */}
        <button
          onClick={onMenuToggle}
          className={`flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-all duration-300 ${
            isMenuOpen
              ? "text-[var(--color-accent)] bg-[var(--color-accent)]/10"
              : "text-[var(--color-accent)]/50 hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/5"
          }`}
        >
          <Menu size={18} className="mb-2" />
          <span className="text-[7px] uppercase tracking-[0.15em] font-medium leading-[1.0]">
            Menu
          </span>
        </button>
      </div>
    </motion.div>
  );
}