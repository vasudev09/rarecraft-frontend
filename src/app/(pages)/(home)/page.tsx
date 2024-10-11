import * as React from "react";
import Banner from "@/components/website/home/Banner";
import BrandCarousel from "@/components/website/home/BrandCarousel";
import Payments from "@/components/website/home/Payments";
import TopCategories from "@/components/website/home/TopCategories";
import Cta from "@/components/website/home/Cta";
import FeaturedProducts from "@/components/website/home/FeaturedProducts";
import Newsletter from "@/components/website/home/NewsLetter";
import { Suspense } from "react";
import { Skeleton } from "@/components/custom/Skeleton";

export default async function Home() {
  return (
    <>
      <Banner />
      <Suspense fallback={<Skeleton className="h-[30vh] w-full my-2" />}>
        <BrandCarousel />
      </Suspense>
      <Payments />
      <Cta />
      <Suspense fallback={<Skeleton className="h-[40vh] w-full my-2" />}>
        <FeaturedProducts />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-[30vh] w-full my-2" />}>
        <TopCategories />
      </Suspense>
      <Newsletter />
    </>
  );
}
