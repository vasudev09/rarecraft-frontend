import { cn } from "@/utils";
import { Brand } from "@/types";
import React from "react";
import Container from "../../custom/Container";
import Rating from "@mui/material/Rating";
import { BsFacebook, BsLinkedin, BsTwitterX, BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BrandContent({
  className,
  brand,
}: {
  className: string;
  brand: Brand;
}) {
  const pathname = usePathname();

  return (
    <section>
      <Container>
        <div className={cn("flex gap-8 flex-wrap justify-between", className)}>
          <div className="flex flex-col flex-1 gap-4 items-start">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold tracking-wide lg:text-xl">
                Brand: {brand.name}
              </h1>

              <div className="inline-flex items-ceneter gap-4">
                <Rating
                  name="half-rating-read"
                  className=""
                  readOnly
                  value={Number(brand.reviews.avg_review)}
                  precision={0.5}
                />
                <span className="pt-0">
                  ({brand.reviews.total_reviews}) reviews
                </span>
              </div>

              <div>
                <p className="text-pretty text-sm/6">{brand.description}</p>
              </div>
            </div>

            <div>Products: {brand.total_products}</div>

            <li className="inline-flex justify-between gap-4">
              <span className="capitalize font-bold text-2xl">share:</span>
              <div className="inline-flex gap-4">
                <span className="">
                  <Link
                    target="_blank"
                    rel="noopener noreferer"
                    href={`https://x.com/intent/post?url=${process.env.NEXT_PUBLIC_HOST_URL}${pathname}`}
                  >
                    <BsTwitterX className="hover:text-primary-500" />
                  </Link>
                </span>
                <span className="">
                  <Link
                    target="_blank"
                    rel="noopener noreferer"
                    href={`https://linkedin.com/shareArticle?url=${process.env.NEXT_PUBLIC_HOST_URL}${pathname}`}
                  >
                    <BsLinkedin className="hover:text-primary-500" />
                  </Link>
                </span>
                <span className="">
                  <Link
                    target="_blank"
                    rel="noopener noreferer"
                    href={`https://facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_HOST_URL}${pathname}`}
                  >
                    <BsFacebook className="hover:text-primary-500" />
                  </Link>
                </span>
                <span className="">
                  <Link
                    target="_blank"
                    rel="noopener noreferer"
                    href={`https://web.whatsapp.com/send?text=${process.env.NEXT_PUBLIC_HOST_URL}${pathname}`}
                  >
                    <BsWhatsapp className="hover:text-primary-500" />
                  </Link>
                </span>
              </div>
            </li>
          </div>
        </div>
      </Container>
    </section>
  );
}
