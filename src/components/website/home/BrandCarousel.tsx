import React from "react";
import Container from "@/components/custom/Container";
import { BrandAPI } from "@/APIs/brand";
import BrandSwiper from "./BrandSwiper";

export default async function BrandCarousel() {
  const brands = await BrandAPI.getList()
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e);
      return [];
    });
  return (
    <section className="pb-8 relative">
      <Container>
        <div className="my-5 text-center text-xl font-semibold">
          Shop by Brand
        </div>
        <BrandSwiper brands={brands} />
      </Container>
    </section>
  );
}
