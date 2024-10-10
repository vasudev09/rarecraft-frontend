import Login from "@/components/website/auth/Login";
import { Metadata } from "next";
import React from "react";

export default function page() {
  return <Login />;
}

export const metadata: Metadata = {
  title: "Sign In - RareCraft",
  twitter: {
    title: `Sign In - RareCraft`,
  },
  openGraph: {
    title: `SignIn - RareCraft`,
  },
  alternates: {
    canonical: `/signin`,
  },
};
