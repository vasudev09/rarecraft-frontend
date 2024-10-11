import React from "react";
import CategoryList from "../home/CategoryList";
import BrandsList from "./BrandsList";
import { Suspense } from "react";
import { Skeleton } from "@/components/custom/Skeleton";
export default function SidebarLeft() {
  return (
    <div className="max-w-[280px] w-full flex-col h-full hidden lg:flex">
      <Suspense fallback={<Skeleton className="h-[50vh] w-full my-2" />}>
        <CategoryList className="w-full" />
      </Suspense>
      <Suspense fallback={<Skeleton className="h-[50vh] w-full my-2" />}>
        <BrandsList className="w-full" />
      </Suspense>
    </div>
  );
}
