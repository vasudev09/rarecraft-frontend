import React from "react";
import Container from "../../custom/Container";
import { Category } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { CategoryAPI } from "@/APIs/category";

export default async function TopCategories() {
  const categories = await CategoryAPI.getList()
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e);
      return [];
    });

  return (
    <section className="py-10 w-full">
      <Container>
        <div className="flex w-full gap-10 justify-center flex-wrap xl:justify-between xl:flex-nowrap">
          <div className="flex-col flex items-center gap-4 xl:items-start ">
            <h1 className="text-2xl leading-8 text-center font-bold lg:text-left">
              Top Categories in Sales and Trending
            </h1>
            <h2 className="text-sm max-w-screen-md mt-4 text-center">
              Last mont up to 1500+ Products Sales From this category. You can
              choose a Product from from here and save money
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 ">
            {categories &&
              categories.slice(0, 4).map((item: Category, idx: number) => (
                <Link
                  key={idx}
                  href={`/categories/${item.slug}/products`}
                  className="flex flex-col items-center justify-between gap-12 rounded-md border border-gray-200 px-10 py-4 gap-y-2 cursor-pointer hover:border-primary-200 max-w-xl"
                >
                  <Image
                    src={item.image}
                    alt="category"
                    width="50"
                    height="50"
                  />
                  <h3 className="capitalize text-sm text-center">
                    {item.name}
                  </h3>
                </Link>
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
