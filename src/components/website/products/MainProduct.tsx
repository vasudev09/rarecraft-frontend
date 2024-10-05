"use client";
import React, { useState } from "react";
import ShopProducts from "./ShopProducts";

export default function MainProduct({
  loading,
  setLoading,
  slug,
}: {
  loading: boolean;
  setLoading: (value: boolean) => void;
  slug?: string;
}) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <ShopProducts loading={loading} setLoading={setLoading} slug={slug} />
    </div>
  );
}
