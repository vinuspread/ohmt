// src/app/en/templates/OHMT027-architecture-EN/_components/layout/Header.tsx
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

  const baseRoute = "/en/templates/OHMT027-architecture-EN";
  const navItems = [
    { name: "Home", href: baseRoute },
    { name: "Projects", href: `${baseRoute}/projects` },
    { name: "About", href: `${baseRoute}/about` },
    { name: "Services", href: `${baseRoute}/services` },
    { name: "Contact", href: `${baseRoute}/contact` },
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
          ? "bg-white border-b border-[var(--color-border)] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 flex justify-between items-center">
        {/* Logo */}
        <Link href={baseRoute} className="flex items-center gap-2 group">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-500 group-hover:rotate-45"
          >
            <path d="M12 2L2 12L12 22L22 12L12 2Z" fill="var(--color-accent)" />
          </svg>
          <span className="font-sans font-medium text-[14px] tracking-[0.05em] text-[var(--color-text)]">
            OH MY TEMPLATE
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
                className={`font-sans text-[13px] tracking-[0.05em] transition-all duration-200 ${
                  active
                    ? "bg-[var(--color-text)] text-white px-4 py-1.5"
                    : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)] relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:scale-x-0 after:bg-[var(--color-text)] hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
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
            className="bg-[var(--color-text)] text-white px-6 py-2.5 text-[13px] font-sans tracking-[0.08em] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] block"
          >
            CONTACT
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[var(--color-text)] focus:outline-none"
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
                  className={`text-[18px] font-sans font-medium tracking-[0.05em] py-2 border-b border-[var(--color-bg-secondary)] ${
                    active ? "text-[var(--color-accent)]" : "text-[var(--color-text)]"
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
            className="bg-[var(--color-text)] text-white py-3 text-center text-[14px] font-sans tracking-[0.08em]"
          >
            CONTACT US
          </Link>
        </div>
      )}
    </header>
  );
}
