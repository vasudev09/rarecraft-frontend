import React from "react";
import { Brand } from "@/types";
import Link from "next/link";
import { BrandAPI } from "@/APIs/brand";

export default async function BrandsList({ className }: { className: string }) {
  const brands = await BrandAPI.getList()
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e);
      return [];
    });
  return (
    <div
      id="brandsList"
      className={`hidden lg:flex flex-col gap-4 p-4 ${className}`}
    >
      <div className="my-3 text-center font-medium">Brands</div>
      {brands &&
        brands.slice(0, 10).map((item: Brand, idx: number) => {
          return (
            <Link
              href={`/brand/${item.slug}/products`}
              key={idx}
              className="inline-flex items-center w-full p-2 hover:cursor-pointer hover:text-primary-800 capitalize hover:font-semibold"
            >
              <span>{item.name}</span>
            </Link>
          );
        })}
    </div>
  );
}
