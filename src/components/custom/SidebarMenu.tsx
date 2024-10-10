import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/custom/Sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";
import React, { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import Loading from "./Loading";
import { Category, Brand } from "@/types";
import { CategoryAPI } from "@/APIs/category";
import { BrandAPI } from "@/APIs/brand";
import Link from "next/link";

export default function SidebarMenu() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // get api
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
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <div className="lg:hidden">
          <span className="flex cursor-pointer lg:hidden">
            <CiMenuBurger className="h-8 w-8 font-thin text-base" />
          </span>
        </div>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle>Main Menu</SheetTitle>
          <SheetDescription>Select a option tab</SheetDescription>
        </SheetHeader>

        <div className="mt-10">
          <Tabs defaultValue="account" className="max-w-[400px]">
            <TabsList>
              <TabsTrigger value="category">Categories</TabsTrigger>
              <TabsTrigger value="brands">Brands</TabsTrigger>
            </TabsList>

            <TabsContent value="category">
              <div>
                {loading && <Loading isLoading={loading} />}

                {categories.length > 0 &&
                  categories.slice(0, 10).map((item: Category, idx: number) => {
                    return (
                      <Link
                        key={idx}
                        href={`/categories/${item.slug}/products`}
                        onClick={() => setIsOpen(false)}
                        className="group inline-flex items-center px-4 py-2 gap-4 w-full hover:text-primary-700 capitalize cursor-pointer"
                      >
                        <div className="w-full">
                          <span>{item.name}</span>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </TabsContent>
            <TabsContent value="brands">
              <div>
                {loading && <Loading isLoading={loading} />}

                {brands.length > 0 &&
                  brands.slice(0, 10).map((item: Brand, idx: number) => {
                    return (
                      <Link
                        key={idx}
                        href={`/brand/${item.slug}/products`}
                        onClick={() => setIsOpen(false)}
                        className="group inline-flex items-center px-4 py-2 gap-4 w-full hover:text-primary-700 capitalize cursor-pointer"
                      >
                        <div className="w-full">
                          <span>{item.name}</span>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </SheetContent>
    </Sheet>
  );
}
