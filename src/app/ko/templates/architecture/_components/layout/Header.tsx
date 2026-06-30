// src/app/en/templates/OHMT027-architecture/_components/layout/Header.tsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const baseRoute = "/ko/templates/OHMT027-architecture";
  const navItems = [
    { name: "홈", href: baseRoute },
    { name: "프로젝트", href: `${baseRoute}/projects` },
    { name: "소개", href: `${baseRoute}/about` },
    { name: "서비스", href: `${baseRoute}/services` },
    { name: "문의", href: `${baseRoute}/contact` },
  ];

  const isActive = (path: string) => {
    if (path === baseRoute) {
      return pathname === baseRoute;
    }
    return pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white border-b border-[#E0E0E0] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 flex justify-between items-center">
        {/* Logo */}
        <Link href={baseRoute} className="flex items-center group">
          <span className="font-sans font-bold text-[18px] tracking-[0.06em] text-[#1A1A1A]">
            OHMT
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`font-sans text-[13px] tracking-[0.05em] transition-all duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:bg-[#1A1A1A] after:transition-transform after:duration-300 after:origin-left ${
                  active
                    ? "text-[#1A1A1A] after:scale-x-100"
                    : "text-[#888888] hover:text-[#1A1A1A] after:scale-x-0 hover:after:scale-x-100"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Contact CTA */}
        <div className="hidden md:block">
          <Link
            href={`${baseRoute}/contact`}
            className="bg-[#0A0A0A] text-white px-6 py-2.5 text-[13px] font-sans tracking-[0.08em] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] block"
          >
            CONTACT
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#1A1A1A] focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Screen Overlay Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-white z-40 flex flex-col px-8 py-12 md:hidden">
          <nav className="flex flex-col gap-6 mb-8">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-[18px] font-sans font-medium tracking-[0.05em] py-2 border-b border-[#F5F5F5] ${
                    active ? "text-[#B07D4F]" : "text-[#1A1A1A]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <Link
            href={`${baseRoute}/contact`}
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-[#0A0A0A] text-white py-3 text-center text-[14px] font-sans tracking-[0.08em]"
          >
            CONTACT US
          </Link>
        </div>
      )}
    </header>
  );
}
