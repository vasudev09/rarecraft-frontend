import Container from "@/components/custom/Container";
import MainProduct from "../products/MainProduct";
import SidebarLeft from "../products/SidebarLeft";
import React from "react";

export default function BrandPage({ slug }: { slug: string }) {
  return (
    <section className="my-6 min-h-screen w-full">
      <Container>
        <div className="flex h-full gap-10 w-full">
          <SidebarLeft />
          <MainProduct brand={slug} />
        </div>
      </Container>
    </section>
  );
}
