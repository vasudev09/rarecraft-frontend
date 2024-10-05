"use client";
import Container from "@/components/custom/Container";
import MainProduct from "../products/MainProduct";
import SidebarLeft from "../products/SidebarLeft";
import React, { useState } from "react";

export default function CategoriesPage({ slug }: { slug: string }) {
  const [loading, setLoading] = useState(false);

  return (
    <section className="my-6 h-full w-full">
      <Container>
        <div className="flex h-full gap-10 w-full">
          <SidebarLeft loading={loading} />
          <MainProduct slug={slug} loading={loading} setLoading={setLoading} />
        </div>
      </Container>
    </section>
  );
}
