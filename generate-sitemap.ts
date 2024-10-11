// const fs = require("fs");
// const path = require("path");

// const SITE_URL = process.env.NEXT_PUBLIC_HOST_URL || "http://localhost:3000";

// const staticPaths = [
//   "/",
//   "/about",
//   "/contact", // Add all your static paths here
// ];

// // Function to fetch dynamic paths (for example, from an API or database)
// async function fetchDynamicPaths() {
//   // Mocked dynamic routes
//   const brands = [{ slug: "brand-1" }, { slug: "brand-2" }];

//   const products = [{ slug: "product-1" }, { slug: "product-2" }];

//   const dynamicBrandPaths = brands.map((brand) => `/brand/${brand.slug}`);
//   const dynamicProductPaths = products.map(
//     (product) => `/product/${product.slug}`
//   );

//   return [...dynamicBrandPaths, ...dynamicProductPaths];
// }

// // Function to generate the sitemap XML
// async function generateSitemap() {
//   const dynamicPaths = await fetchDynamicPaths();

//   const allPaths = [...staticPaths, ...dynamicPaths];
//   const sitemapEntries = allPaths
//     .map((url) => {
//       return `
//       <url>
//         <loc>${SITE_URL}${url}</loc>
//         <lastmod>${new Date().toISOString()}</lastmod>
//         <changefreq>weekly</changefreq>
//         <priority>0.8</priority>
//       </url>`;
//     })
//     .join("");

//   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
//   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//     ${sitemapEntries}
//   </urlset>`;

//   // Write sitemap.xml to the public directory
//   fs.writeFileSync(path.join(__dirname, "public", "sitemap.xml"), sitemap);
//   console.log("Sitemap generated successfully!");
// }

// generateSitemap();
