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
      <head>
        <script async src="https://static.klaviyo.com/onsite/js/X7U95S/klaviyo.js?company_id=X7U95S" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
