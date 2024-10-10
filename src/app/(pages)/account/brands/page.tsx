import MyBrands from "@/components/website/account/MyBrands";
import { Metadata } from "next";

export default async function page() {
  return (
    <div className="p-4">
      <div className="p-4 border-2 border-gray border-dashed rounded-lg">
        <div className="flex justify-center mb-4 rounded bg-gray-50">
          <MyBrands />
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "My Brands - Account",
  twitter: {
    title: `My Brands - Account`,
  },
  openGraph: {
    title: `My Brands - Account`,
  },
  alternates: {
    canonical: `/account/brands`,
  },
};
