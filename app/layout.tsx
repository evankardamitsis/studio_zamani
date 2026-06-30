import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
