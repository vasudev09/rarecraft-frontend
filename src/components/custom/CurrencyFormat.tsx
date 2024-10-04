import { cn } from "@/utils";
import React from "react";

export default function CurrencyFormat({
  className,
  value,
}: {
  className?: string;
  value: number;
}) {
  const formattedValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
  return (
    <span className={cn("tracking-wider font-normal", className)}>
      {formattedValue}
    </span>
  );
}
