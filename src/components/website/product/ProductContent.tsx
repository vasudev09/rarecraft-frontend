import { cn } from "@/utils";
import { Product } from "@/types";
import React from "react";
import Container from "../../custom/Container";
import ProductInfo from "./ProductInfo";
import ProductPrice from "./ProductPrice";
import AdditionnalDescription from "./AdditionnalDescription";

export default function ProductContent({
  className,
  product,
}: {
  className: string;
  product: Product;
}) {
  return (
    <section>
      <Container>
        <div className={cn("flex gap-8 flex-wrap justify-between", className)}>
          <div className="flex flex-col flex-1 gap-4 items-start">
            {/* product info  */}
            <ProductInfo product={product} />

            <div className="flex flex-col gap-4 items-start w-full">
              <ProductPrice price={product.price} discount={product.discount} />
            </div>

            <AdditionnalDescription product={product} />
          </div>
        </div>
      </Container>
    </section>
  );
}
