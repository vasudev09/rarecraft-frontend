"use client";
import Container from "@/components/custom/Container";
import SidebarAccount from "@/components/website/account/SidebarAccount";
import React, { useEffect } from "react";
import { useAuth } from "@/hooks/AuthContext";
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated === false) {
      router.push("/signin");
    }
  }, [isAuthenticated, router]);

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
