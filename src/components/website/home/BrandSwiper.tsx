"use client";
import React from "react";
import { cn } from "@/utils";
import "./style.css";
import { Brand } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

export default function BrandSwiper({ brands }: { brands: Brand[] }) {
  return (
    <Swiper
      breakpoints={{
        360: { slidesPerView: 1, spaceBetween: 40 },
        575: { slidesPerView: 2, spaceBetween: 40 },
        768: { slidesPerView: 2, spaceBetween: 40 },
        1024: { slidesPerView: 3, spaceBetween: 40 },
        1280: { slidesPerView: 5, spaceBetween: 40 },
      }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      spaceBetween={50}
      slidesPerView={1}
      navigation={false}
      pagination={{ clickable: true }}
      modules={[Autoplay, Navigation, Pagination]}
      className={cn(
        "mySwiper w-full flex justify-between gap-10 border border-gray-200 py-10"
      )}
    >
      {brands &&
        brands.slice(0, 10).map((item: Brand, idx: number) => (
          <SwiperSlide key={idx} className="relative py-10">
            <Link href={`/products/brand/${item.slug}`}>
              <Image
                className="block mx-auto w-60 h-28 object-contain"
                src={item.image}
                width={600}
                height={300}
                alt="brand"
                quality={100}
              />
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
