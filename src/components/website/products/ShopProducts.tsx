import usePagination from "@/hooks/usePagination";
import axios from "axios";
import React, { use, useEffect, useState } from "react";
import TopBar from "./TopBar";
import ProductList from "./ProductsList";
import { Pagination } from "@mui/material";

export default function ShopProducts({
  loading,
  setLoading,
  slug,
}: {
  loading: boolean;
  slug?: string;
  setLoading: (value: boolean) => void;
}) {
  const [products, setProducts] = useState([
    {
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
          reviewBy: "66a56d0905375c57b7f68c07",
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
          reviewBy: "668f91e6e70f42541e4c747d",
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
          reviewBy: "66b518032cb028a4cb5eaa39",
          createdAt: "2024-08-14T04:25:48.090Z",
          updatedAt: "2024-09-11T03:16:10.526Z",
          __v: 0,
        },
        {
          _id: "66bca9565b9c51b599875f95",
          rating: 5,
          review: "Functionality is Awesome but UI not better",
          likes: ["66bb8d085ec134309bd68fc4", "66bb8d085ec134309bd68fc4"],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-08-14T12:55:50.590Z",
          updatedAt: "2024-08-18T11:11:45.095Z",
          __v: 0,
        },
        {
          _id: "66be06e7eb8fcbd68060ad27",
          rating: 4,
          review: "dope",
          likes: [],
          reviewBy: "66b518032cb028a4cb5eaa39",
          createdAt: "2024-08-15T13:47:19.441Z",
          updatedAt: "2024-08-15T13:47:19.441Z",
          __v: 0,
        },
        {
          _id: "66c15f2bc0914b7e5764922b",
          rating: 4,
          review: "so good",
          likes: ["66bb8d085ec134309bd68fc4"],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-08-18T02:40:43.881Z",
          updatedAt: "2024-08-18T11:11:56.168Z",
          __v: 0,
        },
        {
          _id: "66f7c603e7d461d673471b94",
          rating: 5,
          review: "Good Product ",
          likes: [],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-09-28T09:01:55.859Z",
          updatedAt: "2024-09-28T09:01:55.859Z",
          __v: 0,
        },
        {
          _id: "66f7c623e7d461d673471b9b",
          rating: 5,
          review: "Good Product ",
          likes: [],
          reviewBy: "66bb8d085ec134309bd68fc4",
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
    },
    {
      _id: "66a7eddd087c8328bd991a20",
      name: "esr for iphone 15 pro max case with magsafe, supports magnetic charging, slim",
      slug: "esr-for-iphone-15-pro-max-case-with-magsafe-supports-magnetic-charging-slim",
      description:
        "esr for iphone 15 pro max case with magsafe, supports magnetic charging, slim liquid silicone case, shock absorbing, screen and camera protection, cloud series, light blue",
      category: {
        _id: "668544806c0c5a9794adb754",
        name: "mobiles",
        slug: "mobiles",
        createdAt: "2024-07-03T12:30:56.952Z",
        updatedAt: "2024-08-15T01:58:43.685Z",
        __v: 0,
        submenu: [
          "66963b8ec0799df232e21859",
          "6685a15a8a0761593b5fdf30",
          "6685a1408a0761593b5fdf2b",
          "66bd60d333e03e62c550b9de",
        ],
        link: "mobiles",
        image:
          "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1721644333/UAP07Ygha9iXNfG1Rh6DYWrwVQ3HfkuqetLaLc6M_gesb5u.jpg",
      },
      subCategories: [],
      brand: {
        _id: "668ad981ed4b0a535cfa6018",
        name: "apple",
        slug: "apple",
        link: "apple",
        image:
          "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1720375678/product-images/apple_buk0pp.png",
        createdAt: "2024-07-07T18:08:01.717Z",
        updatedAt: "2024-07-07T18:08:01.717Z",
        __v: 0,
      },
      details: [],
      questions: [],
      reviews: [
        {
          _id: "66bcf91406b720644176d77c",
          rating: 3,
          review: "Ok",
          likes: [],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-08-14T18:36:04.175Z",
          updatedAt: "2024-08-14T18:36:04.175Z",
          __v: 0,
        },
        {
          _id: "66c08aaf86140fb961dbade5",
          rating: 5,
          review: "condom",
          likes: [],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-08-17T11:34:07.642Z",
          updatedAt: "2024-08-17T11:34:07.642Z",
          __v: 0,
        },
        {
          _id: "66c08abd86140fb961dbadec",
          rating: 5,
          review: "condom",
          likes: [],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-08-17T11:34:21.219Z",
          updatedAt: "2024-08-17T11:34:21.219Z",
          __v: 0,
        },
        {
          _id: "66c08abe86140fb961dbadf3",
          rating: 5,
          review: "condom",
          likes: ["66bb8d085ec134309bd68fc4"],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-08-17T11:34:22.215Z",
          updatedAt: "2024-08-29T22:50:09.589Z",
          __v: 0,
        },
        {
          _id: "66c08abf86140fb961dbadfa",
          rating: 5,
          review: "condom",
          likes: ["66bb8d085ec134309bd68fc4"],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-08-17T11:34:23.413Z",
          updatedAt: "2024-08-29T22:50:06.140Z",
          __v: 0,
        },
        {
          _id: "66c08ac086140fb961dbae01",
          rating: 5,
          review: "condom",
          likes: [],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-08-17T11:34:24.027Z",
          updatedAt: "2024-08-17T11:34:24.027Z",
          __v: 0,
        },
        {
          _id: "66c08ac086140fb961dbae08",
          rating: 5,
          review: "condom",
          likes: [],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-08-17T11:34:24.844Z",
          updatedAt: "2024-08-17T11:34:24.844Z",
          __v: 0,
        },
        {
          _id: "66c08ac186140fb961dbae0f",
          rating: 5,
          review: "condom",
          likes: [],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-08-17T11:34:25.651Z",
          updatedAt: "2024-08-17T11:34:25.651Z",
          __v: 0,
        },
        {
          _id: "66c08ac286140fb961dbae16",
          rating: 5,
          review: "condom",
          likes: [],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-08-17T11:34:26.673Z",
          updatedAt: "2024-08-17T11:34:26.673Z",
          __v: 0,
        },
        {
          _id: "66c08ac386140fb961dbae1d",
          rating: 5,
          review: "condom",
          likes: [],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-08-17T11:34:27.344Z",
          updatedAt: "2024-08-17T11:34:27.344Z",
          __v: 0,
        },
        {
          _id: "66c1d77b65158340d7e10e46",
          rating: 4,
          review: "really nice",
          likes: [],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-08-18T11:14:03.573Z",
          updatedAt: "2024-08-18T11:14:03.573Z",
          __v: 0,
        },
        {
          _id: "66c81d44c500ded81297d6f1",
          rating: 4,
          review: "Hello",
          likes: [],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-08-23T05:25:24.367Z",
          updatedAt: "2024-08-23T05:25:24.367Z",
          __v: 0,
        },
        {
          _id: "66d32bbc594a9c19b48802b3",
          rating: 5,
          review: "nice",
          likes: ["66bb8d085ec134309bd68fc4"],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-08-31T14:42:04.783Z",
          updatedAt: "2024-08-31T14:42:19.905Z",
          __v: 0,
        },
        {
          _id: "66e3e409d8067ff459e1e47d",
          rating: 5,
          review: "mmmm",
          likes: [],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-09-13T07:04:41.789Z",
          updatedAt: "2024-09-13T07:04:41.789Z",
          __v: 0,
        },
        {
          _id: "66eadae55793d784bfe63130",
          rating: 5,
          review: "cxcfd",
          likes: [],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-09-18T13:51:33.255Z",
          updatedAt: "2024-09-18T13:51:33.255Z",
          __v: 0,
        },
        {
          _id: "66eadaeb5793d784bfe63137",
          rating: 5,
          review: "cxcfdfff",
          likes: [],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-09-18T13:51:39.481Z",
          updatedAt: "2024-09-18T13:51:39.481Z",
          __v: 0,
        },
      ],
      subProducts: [
        {
          sku: "02938NEA",
          style: {
            color: "#add8e6",
            image:
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722281464/ecommerce-carrefour/71feD_7EVuL._AC_SL1500__aflkpp.jpg",
            name: "Light blue",
          },
          options: [
            {
              qty: 3,
              price: 1059,
              sold: 0,
              option: "iphone 15 pro",
              images: [
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722281606/ecommerce-carrefour/71feD_7EVuL._AC_SL1500__yprkck.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722281615/ecommerce-carrefour/61Tekt4mtkL._AC_SL1500__nmezgs.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722281620/ecommerce-carrefour/71eRKbpDW6L._AC_SL1500__vu9azu.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722281624/ecommerce-carrefour/81-p6F3jw_L._AC_SL1500__ccvusk.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722281629/ecommerce-carrefour/616Ujnw6sJL._AC_SL1500__a4xjdz.jpg",
              ],
              discount: 0,
              _id: "66a7ef13087c8328bd991a3f",
            },
            {
              qty: 3,
              price: 1059,
              sold: 0,
              option: "iphone 15 plus",
              images: [
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722281606/ecommerce-carrefour/71feD_7EVuL._AC_SL1500__yprkck.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722281615/ecommerce-carrefour/61Tekt4mtkL._AC_SL1500__nmezgs.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722281620/ecommerce-carrefour/71eRKbpDW6L._AC_SL1500__vu9azu.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722281624/ecommerce-carrefour/81-p6F3jw_L._AC_SL1500__ccvusk.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722281629/ecommerce-carrefour/616Ujnw6sJL._AC_SL1500__a4xjdz.jpg",
              ],
              discount: 10,
              _id: "66a7ef13087c8328bd991a40",
            },
            {
              qty: 3,
              price: 1059,
              sold: 0,
              option: "iphone 15 pro max",
              images: [
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722281606/ecommerce-carrefour/71feD_7EVuL._AC_SL1500__yprkck.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722281615/ecommerce-carrefour/61Tekt4mtkL._AC_SL1500__nmezgs.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722281620/ecommerce-carrefour/71eRKbpDW6L._AC_SL1500__vu9azu.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722281624/ecommerce-carrefour/81-p6F3jw_L._AC_SL1500__ccvusk.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722281629/ecommerce-carrefour/616Ujnw6sJL._AC_SL1500__a4xjdz.jpg",
              ],
              discount: 10,
              _id: "66a7ef13087c8328bd991a41",
            },
          ],
          _id: "66a7ef13087c8328bd991a3e",
        },
      ],
      createdAt: "2024-07-29T19:30:37.546Z",
      updatedAt: "2024-09-18T13:51:39.570Z",
      __v: 0,
      featured: false,
      content:
        "esr for iphone 15 pro max case with magsafe, supports magnetic charging, slim liquid silicone case, shock absorbing, screen and camera protection, cloud series, light blue",
    },
    {
      _id: "66a7e83d087c8328bd991930",
      name: "sceptre new 27-inch gaming monitor 100hz 1ms displayport hdm",
      slug: "sceptre-new-27-inch-gaming-monitor-100hz-1ms-displayport-hdm",
      description:
        "sceptre new 27-inch gaming monitor 100hz 1ms displayport hdmi x2 100% srgb amd freesync build-in speakers, eye care frameless machine black 2024 (e275w-fw100t)",
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
        _id: "668ad9e5ed4b0a535cfa6021",
        name: "lg",
        slug: "lg",
        link: "lg",
        image:
          "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1720375775/product-images/lg_madoxa.png",
        createdAt: "2024-07-07T18:09:41.534Z",
        updatedAt: "2024-07-07T18:09:41.534Z",
        __v: 0,
      },
      details: [],
      questions: [],
      reviews: [
        {
          _id: "66a9320beddecffd8d439130",
          rating: 5,
          review:
            "I recently made the decision to upgrade my laptop, and after much research and anticipation, I finally got my hands on the M2 MacBook Pro 13 Inch – and let me tell you, it's been an cutie!  From the moment I opened the sleek packaging, I was captivated by the elegant design of the laptop. The slim profile, premium build quality, and the iconic Apple logo gave me an instant sense of satisfaction. But the real magic began when I powered it on.  The performance of the M2 chip truly left me in awe. Apps launch almost instantly, and multitasking feels seamless. Whether I'm running resource-intensive software, editing high-resolution photos, or streaming 4K videos, the laptop handles it all effortlessly. The speed and responsiveness of this machine have undoubtedly boosted my productivity and allowed me to breeze through my tasks.",
          likes: ["668f91e6e70f42541e4c747d"],
          reviewBy: "668f91e6e70f42541e4c747d",
          createdAt: "2024-07-30T18:33:47.930Z",
          updatedAt: "2024-09-06T15:19:14.487Z",
          __v: 0,
        },
        {
          _id: "66cabf3c7d6a3745d45ac9f6",
          rating: 3,
          review: "Hello",
          likes: [],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-08-25T05:21:00.571Z",
          updatedAt: "2024-08-25T05:21:00.571Z",
          __v: 0,
        },
      ],
      subProducts: [
        {
          sku: "TRT46TY",
          style: {
            color: "#ffffff",
            image:
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722280505/ecommerce-carrefour/images_ythxvm.png",
            name: "24Inch",
          },
          options: [
            {
              qty: 4,
              price: 99.97,
              sold: 0,
              option: "75hz",
              images: [
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722280552/ecommerce-carrefour/71jdr9u9YhL._AC_SL1500__puebzs.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722280563/ecommerce-carrefour/71Hz2V-kzCL._AC_SL1500__jqllmw.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722280567/ecommerce-carrefour/71Lfn6fUgHL._AC_SL1500__yxzbhk.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722280571/ecommerce-carrefour/51JxWjNbgpL._AC_SL1500__wvkuvc.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722280576/ecommerce-carrefour/61SingUvk4L._AC_SL1500__ubdlsx.jpg",
              ],
              discount: 20,
              _id: "66a7eafb087c8328bd991961",
            },
            {
              qty: 4,
              price: 114.97,
              sold: 0,
              option: "100hz",
              images: [
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722280552/ecommerce-carrefour/71jdr9u9YhL._AC_SL1500__puebzs.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722280563/ecommerce-carrefour/71Hz2V-kzCL._AC_SL1500__jqllmw.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722280567/ecommerce-carrefour/71Lfn6fUgHL._AC_SL1500__yxzbhk.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722280571/ecommerce-carrefour/51JxWjNbgpL._AC_SL1500__wvkuvc.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722280576/ecommerce-carrefour/61SingUvk4L._AC_SL1500__ubdlsx.jpg",
              ],
              discount: 22,
              _id: "66a7eafb087c8328bd991962",
            },
          ],
          _id: "66a7eafb087c8328bd991960",
        },
        {
          sku: "TRT46TY",
          style: {
            color: "#ffffff",
            image:
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722280505/ecommerce-carrefour/images_ythxvm.png",
            name: "27Inch",
          },
          options: [
            {
              qty: 4,
              price: 99.97,
              sold: 0,
              option: "75hz",
              images: [
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722280552/ecommerce-carrefour/71jdr9u9YhL._AC_SL1500__puebzs.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722280563/ecommerce-carrefour/71Hz2V-kzCL._AC_SL1500__jqllmw.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722280567/ecommerce-carrefour/71Lfn6fUgHL._AC_SL1500__yxzbhk.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722280571/ecommerce-carrefour/51JxWjNbgpL._AC_SL1500__wvkuvc.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722280576/ecommerce-carrefour/61SingUvk4L._AC_SL1500__ubdlsx.jpg",
              ],
              discount: 20,
              _id: "66a7eb46087c8328bd991972",
            },
            {
              qty: 4,
              price: 114.97,
              sold: 0,
              option: "100hz",
              images: [
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722280552/ecommerce-carrefour/71jdr9u9YhL._AC_SL1500__puebzs.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722280563/ecommerce-carrefour/71Hz2V-kzCL._AC_SL1500__jqllmw.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722280567/ecommerce-carrefour/71Lfn6fUgHL._AC_SL1500__yxzbhk.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722280571/ecommerce-carrefour/51JxWjNbgpL._AC_SL1500__wvkuvc.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722280576/ecommerce-carrefour/61SingUvk4L._AC_SL1500__ubdlsx.jpg",
              ],
              discount: 22,
              _id: "66a7eb46087c8328bd991973",
            },
          ],
          _id: "66a7eb46087c8328bd991971",
        },
      ],
      createdAt: "2024-07-29T19:06:37.389Z",
      updatedAt: "2024-08-25T05:21:00.664Z",
      __v: 0,
      featured: true,
    },
    {
      _id: "66a7e49d087c8328bd991789",
      name: "dell inspiron 15 3000 3520 business laptop computer 15.6'' fhd touchscreen,11th",
      slug: "dell-inspiron-15-3000-3520-business-laptop-computer-156-fhd-touchscreen11th",
      description:
        "dell inspiron 15 3000 3520 business laptop computer 15.6'' fhd touchscreen,11th gen intel 4 cores i5-1155g7, with microsoft office 365,12g,256gb, numeric keypad, wi-fi, webcam, hdmi, black",
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
        _id: "668682108a0761593b5fe08b",
        name: "dell",
        slug: "dell",
        link: "dell",
        image:
          "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1720375316/product-images/dell_kwivzz.png",
        createdAt: "2024-07-04T11:05:52.347Z",
        updatedAt: "2024-07-07T18:02:17.540Z",
        __v: 0,
      },
      details: [
        {
          name: "Standing screen display size\t",
          value: "‎15.6 Inches",
          _id: "66a7e7ac087c8328bd9918f8",
        },
        {
          name: "Screen Resolution\t",
          value: "‎1920 x 1080 pixels",
          _id: "66a7e7ac087c8328bd9918f9",
        },
        {
          name: "Processor",
          value: "‎4.6 GHz apple_ci5",
          _id: "66a7e7ac087c8328bd9918fa",
        },
        {
          name: "RAM",
          value: "DDR4",
          _id: "66a7e7ac087c8328bd9918fb",
        },
        {
          name: "Number of USB 2.0 Ports\t",
          value: "2",
          _id: "66a7e7ac087c8328bd9918fc",
        },
        {
          name: "Number of USB 3.0 Ports\t",
          value: "1",
          _id: "66a7e7ac087c8328bd9918fd",
        },
        {
          name: "Average Battery Life (in hours)\t",
          value: "‎6.5 Hours",
          _id: "66a7e7ac087c8328bd9918fe",
        },
        {
          name: "Operating System\t",
          value: "‎Windows 11 Pro",
          _id: "66a7e7ac087c8328bd9918ff",
        },
      ],
      questions: [],
      reviews: [
        {
          _id: "66bc2faee4d3bc10078e178e",
          rating: 2,
          review: "hhhh",
          likes: ["66bb8d085ec134309bd68fc4"],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-08-14T04:16:46.394Z",
          updatedAt: "2024-09-26T20:01:05.308Z",
          __v: 0,
        },
        {
          _id: "66bc2fdfb134d8f510bf2f57",
          rating: 4,
          review: "bnnbbnbn",
          likes: ["66bb8d085ec134309bd68fc4"],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-08-14T04:17:35.473Z",
          updatedAt: "2024-09-26T20:01:06.377Z",
          __v: 0,
        },
        {
          _id: "66bc2fe5b134d8f510bf2f67",
          rating: 2,
          review: "bnnbbnbn",
          likes: ["66bb8d085ec134309bd68fc4"],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-08-14T04:17:41.491Z",
          updatedAt: "2024-08-26T21:30:00.673Z",
          __v: 0,
        },
        {
          _id: "66d58c8bf7b9c868c4bc0993",
          rating: 1,
          review: "lau lau wantang",
          likes: [],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-09-02T09:59:39.465Z",
          updatedAt: "2024-09-02T09:59:39.465Z",
          __v: 0,
        },
        {
          _id: "66d58c9cf7b9c868c4bc09a3",
          rating: 1,
          review: "fuck",
          likes: [],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-09-02T09:59:56.680Z",
          updatedAt: "2024-09-02T09:59:56.680Z",
          __v: 0,
        },
        {
          _id: "66d58ca8f7b9c868c4bc09b3",
          rating: 1,
          review: "xsasa",
          likes: [],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-09-02T10:00:08.517Z",
          updatedAt: "2024-09-02T10:00:08.517Z",
          __v: 0,
        },
        {
          _id: "66d58ca9f7b9c868c4bc09c3",
          rating: 1,
          review: "xsasa",
          likes: [],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-09-02T10:00:09.699Z",
          updatedAt: "2024-09-02T10:00:09.699Z",
          __v: 0,
        },
        {
          _id: "66d58caaf7b9c868c4bc09d3",
          rating: 1,
          review: "xsasa",
          likes: [],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-09-02T10:00:10.663Z",
          updatedAt: "2024-09-02T10:00:10.663Z",
          __v: 0,
        },
        {
          _id: "66d58cabf7b9c868c4bc09e3",
          rating: 1,
          review: "xsasa",
          likes: [],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-09-02T10:00:11.350Z",
          updatedAt: "2024-09-02T10:00:11.350Z",
          __v: 0,
        },
        {
          _id: "66d58cacf7b9c868c4bc09f3",
          rating: 1,
          review: "xsasa",
          likes: [],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-09-02T10:00:12.103Z",
          updatedAt: "2024-09-02T10:00:12.103Z",
          __v: 0,
        },
        {
          _id: "66d58cbbf7b9c868c4bc0a1d",
          rating: 1,
          review: "czcxz",
          likes: [],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-09-02T10:00:27.190Z",
          updatedAt: "2024-09-02T10:00:27.190Z",
          __v: 0,
        },
        {
          _id: "66d58cbef7b9c868c4bc0a2d",
          rating: 1,
          review: "czcxz",
          likes: [],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-09-02T10:00:30.979Z",
          updatedAt: "2024-09-02T10:00:30.979Z",
          __v: 0,
        },
        {
          _id: "66d58cc2f7b9c868c4bc0a3d",
          rating: 1,
          review: "czcxz",
          likes: [],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-09-02T10:00:34.001Z",
          updatedAt: "2024-09-02T10:00:34.001Z",
          __v: 0,
        },
        {
          _id: "66d58cc3f7b9c868c4bc0a4d",
          rating: 1,
          review: "czcxz",
          likes: [],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-09-02T10:00:35.301Z",
          updatedAt: "2024-09-02T10:00:35.301Z",
          __v: 0,
        },
      ],
      subProducts: [
        {
          sku: "02938NE6",
          style: {
            color: "#000000",
            image:
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722279472/ecommerce-carrefour/black_a60oi8.jpg",
            name: "black",
          },
          options: [
            {
              qty: 9,
              price: 467,
              sold: 0,
              option: "12gb-256ssd",
              images: [
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722279515/ecommerce-carrefour/71gbrvRJI-L._AC_SL1500__zzfqnr.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722279520/ecommerce-carrefour/51KzNYJIVKL._AC_SL1213__bbnyaw.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722279528/ecommerce-carrefour/51B6AYSgQEL._AC_SL1213__itoc2s.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722279547/ecommerce-carrefour/715LBvCan5L._AC_SL1500__v3zxht.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722279554/ecommerce-carrefour/41VqetrFiLL._AC_SL1233__q2firq.jpg",
              ],
              discount: 8,
              _id: "66a7e740087c8328bd9917ef",
            },
            {
              qty: 9,
              price: 503,
              sold: 0,
              option: "16gb-1024ssd",
              images: [
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722279515/ecommerce-carrefour/71gbrvRJI-L._AC_SL1500__zzfqnr.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722279520/ecommerce-carrefour/51KzNYJIVKL._AC_SL1213__bbnyaw.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722279528/ecommerce-carrefour/51B6AYSgQEL._AC_SL1213__itoc2s.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722279547/ecommerce-carrefour/715LBvCan5L._AC_SL1500__v3zxht.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722279554/ecommerce-carrefour/41VqetrFiLL._AC_SL1233__q2firq.jpg",
              ],
              discount: 0,
              _id: "66a7e740087c8328bd9917f0",
            },
            {
              qty: 9,
              price: 499,
              sold: 0,
              option: "16gb-512ssd",
              images: [
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722279515/ecommerce-carrefour/71gbrvRJI-L._AC_SL1500__zzfqnr.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722279520/ecommerce-carrefour/51KzNYJIVKL._AC_SL1213__bbnyaw.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722279528/ecommerce-carrefour/51B6AYSgQEL._AC_SL1213__itoc2s.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722279547/ecommerce-carrefour/715LBvCan5L._AC_SL1500__v3zxht.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722279554/ecommerce-carrefour/41VqetrFiLL._AC_SL1233__q2firq.jpg",
              ],
              discount: 8,
              _id: "66a7e740087c8328bd9917f1",
            },
            {
              qty: 9,
              price: 485.97,
              sold: 0,
              option: "12gb-512ssd",
              images: [
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722279515/ecommerce-carrefour/71gbrvRJI-L._AC_SL1500__zzfqnr.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722279520/ecommerce-carrefour/51KzNYJIVKL._AC_SL1213__bbnyaw.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722279528/ecommerce-carrefour/51B6AYSgQEL._AC_SL1213__itoc2s.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722279547/ecommerce-carrefour/715LBvCan5L._AC_SL1500__v3zxht.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722279554/ecommerce-carrefour/41VqetrFiLL._AC_SL1233__q2firq.jpg",
              ],
              discount: 9,
              _id: "66a7e740087c8328bd9917f2",
            },
          ],
          _id: "66a7e740087c8328bd9917ee",
        },
      ],
      createdAt: "2024-07-29T18:51:09.622Z",
      updatedAt: "2024-09-02T10:00:35.393Z",
      __v: 0,
      content:
        "DELL Inspiron 15 3000 3520 Business Laptop Computer 15.6'' FHD Touchscreen,11th Gen Intel 4 Cores i5-1155G7, with Microsoft Office 365,12G,512GB, Numeric Keypad, Wi-Fi, Webcam, HDMI, Black",
      featured: true,
    },
    {
      _id: "66a7d868087c8328bd9912aa",
      name: "apple 2024 macbook air 13-inch laptop with m3 chip: 8gb memory, 256gb",
      slug: "apple-2024-macbook-air-13-inch-laptop-with-m3-chip-8gb-memory-256gb",
      description:
        "apple 2024 macbook air 13-inch laptop with m3 chip: 8gb memory, 256gb storage; midnight with applecare+ (3 years)",
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
        _id: "668ad981ed4b0a535cfa6018",
        name: "apple",
        slug: "apple",
        link: "apple",
        image:
          "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1720375678/product-images/apple_buk0pp.png",
        createdAt: "2024-07-07T18:08:01.717Z",
        updatedAt: "2024-07-07T18:08:01.717Z",
        __v: 0,
      },
      details: [
        {
          name: "chip",
          value: "Apple M3 Chip",
          _id: "66a7df7c087c8328bd9914d9",
        },
        {
          name: "Display",
          value: "Liquid Retina XDR display",
          _id: "66a7df7c087c8328bd9914da",
        },
        {
          name: "memory",
          value: "8GB or 16GB unified memory",
          _id: "66a7df7c087c8328bd9914db",
        },
        {
          name: "storage",
          value: "256GB SSD or 512 GB",
          _id: "66a7df7c087c8328bd9914dc",
        },
        {
          name: "camera",
          value: "1080p FaceTime HD camera",
          _id: "66a7df7c087c8328bd9914dd",
        },
        {
          name: "size and weight",
          value: "Height: 0.44 inch (1.13 cm)",
          _id: "66a7e35d087c8328bd991753",
        },
      ],
      questions: [],
      reviews: [
        {
          _id: "66a932aaeddecffd8d43918c",
          rating: 4,
          review:
            "I purchased this MacBook Pro for one of my staff members with my marketing agency. It has been a tremendous blessing to our organization.  It works very well, and we have never had any issues out of it.",
          likes: [],
          reviewBy: "66a56d0905375c57b7f68c07",
          createdAt: "2024-07-30T18:36:26.793Z",
          updatedAt: "2024-07-30T18:36:26.793Z",
          __v: 0,
        },
      ],
      subProducts: [
        {
          sku: "TRT46TY",
          style: {
            color: "#191970",
            image:
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722276605/ecommerce-carrefour/download_pgergh.png",
            name: "midnight",
          },
          options: [
            {
              qty: 4,
              price: 1298,
              sold: 0,
              option: "8gb256ssd",
              images: [
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722276239/ecommerce-carrefour/61JJlVirlnL._AC_SL1500__erhqov.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722276245/ecommerce-carrefour/61LbQpnFNvL._AC_SL1500__hmtjjb.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722276249/ecommerce-carrefour/61S2t5yhVSL._AC_SL1500__cinv8a.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722276253/ecommerce-carrefour/71eamTIYCyL._AC_SL1500__ps4kqd.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722276256/ecommerce-carrefour/61wjuMmDtdL._AC_SL1500__dk9elo.jpg",
              ],
              discount: 15,
              _id: "66a7db04087c8328bd9912dc",
            },
            {
              qty: 4,
              price: 1498,
              sold: 0,
              option: "8gb512ssd",
              images: [
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722276239/ecommerce-carrefour/61JJlVirlnL._AC_SL1500__erhqov.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722276245/ecommerce-carrefour/61LbQpnFNvL._AC_SL1500__hmtjjb.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722276249/ecommerce-carrefour/61S2t5yhVSL._AC_SL1500__cinv8a.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722276253/ecommerce-carrefour/71eamTIYCyL._AC_SL1500__ps4kqd.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722276256/ecommerce-carrefour/61wjuMmDtdL._AC_SL1500__dk9elo.jpg",
              ],
              discount: 13,
              _id: "66a7db04087c8328bd9912dd",
            },
            {
              qty: 6,
              price: 1498,
              sold: 0,
              option: "16gb512ssd",
              images: [
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722276239/ecommerce-carrefour/61JJlVirlnL._AC_SL1500__erhqov.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722276245/ecommerce-carrefour/61LbQpnFNvL._AC_SL1500__hmtjjb.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722276249/ecommerce-carrefour/61S2t5yhVSL._AC_SL1500__cinv8a.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722276253/ecommerce-carrefour/71eamTIYCyL._AC_SL1500__ps4kqd.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722276256/ecommerce-carrefour/61wjuMmDtdL._AC_SL1500__dk9elo.jpg",
              ],
              discount: 11,
              _id: "66a7db04087c8328bd9912de",
            },
          ],
          _id: "66a7db04087c8328bd9912db",
        },
        {
          sku: "02938NBI",
          style: {
            color: "#f8f9ec",
            image:
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722277047/ecommerce-carrefour/images_eoh1vd.jpg",
            name: "startlight",
          },
          options: [
            {
              qty: 2,
              price: 1298,
              sold: 0,
              option: "8gb256ssd",
              images: [
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722277184/ecommerce-carrefour/61px5DPq7NL._AC_SL1500__yy8s70.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722277191/ecommerce-carrefour/61wjuMmDtdL._AC_SL1500__rtfbie.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722277198/ecommerce-carrefour/71eamTIYCyL._AC_SL1500__coycui.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722277203/ecommerce-carrefour/61S2t5yhVSL._AC_SL1500__ygdsp1.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722277207/ecommerce-carrefour/61LbQpnFNvL._AC_SL1500__fprq72.jpg",
              ],
              discount: 15,
              _id: "66a7de6e087c8328bd9913e6",
            },
            {
              qty: 2,
              price: 1498,
              sold: 0,
              option: "8gb512ssd",
              images: [
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722277184/ecommerce-carrefour/61px5DPq7NL._AC_SL1500__yy8s70.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722277191/ecommerce-carrefour/61wjuMmDtdL._AC_SL1500__rtfbie.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722277198/ecommerce-carrefour/71eamTIYCyL._AC_SL1500__coycui.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722277203/ecommerce-carrefour/61S2t5yhVSL._AC_SL1500__ygdsp1.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722277207/ecommerce-carrefour/61LbQpnFNvL._AC_SL1500__fprq72.jpg",
              ],
              discount: 13,
              _id: "66a7de6e087c8328bd9913e7",
            },
            {
              qty: 4,
              price: 1698,
              sold: 0,
              option: "16gb512ssd",
              images: [
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722277184/ecommerce-carrefour/61px5DPq7NL._AC_SL1500__yy8s70.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722277191/ecommerce-carrefour/61wjuMmDtdL._AC_SL1500__rtfbie.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722277198/ecommerce-carrefour/71eamTIYCyL._AC_SL1500__coycui.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722277203/ecommerce-carrefour/61S2t5yhVSL._AC_SL1500__ygdsp1.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722277207/ecommerce-carrefour/61LbQpnFNvL._AC_SL1500__fprq72.jpg",
              ],
              discount: 11,
              _id: "66a7de6e087c8328bd9913e8",
            },
          ],
          _id: "66a7de6e087c8328bd9913e5",
        },
      ],
      createdAt: "2024-07-29T17:59:04.684Z",
      updatedAt: "2024-07-30T18:36:26.826Z",
      __v: 0,
      content:
        "Apple 2024 MacBook Air 13-inch Laptop with M3 chip: 16GB Memory, 512GB Storage; Starlight with AppleCare+ (3 Years)",
      featured: true,
    },
    {
      _id: "66a7b7c037ca620c659ee620",
      name: "apple 2022 macbook pro laptop with m2 chip: 13-inch retina display, 8gb ram, 512gb",
      slug: "apple-2022-macbook-pro-laptop-with-m2-chip-13-inch-retina-display-8gb-ram-512gb",
      description:
        "apple 2022 macbook pro laptop with m2 chip: 13-inch retina display, 8gb ram, 512gb ​​​​​​​ssd ​​​​​​​storage, touch bar, backlit keyboard, facetime hd camera. works with iphone and ipad; space gray",
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
        _id: "668ad981ed4b0a535cfa6018",
        name: "apple",
        slug: "apple",
        link: "apple",
        image:
          "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1720375678/product-images/apple_buk0pp.png",
        createdAt: "2024-07-07T18:08:01.717Z",
        updatedAt: "2024-07-07T18:08:01.717Z",
        __v: 0,
      },
      details: [
        {
          name: "Display",
          value:
            "13.3-inch (diagonal) LED-backlit display with IPS technology; 2560-by-1600 native resolution at 227 pixels per inch with support for millions of colors, 500 nits brightness, Wide color (P3), True Tone technology",
          _id: "66a7d230087c8328bd991004",
        },
        {
          name: "Processor",
          value:
            "System on Chip (SoC), Apple M2 chip, Up to 8-core CPU with 4 performance cores and 4 efficiency cores, 10-core GPU, 16-core Neural Engine, 100GB/s memory bandwidth",
          _id: "66a7d230087c8328bd991005",
        },
        {
          name: "Graphics and Video Support",
          value: "Apple 10-core GPU",
          _id: "66a7d230087c8328bd991006",
        },
        {
          name: "Charging and Expansion",
          value:
            "Two Thunderbolt / USB 4 ports with support for: Charging, DisplayPort, Thunderbolt 3 (up to 40Gb/s), USB 4 (up to 40Gb/s), USB 3.1 Gen 2 (up to 10Gb/s",
          _id: "66a7d230087c8328bd991007",
        },
        {
          name: "Wireless",
          value:
            "Wi-Fi 802.11ax Wi-Fi 6 wireless networking; IEEE 802.11a/b/g/n compatible, Bluetooth 5.0 wireless technology",
          _id: "66a7d230087c8328bd991008",
        },
        {
          name: "In the Box",
          value:
            "13-inch MacBook Pro, 67W USB-C Power Adapter, USB-C Charge Cable (2 m)",
          _id: "66a7d230087c8328bd991009",
        },
        {
          name: "Height",
          value: "0.61 inch (1.56 cm)",
          _id: "66a7d230087c8328bd99100a",
        },
        {
          name: "Width",
          value: "11.97 inches (30.41 cm)",
          _id: "66a7d230087c8328bd99100b",
        },
        {
          name: "Depth",
          value: "8.36 inches (21.24 cm)",
          _id: "66a7d230087c8328bd99100c",
        },
        {
          name: "Weight",
          value: "3.0 pounds (1.4 kg)",
          _id: "66a7d230087c8328bd99100d",
        },
        {
          name: "Release Date",
          value: "6/24/2022",
          _id: "66a7d230087c8328bd99100e",
        },
      ],
      questions: [],
      reviews: [
        {
          _id: "66b69ff6d6e7bd5c47075b46",
          rating: 3,
          review:
            "I purchased this MacBook Pro for one of my staff members with my marketing agency. It has been a tremendous blessing to our organization.  It works very well, and we have never had any issues out of it.",
          likes: [
            "66b65133d4cbaeef4a8eb641",
            "66b65133d4cbaeef4a8eb641",
            "66b65133d4cbaeef4a8eb641",
            "66b65133d4cbaeef4a8eb641",
            "66b65133d4cbaeef4a8eb641",
          ],
          reviewBy: "66b65133d4cbaeef4a8eb641",
          createdAt: "2024-08-09T23:02:14.016Z",
          updatedAt: "2024-08-30T04:24:18.158Z",
          __v: 0,
        },
        {
          _id: "66c01477e6648312717c9ae1",
          rating: 5,
          review: "Hbb",
          likes: [
            "66bb8d085ec134309bd68fc4",
            "66bb8d085ec134309bd68fc4",
            "66bb8d085ec134309bd68fc4",
            "66bb8d085ec134309bd68fc4",
            "66bb8d085ec134309bd68fc4",
            "66bb8d085ec134309bd68fc4",
            "66bb8d085ec134309bd68fc4",
          ],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-08-17T03:09:43.105Z",
          updatedAt: "2024-08-20T21:04:53.938Z",
          __v: 0,
        },
        {
          _id: "66c01495e6648312717c9b17",
          rating: 5,
          review: "Hhc gg",
          likes: [
            "66bb8d085ec134309bd68fc4",
            "66bb8d085ec134309bd68fc4",
            "66bb8d085ec134309bd68fc4",
          ],
          reviewBy: "66bb8d085ec134309bd68fc4",
          createdAt: "2024-08-17T03:10:13.185Z",
          updatedAt: "2024-08-18T11:10:30.213Z",
          __v: 0,
        },
      ],
      subProducts: [
        {
          sku: "02938NBH",
          style: {
            color: "#cccccc",
            image:
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722272628/ecommerce-carrefour/silver_color_vorexg.jpg",
            name: "silver",
          },
          options: [
            {
              qty: 8,
              price: 1524.95,
              sold: 0,
              option: "silver",
              images: [
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722272862/ecommerce-carrefour/silver_1_fiuvtq.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722272869/ecommerce-carrefour/silver_2_vwxiqj.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722272877/ecommerce-carrefour/silver_3_xih3xz.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722272908/ecommerce-carrefour/61ZSD7-0gpL._AC_SL1500__brfkqg.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722272951/ecommerce-carrefour/71Y5Zhy6xNL._AC_SL1500__gqv9fr.jpg",
              ],
              discount: 0,
              _id: "66a7cd19087c8328bd990f44",
            },
          ],
          _id: "66a7cd19087c8328bd990f43",
        },
        {
          sku: "02938NBI",
          style: {
            color: "#9b9292",
            image:
              "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722273118/ecommerce-carrefour/gray_utr4ny.png",
            name: "gray",
          },
          options: [
            {
              qty: 14,
              price: 1494.95,
              sold: 0,
              option: "space gray",
              images: [
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722273072/ecommerce-carrefour/61L5QgPvgqL._AC_SX522__jzuqjd.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722273081/ecommerce-carrefour/71K_bhq9bZL._AC_SL1500__lemt9w.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722273086/ecommerce-carrefour/61ZSD7-0gpL._AC_SL1500__hf8vcf.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722273097/ecommerce-carrefour/616IvCxxIpL._AC_SL1500__wcg6pu.jpg",
                "https://res.cloudinary.com/dlm0ieiyt/image/upload/v1722273102/ecommerce-carrefour/71Y5Zhy6xNL._AC_SL1500__y3z1o1.jpg",
              ],
              discount: 0,
              _id: "66a7cd8e087c8328bd990f54",
            },
          ],
          _id: "66a7cd8e087c8328bd990f53",
        },
      ],

      content:
        "The 13-inch MacBook Pro 2022 with M2 chip is ideal for users who want a capable laptop for varied tasks like video editing, programming, content creation, and general daily use.\n",
      featured: true,
    },
  ]);
  const [perpage, setPerPages] = useState(10);
  const [filter, setFilter] = useState("latest");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(10000);

  const [page, setPage] = useState(1);

  const count = Math.ceil(products.length / perpage);
  const _DATA = usePagination(products, perpage);

  const handleChange = (e: React.ChangeEvent<unknown>, p: number) => {
    setPage(p);
    _DATA.jump(p);
  };

  const getProducts = () => {
    setLoading(true);
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "/api/products", {
        params: {
          filter: filter,
          category: slug,
          minPrice: minPrice,
          maxPrice: maxPrice,
        },
      })
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      getProducts();
    }, 500);
    return () => clearTimeout(debounceTimeout);
  }, [page, filter, slug, minPrice, maxPrice]);

  return (
    <div>
      <TopBar
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        loading={loading}
        slug={slug}
        perpage={perpage}
        filter={filter}
        setPerPages={setPerPages}
        setFilter={setFilter}
      />
      <ProductList loading={loading} products={_DATA.currentData()} />

      <div className="flex mt-10 justify-between">
        <Pagination
          count={count}
          page={page}
          color="primary"
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />

        <div className="flex ms-auto">
          Showing {_DATA.maxPage === page ? products.length : perpage * page} of{" "}
          {products.length} results
        </div>
      </div>
    </div>
  );
}
