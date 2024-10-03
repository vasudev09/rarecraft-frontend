import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { mergeOpenGraph } from "@/utils/mergeOpenGraph";

export default function NotFound() {
  return (
    <>
      <section>
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8 text-center">
            Oops! The page you're looking for can't be found.
          </p>
          <div className="flex space-x-4">
            <Link href="/">
              <p className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg">
                Back to Homepage
              </p>
            </Link>
            <Link href="/products">
              <p className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg">
                Browse Products
              </p>
            </Link>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-500">
              Or try searching for what you need below:
            </p>
            <input
              type="text"
              placeholder="Search our site"
              className="mt-4 border border-gray-300 p-2 rounded-lg w-64"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export const metadata: Metadata = {
  title: "404 - Page Not Found | RareCraft",
  description:
    "Sorry, the page you are looking for does not exist. Discover other amazing products or return to the homepage.",

  openGraph: mergeOpenGraph({
    title: "404 - Page Not Found | RareCraft",
    description:
      "Sorry, the page you are looking for does not exist. Discover other amazing products or return to the homepage.",
  }),
};
