"use client";
import { Input } from "@/components/custom/Input";
import { cn } from "@/utils";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import Toast from "./Toast";
import { useForm } from "react-hook-form";
import { FormValues } from "@/types";
import Loading from "./Loading";
import { m } from "framer-motion";
import SearchProduct from "./SearchProduct";
import { ProductAPI } from "@/APIs/product";

export default function SearchInput() {
  const inputSearch = useRef<HTMLInputElement>(null);
  const { setFocus } = useForm<FormValues>({
    progressive: true,
  });
  const [loading, setLoading] = useState(false);
  const [dataProducts, setDataProducts] = useState([]);

  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleFocusOn = () => {
    inputSearch.current?.focus();
  };
  const handleFocusOff = () => {
    inputSearch.current?.blur();
  };
  useEffect(() => {
    setFocus("search");
  }, [setFocus]);

  /** API SEARCH */
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.currentTarget.value;
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(async () => {
      setLoading(true);
      if (search.length === 0) {
        setLoading(false);
        setDataProducts([]);
        return;
      }
      if (search.length >= 3) {
        await ProductAPI.getList({ params: { search: search } })
          .then((response) => {
            const data = response.data;
            setDataProducts(data);
          })
          .catch((error) => {
            if (error.response) {
              toast.custom(
                <Toast
                  message={
                    error.response.data.message || "Something went wrong"
                  }
                  status="error"
                />
              );
            } else {
              toast.custom(<Toast message={error.message} status="error" />);
            }
          });
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={cn("hidden relative w-full group", "lg:block")}>
      <div className="rounded-lg bg-neutral-200 flex-1 hidden lg:flex border h-14 border-b border-b-white group-hover:border-bg-neutral-200 group-hover:border-white group-hover:shadow-xl">
        <Input
          className="w-full outline-none px-10 bg-neutral-100 group-hover:bg-white group-hover:border-white"
          placeholder="Search a product, brand"
          ref={inputSearch}
          onInput={handleSearch}
          onMouseEnter={handleFocusOn}
          onMouseLeave={handleFocusOff}
        />
      </div>

      <m.div className="hidden absolute group-hover:flex top-[50px] z-[1000] rounded-t-xl w-full h-[600px] border-neutral-100 border bg-white shadow-xl">
        {loading ? <Loading isLoading={loading} /> : ""}
        <SearchProduct
          products={dataProducts}
          className="grid gap-10 p-8 overflow-auto xl:grid-cols-3"
        />
      </m.div>
    </div>
  );
}
