"use client";
import Container from "@/components/custom/Container";
import MainProduct from "./MainProduct";
import SidebarLeft from "./SidebarLeft";
import React from "react";

export default function ProductsPage({ tag }: { tag: string }) {
  return (
    <section className="my-6 min-h-screen w-full">
      <Container>
        <div className="flex h-full gap-14 w-full">
          <SidebarLeft />
          <MainProduct tag={tag} />
        </div>
      </Container>
    </section>
  );
}
