import CategoriesPage from "@/components/website/categories/CategoriesPage";
import { mergeOpenGraph } from "@/utils/mergeOpenGraph";
import { capitalize } from "@mui/material";
import { Metadata } from "next";
import React from "react";

export default function page({ params }: { params: { slug: string } }) {
  return <CategoriesPage slug={params.slug} />;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title: `${
      params.slug.charAt(0).toUpperCase() + params.slug.slice(1)
    } - RareCraft`,
    twitter: {
      title: `${
        params.slug.charAt(0).toUpperCase() + params.slug.slice(1)
      } - RareCraft`,
    },
    openGraph: {
      title: `${
        params.slug.charAt(0).toUpperCase() + params.slug.slice(1)
      } - RareCraft`,
    },
    alternates: {
      canonical: `/categories/${params.slug}/products`,
    },
  };
}
