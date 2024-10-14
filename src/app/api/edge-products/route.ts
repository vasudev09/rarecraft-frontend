import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const queryString = searchParams.toString();

  const backendResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products?${queryString}`
  );

  if (!backendResponse.ok) {
    return new Response(
      JSON.stringify({ message: "Failed to fetch products" }),
      {
        status: backendResponse.status,
      }
    );
  }

  const products = await backendResponse.json();

  return new Response(JSON.stringify(products), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
