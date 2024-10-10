import React from "react";
import FiltersMobile from "./FiltersMobile";
import { Button } from "@/components/custom/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/custom/Dropdown-Menu";

export default function TopBar({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  loading,
  slug,
  // perpage,
  filter,
  // setPerPages,
  setFilter,
}: {
  minPrice: number;
  maxPrice: number;
  setMinPrice: (value: number) => void;
  setMaxPrice: (value: number) => void;
  loading: boolean;
  slug?: string;
  // perpage: number;
  filter: string;
  // setPerPages: (value: number) => void;
  setFilter: (value: string) => void;
}) {
  return (
    <div className="items-center gap-4 flex-1 justify-between lg:flex">
      <div className="flex w-full item-center gap-4 flex-1 justify-between">
        <FiltersMobile
          minPrice={minPrice}
          maxPrice={maxPrice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          loading={loading}
        />
        <div className="ms-auto flex flex-row gap-4">
          <div className="flex flex-row items-center gap-4">
            <div>Sort by:</div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">{filter ? filter : slug}</Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56">
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value="bottom">
                  <DropdownMenuRadioItem
                    value={filter}
                    onClick={() => setFilter("alphabetic")}
                  >
                    Alphabetic
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    value={filter}
                    onClick={() => setFilter("price_lth")}
                  >
                    Price: Low to High
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem
                    value={filter}
                    onClick={() => setFilter("price_htl")}
                  >
                    Price: High to Low
                  </DropdownMenuRadioItem>

                  <DropdownMenuRadioItem
                    value={filter}
                    onClick={() => setFilter("latest")}
                  >
                    Latest
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="hidden lg:flex flex-row items-center gap-2">
            <div className="flex flex-row items-center gap-2">
              <label htmlFor="minPrice">Min:</label>
              <input
                type="number"
                name="numprice"
                id="minPrice"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="block w-[100px] rounded-lg border border-gray-300 p-1.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
            <div className="flex flex-row items-center gap-2">
              <label htmlFor="maxPrice">Max:</label>
              <input
                type="number"
                name="numprice"
                id="maxPrice"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="block w-[100px] rounded-lg border border-gray-300 p-1.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
