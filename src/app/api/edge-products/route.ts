import { NextRequest } from "next/server";
import { ProductAPI } from "@/APIs/product";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const backendResponse = await ProductAPI.getList({
    params: searchParams,
  });

  if (backendResponse.status !== 200) {
    return new Response(
      JSON.stringify({ message: "Failed to fetch products" }),
      {
        status: backendResponse.status,
      }
    );
  }

  const products = backendResponse.data;

  return new Response(JSON.stringify(products), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
