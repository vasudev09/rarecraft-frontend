import { discountPrice } from "@/utils";
import React from "react";

export default function ProductPrice({
  price,
  discount,
}: {
  price: number;
  discount: number;
}) {
  return (
    <div className="flex gap-2 flex-col">
      <div className="flex items-center gap-8">
        <div className="text-primary-700 tracking-widest font-bold text-2xl lg:text-3xl">
          ${discount > 0 ? discountPrice(price, discount) : price}
        </div>
      </div>
    </div>
  );
}
