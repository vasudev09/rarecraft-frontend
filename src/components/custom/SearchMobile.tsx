import { Button } from "@/components/custom/Button";
import { Input } from "@/components/custom/Input";
import { cn } from "@/utils";
import { ChevronLeft } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { FormValues } from "@/types";
import toast from "react-hot-toast";
import Toast from "./Toast";
import Loading from "./Loading";
import { m } from "framer-motion";
import SearchProduct from "./SearchProduct";
import { ProductAPI } from "@/APIs/product";

export default function SearchMobile({
  openSearchMobile,
  setOpenSearchMobile,
}: {
  openSearchMobile: boolean;
  setOpenSearchMobile: (value: boolean) => void;
}) {
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
    <>
      <button
        className={cn("", openSearchMobile && "hidden")}
        onClick={() => setOpenSearchMobile(!openSearchMobile)}
      >
        <CiSearch className="h-8 w-8" />
      </button>
      <m.div
        // initial={{ opacity: 0, y: -15 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 left-0 z-[1001] w-full h-full bg-white flex flex-col",
          openSearchMobile ? "visible" : "invisible"
        )}
      >
        <form className="flex items-center gap-4 w-full p-4">
          {loading && <Loading isLoading={loading} />}
          <Button
            variant="outline"
            size="icon"
            onClick={(e) => {
              e.preventDefault();
              setOpenSearchMobile(false);
              setLoading(false);
            }}
          >
            <ChevronLeft className="" />
          </Button>

          <Input
            className="focus:outline-none focus:visible-none focus:ring-0 appearance-none ring-white bg-transparent flex-1 "
            placeholder="Search a product, brand"
            ref={inputSearch}
            onInput={handleSearch}
            onMouseEnter={handleFocusOn}
            onMouseLeave={handleFocusOff}
          />
        </form>
        <div className="flex-1 overflow-y-auto w-full px-4">
          <SearchProduct
            products={dataProducts}
            className="grid grid-cols-2 gap-4 justify-items-center bg-white shadow-sm"
          />
        </div>
      </m.div>
    </>
  );
}
