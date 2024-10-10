import Profile from "@/components/website/account/Profile";
import { Metadata } from "next";

export default async function page() {
  return (
    <div className="p-4 h-screen">
      <div className="p-4 border-2 border-gray border-dashed rounded-lg">
        <div className="flex justify-center mb-4 rounded bg-gray-50">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Profile - Account",
  twitter: {
    title: `Profile - Account`,
  },
  openGraph: {
    title: `Profile - Account`,
  },
  alternates: {
    canonical: `/account/profile`,
  },
};
