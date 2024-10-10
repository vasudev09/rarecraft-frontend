"use client";
import React, { useEffect, useState } from "react";
import Heading from "@/components/custom/Custom";
import Container from "../../custom/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { cn } from "@/utils";
import "./style.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { Product } from "@/types";
import ProductCard from "@/components/custom/ProductCard";
import { ProductAPI } from "@/APIs/product";
import { Skeleton } from "@/components/custom/Skeleton";

export default function FeaturedProducts() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = () => {
      setLoading(true);
      ProductAPI.getList({
        params: {
          tag: "featured",
        },
      })
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.log(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getProducts();
  }, []);

  return (
    <section className="py-10 relative">
      <Container>
        <Heading name="featured products" />
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
          {loading && <Skeleton className="h-[40vh] my-2" />}
          {products &&
            products.slice(0, 10).map((item: Product, idx: number) => (
              <SwiperSlide key={idx} className="relative py-10">
                <ProductCard item={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </Container>
    </section>
  );
}
