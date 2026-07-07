import Link from "next/link";
import { Sidebar } from "../components/Sidebar";
import { MobileNav } from "../components/MobileNav";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MobileNav />
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 min-w-0 pt-[56px] lg:pt-0 lg:pl-[166px] pb-[48px] lg:pb-0">
          {children}
        </main>
      </div>
      {/* Mobile footer */}
      <footer className="lg:hidden fixed bottom-0 left-0 right-0 z-30 flex items-center justify-between px-6 border-t border-[#242020]/10"
              style={{ backgroundColor: "#f8f6ed", height: 48 }}>
        <div className="flex items-center gap-3">
          <span className="text-[11px] text-[#242020]/60">© {new Date().getFullYear()} Studio Zamani</span>
          <Link href="/cookies" className="text-[11px] text-[#242020]/60 hover:text-[#242020] transition-colors">Cookies</Link>
          <Link href="/privacy" className="text-[11px] text-[#242020]/60 hover:text-[#242020] transition-colors">Privacy</Link>
        </div>
        <a href="https://belowthefold.gr" target="_blank" rel="noopener noreferrer"
           className="text-[11px] text-[#242020]/60 hover:text-[#242020] transition-colors">
          Below The Fold
        </a>
      </footer>
    </>
  );
}
