"use client";
import React, { useState } from "react";
import { m } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/custom/Button";
import { LogOut } from "lucide-react";
import { useAuth } from "@/hooks/AuthContext";
import { useRouter } from "next/navigation";
import { Auth } from "@/APIs/auth";
import toast from "react-hot-toast";
import Toast from "./Toast";

export default function UserMenu({
  openUserMenu,
  setOpenUserMenu,
}: {
  openUserMenu: boolean;
  setOpenUserMenu: (value: boolean) => void;
}) {
  const { isAuthenticated, setIsAuthenticated, username } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const signOut = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    await Auth.logout()
      .then((response) => {
        setIsAuthenticated(false);
        toast.custom(
          <Toast message={response.data.message} status="success" />
        );
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
  };

  return (
    openUserMenu && (
      <m.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-[320px] rounded-md bg-white px-4 py-8 absolute shadow-2xl right-0 top-10 flex flex-col justify-center items-center gap-4 z-20"
      >
        <h4>Welcome to the website</h4>

        {isAuthenticated === true && (
          <div className="flex items-center gap-4">
            <Image
              src="https://cdn-icons-png.flaticon.com/128/236/236831.png"
              width="80"
              height="80"
              alt="image profile"
            />

            <div className="flex flex-col justify-center items-center gap-2">
              <span className="font-bold text-primary-800 text-xl capitalize">
                Welcome back
              </span>
              <h4 className="font-bold text-primary-800 capitalize">
                {username}
              </h4>

              <Button
                onClick={signOut}
                variant="outline"
                size="icon"
                className="w-28 flex gap-4 justify-around "
              >
                <LogOut className="" />
                Sign-out
              </Button>
            </div>
          </div>
        )}

        {isAuthenticated === true && (
          <ul className="flex flex-col gap-4 w-full items-start">
            <li>
              <hr />
            </li>
            <li
              className="hover:bg-neutral-50 w-full items-center py-2"
              onClick={() => {
                router.push("/account/dashboard");
                setOpenUserMenu(false);
              }}
            >
              Dashboard
            </li>

            <li
              className="hover:bg-neutral-50 w-full items-center py-2"
              onClick={() => {
                router.push("/account/profile");
                setOpenUserMenu(false);
              }}
            >
              Account
            </li>
          </ul>
        )}
      </m.div>
    )
  );
}
