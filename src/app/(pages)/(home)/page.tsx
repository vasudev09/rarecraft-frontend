import Banner from "@/components/website/home/Banner";
import BrandCarousel from "@/components/website/home/BrandCarousel";
import Payments from "@/components/website/home/Payments";
import TopCategories from "@/components/website/home/TopCategories";
import Cta from "@/components/website/home/Cta";
import FeaturedProducts from "@/components/website/home/FeaturedProducts";
import Newsletter from "@/components/website/home/NewsLetter";

import * as React from "react";

export default function Home() {
  return (
    <>
      <Banner />
      <BrandCarousel />
      <Payments />
      <Cta />
      <FeaturedProducts />
      <TopCategories />
      <Newsletter />
    </>
  );
}
