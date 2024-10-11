import { getRating } from "@/utils";
import { Product } from "@/types";
import Rating from "@mui/material/Rating";
import React from "react";
import Link from "next/link";

export default function ProductInfo({ product }: { product: Product }) {
  const rating = getRating(product);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-slate-700 font-bold text-base lg:text-xl tracking-wider capitalize">
        {product.name.substring(0, 150)}
      </h1>

      {/* Ratings  */}
      <div className="inline-flex items-ceneter gap-4 text-slate-700">
        <Rating
          name="half-rating-read"
          className=""
          readOnly
          value={rating}
          precision={0.5}
        />

        <span className="pt-2 text-slate-700">
          ({product.reviews.length}) reviews
        </span>
      </div>

      <div>
        <p>
          Brand:{" "}
          <Link
            href={`/brand/${product.brand.slug}`}
            className="cursor-pointer underline"
          >
            {product.brand.name}
          </Link>
        </p>
      </div>

      <div>
        <p className="text-pretty text-slate-500 font-normal text-sm/6">
          {product.description}
        </p>
      </div>
    </div>
  );
}
