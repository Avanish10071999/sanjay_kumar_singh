"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, profile } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 shadow-sm backdrop-blur">
      {/* Top bar */}
      <div className="h-2 bg-gradient-to-r from-accent via-moss to-ink" />

      <div className="page-band flex items-center justify-between py-4 lg:py-0 lg:min-h-24">
        {/* Name / Logo */}
        <Link
          href="/"
          className="text-xl font-black tracking-tight text-ink transition-colors hover:text-accent sm:text-2xl lg:text-3xl"
        >
          {profile.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-8 text-sm font-bold transition-colors duration-200 hover:text-accent
                  ${active ? "text-accent" : "text-ink/70"}
                  after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:rounded-t
                  after:transition-transform after:duration-200 after:origin-left
                  ${active ? "after:bg-accent after:scale-x-100" : "after:bg-accent after:scale-x-0 hover:after:scale-x-100"}`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={`mailto:${profile.email}`}
            className="ml-4 rounded-full bg-accent px-5 py-2 text-sm font-bold text-white transition-all hover:bg-ink hover:scale-105 active:scale-95"
          >
            Contact
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex lg:hidden flex-col gap-1.5 p-2 rounded-md hover:bg-line/50 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-ink transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-96 border-t border-line" : "max-h-0"}`}>
        <nav className="page-band flex flex-col py-4 gap-1">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-base font-bold transition-colors
                  ${active ? "bg-accent/10 text-accent" : "text-ink/80 hover:bg-line/40 hover:text-accent"}`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={`mailto:${profile.email}`}
            className="mt-2 rounded-full bg-accent px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-ink"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
