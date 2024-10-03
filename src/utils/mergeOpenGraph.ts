import type { Metadata } from "next";

//Default open graph

const defaultOpenGraph: Metadata["openGraph"] = {
  title: "RareCraft",
  description:
    "Discover unique, handcrafted treasures at RareCraft – your premier destination for one-of-a-kind artisanal products.",

  images: [
    {
      url: `${process.env.NEXT_PUBLIC_HOST_URL}/images/logo.png`,
    },
  ],
  type: "website",
  url: `${process.env.NEXT_PUBLIC_HOST_URL}`,
  siteName: "RareCraft",
};

// Dynamic open graph

export const mergeOpenGraph = (og?: Metadata["openGraph"]) => {
  return {
    ...defaultOpenGraph,
    ...og,
    image: og?.images ? og.images : defaultOpenGraph.images,
    title: og?.title ? og.title : defaultOpenGraph.title,
    url: og?.url ? og.url : defaultOpenGraph.url,
  };
};
