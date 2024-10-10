"use client";
import React, { useState } from "react";
import Container from "@/components/custom/Container";
import Row from "@/components/custom/Row";
import SearchInput from "@/components/custom/SearchInput";
import IconsGroup from "@/components/custom/IconsGroup";
import SidebarMenu from "@/components/custom/SidebarMenu";
import Logo from "@/components/custom/Logo";
import { cn } from "@/utils";
import SearchMobile from "@/components/custom/SearchMobile";
import LanguageCurrencyModal from "@/components/custom/LanguageCurrencyModal";

export default function Main() {
  const [openSearchMobile, setOpenSearchMobile] = useState(false);
  return (
    <section className="w-full py-2">
      <Container>
        <Row className="justify-between h-[84px] lg:gap-x-24">
          <div
            className={cn(
              "flex items-center gap-4 ",
              openSearchMobile && " hidden lg:flex"
            )}
          >
            <SidebarMenu />
            <div className="flex">
              <Logo />
            </div>
          </div>

          {/* Mobile Screens */}
          <div className="flex items-center gap-2 w-full justify-end lg:hidden">
            <SearchMobile
              openSearchMobile={openSearchMobile}
              setOpenSearchMobile={setOpenSearchMobile}
            />
            <LanguageCurrencyModal
              className={cn("", openSearchMobile && "hidden")}
            />
          </div>

          {/* Large Screens */}
          <SearchInput />
          <IconsGroup />
        </Row>
      </Container>
    </section>
  );
}
