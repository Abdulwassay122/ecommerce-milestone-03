import React from 'react'
import Image from "next/image";
import nike from './assets/drawer.png'
import wishlidt from './assets/Frame.svg'
import cart from './assets/Frame (1).svg'
import search from './assets/Frame (2).svg'
import Link from 'next/link'
export default function Navbar() {
  return (
    <header className=''>
      {/* <div className='w-full h-9 flex justify-between items-center px-10 bg-[#F5F5F5]'>
        <div className='h-6 w-6 flex justify-center items-center'>
            <Link href="/"><Image src={logo1} alt="" /></Link>
        </div>
        <nav className='w-[272.81px] flex justify-center'>
            <ul className=' flex items-center'> 
                <Link href="/about"><li className='text-[11px] leading-[14px] font-[500]'>Find a Store</li></Link>
                <span className='ml-4 mr-[11px]'>|</span>
                <Link href="/about"><li className='text-[11px] leading-[14px] font-[500]'>Help</li></Link>
                <span className='ml-3 mr-[11px]'>|</span>
                <Link href="/joinus"><li className='text-[11px] leading-[14px] font-[500]'>Join Us</li></Link>
                <span className='ml-3 mr-[14px]'>|</span>
                <Link href="/login"><li className='text-[11px] leading-[14px] font-[500]'>Sign In</li></Link>
            </ul>
        </nav>
      </div> */}
      <div className='w-full h-[60px] flex items-center px-10 gap-10 justify-between bg-[#F5F5F5]'>
        <Link className='flex items-center justify-center' href="/"><Image className='mx-2 h-9 w-auto' src={nike} alt="" /><p className='text-[20px] font-semibold'>Drawer</p></Link>
        <div className='lg:w-[1211px] h-full flex items-center justify-end gap-60'>
            <div className='flex items-center xl:w-[890px] gap-10 justify-between'>
            <nav className='md:block hidden'>
                <ul className=' text-[16px] leading-6 font-[500] gap-7 flex '>
                    <Link href="/products/electronics"><li>Electronics</li></Link>
                    <Link href="/products/fitness"><li>Fitness</li></Link>
                    <Link href="/products/kitchen"><li>Kitchen</li></Link>
                    <Link href="/products/gaming"><li>Gaming</li></Link>
                    <Link href="/products/accessories"><li>Accessories</li></Link>
                </ul>
            </nav>
            <div className='relative lg:block hidden'>
                <input className='bg-[#ffffff] w-[180px] pl-10 h-10 rounded-full text-[#CCCCCC]' placeholder='Search' type="text" />
                <Image className='absolute left-2 top-2 ' src={search} alt="" />
            </div>
            </div>
        </div>
        <div className='w-[84px] flex justify-between'>
            <div className='h-9 w-9 flex justify-center items-center'><Image src={wishlidt} alt="" /></div>
            <div className='h-9 w-9 flex justify-center items-center'><Link href="/cart"><Image src={cart} alt="" /></Link></div>
        </div>
      </div>
        <div className='relative mx-10 lg:hidden block mb-4'>
                <input className='bg-[#F5F5F5] w-full pl-10 h-10 rounded-full mt-4 text-[#CCCCCC]' placeholder='Search' type="text" />
                <Image className='absolute left-2 top-6 ' src={search} alt="" />
            </div>
    </header>
  )
}
