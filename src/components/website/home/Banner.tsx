import React from "react";
import Container from "@/components/custom/Container";
import CategoryList from "./CategoryList";
import ProductsCollections from "./ProductsCollections";
import { Suspense } from "react";
import { Skeleton } from "@/components/custom/Skeleton";

export default function Banner() {
  return (
    <section className="py-10">
      <Container>
        <div className="flex flex-row gap-4">
          <Suspense
            fallback={
              <Skeleton className="h-[100vh] w-[300px] my-2 hidden lg:flex" />
            }
          >
            <CategoryList className="w-[300px]" />
          </Suspense>
          <ProductsCollections />
        </div>
      </Container>
    </section>
  );
}
