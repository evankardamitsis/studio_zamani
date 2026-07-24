"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Interiors", href: "/interiors" },
  { label: "Advisory", href: "/advisory" },
  { label: "Jewelry", href: "/jewelry" },
  { label: "About", href: "/about" },
];

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/interiors" && pathname === "/") return true;
    return pathname === href;
  };

  return (
    <aside
      className="hidden lg:flex fixed top-0 left-0 h-screen flex-col z-20"
      style={{
        width: "166px",
        padding: "40px",
        background: "rgba(248,248,242,0.15)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
      }}
    >
      {/* Logo */}
      <Link href="/interiors" className="block mb-[30px]">
        <Image
          src="/studio-zamani-logo.svg"
          alt="Studio Zamani"
          width={83}
          height={33}
          priority
          className="w-[83px] h-auto"
        />
      </Link>

      {/* Nav */}
      <nav className="flex flex-col gap-[12px]">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-[12px] leading-none text-[#242020] hover:opacity-50 transition-opacity ${
              isActive(item.href) ? "font-semibold" : "font-normal"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Contact + social */}
      <div className="mt-auto flex flex-col gap-[12px]">
        <Link
          href="/contact"
          className={`text-[12px] leading-none text-[#242020] hover:opacity-50 transition-opacity ${
            isActive("/contact") ? "font-semibold" : "font-normal"
          }`}
        >
          Contact
        </Link>
        <a
          href="https://instagram.com/studiozamanidesign"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] leading-none text-[#242020] hover:opacity-50 transition-opacity"
        >
          @studiozamanidesign
        </a>
      </div>
    </aside>
  );
}
