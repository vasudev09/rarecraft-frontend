"use client";
import { Sheet, SheetTrigger } from "@/components/custom/Sheet";
import { cn } from "@/utils";
import React, { useState } from "react";
import { CiShoppingBasket } from "react-icons/ci";
import CurrencyFormat from "./CurrencyFormat";
import { useRouter } from "next/navigation";
import Loading from "./Loading";

export default function IconsGroup() {
  const [cartOpen, setCartOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <div
      className={cn(
        "hidden",
        "lg:flex items-center justify-end gap-8 ms-auto text-right"
      )}
    >
      {loading && <Loading isLoading={loading} />}
      <div className="hidden w-auto ms-auto lg:flex">
        <Sheet open={cartOpen} onOpenChange={setCartOpen}>
          <SheetTrigger>
            <div className="relative" id="openCart">
              <span className="absolute rounded-full grid grid-place-content-center -top-2 -right-2 bg-red-600 text-white text-sm w-4">
                {"0"}
              </span>
              <CiShoppingBasket className="h-6 w-6" />
            </div>
          </SheetTrigger>
        </Sheet>
      </div>
      <div className="flex">
        <CurrencyFormat
          value={0}
          className="text-xl text-right min-w-[80px] max-w-[120px] overflow-hidden outline-none"
        />
      </div>
    </div>
  );
}
