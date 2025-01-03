import React from 'react'
import Image from "next/image";
import cart from './assets/Buy 2.svg'
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { Slug } from "sanity";

interface PageProps {
    params: Params;
  }
  
  interface Params {
    slug: string;
  }
  interface SanityImage {
    asset: {
      url: string;
    };
  }

  export interface Product {
    name: string;
    slug: Slug;
    price: number;
    description: string;
    image: SanityImage;
    category: "electronics" | "fitness" | "accessories" | "kitchen" | "gaming";
    stock: number;
    available: boolean;
  }
export default async function ProductDetail({params:{slug}}:PageProps) {
    const data :Product[] = await client.fetch(`*[_type == 'product' && slug.current == '${slug}'] {
  name,
  slug,
  description,
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
    console.log(data[0]?.name)
  return (
    <section className='flex xl:gap-[137px] gap-10 1160:flex-row items-center flex-col xl:px-[110px] 450:px-10 px-5 pt-[110px] pb-[362px]'>
        
        <Image width={600} height={600} src={data[0].image?.asset?.url || ""} alt="" />
        <div className='flex flex-col gap-8'>
            <h1 className='sm:text-[48px] text-[32px] font-[500] leading-[48px]'>{data[0].name}</h1>
            <p className='text-[22px] leading-7 1160:w-[330px]'>{data[0].description}</p>
            <p className='sm:text-[36px] text-[26px] leading-7'>$ {data[0].price}</p>
            <div className='relative flex items-center'>
                <Link href="/cart"><button className='bg-black text-white text-[15px] leading-6 w-[174px] pl-6 h-[44px] rounded-full'>  Add To Cart</button></Link> 
                <Image className='absolute left-5' src={cart} alt="" />   
            </div>
        </div>
    </section>
  )
}
