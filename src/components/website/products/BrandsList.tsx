import React from "react";
import Loading from "@/components/custom/Loading";
import { Brand } from "@/types";
import Link from "next/link";

export default function BrandsList({
  className,
  brands,
  loading,
}: {
  className: string;
  brands: Brand[];
  loading: boolean;
}) {
  return (
    <div
      id="brandsList"
      className={`hidden lg:flex flex-col gap-4 p-4 ${className}`}
    >
      {loading && <Loading isLoading={loading} />}
      <div className="my-3 text-center font-medium">Brands</div>
      {!loading &&
        brands &&
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
