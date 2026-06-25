"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "객실", href: "/ko/templates/OHMT020-hotel/rooms" },
    { name: "서비스", href: "/ko/templates/OHMT020-hotel/services" },

    { name: "위치", href: "/ko/templates/OHMT020-hotel/contact" }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full h-16 md:h-20 z-50 transition-all duration-500 flex items-center ${scrolled || mobileOpen ? "bg-[var(--color-bg)]/95 backdrop-blur-xl border-b border-[var(--color-border)]" : "bg-transparent"}`}>
        <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12 flex items-center justify-between">
          <Link href="/ko/templates/OHMT020-hotel" className={`text-2xl md:text-3xl font-[var(--font-heading)] font-bold tracking-tight transition-colors duration-300 ${scrolled || mobileOpen ? "text-[var(--color-primary)]" : "text-white"}`}>
            Oh My Template
          </Link>

          <div className={`hidden md:flex items-center gap-10 text-[14px] font-medium transition-colors duration-300 ${scrolled ? "text-[var(--color-text-muted)]" : "text-white/80"}`}>
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className={`transition-colors ${scrolled ? "hover:text-[var(--color-primary)]" : "hover:text-white"}`}>
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/ko/templates/OHMT020-hotel/booking" className="hidden md:inline-flex">
              <Button variant="primary" size="sm" className="text-[12px] tracking-tight">
                객실 예약
              </Button>
            </Link>
            <button className={`md:hidden p-1 transition-colors duration-300 ${scrolled || mobileOpen ? "text-[var(--color-primary)]" : "text-white"}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="메뉴 열기">
              {mobileOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-x-0 top-16 z-40 bg-[var(--color-bg)] border-b border-[var(--color-border)] transition-all duration-300 md:hidden overflow-hidden ${mobileOpen ? "max-h-[400px] opacity-100 py-8" : "max-h-0 opacity-0 py-0"}`}>
        <div className="flex flex-col px-6 gap-2">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} onClick={() => setMobileOpen(false)} className="text-[15px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)] py-2 transition-colors">
              {item.name}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
            <Link href="/ko/templates/OHMT020-hotel/booking" onClick={() => setMobileOpen(false)} className="w-full block">
              <Button variant="primary" size="md" className="w-full text-[13px]">객실 예약</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
