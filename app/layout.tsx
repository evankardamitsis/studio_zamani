import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Studio Zamani — Coming Soon",
  description:
    "Interior architecture and collectable design advisory. Studio Zamani — coming soon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
