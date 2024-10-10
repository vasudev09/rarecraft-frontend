import MyProducts from "@/components/website/account/MyProducts";
import { Metadata } from "next";

export default async function page() {
  return (
    <div className="p-4">
      <div className="p-4 border-2 border-gray border-dashed rounded-lg">
        <div className="flex justify-center mb-4 rounded bg-gray-50">
          <MyProducts />
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "My Products - Account",
  twitter: {
    title: `My Products - Account`,
  },
  openGraph: {
    title: `My Products - Account`,
  },
  alternates: {
    canonical: `/account/products`,
  },
};
