"use client";
import React, { useState, useEffect } from "react";
import Item from "./Item";
import { Slug } from "sanity";
import Loadingg from '../Loading'

interface SanityImage {
  asset: {
    url: string;
  };
}
import { client } from "@/sanity/lib/client";

export interface Product {
  name: string;
  slug: Slug;
  price: number;
  image: SanityImage;
  category: "electronics" | "fitness" | "accessories" | "kitchen" | "gaming";
  stock: number;
  available: boolean;
}

export default function Products() {
  const [Loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>();
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    setLoading(true);
    const data = await client.fetch(`*[_type == 'product']{
  name,
  slug,
  price,
  image {
    asset-> {
      url
    }
  },
  category,
  stock,
  available
}`);
    
    setProducts(data);
    setLoading(false);
  };
  console.log(products);
  return (
    <section className="pt-[76px] 1400:px-12 sm:px-8 px-5 flex flex-col gap-4">
      {/* header */}
      <div className="flex justify-between items-center">
        <p className="text-[24px] leading-8 font-semibold">ALL Products</p>
        
      </div>
      <div className="flex items-center justify-center">
        {/* Products */}
        {Loading && <div className="h-screen flex items-center justify-center"><Loadingg/></div>}
        {!Loading && <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 pb-[140px] border-b-[1px] border-solid">
          {/* Product 01 */}
          {products?.map((item, index) => (
            <Item
              key={index}
              name={item.name}
              available={item.available}
              catagory={item.category}
              stock={item.stock}
              price={item.price}
              image={item.image?.asset?.url || ""}
              slug={item.slug.current}
            />
          ))}
        </div>}
      </div>
    </section>
  );
}
