import { Brand } from "@/types";

export default function BrandJSONLD({ brand }: { brand: Brand }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Brand",
    name: brand.name,
    logo: brand.image,
    url: `${process.env.NEXT_PUBLIC_HOST_URL}/brand/${brand.slug}`,
    description: brand.description,
    sameAs: [
      `https://www.facebook.com/${brand.name}`,
      `https://twitter.com/${brand.name}`,
      `https://www.instagram.com/${brand.name}`,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-234-567-8900",
      contactType: "Customer Service",
      areaServed: "US",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Woodcraft Lane",
      addressLocality: "Woodland",
      addressRegion: "CA",
      postalCode: "90210",
      addressCountry: "US",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: brand.reviews.avg_review,
      reviewCount: brand.reviews.total_reviews,
      itemReviewed: {
        "@type": "Brand",
        name: brand.name,
        url: `${process.env.NEXT_PUBLIC_HOST_URL}/brand/${brand.slug}`,
      },
    },
  };
  return (
    <script
      key="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
