import React from "react";
import MainProduct from "@/components/website/products/MainProduct";

export default function page({ params }: { params: { slug: string } }) {
  return <MainProduct category={params.slug} />;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title: `${
      params.slug.charAt(0).toUpperCase() + params.slug.slice(1)
    } Products - RareCraft`,
    twitter: {
      title: `${
        params.slug.charAt(0).toUpperCase() + params.slug.slice(1)
      } Products - RareCraft`,
    },
    openGraph: {
      title: `${
        params.slug.charAt(0).toUpperCase() + params.slug.slice(1)
      } Products - RareCraft`,
    },
    alternates: {
      canonical: `/products/category/${params.slug}`,
    },
  };
}
