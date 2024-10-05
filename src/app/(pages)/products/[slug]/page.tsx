import Container from "@/components/custom/Container";
import ProductWrapper from "@/components/website/product/ProductWrapper";
import ProductSpecifications from "@/components/website/product/ProductSpecifications";
import FeaturedProducts from "@/components/website/home/FeaturedProducts";
import Reviews from "@/components/website/product/Reviews";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/custom/BreadCrumb";
import Link from "next/link";
import React, { Fragment } from "react";
import axios from "axios";

export default async function page({ params }: { params: { slug: string } }) {
  async function getProductBySlug(slug: string) {
    try {
      const response = await axios.get(
        process.env.NEXT_PUBLIC_API_URL + "/api/products",
        {
          params: {
            slug: slug,
          },
        }
      );

      return response.data.data;
    } catch (error) {
      return error;
    }
  }
  //   const product = await getProductBySlug(params.slug);
  const product = {
    _id: "66a837baab6bdb7c041fb886",
    featured: true,
    name: "acer predator helios neo 16 gaming laptop | intel core i7-13650hx | nvidia geforce rtx 4060 ",
    slug: "acer-predator-helios-neo-16-gaming-laptop--intel-core-i7-13650hx--nvidia-geforce-rtx-4060",
    description:
      'acer predator helios neo 16 gaming laptop | intel core i7-13650hx | nvidia geforce rtx 4060 | 16" wuxga 1920 x 1200 165hz g-sync display | 16gb ddr5 | 512gb gen 4 ssd | killer wi-fi 6e | phn16-71-76h5',
    category: {
      _id: "668542de6c0c5a9794adb74a",
      name: "electronics",
      createdAt: "2024-07-03T12:23:58.325Z",
      updatedAt: "2024-07-16T16:10:41.354Z",
      __v: 0,
      slug: "electronics",
      submenu: [
        "669637c65798c9eb94de8227",
        "6694c711c2c44bfe362001de",
        "66855ae26c0c5a9794adb844",
        "66855ac96c0c5a9794adb83f",
        "66855aa96c0c5a9794adb83a",
      ],
      link: "electronics",
      image:
        "https://demo.fleetcart.envaysoft.com/storage/media/2cZfkz85nXxlSTySz6R8m34u5UQLfiRQVyKjF8hm.png",
    },
    subCategories: [],
    brand: {
      _id: "668ad888ed4b0a535cfa600c",
      name: "acer",
      slug: "acer",
      link: "acer",
      image:
        "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1720375423/product-images/acer_sxwxlj.png",
      createdAt: "2024-07-07T18:03:52.129Z",
      updatedAt: "2024-07-07T18:03:52.129Z",
      __v: 0,
    },
    details: [
      {
        name: "model",
        value: "Predator Helios Neo 16 Gaming Laptop",
        _id: "66a848fcab6bdb7c041fb9ff",
      },
    ],
    questions: [],
    reviews: [
      {
        _id: "66a92e51eddecffd8d438de2",
        rating: 4,
        review:
          "Very good build quality. Great screen 240hz, processor and speedy DDR5 5600 ram. Mid range Rtx 4060 gets the job done and can handle most games well. Spare nvme slot. Can get noisy when it's warms up, but that's to be expected with a gaming laptop. Bios is very limited. Overall very solid choice.",
        likes: ["66a56d0905375c57b7f68c07"],
        // reviewBy: "66a56d0905375c57b7f68c07",
        createdAt: "2024-07-30T18:17:53.705Z",
        updatedAt: "2024-07-30T18:20:59.809Z",
        __v: 0,
      },
      {
        _id: "66a92ee6eddecffd8d438ebe",
        rating: 5,
        review:
          "I purchased this MacBook Pro for one of my staff members with my marketing agency. It has been a tremendous blessing to our organization.  It works very well, and we have never had any issues out of it.",
        likes: [
          "668f91e6e70f42541e4c747d",
          "668f91e6e70f42541e4c747d",
          "668f91e6e70f42541e4c747d",
          "668f91e6e70f42541e4c747d",
        ],
        // reviewBy: "668f91e6e70f42541e4c747d",
        createdAt: "2024-07-30T18:20:22.627Z",
        updatedAt: "2024-08-16T01:21:12.997Z",
        __v: 0,
      },
      {
        _id: "66bc31cc434f352d43dc9eeb",
        rating: 1,
        review: "jjhjk",
        likes: [
          "66b518032cb028a4cb5eaa39",
          "66b518032cb028a4cb5eaa39",
          "66b518032cb028a4cb5eaa39",
          "66b518032cb028a4cb5eaa39",
        ],
        // reviewBy: "66b518032cb028a4cb5eaa39",
        createdAt: "2024-08-14T04:25:48.090Z",
        updatedAt: "2024-09-11T03:16:10.526Z",
        __v: 0,
      },
      {
        _id: "66bca9565b9c51b599875f95",
        rating: 5,
        review: "Functionality is Awesome but UI not better",
        likes: ["66bb8d085ec134309bd68fc4", "66bb8d085ec134309bd68fc4"],
        // reviewBy: "66bb8d085ec134309bd68fc4",
        createdAt: "2024-08-14T12:55:50.590Z",
        updatedAt: "2024-08-18T11:11:45.095Z",
        __v: 0,
      },
      {
        _id: "66be06e7eb8fcbd68060ad27",
        rating: 4,
        review: "dope",
        likes: [],
        // reviewBy: "66b518032cb028a4cb5eaa39",
        createdAt: "2024-08-15T13:47:19.441Z",
        updatedAt: "2024-08-15T13:47:19.441Z",
        __v: 0,
      },
      {
        _id: "66c15f2bc0914b7e5764922b",
        rating: 4,
        review: "so good",
        likes: ["66bb8d085ec134309bd68fc4"],
        // reviewBy: "66bb8d085ec134309bd68fc4",
        createdAt: "2024-08-18T02:40:43.881Z",
        updatedAt: "2024-08-18T11:11:56.168Z",
        __v: 0,
      },
      {
        _id: "66f7c603e7d461d673471b94",
        rating: 5,
        review: "Good Product ",
        likes: [],
        // reviewBy: "66bb8d085ec134309bd68fc4",
        createdAt: "2024-09-28T09:01:55.859Z",
        updatedAt: "2024-09-28T09:01:55.859Z",
        __v: 0,
      },
      {
        _id: "66f7c623e7d461d673471b9b",
        rating: 5,
        review: "Good Product ",
        likes: [],
        // reviewBy: "66bb8d085ec134309bd68fc4",
        createdAt: "2024-09-28T09:02:27.511Z",
        updatedAt: "2024-09-28T09:02:27.511Z",
        __v: 0,
      },
    ],
    subProducts: [
      {
        sku: "02938NER",
        style: {
          color: "#ffdsh",
          image:
            "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722303121/ecommerce-carrefour/black_frem7q.jpg",
          name: "blacka",
        },
        options: [
          {
            qty: 9,
            price: 1280,
            sold: 0,
            option: "i914900hxrtx4070",
            images: [
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722303126/ecommerce-carrefour/81Ql_nOEynL._AC_SL1500__asc8jp.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722303131/ecommerce-carrefour/71bruD2HxZL._AC_SL1500__a115xr.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722303135/ecommerce-carrefour/81J5BoEtbgL._AC_SL1500__duojqb.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722303139/ecommerce-carrefour/81uNIFnGHvL._AC_SL1500__vo64bw.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722303144/ecommerce-carrefour/81c6-AKtbmL._AC_SL1500__tyfrmj.jpg",
            ],
            discount: 0,
            _id: "66a84786ab6bdb7c041fb9af",
          },
          {
            qty: 9,
            price: 1280,
            sold: 0,
            option: "i913890hxrtx4070",
            images: [
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722303126/ecommerce-carrefour/81Ql_nOEynL._AC_SL1500__asc8jp.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722303131/ecommerce-carrefour/71bruD2HxZL._AC_SL1500__a115xr.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722303135/ecommerce-carrefour/81J5BoEtbgL._AC_SL1500__duojqb.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722303139/ecommerce-carrefour/81uNIFnGHvL._AC_SL1500__vo64bw.jpg",
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722303144/ecommerce-carrefour/81c6-AKtbmL._AC_SL1500__tyfrmj.jpg",
            ],
            discount: 0,
            _id: "66a84786ab6bdb7c041fb9b0",
          },
        ],
        _id: "66a84786ab6bdb7c041fb9ae",
      },
    ],
    createdAt: "2024-07-30T00:45:47.016Z",
    updatedAt: "2024-09-28T09:02:27.601Z",
    __v: 0,
    content:
      'Acer Predator Helios Neo 16 Gaming Laptop | Intel Core i7-13650HX | NVIDIA GeForce RTX 4060 | 16" WUXGA 1920 x 1200 165Hz G-SYNC Display | 16GB DDR5 | 512GB Gen 4 SSD | Killer Wi-Fi 6E | PHN16-71-76H5',
  };

  return (
    <>
      {/* Breadcrumb  */}
      <section className="my-10">
        <Container>
          <Breadcrumb>
            <BreadcrumbList className="capitalize flex flex-wrap">
              <Link href={"/products"}>store</Link>
              <BreadcrumbSeparator />

              <Link href={`/categories/${product.category.name}/products`}>
                {product.category.name}
              </Link>

              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage className="font-medium">
                  {product.name}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Container>
      </section>

      <ProductWrapper product={product} />
      <ProductSpecifications product={product} />
      <FeaturedProducts />
      <Reviews product={product} />
    </>
  );
}

//dynamic seo title
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title: `Buy ${params.slug
      .replace(/-/g, " ")
      .replace(/^./, (char) => char.toUpperCase())}`,
    twitter: {
      title: `Buy ${params.slug
        .replace(/-/g, " ")
        .replace(/^./, (char) => char.toUpperCase())}`,
    },
    openGraph: {
      title: `Buy ${params.slug
        .replace(/-/g, " ")
        .replace(/^./, (char) => char.toUpperCase())}`,
    },
    alternates: {
      canonical: `/products/${params.slug}`,
    },
    keywords: params.slug.split("-"),
  };
}
