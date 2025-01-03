import React from 'react'
import facebool from './assests/facebook-svgrepo-com.svg'
import instagram from './assests/instagram-svgrepo-com.svg'
import linkdun from './assests/linkedin-svgrepo-com.svg'
import github from './assests/github-142-svgrepo-com.svg'
import portfolio from './assests/portfolio-svgrepo-com.svg'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-[#2B2B2B] pt-10 text-white flex flex-col gap-6 items-center justify-between font-poppins'>
      <div className='flex flex-row  '>
            <a target='_balnk' href="https://www.facebook.com/profile.php?id=100089985213341"><img className='h-12 mx-2' src={facebool.src} alt="" /></a>
            <a target='_balnk' href="https://www.linkedin.com/in/abdul-wassay-74bb532b4/"><img className='h-12 mx-2' src={linkdun.src} alt="" /></a>
            <a target='_balnk' href="https://www.instagram.com/wassay122/"><img className='h-12 mx-2' src={instagram.src} alt="" /></a>
            <a target='_balnk' href="https://github.com/Abdulwassay122?tab=repositories"><img className='h-12 mx-2' src={github.src} alt="" /></a>
            <a target='_balnk' href="https://porfolio-lac-seven.vercel.app/"><img className='h-12 mx-2' src={portfolio.src} alt="" /></a>
        </div>
      <div className='flex flex-col gap-6'>
        <p className='text-[26px] font-semibold text-center font-tech'>Drawer</p>
        <div className='flex gap-4 flex-wrap px-2'>
                    <Link href="/products/electronics"><li className='text-[20px] list-none'>Electronics</li></Link>
                    <Link href="/products/fitness"><li className='text-[20px] list-none'>Fitness</li></Link>
                    <Link href="/products/kitchen"><li className='text-[20px] list-none'>Kitchen</li></Link>
                    <Link href="/products/gaming"><li className='text-[20px] list-none'>Gaming</li></Link>
                    <Link href="/products/accessories"><li className='text-[20px] list-none'>Accessories</li></Link>
        </div>
      </div>
      <div>
      </div>
      <div className='bg-[#1b1b1b] w-full flex justify-center py-4'>
        <p className=''>Copyright © 2024 Abdul Wassay</p>
      </div>
      
    </footer>
  )
}
