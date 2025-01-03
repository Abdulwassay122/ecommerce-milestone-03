import React from 'react'
import Image from "next/image";
import pic from './assets/Rectangle (2).svg'
import cart from './assets/Buy 2.svg'
import Link from 'next/link';

export default function ProductDetail() {
  return (
    <section className='flex xl:gap-[137px] gap-10 1160:flex-row items-center flex-col xl:px-[110px] 450:px-10 px-5 pt-[110px] pb-[362px]'>
        
        <Image src={pic} alt="" />
        <div className='flex flex-col gap-8'>
            <h1 className='sm:text-[48px] text-[32px] font-[500] leading-[48px]'>Nike Air Force 1 PLT.AF.ORM</h1>
            <p className='text-[15px] leading-7 1160:w-[330px]'>Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its &quot;inside out&quot;-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.</p>
            <p className='sm:text-[36px] text-[26px] leading-7'>₹ 8 695.00</p>
            <div className='relative flex items-center'>
                <Link href="/cart"><button className='bg-black text-white text-[15px] leading-6 w-[174px] pl-6 h-[44px] rounded-full'>  Add To Cart</button></Link> 
                <Image className='absolute left-5' src={cart} alt="" />   
            </div>
        </div>
    </section>
  )
}
