import React from 'react'
import Image from "next/image";
import Link from 'next/link';

export default function Item({available, name, catagory, stock, price, image, slug}: {slug:string,  image: string, available: boolean, name:string, price:number, stock:number, catagory:string }) {
  return (
    <Link href={`/productdetail/${slug}`}>
    <div className='w-[348px] h-[533px]'>
      <div>
        <Image className='h-[348px] w-[348px]' width={300} height={300} src={image} alt="" />
      </div>
      <div className='pt-[9px] pb-[42px] flex flex-col gap-5'>
        <div>
            <p className='text-[15px] leading-7 font-[500] text-[#9E3500]'>Just In</p>
            <p className='text-[15px] leading-6 font-[500] text-[#111111]'>{name}</p>
            <p className='text-[15px] leading-6 text-[#757575]'>{catagory}</p>
            <p className='text-[15px] leading-6 text-[#757575]'>Stock: ({stock})</p>
            <p className={`text-[15px] leading-6 text-[#757575] ${available?'text-green-500':'text-red-500'}`}>{available?'Available':'Not Available'}</p>
        </div>
            <p className='text-[15px] leading-7 font-[500] text-[#111111]'>{`$ ${price}`}</p>
      </div>
    </div>
    </Link>
  )
}
