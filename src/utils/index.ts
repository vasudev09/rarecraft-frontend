import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Product, Review } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const discountPrice = (price: number, discount: number): number => {
  const final_price: number = price - price * (discount / 100);

  return parseInt(final_price.toFixed(2));
};

export const getPriceWithDiscountFromProduct = (product: Product): number => {
  const data =
    product.discount > 0
      ? discountPrice(product.price, product.discount)
      : product.price;

  return data;
};

export const getDiscountRate = (
  price: number,
  discountPrice: number
): number => {
  const d = (price - discountPrice) * (100 / price);
  return parseFloat(d.toFixed(2));
};

export const getRating = (product: Product) => {
  if (product.reviews.length === 0) {
    return 0;
  }
  const ratingTotal = product.reviews.reduce(
    (acc: number, value: Review) => acc + value?.rating,
    0
  );
  const rating = ratingTotal / product.reviews.length;

  return parseFloat(rating.toFixed(2));
};

export const getDate = (date: Date) => {
  const newDate = new Date(date).toDateString();

  return newDate;
};
