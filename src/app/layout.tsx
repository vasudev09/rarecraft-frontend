import * as React from "react";
import type { Metadata } from "next";
import { josefin } from "./fonts";
import "./globals.css";
import { AuthProvider } from "@/hooks/AuthContext";
import FramerMotionProvider from "@/providers/FramerMotionProvider";
import ToastProvider from "@/providers/ToastProvider";

export const dynamic = "force-dynamic";

// Meta Tags Global
export const metadata: Metadata = {
  title: "RareCraft - Artisan Shop",
  description:
    "Discover unique, handcrafted treasures at RareCraft – your premier destination for one-of-a-kind artisanal products.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_HOST_URL}`),
  applicationName: "RareCraft",
  keywords: [
    "Unique gifts",
    "Handmade items",
    "Crafts for sale",
    "Artisan products",
    "Special gifts",
    "Custom gifts",
    "Unique home decor",
    "Handmade jewelry",
    "Fun gifts online",
    "Special occasion gifts ",
    "Craft shop online ",
    "Creative gifts ",
    "Gift ideas ",
    "Local artisans",
  ],
  authors: [{ name: "vasudev09", url: "https://github.com/vasudev09" }],
  publisher: "vercel",

  alternates: {
    canonical: "/",
    languages: {
      en: "en",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
    },
  },

  manifest: `${process.env.NEXT_PUBLIC_HOST_URL}/manifest.webmanifest`,

  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },

  twitter: {
    card: "summary_large_image",
    title: "RareCraft - Artisan Shop",
    description:
      "Discover unique, handcrafted treasures at RareCraft – your premier destination for one-of-a-kind artisanal products.",
    siteId: "RareCraft",
    creator: "vasudev09",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_HOST_URL}/images/logo.png`,
      },
    ],
  },

  openGraph: {
    title: "RareCraft - Artisan Shop",
    description:
      "Discover unique, handcrafted treasures at RareCraft – your premier destination for one-of-a-kind artisanal products.",

    images: [
      {
        url: `${process.env.NEXT_PUBLIC_HOST_URL}/images/logo.png`,
      },
    ],
    type: "website",
    url: `${process.env.NEXT_PUBLIC_HOST_URL}`,
    siteName: "RareCraft",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${josefin.className} antialiased`}>
        <AuthProvider>
          <FramerMotionProvider>
            <ToastProvider />
            {children}
          </FramerMotionProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
