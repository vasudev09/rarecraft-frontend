import * as React from "react";
import type { Metadata } from "next";
import { josefin } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "RareCraft",
  description:
    "Discover unique, handcrafted treasures at RareCraft – your premier destination for one-of-a-kind artisanal products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${josefin.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
