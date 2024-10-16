"use client";
import usePagination from "@/hooks/usePagination";
import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import ProductList from "./ProductsList";
import Pagination from "@mui/material/Pagination";

export default function ShopProducts({
  category,
  brand,
  tag,
}: {
  category?: string;
  brand?: string;
  tag?: string;
}) {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("latest");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(10000);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const perpage = 10;
  const count = Math.ceil(products.length / perpage);
  const _DATA = usePagination(products, perpage);
  const handleChange = (e: React.ChangeEvent<unknown>, p: number) => {
    setPage(p);
    _DATA.jump(p);
  };

  const getProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_URL}/api/edge-products?${
          filter ? `sortby=${filter}` : ""
        }${category ? `&category=${category}` : ""}${
          brand ? `&brand=${brand}` : ""
        }${tag ? `&tag=${tag}` : ""}${
          minPrice ? `&min_price=${minPrice}` : ""
        }${maxPrice ? `&max_price=${maxPrice}` : ""}`,
        {
          cache: "no-cache",
        }
      );
      if (res.ok) {
        const data = await res.json();
        setProducts(data);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      getProducts();
    }, 500);
    return () => clearTimeout(debounceTimeout);
  }, [filter, category, brand, tag, minPrice, maxPrice]);

  return (
    <div>
      <TopBar
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        loading={loading}
        slug={category ? category : brand}
        // perpage={perpage}
        // setPerPages={setPerPages}
        filter={filter}
        setFilter={setFilter}
      />
      <ProductList loading={loading} products={_DATA.currentData()} />

      <div className="flex mt-10 justify-between">
        <Pagination
          count={count}
          page={page}
          color="primary"
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />

        <div className="flex ms-auto">
          Showing {_DATA.maxPage === page ? products.length : perpage * page} of{" "}
          {products.length} results
        </div>
      </div>
    </div>
  );
}
