"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, profile } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 shadow-sm backdrop-blur">
      <div className="h-10 bg-ink" />
      <div className="page-band flex min-h-28 flex-col justify-center gap-5 py-5 lg:flex-row lg:items-end lg:justify-between">
        <Link href="/" className="text-3xl font-medium tracking-normal text-ink sm:text-4xl">
          {profile.name}
        </Link>
        <div className="flex flex-col gap-5">
          <form className="hidden items-center rounded-full border border-line bg-white px-5 py-2 shadow-sm md:flex">
            <input
              aria-label="Search this site"
              className="w-72 bg-transparent text-sm outline-none placeholder:text-ink/70"
              placeholder="Search this site"
              type="search"
            />
            <span className="text-xl text-accent" aria-hidden>
              &#8981;
            </span>
          </form>
          <nav className="flex flex-wrap gap-5 text-lg font-bold text-accent">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`border-b-4 pb-3 transition hover:text-ink ${
                    active ? "border-ink text-ink" : "border-transparent"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
