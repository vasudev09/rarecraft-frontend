import Register from "@/components/website/auth/Register";
import { Metadata } from "next";
import React from "react";

export default function page() {
  return <Register />;
}

export const metadata: Metadata = {
  title: "Register - RareCraft",
  twitter: {
    title: `Register - RareCraft`,
  },
  openGraph: {
    title: `Register - RareCraft`,
  },
  alternates: {
    canonical: `/register`,
  },
};
