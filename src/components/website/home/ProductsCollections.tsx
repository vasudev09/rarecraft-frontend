"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function ProductsCollections() {
  const router = useRouter();

  const collections = [
    {
      title: "Featured Products",
      imageUrl:
        "https://images.pexels.com/photos/6716442/pexels-photo-6716442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Trending Products",
      imageUrl:
        "https://images.pexels.com/photos/7674538/pexels-photo-7674538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Latest Products",
      imageUrl:
        "https://images.pexels.com/photos/20303261/pexels-photo-20303261/free-photo-of-tables-and-chairs-on-cafe-terrace.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "All Products",
      imageUrl:
        "https://images.pexels.com/photos/12630728/pexels-photo-12630728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const handleRedirect = () => {
    router.push("/products");
  };

  return (
    <div className="grid grid-cols-2 gap-3 w-full mt-8 md:px-8 h-[400px] sm:h-[300px]">
      {collections.map((collection, index) => (
        <div
          key={index}
          className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer"
          onClick={handleRedirect}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-400 group-hover:scale-105"
            style={{ backgroundImage: `url(${collection.imageUrl})` }}
          ></div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>

          {/* Text on top of image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-2xl font-bold tracking-wide transition-transform duration-400 group-hover:scale-110 ml-1 sm:ml-0 leading-relaxed sm:leading-none">
              {collection.title}
            </span>
          </div>

          {/* Hover effect with border */}
          <div className="absolute inset-0 rounded-xl transition-colors duration-300"></div>
        </div>
      ))}
    </div>
  );
}
