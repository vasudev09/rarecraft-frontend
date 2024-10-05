"use client";
import Container from "@/components/custom/Container";
import MainProduct from "./MainProduct";
import SidebarLeft from "./SidebarLeft";
import React, { useState } from "react";

export default function ProductsPage() {
  const [loading, setLoading] = useState(false);

  return (
    <section className="my-6 h-full w-full">
      <Container>
        <div className="flex h-full gap-14 w-full">
          <SidebarLeft loading={loading} />
          <MainProduct loading={loading} setLoading={setLoading} />
        </div>
      </Container>
    </section>
  );
}
