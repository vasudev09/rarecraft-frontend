"use client";
import { cn } from "@/utils";
import React, { useState } from "react";
import Currency from "./Currency";
import Language from "./Language";

export default function LanguageCurrency({
  className,
}: {
  className?: string;
}) {
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("USD");

  const handleCurrency = (value: string) => {
    setCurrency(value);
  };

  const handleLanguage = (value: string) => {
    setLanguage(value);
  };

  return (
    <div className={cn("", className)}>
      <Language language={language} handleLanguage={handleLanguage} />
      <Currency currency={currency} handleCurrency={handleCurrency} />
    </div>
  );
}
