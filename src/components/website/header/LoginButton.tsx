"use client";
import React, { useState } from "react";
import Link from "next/link";
import { LogOut, User } from "lucide-react";
import UserMenu from "@/components/custom/UserMenu";
import { useAuth } from "@/hooks/AuthContext";

export default function LoginButton() {
  const { isAuthenticated } = useAuth();
  const [openUserMenu, setOpenUserMenu] = useState(false);

  return (
    <div className="flex justify-flex-end items-center gap-4 px-4 py-2 h-full hover:bg-neutral-100">
      {/* If login  */}
      {isAuthenticated === true ? (
        <div className="flex gap-2 hover:cursor-pointer">
          <User className="h-4 w-4 text-primary-500" />
          <span onClick={() => setOpenUserMenu(!openUserMenu)}>Account</span>
          <UserMenu
            openUserMenu={openUserMenu}
            setOpenUserMenu={setOpenUserMenu}
          />
        </div>
      ) : (
        <Link href="/signin" className="cursor-pointer flex gap-4 items-center">
          <LogOut className="h-4 w-4 text-primary-500" />
          <span>Login</span>
        </Link>
      )}
    </div>
  );
}
