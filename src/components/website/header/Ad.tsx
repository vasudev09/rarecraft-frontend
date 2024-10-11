import React from "react";
import Container from "@/components/custom/Container";
import Row from "@/components/custom/Row";
import Link from "next/link";
import { Mail } from "lucide-react";
import LanguageCurrency from "@/components/custom/LanguageCurrency";
import LoginButton from "./LoginButton";

export default function Ad() {
  return (
    <section className="hidden relative lg:flex w-full border-b border-neutral-200">
      <Container>
        <Row className="justify-between">
          <div className="flex">Welcome to RareCraft Store</div>
          <div className="flex gap-8 items-center">
            <Link
              id="contact"
              href="/contact"
              className="flex items-center px-4 py-2 h-full rounded-md hover:bg-neutral-100"
            >
              <Mail className="text-primary-500 h-4 w-4" />
              <span className="mx-2">Contact</span>
            </Link>
            <LanguageCurrency className="flex gap-4" />
            <LoginButton />
          </div>
        </Row>
      </Container>
    </section>
  );
}
