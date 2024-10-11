import {
  getPriceWithDiscountFromProduct,
  getDiscountRate,
  getRating,
} from "@/utils";
import { Product } from "@/types";
import Link from "next/link";
import React from "react";
import { Rating } from "@mui/material";
import CurrencyFormat from "./CurrencyFormat";
import { Truck } from "lucide-react";
import { Award } from "lucide-react";

export default function ProductCard({ item }: { item: Product }) {
  const images = item.images;
  const priceWithDiscount = getPriceWithDiscountFromProduct(item);
  const discountRate = getDiscountRate(item.price, priceWithDiscount);

  return (
    <div className="border border-gray-200 rounded-md pb-4 group hover:shadow-xl min-w-[180px]">
      <Link
        href={` /product/${item.slug}`}
        className="flex relative p-1 justify-center items-center w-full"
      >
        <div
          style={{
            height: "20vh",
            width: "160px",
            position: "relative",
            backgroundImage: `url(${images[0]})`,
            backgroundPosition: "center center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {Number(item.discount) === 0 ? (
          ""
        ) : (
          <div className="absolute top-20 left-0">
            <span className="text-white text-base bg-yellow-600 px-2 py-1 rounded-r-md font-bold">
              - {Number(item.discount)}%
            </span>
          </div>
        )}
      </Link>

      <div className="flex flex-col gap-2 px-4 items-start">
        <div className="inline-flex text-slate-300 items-center duration-300 ease-linear">
          <Rating
            className="mb-2"
            name="rating"
            value={getRating(item)}
            precision={0.5}
            readOnly
          />
          <span className="ms-4 font-bold">({item.reviews.length})</span>
        </div>

        <Link href={`/product/${item.slug}`} className="flex relative ">
          <h1 className="text-slate-700 font-normal text-xs text-clip text-justify text-pretty capitalize my-4 lg:text-sm">
            {item.name.substring(0, 60)}...
          </h1>
        </Link>
      </div>

      <div className="flex relative justify-between m-2 px-4">
        <span className="absolute left-0 inset-y-2 w-2 h-2 bg-primary-900 rounded-r-full"></span>
        {discountRate > 0 ? (
          <div className="flex flex-wrap justify-between gap-4 w-full">
            <CurrencyFormat
              value={priceWithDiscount}
              className="text-xl inline-flex max-w-[160px] outline-none font-bold text-primary-900"
            />
            <CurrencyFormat
              value={item.price}
              className="line-through max-w-[160px] outline-none w-16 text-slate-600 text-sm hidden lg:flex"
            />
          </div>
        ) : (
          <div className="flex flex-wrap gap-4">
            <CurrencyFormat
              value={priceWithDiscount}
              className="text-xl inline-flex max-w-[16px] outline-none font-bold text-primary-900"
            />
            <CurrencyFormat
              value={item.price}
              className="line-through w-10 opacity-0 test-sm hidden lg:flex"
            />
          </div>
        )}
      </div>
      <ul className="mt-4 flex justify-start flex-wrap  gap-4 w-full">
        <li className="flex items-center gap-2">
          <Truck className="h-4 w-4 text-gray-500" />
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Fast Delivery
          </p>
        </li>
        <li className="flex items-center gap-2">
          <Award className="h-4 w-4 text-yellow-500" />
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Best Price
          </p>
        </li>
      </ul>
    </div>
  );
}
