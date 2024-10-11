import React from "react";
import { Category } from "@/types";
import Link from "next/link";
import { CategoryAPI } from "@/APIs/category";

export default async function CategoryList({
  className,
}: {
  className: string;
}) {
  const categories = await CategoryAPI.getList()
    .then((response) => {
      return response.data;
    })
    .catch((e) => {
      console.log(e);
      return [];
    });

  return (
    <div
      id="categoryList"
      className={`hidden lg:flex flex-col gap-4 p-4 ${className}`}
    >
      {categories &&
        categories.slice(0, 10).map((item: Category, idx: number) => {
          return (
            <Link
              key={idx}
              href={`/categories/${item.slug}/products`}
              className="inline-flex items-center w-full p-2 hover:cursor-pointer hover:text-primary-800 capitalize hover:font-semibold"
            >
              <span className="">{item.name}</span>
            </Link>
          );
        })}
    </div>
  );
}
