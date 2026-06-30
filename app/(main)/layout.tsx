import { Sidebar } from "../components/Sidebar";
import { MobileNav } from "../components/MobileNav";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MobileNav />
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 min-w-0 pt-[56px] md:pt-0 md:pl-[166px]">
          {children}
        </main>
      </div>
    </>
  );
}
