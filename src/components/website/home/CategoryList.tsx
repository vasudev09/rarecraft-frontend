"use client";
import React from "react";
import Loading from "@/components/custom/Loading";
import { Category } from "@/types";
import Link from "next/link";

export default function CategoryList({
  className,
  categories,
  loading,
}: {
  className: string;
  categories: Category[];
  loading: boolean;
}) {
  return (
    <div
      id="categoryList"
      className={`hidden lg:flex flex-col gap-4 p-4 ${className}`}
    >
      {loading && <Loading isLoading={loading} />}

      {!loading &&
        categories &&
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
