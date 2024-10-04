import React from "react";
import Ad from "./Ad";
import Main from "./Main";
import Col from "@/components/custom/Col";

export default function Header() {
  return (
    <header>
      <Col className="gap-y-2">
        <Ad />
        <Main />
      </Col>
    </header>
  );
}
