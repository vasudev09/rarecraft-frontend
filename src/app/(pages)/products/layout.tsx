import React from "react";
import SidebarLeft from "@/components/website/products/SidebarLeft";
import Container from "@/components/custom/Container";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="my-6 min-h-screen w-full">
      <Container>
        <div className="flex h-full gap-14 w-full">
          <SidebarLeft />
          {children}
        </div>
      </Container>
    </section>
  );
}
