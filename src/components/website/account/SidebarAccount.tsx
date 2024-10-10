"use client";
import { Auth } from "@/APIs/auth";
import { Button } from "@/components/custom/Button";
import { cn } from "@/utils";
import { AlignJustify, LayoutDashboard, LogOut, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useAuth } from "@/hooks/AuthContext";
import Loading from "@/components/custom/Loading";
import toast from "react-hot-toast";
import Toast from "@/components/custom/Toast";
import { MdStore } from "react-icons/md";
import { Package } from "lucide-react";

export default function SidebarAccount() {
  const [openSidebar, setSidebar] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setIsAuthenticated } = useAuth();

  async function handleSignOut() {
    setLoading(true);
    await Auth.logout()
      .then((response) => {
        toast.custom(
          <Toast message={response.data.message} status="success" />
        );
        setIsAuthenticated(false);
        window.location.reload();
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
  return (
    <div className="h-screen relative mb-6">
      {loading && <Loading isLoading={loading} />}
      <Button
        className="absolute top-0 left-0 xl:hidden"
        type="button"
        variant="default"
        onClick={() => setSidebar(!openSidebar)}
      >
        <AlignJustify />
      </Button>

      <aside
        className={cn(
          "h-full bg-white shadow-md absolute xl:relative xl:translate-x-0 top-10 left-0 z-40 w-64 transition-transform -translate-x-[300px]",
          openSidebar && "translate-x-0"
        )}
        aria-label="sidebar"
      >
        <div className="h-full px-3 py-4 overflow-auto bg-gray-50 ">
          <ul className="space-y-2 font-medium flex flex-col gap-10">
            <li>
              <Image
                width="80"
                height="80"
                alt="product"
                className="mx-auto"
                src={"https://cdn-icons-png.flaticon.com/128/236/236831.png"}
              />
            </li>

            <li>
              <Link
                className="flex items-center p-2 text-gray-900 rounded-lg"
                href="/account/dashboard"
              >
                <LayoutDashboard />
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>

            <li>
              <Link
                className="flex items-center p-2 text-gray-900 rounded-lg"
                href="/account/profile"
              >
                <User />
                <span className="ms-3">Profile</span>
              </Link>
            </li>

            <li>
              <Link
                className="flex items-center p-2 text-gray-900 rounded-lg"
                href="/account/products"
              >
                <Package />
                <span className="ms-3">My Products</span>
              </Link>
            </li>

            <li>
              <Link
                className="flex items-center p-2 text-gray-900 rounded-lg"
                href="/account/brands"
              >
                <MdStore className="h-6 w-6" />
                <span className="ms-3">My Brands</span>
              </Link>
            </li>

            <li>
              <Button
                onClick={() => {
                  handleSignOut();
                }}
                className="flex items-center "
              >
                <LogOut />
                <span className="ms-3">LogOut</span>
              </Button>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
