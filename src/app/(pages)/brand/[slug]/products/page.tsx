import BrandPage from "@/components/website/brand/brandPage";
import React from "react";

export default function page({ params }: { params: { slug: string } }) {
  return <BrandPage slug={params.slug} />;
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
      canonical: `/brand/${params.slug}/products`,
    },
  };
}
