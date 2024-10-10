"use client";
import React from "react";
import CategoryList from "../home/CategoryList";
import BrandsList from "./BrandsList";
import { useState, useEffect } from "react";
import { CategoryAPI } from "@/APIs/category";
import { BrandAPI } from "@/APIs/brand";

export default function SidebarLeft() {
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
    <div className="max-w-[280px] w-full flex-col h-full hidden lg:flex">
      <CategoryList
        className="w-full"
        categories={categories}
        loading={loading}
      />
      <BrandsList className="w-full" brands={brands} loading={loading} />
    </div>
  );
}
