import React from "react";
import { m } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/custom/Button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/hooks/AuthContext";

export default function UserMenu({ openUserMenu }: { openUserMenu: boolean }) {
  const { isAuthenticated } = useAuth();

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
                {"Username"}
              </h4>

              <Button
                // onClick={() => signOut({ callbackUrl: "/products" })}
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
            <li className="hover:bg-neutral-50 w-full items-center py-2">
              <Link href="/account/dashboard">Dashboard</Link>
            </li>

            <li className="hover:bg-neutral-50 w-full items-center py-2">
              <Link href="/account/profile">Account</Link>
            </li>
          </ul>
        )}
      </m.div>
    )
  );
}
