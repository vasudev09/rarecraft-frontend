"use client";
import React, { useState } from "react";
import Container from "../../custom/Container";
import BrandImage from "./BrandImage";
import BrandContent from "./BrandContent";
import { Brand } from "@/types";

export default function BrandWrapper({ brand }: { brand: Brand }) {
  return (
    <section className="my-20">
      <Container>
        <div className="flex flex-wrap  justify-between gap-10 lg:flex-nowrap">
          <BrandImage className="text-center max-w-2xl" image={brand.image} />
          <BrandContent className="flex-1 w-full" brand={brand} />
        </div>
      </Container>
    </section>
  );
}
