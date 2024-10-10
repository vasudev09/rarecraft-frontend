import React from "react";
import Container from "@/components/custom/Container";
import CategoryList from "./CategoryList";
import ProductsCollections from "./ProductsCollections";
import { Category } from "@/types";

export default function Banner({
  categories,
  loading,
}: {
  categories: Category[];
  loading: boolean;
}) {
  return (
    <section className="py-10">
      <Container>
        <div className="flex flex-row gap-4">
          <CategoryList
            className="w-[280px]"
            categories={categories}
            loading={loading}
          />
          <ProductsCollections />
        </div>
      </Container>
    </section>
  );
}
