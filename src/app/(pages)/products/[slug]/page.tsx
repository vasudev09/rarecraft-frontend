import Container from "@/components/custom/Container";
import ProductWrapper from "@/components/website/product/ProductWrapper";
import ProductSpecifications from "@/components/website/product/ProductSpecifications";
import FeaturedProducts from "@/components/website/home/FeaturedProducts";
import Reviews from "@/components/website/product/Reviews";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/custom/BreadCrumb";
import Link from "next/link";
import React from "react";
import { ProductAPI } from "@/APIs/product";

export default async function page({ params }: { params: { slug: string } }) {
  async function getProductBySlug(slug: string) {
    try {
      const response = await ProductAPI.getBySlug({
        params: {
          slug: slug,
        },
      });

      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  const product = await getProductBySlug(params.slug);
  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <>
      {/* Breadcrumb  */}
      <section className="my-10">
        <Container>
          <Breadcrumb>
            <BreadcrumbList className="capitalize flex flex-wrap">
              <Link href={"/products"}>store</Link>
              <BreadcrumbSeparator />

              <Link href={`/categories/${product.category.slug}/products`}>
                {product.category.name}
              </Link>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage className="font-medium">
                  {product.name}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Container>
      </section>

      <ProductWrapper product={product} />
      <ProductSpecifications product={product} />
      <FeaturedProducts />
      <Reviews product={product} />
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
    title: `Buy ${params.slug
      .replace(/-/g, " ")
      .replace(/^./, (char) => char.toUpperCase())}`,
    twitter: {
      title: `Buy ${params.slug
        .replace(/-/g, " ")
        .replace(/^./, (char) => char.toUpperCase())}`,
    },
    openGraph: {
      title: `Buy ${params.slug
        .replace(/-/g, " ")
        .replace(/^./, (char) => char.toUpperCase())}`,
    },
    alternates: {
      canonical: `/products/${params.slug}`,
    },
    keywords: params.slug.split("-"),
  };
}
