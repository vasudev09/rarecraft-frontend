import React from "react";
import MainProduct from "@/components/website/products/MainProduct";

export default function page({
  searchParams,
}: {
  searchParams: { tag: string };
}) {
  return <MainProduct tag={searchParams.tag} />;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { tag: string };
}) {
  return {
    title: searchParams?.tag
      ? `${
          searchParams.tag.charAt(0).toUpperCase() + searchParams.tag.slice(1)
        } Products - RareCraft`
      : "Products - RareCraft",
    twitter: searchParams?.tag
      ? `${
          searchParams.tag.charAt(0).toUpperCase() + searchParams.tag.slice(1)
        } Products - RareCraft`
      : "Products - RareCraft",
    openGraph: searchParams?.tag
      ? `${
          searchParams.tag.charAt(0).toUpperCase() + searchParams.tag.slice(1)
        } Products - RareCraft`
      : "Products - RareCraft",
    alternates: {
      canonical: `/products`,
    },
  };
}
