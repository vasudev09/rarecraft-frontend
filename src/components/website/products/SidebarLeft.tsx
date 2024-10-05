"use client";
import React from "react";
import CategoryList from "../home/CategoryList";
import BrandsList from "./BrandsList";

export default function SidebarLeft({ loading }: { loading: boolean }) {
  return (
    <div className="max-w-[280px] w-full flex-col h-full hidden lg:flex">
      <CategoryList className="w-full" />
      <BrandsList className="w-full" />
    </div>
  );
}
