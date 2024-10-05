"use client";
import { cn } from "@/utils";
import React, { useState } from "react";
import Container from "../../custom/Container";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import { m } from "framer-motion";
import Loading from "../../custom/Loading";

export default function BrandImage({
  className,
  image,
}: {
  className: string;
  image: string;
}) {
  const [loading, setLoading] = useState(false);

  return (
    <section>
      <Container>
        {loading && <Loading isLoading={loading} />}
        <div className={cn("flex flex-col gap-y-6", className)}>
          <div className="border py-10 border-slate-200 grid place-content-center h-[320px] p-2">
            <Zoom>
              <m.img
                src={image}
                alt="image"
                width="400"
                height="400"
                className="object-contain cursor-pointer !max-h-[400px] w-[500px]"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              />
            </Zoom>
          </div>
        </div>
      </Container>
    </section>
  );
}
