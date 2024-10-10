"use client";
import React from "react";
import ShopProducts from "./ShopProducts";

export default function MainProduct({
  category,
  brand,
  tag,
}: {
  category?: string;
  brand?: string;
  tag?: string;
}) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <ShopProducts category={category} brand={brand} tag={tag} />
    </div>
  );
}
