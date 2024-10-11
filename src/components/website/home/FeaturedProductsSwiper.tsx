"use client";
import { cn } from "@/utils";
import "./style.css";
import { Product } from "@/types";
import ProductCard from "@/components/custom/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

export default function FeaturedProductsSwiper({
  products,
}: {
  products: Product[];
}) {
  return (
    <Swiper
      breakpoints={{
        360: { slidesPerView: 1, spaceBetween: 40 },
        575: { slidesPerView: 2, spaceBetween: 40 },
        768: { slidesPerView: 2, spaceBetween: 40 },
        1024: { slidesPerView: 3, spaceBetween: 40 },
        1280: { slidesPerView: 5, spaceBetween: 40 },
      }}
      autoplay={{ delay: 10000, disableOnInteraction: false }}
      spaceBetween={50}
      slidesPerView={1}
      navigation={false}
      pagination={{ clickable: true }}
      modules={[Autoplay, Navigation, Pagination]}
      className={cn("mySwiper h-full w-full")}
    >
      {products &&
        products.slice(0, 10).map((item: Product, idx: number) => (
          <SwiperSlide key={idx} className="relative py-10">
            <ProductCard item={item} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
