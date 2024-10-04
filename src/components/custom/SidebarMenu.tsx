import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/custom/Sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import Loading from "./Loading";
import { Category, Page } from "@/types";
import { useRouter } from "next/navigation";

export default function SidebarMenu() {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const router = useRouter();

  // get api
  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      await axios
        .get(process.env.NEXT_PUBLIC_API_URL + "/api/categories")
        .then((response) => {
          setCategories(response.data.data);
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

      await axios
        .get(process.env.NEXT_PUBLIC_API_URL + "/api/brands")
        .then((response) => {
          setBrands(response.data.data);
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
    <Sheet>
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
                  categories.map((item: Category, idx: number) => {
                    return (
                      <div
                        className="group inline-flex items-center px-4 py-2 gap-4 w-full hover:text-primary-700 capitalize cursor-pointer"
                        key={idx}
                        onClick={() =>
                          router.push(`/categories/${item.link}/products`)
                        }
                      >
                        <div className="w-full">
                          <span>{item.name}</span>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </TabsContent>
            <TabsContent value="brands">
              <div>
                {loading && <Loading isLoading={loading} />}

                {brands.length > 0 &&
                  brands.map((item: Page, idx: number) => {
                    return (
                      <div
                        className="group inline-flex items-center px-4 py-2 gap-4 w-full hover:text-primary-700 capitalize cursor-pointer"
                        key={idx}
                        onClick={() => router.push(`item.link}`)}
                      >
                        <div className="w-full">
                          <span>{item.name}</span>
                        </div>
                      </div>
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
