"use client";
import React, { useEffect, useState } from "react";
import Container from "@/components/custom/Container";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { cn } from "@/utils";
import "./style.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { Brand } from "@/types";
import Link from "next/link";
import Loading from "@/components/custom/Loading";
import Image from "next/image";

export default function BrandList() {
  const [loading, setLoading] = useState(false);
  const [brands, setBrands] = useState([
    {
      _id: "668ada2eed4b0a535cfa6029",
      name: "samsung",
      slug: "samsung",
      link: "samsung",
      image:
        "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1720375845/product-images/samsung_qeehfr.png",
    },
    {
      _id: "668ad9feed4b0a535cfa6025",
      name: "sony",
      slug: "sony",
      link: "#",
      image:
        "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1720375805/product-images/sony_juzgag.png",
    },
    {
      _id: "668ad9e5ed4b0a535cfa6021",
      name: "lg",
      slug: "lg",
      link: "lg",
      image:
        "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1720375775/product-images/lg_madoxa.png",
    },
    {
      _id: "668ad9c5ed4b0a535cfa601d",
      name: "hp",
      slug: "hp",
      link: "hp",
      image:
        "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1720375745/product-images/hp_unladw.png",
    },
    {
      _id: "668ad981ed4b0a535cfa6018",
      name: "apple",
      slug: "apple",
      link: "apple",
      image:
        "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1720375678/product-images/apple_buk0pp.png",
    },
    {
      _id: "668ad963ed4b0a535cfa6014",
      name: "adidas",
      slug: "adidas",
      link: "adidas",
      image:
        "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1720375623/product-images/adidas_qjwsfo.png",
    },
    {
      _id: "668ad888ed4b0a535cfa600c",
      name: "acer",
      slug: "acer",
      link: "acer",
      image:
        "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1720375423/product-images/acer_sxwxlj.png",
    },
    {
      _id: "668682108a0761593b5fe08b",
      name: "dell",
      slug: "dell",
      link: "dell",
      image:
        "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1720375316/product-images/dell_kwivzz.png",
    },
    {
      _id: "66867ac28a0761593b5fe060",
      name: "asus",
      slug: "asus",
      link: "asus",
      image:
        "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1720375316/product-images/dell_kwivzz.png",
    },
  ]);

  useEffect(() => {
    // const getProducts = () => {
    //   setLoading(true);
    //   axios
    //     .get(process.env.NEXT_PUBLIC_API_URL + "/api/brands")
    //     .then((response) => {
    //       setBrands(response.data.data);
    //     })
    //     .catch((error) => {
    //       console.log(error.message);
    //     })
    //     .finally(() => {
    //       setLoading(false);
    //     });
    // };
    // getProducts();
  }, []);

  return (
    <section className="py-10 relative">
      <Container>
        {loading && <Loading isLoading={loading} />}
        <div className="my-5 text-center text-xl font-semibold">
          Shop by Brand
        </div>
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
              <SwiperSlide key={idx} className="relative py-6">
                <Link href="#">
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
      </Container>
    </section>
  );
}
