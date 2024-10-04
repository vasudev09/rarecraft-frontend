import MobileBottom from "@/components/custom/MobileBottom";
import Footer from "@/components/website/footer";
import Header from "@/components/website/header";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <MobileBottom />
      {children}
      <Footer />
    </>
  );
}
