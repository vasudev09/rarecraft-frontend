import React from "react";
import Container from "../../custom/Container";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/custom/Tabs";
import { Detail, Product } from "@/types";
import { Card } from "@/components/custom/Card";

export default function ProductSpecifications({
  product,
}: {
  product: Product;
}) {
  return (
    <section className="hidden lg:block my-10">
      <Container>
        <div className="flex flex-col col-span-2">
          <Tabs defaultValue="desc">
            <TabsList className="grid w-fit grid-cols-2">
              <TabsTrigger value="desc">Descriptions</TabsTrigger>
              <TabsTrigger value="spec">Specifications</TabsTrigger>
            </TabsList>
            <TabsContent value="desc">
              <Card className="p-10 text-slate-700 tracking-wider text-sm leading-8 ">
                <p>{product.description}</p>
                <p className="mt-2">{product.content}</p>
              </Card>
            </TabsContent>
            <TabsContent value="spec">
              <Card className="p-10 flex flex-col gap-4">
                {product.details.map((item: Detail, idx: number) => (
                  <div key={idx} className="grid grid-cols-2">
                    <span className="w-80 font-medium capitalize">
                      {item.key}
                    </span>
                    <span className="text-base font-light">{item.value}</span>
                  </div>
                ))}
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </Container>
    </section>
  );
}
