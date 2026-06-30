"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Interiors", href: "/interiors" },
  { label: "Jewelry", href: "/jewelry" },
  { label: "Studio", href: "/studio" },
  { label: "Contact", href: "/contact" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Top bar */}
      <header
        className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-5 md:hidden"
        style={{ height: 56, background: "rgba(246,248,248,0.92)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
      >
        <Link href="/">
          <Image src="/studio-zamani-logo.svg" alt="Studio Zamani" width={66} height={26} priority className="w-[66px] h-auto" />
        </Link>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex flex-col gap-[5px] py-2"
        >
          <span className={`block w-[22px] h-[1.5px] bg-[#242020] transition-all duration-300 origin-center ${open ? "translate-y-[6.5px] rotate-45" : ""}`} />
          <span className={`block w-[22px] h-[1.5px] bg-[#242020] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-[22px] h-[1.5px] bg-[#242020] transition-all duration-300 origin-center ${open ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
        </button>
      </header>

      {/* Full-screen overlay */}
      <div
        className={`fixed inset-0 z-20 flex flex-col justify-center px-10 md:hidden transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ background: "#f6f8f8" }}
      >
        <nav className="flex flex-col gap-8 mt-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[32px] leading-none text-[#242020] tracking-tight hover:opacity-40 transition-opacity ${pathname === item.href || (item.href === "/jewelry" && pathname === "/") ? "font-semibold" : "font-normal"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

      </div>
    </>
  );
}
