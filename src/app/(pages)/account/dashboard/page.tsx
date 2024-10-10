import { Metadata } from "next";
import Dashboard from "@/components/website/account/Dashboard";

export default async function page() {
  return (
    <div className="p-4">
      <Dashboard />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Dashboard - Account",
  twitter: {
    title: `Dashboard - Account`,
  },
  openGraph: {
    title: `Dashboard - Account`,
  },
  alternates: {
    canonical: `/account/dashboard`,
  },
};
