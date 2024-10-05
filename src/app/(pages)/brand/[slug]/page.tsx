import Container from "@/components/custom/Container";
import BrandWrapper from "@/components/website/brand/BrandWrapper";
import BrandProductsList from "@/components/website/brand/BrandProductsList";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/custom/BreadCrumb";
import Link from "next/link";
import React from "react";
import axios from "axios";

export default async function page({ params }: { params: { slug: string } }) {
  async function getBrandBySlug(slug: string) {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "/api/brand",
        {
          params: {
            slug: slug,
          },
        }
      );

      return response.data.data;
    } catch (error) {
      return error;
    }
  }
  const brand = {};

  return (
    <>
      {/* Breadcrumb  */}
      <section className="my-10">
        <Container>
          <Breadcrumb>
            <BreadcrumbList className="capitalize flex flex-wrap">
              <Link href={"/products"}>store</Link>
              <BreadcrumbSeparator />

              <Link href={`/categories/${"brand.name"}/products`}>
                {"brand.name"}
              </Link>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage className="font-medium">
                  {"brand.name"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Container>
      </section>

      {/* <BrandWrapper brand={brand} /> */}
      <BrandProductsList />
    </>
  );
}

//dynamic seo title
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title: `${params.slug
      .replace(/-/g, " ")
      .replace(/^./, (char) => char.toUpperCase())} at RareCraft`,
    twitter: {
      title: `${params.slug
        .replace(/-/g, " ")
        .replace(/^./, (char) => char.toUpperCase())} at RareCraft`,
    },
    openGraph: {
      title: `${params.slug
        .replace(/-/g, " ")
        .replace(/^./, (char) => char.toUpperCase())} at RareCraft`,
    },
    alternates: {
      canonical: `/brand/${params.slug}`,
    },
  };
}
