"use client";
import Banner from "./Banner";
import BrandCarousel from "./BrandCarousel";
import Payments from "./Payments";
import TopCategories from "./TopCategories";
import Cta from "./Cta";
import FeaturedProducts from "./FeaturedProducts";
import Newsletter from "./NewsLetter";

import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { CategoryAPI } from "@/APIs/category";
import { BrandAPI } from "@/APIs/brand";

export default function HomePage() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      await CategoryAPI.getList()
        .then((response) => {
          setCategories(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    const getBrands = async () => {
      setLoading(true);
      await BrandAPI.getList()
        .then((response) => {
          setBrands(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getCategories();
    getBrands();
  }, []);

  return (
    <>
      <Banner categories={categories} loading={loading} />
      <BrandCarousel brands={brands} loading={loading} />
      <Payments />
      <Cta />
      <FeaturedProducts />
      <TopCategories categories={categories} loading={loading} />
      <Newsletter />
    </>
  );
}
