import React from "react";
import MainProduct from "@/components/website/products/MainProduct";

export default async function page({
  searchParams,
}: {
  searchParams?: { tag?: string };
}) {
  return <MainProduct tag={searchParams?.tag || ""} />;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: { tag?: string };
}) {
  const tag = searchParams?.tag || "";
  const capitalizedTag = tag ? tag.charAt(0).toUpperCase() + tag.slice(1) : "";

  return {
    title: `${capitalizedTag} Products - RareCraft`,
    twitter: {
      title: `${capitalizedTag} Products - RareCraft`,
    },
    openGraph: {
      title: `${capitalizedTag} Products - RareCraft`,
    },
    alternates: {
      canonical: `/products`,
    },
  };
}
