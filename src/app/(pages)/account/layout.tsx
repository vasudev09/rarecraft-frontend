"use client";
import Container from "@/components/custom/Container";
import SidebarAccount from "@/components/website/account/SidebarAccount";
import React from "react";
import { useAuth } from "@/hooks/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated === false) {
      router.push("/signin");
    }
  }, [isAuthenticated]);

  if (isAuthenticated !== true) {
    return <div className="min-h-screen"></div>;
  }
  return (
    <section className="my-10 relative">
      <Container>
        <div className="flex relative">
          <SidebarAccount />
          <div className="flex-1">{children}</div>
        </div>
      </Container>
    </section>
  );
}
