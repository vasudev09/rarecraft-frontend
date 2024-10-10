"use client";
import React, { useEffect, useState } from "react";
import Loading from "@/components/custom/Loading";
import { Account } from "@/APIs/account";
import toast from "react-hot-toast";
import Toast from "@/components/custom/Toast";
import { MdStore } from "react-icons/md";
import { Package } from "lucide-react";

export default function Dashboard() {
  const [myProducts, setMyProducts] = useState([]);
  const [myBrands, setMyBrands] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getMyProducts() {
    setLoading(true);
    Account.myProducts()
      .then((response) => {
        setMyProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          toast.custom(
            <Toast
              message={error.response.data.message || "Something went wrong"}
              status="error"
            />
          );
        } else {
          toast.custom(<Toast message={error.message} status="error" />);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }

  async function getMyBrands() {
    setLoading(true);
    Account.myBrands()
      .then((response) => {
        setMyBrands(response.data);
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          toast.custom(
            <Toast
              message={error.response.data.message || "Something went wrong"}
              status="error"
            />
          );
        } else {
          toast.custom(<Toast message={error.message} status="error" />);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getMyProducts();
    getMyBrands();
  }, []);

  return (
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg ">
      {loading && <Loading isLoading={loading} />}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mb-4">
        <div className="flex items-center justify-center h-24 rounded bg-gray-50">
          <div className="flex items-center gap-4">
            <Package className="font-bold h-10 w-10" />
            <span className="text-2xl text-gray-400">{myProducts.length}</span>
            Your Products
          </div>
        </div>

        <div className="flex items-center justify-center h-24 rounded bg-gray-50">
          <div className="flex items-center gap-4">
            <MdStore className="font-bold h-10 w-10" />
            <span className="text-2xl text-gray-400">{myBrands.length}</span>
            Your Brands
          </div>
        </div>
      </div>
    </div>
  );
}
