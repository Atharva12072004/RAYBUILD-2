"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { divisions, siteConfig } from "@/config/site";

type Division = "solar" | "construction";

export default function Header({ active }: { active?: Division }) {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const division = active ? divisions[active] : null;
  const baseHref = division?.href ?? "/";
  const phone = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;
  const navItems = division
    ? [
        { label: "Home", href: baseHref },
        { label: "About", href: `${baseHref}/about` },
        { label: "Services", href: `${baseHref}/services` },
        { label: "Projects", href: `${baseHref}/projects` },
        { label: "Contact", href: `${baseHref}/contact` },
      ]
    : [
        { label: "Home", href: "/" },
        { label: "About", href: "#about" },
        { label: "Our Divisions", href: "#divisions" },
        { label: "Contact", href: "#contact" },
      ];

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 10);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const isCurrent = (href: string) => {
    if (!division) return href === "/" && pathname === "/";
    return href === baseHref ? pathname === href : pathname.startsWith(`${href}/`) || pathname === href;
  };

  return (
    <header className={`header${isScrolled ? " is-scrolled" : ""}`} data-division={active ?? "group"}>
      <div className="container header-inner">
        <Link href={baseHref} className="brand" aria-label="Raybuild Group home">
          <img src="/logo/raybuild-logo.svg" alt="Raybuild Group" />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={isCurrent(item.href) ? "active" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <a className="call-btn" href={phone}><Phone size={17} aria-hidden="true" />Call Now</a>
        <button
          className="menu-btn"
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-menu"
            aria-label="Mobile navigation"
            initial={reduceMotion ? false : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: reduceMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={isCurrent(item.href) ? "active" : undefined} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <a className="call-btn" href={phone} onClick={() => setOpen(false)}>Call Now</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
