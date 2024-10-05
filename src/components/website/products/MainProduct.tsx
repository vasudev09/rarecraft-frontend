"use client";
import React, { useState } from "react";
import ShopProducts from "./ShopProducts";

export default function MainProduct({
  loading,
  setLoading,
  category,
  brand,
}: {
  loading: boolean;
  setLoading: (value: boolean) => void;
  category?: string;
  brand?: string;
}) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <ShopProducts
        loading={loading}
        setLoading={setLoading}
        category={category}
        brand={brand}
      />
    </div>
  );
}
