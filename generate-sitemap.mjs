// import dotenv from "dotenv";
// dotenv.config({ path: ".env.local" });

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = process.env.NEXT_PUBLIC_HOST_URL || "http://localhost:3000";

const staticPaths = ["/", "/register", "/signin", "/products"];

// Function to fetch dynamic paths (for example, from an API or database)
async function fetchDynamicPaths() {
  try {
    const [brandResponse, productResponse, categoryResponse] =
      await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/brand/slugs`).then(
          (res) => res.json()
        ),
        fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/product/slugs`).then(
          (res) => res.json()
        ),
        fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/category/slugs`
        ).then((res) => res.json()),
      ]);

    const brands = brandResponse || [];
    const products = productResponse || [];
    const categories = categoryResponse || [];

    // Map over the fetched slugs to create URLs
    const dynamicBrandPaths = brands.map((slug) => `/brand/${slug}`);
    const dynamicProductPaths = products.map((slug) => `/product/${slug}`);
    const dynamicCategoryProductsPaths = categories.map(
      (slug) => `/products/category/${slug}`
    );
    const dynamicBrandProductsPaths = brands.map(
      (slug) => `/products/brand/${slug}`
    );

    return [
      ...dynamicBrandPaths,
      ...dynamicProductPaths,
      ...dynamicCategoryProductsPaths,
      ...dynamicBrandProductsPaths,
    ];
  } catch (error) {
    console.log("Error fetching dynamic paths", error);
    return [];
  }
}

// // Function to generate the sitemap XML
async function generateSitemap() {
  console.log("Generating sitemap.xml ....");
  const dynamicPaths = await fetchDynamicPaths();

  const allPaths = [...staticPaths, ...dynamicPaths];
  const sitemapEntries = allPaths
    .map((url) => {
      return `
      <url>
        <loc>${SITE_URL}${url}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>`;
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${sitemapEntries}
  </urlset>`;

  // Write sitemap.xml to the public directory
  const sitemapPath = path.join(__dirname, "public", "sitemap.xml");
  fs.writeFileSync(sitemapPath, sitemap);
  console.log("Sitemap generated successfully!");
}

generateSitemap();
