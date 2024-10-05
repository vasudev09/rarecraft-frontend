"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loading from "@/components/custom/Loading";
import { Brand } from "@/types";

export default function BrandsList({ className }: { className: string }) {
  const [loading, setLoading] = useState(false);
  const [brands, setBrands] = useState([
    {
      _id: "66969377d0776db430386ddc",
      name: "women's fashion",
      slug: "womens-fashion",
      link: "womens-fashion",
      image: "https://m.media-amazon.com/images/I/718Hub5DjgL._SX522_.jpg",
    },
    {
      _id: "668545b56c0c5a9794adb77c",
      name: "hot sale",
      slug: "hot-sale",
      link: "hot-sale",
      image: "https://m.media-amazon.com/images/I/718Hub5DjgL._SX522_.jpg",
    },
    {
      _id: "668545aa6c0c5a9794adb778",
      name: "headphones",
      slug: "headphones",
      link: "headphones",
      image: "https://m.media-amazon.com/images/I/718Hub5DjgL._SX522_.jpg",
    },
    {
      _id: "6685459f6c0c5a9794adb774",
      name: "tablets",
      slug: "tablets",
      link: "tablets",
      image: "https://m.media-amazon.com/images/I/718Hub5DjgL._SX522_.jpg",
    },
    {
      _id: "6685458f6c0c5a9794adb770",
      name: "backpacks",
      slug: "backpacks",
      link: "backpacks",
      image: "https://m.media-amazon.com/images/I/718Hub5DjgL._SX522_.jpg",
    },
    {
      _id: "668544f16c0c5a9794adb766",
      name: "fashion",
      slug: "fashion",
      link: "fashion",
      image: "https://m.media-amazon.com/images/I/718Hub5DjgL._SX522_.jpg",
    },
    {
      _id: "668544806c0c5a9794adb754",
      name: "mobiles",
      slug: "mobiles",
      link: "mobiles",
      image: "https://m.media-amazon.com/images/I/718Hub5DjgL._SX522_.jpg",
    },
  ]);
  const router = useRouter();

  useEffect(() => {
    // const getCategories = async () => {
    //   setLoading(true);
    //   await axios
    //     .get(process.env.NEXT_PUBLIC_API_URL + "/api/categories")
    //     .then((response) => {
    //       setCategories(response.data.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     })
    //     .finally(() => {
    //       setLoading(false);
    //     });
    // };
    // getCategories();
  }, []);

  return (
    <div
      id="brandsList"
      className={`hidden lg:flex flex-col gap-4 p-4 ${className}`}
    >
      {loading && <Loading isLoading={loading} />}
      <div className="my-3 text-center font-medium">Brands</div>
      {!loading &&
        brands &&
        brands.map((item: Brand, idx: number) => {
          return (
            <div
              key={idx}
              onClick={() => router.push(`/brand/${item.link}/products`)}
              className="inline-flex items-center w-full p-2 hover:cursor-pointer hover:text-primary-800 capitalize"
            >
              <span className="hover:font-bold">{item.name}</span>
            </div>
          );
        })}
    </div>
  );
}
