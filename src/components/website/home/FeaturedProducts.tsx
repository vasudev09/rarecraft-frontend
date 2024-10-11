import Heading from "@/components/custom/Custom";
import Container from "../../custom/Container";
import { Product } from "@/types";
import { ProductAPI } from "@/APIs/product";

import FeaturedProductsSwiper from "./FeaturedProductsSwiper";

export default async function FeaturedProducts() {
  let products: Product[] = [];
  await ProductAPI.getList({
    params: {
      tag: "featured",
    },
  })
    .then((response) => {
      products = response.data;
    })
    .catch((e) => {
      console.log(e);
    });

  return (
    <section className="py-10 relative">
      <Container>
        <Heading name="featured products" />
        <FeaturedProductsSwiper products={products} />
      </Container>
    </section>
  );
}
