import React from "react";
import Container from "@/components/custom/Container";
import CategoryList from "./CategoryList";
import ProductsCollections from "./ProductsCollections";

export default function Banner() {
  return (
    <section className="py-10">
      <Container>
        <div className="flex flex-row gap-4">
          <CategoryList className="w-[280px]" />
          <ProductsCollections />
        </div>
      </Container>
    </section>
  );
}
