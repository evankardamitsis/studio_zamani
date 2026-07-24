import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
