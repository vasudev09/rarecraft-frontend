"use client";
import React from "react";
import { Product } from "@/types";
import Link from "next/link";
import { BsFacebook, BsLinkedin, BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { usePathname } from "next/navigation";

export default function AdditionnalDescription({
  product,
}: {
  product: Product;
}) {
  const pathname = usePathname();
  return (
    <ul className="flex flex-col gap-10 mt-20 w-full">
      <li className="inline-flex">
        <span className="capitalize">category:</span>
        <span className="text-primary capitalize ms-auto hover:underline">
          <Link href={`/products/category/${product.category.slug}`}>
            {product.category.name}
          </Link>
        </span>
      </li>

      <li className="inline-flex">
        <span className="capitalize">share:</span>
        <div className="inline-flex gap-4 ms-auto text-slate-700">
          <span className="">
            <Link
              target="_blank"
              rel="noopener noreferer"
              href={`https://x.com/intent/post?url=${process.env.NEXT_PUBLIC_HOST_URL}${pathname}`}
            >
              <BsTwitterX className="hover:text-primary-500" />
            </Link>
          </span>
          <span className="">
            <Link
              target="_blank"
              rel="noopener noreferer"
              href={`https://linkedin.com/shareArticle?url=${process.env.NEXT_PUBLIC_HOST_URL}${pathname}`}
            >
              <BsLinkedin className="hover:text-primary-500" />
            </Link>
          </span>
          <span className="">
            <Link
              target="_blank"
              rel="noopener noreferer"
              href={`https://facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_HOST_URL}${pathname}`}
            >
              <BsFacebook className="hover:text-primary-500" />
            </Link>
          </span>
          <span className="">
            <Link
              target="_blank"
              rel="noopener noreferer"
              href={`https://web.whatsapp.com/send?text=${process.env.NEXT_PUBLIC_HOST_URL}${pathname}`}
            >
              <BsWhatsapp className="hover:text-primary-500" />
            </Link>
          </span>
        </div>
      </li>
    </ul>
  );
}
