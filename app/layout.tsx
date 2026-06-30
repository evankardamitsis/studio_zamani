import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import { Sidebar } from "./components/Sidebar";
import { MobileNav } from "./components/MobileNav";

const epilogue = Epilogue({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata: Metadata = {
  title: "Studio Zamani",
  description: "Interior Architecture and Collectible Design Advisory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${epilogue.className} antialiased`}>
        <MobileNav />
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 min-w-0 pt-[56px] md:pt-0 md:pl-[166px]">{children}</main>
        </div>
      </body>
    </html>
  );
}
