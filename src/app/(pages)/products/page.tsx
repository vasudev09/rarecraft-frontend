import ProductsPage from "@/components/website/products/ProductsPage";
import { Metadata } from "next";
import React from "react";

export default function page({
  searchParams,
}: {
  searchParams: { tag: string };
}) {
  return <ProductsPage tag={searchParams.tag} />;
}

export const metadata: Metadata = {
  title: "Shop - RareCraft",
  twitter: {
    title: `Shop - RareCraft`,
  },
  openGraph: {
    title: `Shop - RareCraft`,
  },
  alternates: {
    canonical: `/products`,
  },
};
