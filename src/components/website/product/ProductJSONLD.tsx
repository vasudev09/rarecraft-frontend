import { Product } from "@/types";
import { getRating } from "@/utils";

export default function ProductJSONLD({ product }: { product: Product }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    productID: `GTIN-${product.id}`,
    category: product.category.name,
    name: product.name,
    image: product.images[0],
    description: product.description,
    sku: `SKU-${product.id}`,
    brand: {
      "@type": "Brand",
      name: product.brand.name,
      logo: product.brand.image,
      url: `${process.env.NEXT_PUBLIC_HOST_URL}/brand/${product.brand.slug}`,
    },
    offers: {
      "@type": "Offer",
      url: `${process.env.NEXT_PUBLIC_HOST_URL}/product/${product.slug}`,
      priceCurrency: "USD",
      price: product.price,
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Artisan Marketplace",
      },
    },
    additionalProperty: product.details.map((detail) => ({
      "@type": "PropertyValue",
      name: detail.key,
      value: detail.value,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: getRating(product),
      ratingCount: product.reviews.length,
    },
    reviewCount: product.reviews.length,
    review: product.reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.review_by,
      },
      datePublished: review.created_at,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: "5",
      },
      reviewBody: review.review,
    })),
  };
  return (
    <script
      key="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
