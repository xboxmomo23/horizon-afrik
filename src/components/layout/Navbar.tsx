"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Heart } from "lucide-react";
import { MAIN_NAV } from "@/lib/navigation";
import { DONATION_PAGE, SITE } from "@/lib/constants";
import { TopBar } from "./TopBar";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenSubmenu(null);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      <nav className={cn("bg-white/95 backdrop-blur transition-shadow", scrolled && "shadow-soft")}>
        <div className="container flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group" aria-label={`${SITE.name} - Accueil`}>
            <Image
              src="/images/logo/logo-ha-officiel.jpg"
              alt={`Logo ${SITE.name}`}
              width={140}
              height={105}
              priority
              className="h-14 w-auto"
            />
            <span className="hidden md:block font-display text-[11px] uppercase tracking-[0.18em] text-primary-700/80 border-l border-primary-200 pl-3 max-w-[140px] leading-snug">
              Solidarité<br />Europe-Afrique
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {MAIN_NAV.map((item) => (
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenSubmenu(item.href)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition",
                    isActive(item.href)
                      ? "text-primary-700 bg-primary-50"
                      : "text-primary-900 hover:text-primary-700 hover:bg-primary-50"
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>
                {item.children && openSubmenu === item.href && (
                  <ul className="absolute top-full left-0 mt-1 min-w-[260px] bg-white rounded-lg shadow-soft border border-sand-100 py-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-primary-900 hover:bg-primary-50 hover:text-primary-700 transition"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <Link
            href={DONATION_PAGE}
            className="hidden lg:inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-soft transition active:scale-95"
          >
            <Heart className="h-4 w-4" fill="currentColor" />
            Faire un don
          </Link>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            className="lg:hidden p-2 rounded-md text-primary-900 hover:bg-primary-50 transition"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div
          className={cn(
            "lg:hidden overflow-hidden transition-[max-height] duration-300 ease-out border-t border-sand-100",
            mobileOpen ? "max-h-[calc(100vh-5rem)]" : "max-h-0"
          )}
        >
          <ul className="container py-4 flex flex-col gap-1">
            {MAIN_NAV.map((item) => (
              <li key={item.href}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex-1 px-3 py-3 text-base font-medium rounded-md transition",
                      isActive(item.href)
                        ? "text-primary-700 bg-primary-50"
                        : "text-primary-900 hover:bg-primary-50"
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => setOpenSubmenu(openSubmenu === item.href ? null : item.href)}
                      aria-label="Déplier le sous-menu"
                      className="p-3 text-primary-700"
                    >
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          openSubmenu === item.href && "rotate-180"
                        )}
                      />
                    </button>
                  )}
                </div>
                {item.children && openSubmenu === item.href && (
                  <ul className="pl-4 border-l-2 border-accent-200 ml-3 my-1">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-3 py-2.5 text-sm text-primary-800 hover:text-primary-600 transition"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="pt-3">
              <Link
                href={DONATION_PAGE}
                className="flex items-center justify-center gap-2 w-full bg-accent-500 hover:bg-accent-600 text-white px-5 py-3 rounded-full font-semibold transition"
              >
                <Heart className="h-4 w-4" fill="currentColor" />
                Faire un don
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
